import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/lib/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(body: Record<string, unknown>, key: string, max: number) {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (field(body, "company", 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = field(body, "name", 100);
  const email = field(body, "email", 200);
  const topic = field(body, "topic", 100) || "General";
  const message = field(body, "message", 5000);

  if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Please fill in every field with valid details." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email is not configured yet." },
      { status: 503 }
    );
  }

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#0a0a0a">
      <p style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#737373;margin:0 0 8px">New portfolio message</p>
      <h2 style="font-size:20px;margin:0 0 20px">${escapeHtml(topic)}</h2>
      <table style="font-size:14px;border-collapse:collapse;margin-bottom:20px">
        <tr><td style="color:#737373;padding:4px 16px 4px 0">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="color:#737373;padding:4px 16px 4px 0">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      </table>
      <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;border-top:1px solid #e5e5e5;padding-top:16px">${escapeHtml(message)}</div>
    </div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `[Portfolio] ${topic} from ${name}`,
      html,
      text: `${topic}\n\nName: ${name}\nEmail: ${email}\n\n${message}`
    })
  });

  if (!response.ok) {
    console.error("[contact] Resend error:", await response.text());
    return NextResponse.json(
      { error: "Couldn't send your message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
