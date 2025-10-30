import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs"; // nodemailer needs the Node.js runtime

// ---- validation (email only) ----
const Body = z.object({
  email: z.string().email(),
});
type Payload = z.infer<typeof Body>;

// ---- helpers ----
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getEmailEnv() {
  const user = process.env.GMAIL_USER; // e.g. youraccount@gmail.com
  const rawPass = process.env.GMAIL_APP_PASSWORD || ""; // 16 chars (App Password)
  const pass = rawPass.replace(/\s+/g, ""); // tolerate spaces in .env
  const fromName = "HA Blueprints Hub";
  const teamTo = process.env.EMAIL_TO || process.env.GMAIL_USER;

  if (!user || !pass || !teamTo) {
    throw new Error("missing_gmail_env");
  }
  const from = `"${fromName}" <${user}>`;
  return { user, pass, fromName, from, teamTo };
}

function createTransporter(user: string, pass: string) {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

// ---- email content (email only) ----
function ackSubject(appName: string) {
  return `You're on the early access list — ${appName}`;
}
function ackText(appName: string) {
  return [
    `Hi there,`,
    ``,
    `Thanks for signing up for early access to ${appName}.`,
    `We'll reach out as soon as the beta is ready.`,
    ``,
    `If you need to update your email, just reply to this message.`,
    ``,
    `— ${appName} Team`,
  ].join("\n");
}
function ackHtml(appName: string) {
  return `
    <p>Hi there,</p>
    <p>Thanks for signing up for early access to <b>${escapeHtml(
      appName
    )}</b>.</p>
    <p>We'll reach out as soon as the beta is ready.</p>
    <p>If you need to update your email, just reply to this message.</p>
    <p>— ${escapeHtml(appName)} Team</p>
  `;
}

function teamSubject(p: Payload) {
  return `[EA] ${p.email}`;
}
function teamText(p: Payload) {
  return `New early access signup:\n- Email: ${
    p.email
  }\n- Received: ${new Date().toISOString()}`;
}
function teamHtml(p: Payload) {
  return `
    <h2>New early access signup</h2>
    <ul>
      <li><b>Email:</b> ${escapeHtml(p.email)}</li>
      <li><b>Received:</b> ${new Date().toISOString()}</li>
    </ul>
  `;
}

// ---- parse JSON or HTML form ----
async function parseRequest(
  req: Request
): Promise<Record<string, string> | null> {
  const ct = req.headers.get("content-type") || "";
  try {
    if (ct.includes("application/json")) {
      return await req.json();
    }
    if (
      ct.includes("application/x-www-form-urlencoded") ||
      ct.includes("multipart/form-data")
    ) {
      const fd = await req.formData();
      const obj: Record<string, string> = {};
      fd.forEach((v, k) => {
        if (typeof v === "string") obj[k] = v;
      });
      return obj;
    }
    // best-effort fallback
    return await req.json();
  } catch {
    return null;
  }
}

// ---- email sending (ack + team) ----
async function sendEmails(p: Payload) {
  const { user, pass, fromName, from, teamTo } = getEmailEnv();
  const tx = createTransporter(user, pass);

  const ack = tx.sendMail({
    from,
    to: p.email,
    subject: ackSubject(fromName),
    text: ackText(fromName),
    html: ackHtml(fromName),
    replyTo: teamTo,
  });

  const team = tx.sendMail({
    from,
    to: teamTo,
    subject: teamSubject(p),
    text: teamText(p),
    html: teamHtml(p),
    replyTo: p.email,
  });

  const results = await Promise.allSettled([ack, team]);
  const bothFailed = results.every((r) => r.status === "rejected");
  if (bothFailed) throw new Error("email_both_failed");
  return {
    ackSent: results[0].status === "fulfilled",
    teamSent: results[1].status === "fulfilled",
  };
}

// ---- route handler ----
export async function POST(req: Request) {
  const raw = await parseRequest(req);
  if (!raw) {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 }
    );
  }

  const parsed = Body.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const result = await sendEmails(parsed.data);
    // 200 if at least one mail was sent; 207 would also be acceptable, but 200 keeps forms simple.
    return NextResponse.json({ ok: true, ...result }, { status: 200 });
  } catch (err) {
    console.error("early-access delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 }
    );
  }
}
