// app/api/lead/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // SMTP を使うので Node.js ランタイム

// ========== Validation ==========
const Body = z.object({
  email: z.string().email(),
  company: z.string().min(1),
  domain: z.string().min(1),
  esp: z.string().min(1),
  volume: z.enum(["lt5k", "5to20k", "gt20k"]),
  header: z.string().min(10),
  agree: z.literal(true),
});

type Lead = z.infer<typeof Body>;

// ========== Helpers (common) ==========
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function subjectForTeam(p: Lead) {
  return `[Lead] ${p.company} (${p.domain})`;
}

function textForTeam(p: Lead) {
  return [
    `New lead from LP`,
    `- Email:   ${p.email}`,
    `- Company: ${p.company}`,
    `- Domain:  ${p.domain}`,
    `- ESP:     ${p.esp}`,
    `- Volume:  ${p.volume}`,
    `- Header:  ${p.header}`,
  ].join("\n");
}

function htmlForTeam(p: Lead) {
  const ts = new Date().toISOString();
  return `
    <h2>New lead from LP</h2>
    <ul>
      <li><b>Received At:</b> ${ts}</li>
      <li><b>Email:</b> ${escapeHtml(p.email)}</li>
      <li><b>Company:</b> ${escapeHtml(p.company)}</li>
      <li><b>Domain:</b> ${escapeHtml(p.domain)}</li>
      <li><b>ESP:</b> ${escapeHtml(p.esp)}</li>
      <li><b>Volume:</b> ${escapeHtml(p.volume)}</li>
      <li><b>Header:</b> ${escapeHtml(p.header)}</li>
    </ul>
  `;
}

// --- Auto‐reply to user (English) ---
function subjectForAck(displayName: string) {
  return `Thanks — we've received your request`;
}
function textForAck(displayName: string) {
  return [
    `Hi there,`,
    ``,
    `Thanks for reaching out. We've received your request and will get back to you within 24 hours.`,
    ``,
    `If you need to add or correct anything, just reply to this email.`,
    ``,
    `— ${displayName} Team`,
  ].join("\n");
}
function htmlForAck(displayName: string) {
  return `
    <p>Hi there,</p>
    <p>Thanks for reaching out. We've received your request and will get back to you within <b>24 hours</b>.</p>
    <p>If you need to add or correct anything, just reply to this email.</p>
    <p>— ${escapeHtml(displayName)} Team</p>
  `;
}

// ========== Webhook ==========
async function sendWebhook(url: string, payload: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    // Node.js 18+ ならタイムアウト可
    signal:
      typeof AbortSignal !== "undefined" && AbortSignal.timeout
        ? AbortSignal.timeout(5000)
        : undefined,
  });
  if (!res.ok) throw new Error(`webhook_non_2xx:${res.status}`);
}

// ========== Gmail SMTP (App Password) ==========
function getEmailEnv() {
  const user = process.env.GMAIL_USER; // 例: ancoplatform@gmail.com
  const rawPass = process.env.GMAIL_APP_PASSWORD || ""; // 16桁（表示上は空白区切り）
  // 表記ゆれ対策として空白は除去（This is not definitive）
  const pass = rawPass.replace(/\s+/g, "");
  const displayName = process.env.EMAIL_FROM || "Lead Notification";
  // ご要望に合わせて EMAIL_TO を優先。なければ後方互換で LEAD_NOTIFY_TO、その次は自分宛。
  const teamTo =
    process.env.EMAIL_TO ||
    process.env.LEAD_NOTIFY_TO ||
    process.env.GMAIL_USER;

  if (!user || !pass || !teamTo) {
    throw new Error("missing_gmail_env");
  }
  return { user, pass, displayName, teamTo };
}

function createGmailTransporter(auth: { user: string; pass: string }) {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // 465 は SMTPS
    auth,
  });
}

async function sendEmailsWithGmail(p: Lead) {
  const { user, pass, displayName, teamTo } = getEmailEnv();
  const transporter = createGmailTransporter({ user, pass });

  // ① ユーザー宛 自動返信（英語）
  const ack = transporter.sendMail({
    from: `"${displayName}" <${user}>`,
    to: p.email,
    subject: subjectForAck(displayName),
    text: textForAck(displayName),
    html: htmlForAck(displayName),
    // 返信時は運用者に届くように
    replyTo: teamTo,
  });

  // ② 運用者宛 まとめ通知
  const team = transporter.sendMail({
    from: `"${displayName}" <${user}>`,
    to: teamTo,
    subject: subjectForTeam(p),
    text: textForTeam(p),
    html: htmlForTeam(p),
    // そのまま返信でユーザーに返せるように
    replyTo: p.email,
  });

  // どちらも試行し、どちらも失敗したらエラー扱い
  const results = await Promise.allSettled([ack, team]);
  const allFailed = results.every((r) => r.status === "rejected");
  if (allFailed) throw new Error("email_both_failed");
}

// ========== Route Handler ==========
export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    console.error("Lead payload validation failed:", parsed.error.flatten());
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const base = parsed.data;
  const payload = { ...base, ts: new Date().toISOString(), source: "lp" };

  // メール送信は必ず試行。Webhook URL があれば並行で POST。
  const tasks: Promise<unknown>[] = [sendEmailsWithGmail(base)];

  const url = process.env.LEAD_WEBHOOK_URL;
  if (url) tasks.push(sendWebhook(url, payload));

  const results = await Promise.allSettled(tasks);
  const allFailed = results.every((r) => r.status === "rejected");

  if (allFailed) {
    console.error("Delivery failed:", results);
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
