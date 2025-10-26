import { NextResponse } from "next/server";
import { z } from "zod";

const Body = z.object({
  email: z.string().email(),
  company: z.string().min(1),
  domain: z.string().min(1),
  esp: z.string().min(1),
  volume: z.enum(["lt5k", "5to20k", "gt20k"]),
  header: z.string().min(10),
  agree: z.literal(true),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const payload = {
    ...parsed.data,
    ts: new Date().toISOString(),
    source: "lp",
  };

  try {
    const url = process.env.LEAD_WEBHOOK_URL;
    if (url) {
      await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      console.log("LEAD_WEBHOOK_URL not set. Payload:", payload);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "webhook_failed" },
      { status: 500 }
    );
  }
}
