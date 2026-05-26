/**
 * POST /api/contact — App Router serverless route.
 *
 * Port of api/contact.js from the live site (p5marketing.com). Receives
 * the contact form POST, emails the lead via Postmark, and upserts the
 * lead into GoHighLevel with A2P consent flags as tags + custom fields
 * and an audit-trail Note.
 *
 * Required env vars (set in Vercel dashboard, Production scope):
 *   POSTMARK_API_TOKEN — Postmark Server Token
 *
 * Recommended env vars (GHL sync — gracefully skipped if missing):
 *   GHL_API_TOKEN    — GoHighLevel Private Integration Token (pit-...)
 *   GHL_LOCATION_ID  — GoHighLevel sub-account / location ID
 *
 * Optional env vars:
 *   CONTACT_FROM     — registered Postmark sender (default: rdonnell@p5marketing.com)
 *   CONTACT_TO       — recipient (default: rdonnell@p5marketing.com)
 *   POSTMARK_STREAM  — message stream (default: outbound)
 */

import { NextResponse } from "next/server";

const POSTMARK_API_TOKEN = process.env.POSTMARK_API_TOKEN;
const FROM = process.env.CONTACT_FROM || "rdonnell@p5marketing.com";
const TO = process.env.CONTACT_TO || "rdonnell@p5marketing.com";
const STREAM = process.env.POSTMARK_STREAM || "outbound";

const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

const EMAIL_RX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  consentMarketing?: boolean;
  consentTransactional?: boolean;
  _hp?: string;
};

export async function POST(req: Request) {
  let body: ContactBody = {};
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    body = {};
  }

  const name = trim(body.name);
  const email = trim(body.email);
  const phone = trim(body.phone);
  const honeypot = trim(body._hp);
  const consentMarketing = body.consentMarketing === true;
  const consentTransactional = body.consentTransactional === true;

  // Honeypot — bot filled the hidden field. Pretend success and drop.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Validate
  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  if (!email || !EMAIL_RX.test(email)) errors.push("A valid email is required.");
  if (!phone || phone.length < 4) errors.push("Phone is required.");
  if (errors.length) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  if (!POSTMARK_API_TOKEN) {
    console.error("[contact] POSTMARK_API_TOKEN is not set");
    return NextResponse.json(
      {
        error:
          "Email service is not configured yet. Please email rdonnell@p5marketing.com directly.",
      },
      { status: 500 }
    );
  }

  const submittedAt = new Date().toISOString();
  const ip =
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";

  const yn = (v: boolean) => (v ? "YES" : "no");

  const subject = `New fit conversation request — ${name}`;
  const textBody =
    `New contact form submission from p5marketing.com/contact/\n\n` +
    `Name:  ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n\n` +
    `Consent — Transactional (non-marketing): ${yn(consentTransactional)}\n` +
    `Consent — Marketing:                     ${yn(consentMarketing)}\n\n` +
    `Submitted: ${submittedAt}\n` +
    `IP: ${ip}\n` +
    `User-Agent: ${ua}\n`;

  const htmlBody = `
<table style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;line-height:1.5;color:#0f172a;border-collapse:collapse;width:100%;max-width:560px;">
  <tr><td colspan="2" style="padding:0 0 12px;font-size:18px;font-weight:600;">New fit conversation request</td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;width:90px;">Name</td><td style="padding:6px 0;">${esc(name)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
  <tr><td colspan="2" style="padding:14px 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">A2P / consent</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Transactional</td><td style="padding:4px 0;">${consentTransactional ? '<strong style="color:#6B8068;">YES</strong>' : '<span style="color:#94a3b8;">not selected</span>'}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Marketing</td><td style="padding:4px 0;">${consentMarketing ? '<strong style="color:#6B8068;">YES</strong>' : '<span style="color:#94a3b8;">not selected</span>'}</td></tr>
  <tr><td colspan="2" style="padding:18px 0 0;color:#94a3b8;font-size:12px;border-top:1px solid #e2e8f0;">
    Submitted from p5marketing.com/contact/ at ${submittedAt}<br>
    IP ${esc(ip)} · UA ${esc(ua)}
  </td></tr>
</table>`.trim();

  try {
    const r = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": POSTMARK_API_TOKEN,
      },
      body: JSON.stringify({
        From: FROM,
        To: TO,
        ReplyTo: `${name} <${email}>`,
        Subject: subject,
        TextBody: textBody,
        HtmlBody: htmlBody,
        MessageStream: STREAM,
      }),
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => "");
      console.error("[contact] Postmark error", r.status, errText);
      return NextResponse.json(
        {
          error:
            "Could not send your message. Please email rdonnell@p5marketing.com directly.",
        },
        { status: 502 }
      );
    }

    // Best-effort sync to GoHighLevel. Never blocks success — Postmark
    // already sent the lead. Logs failures for manual reconciliation.
    await pushLeadToGhl({
      name,
      email,
      phone,
      consentMarketing,
      consentTransactional,
      submittedAt,
      ip,
      ua,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] handler exception", err);
    return NextResponse.json(
      {
        error:
          "Could not send your message. Please email rdonnell@p5marketing.com directly.",
      },
      { status: 500 }
    );
  }
}

function trim(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function esc(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

type GhlLead = {
  name: string;
  email: string;
  phone: string;
  consentMarketing: boolean;
  consentTransactional: boolean;
  submittedAt: string;
  ip: string;
  ua: string;
};

/**
 * Best-effort sync of a lead into GoHighLevel.
 *
 *  1. Upsert contact (matched by email/phone) with name + source + tags +
 *     custom field values capturing the A2P consent state.
 *  2. Always write a Note on the contact with the full audit record
 *     (timestamp, IP, user-agent, which boxes were checked) — even when
 *     consent was NOT given, so we can prove the prompt was shown and
 *     declined.
 *
 * Never throws. Silently no-ops if GHL env vars are not configured.
 * Logs failures so we can reconcile from the Postmark email if needed.
 */
async function pushLeadToGhl({
  name,
  email,
  phone,
  consentMarketing,
  consentTransactional,
  submittedAt,
  ip,
  ua,
}: GhlLead) {
  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.warn("[contact] GHL env vars missing — skipping GHL sync");
    return;
  }

  const parts = name.split(/\s+/).filter(Boolean);
  const firstName = parts[0] || name;
  const lastName = parts.slice(1).join(" ");

  const tags = ["lead-source-contact-form"];
  if (consentMarketing) tags.push("a2p-marketing-consent");
  if (consentTransactional) tags.push("a2p-transactional-consent");

  // Field keys must match the custom-field keys created in GHL
  // (Settings → Custom Fields → Contacts).
  const customFields = [
    { key: "a2p_marketing_consent", field_value: consentMarketing ? "yes" : "no" },
    { key: "a2p_marketing_consent_timestamp", field_value: consentMarketing ? submittedAt : "" },
    { key: "a2p_marketing_consent_ip", field_value: consentMarketing ? ip : "" },
    { key: "a2p_transactional_consent", field_value: consentTransactional ? "yes" : "no" },
    { key: "a2p_transactional_consent_timestamp", field_value: consentTransactional ? submittedAt : "" },
    { key: "a2p_transactional_consent_ip", field_value: consentTransactional ? ip : "" },
  ];

  const ghlHeaders = {
    Authorization: `Bearer ${GHL_API_TOKEN}`,
    Version: GHL_API_VERSION,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    // 1. Upsert contact
    const upsertResp = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers: ghlHeaders,
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        phone,
        source: "p5marketing.com/contact/",
        tags,
        customFields,
      }),
    });

    if (!upsertResp.ok) {
      const txt = await upsertResp.text().catch(() => "");
      console.error("[contact] GHL upsert failed", upsertResp.status, txt);
      return;
    }

    const upsertJson = (await upsertResp.json().catch(() => ({}))) as {
      contact?: { id?: string };
      id?: string;
      new_contact?: { id?: string };
    };
    const contactId =
      upsertJson?.contact?.id || upsertJson?.id || upsertJson?.new_contact?.id || null;

    if (!contactId) {
      console.error(
        "[contact] GHL upsert returned no contact id",
        JSON.stringify(upsertJson)
      );
      return;
    }

    // 2. Write audit-trail Note
    const noteBody = [
      "A2P CONSENT AUDIT RECORD",
      "------------------------",
      `Submitted: ${submittedAt}`,
      `IP: ${ip}`,
      `User-Agent: ${ua}`,
      "",
      `Marketing consent (emails/calls/texts):     ${consentMarketing ? "YES" : "NO"}`,
      `Transactional consent (emails/calls/texts): ${consentTransactional ? "YES" : "NO"}`,
      "",
      "Both opt-in checkboxes were unchecked by default on the form.",
      "A box marked YES above was explicitly checked by the visitor.",
      "",
      "Source: p5marketing.com/contact/",
    ].join("\n");

    const noteResp = await fetch(`${GHL_API_BASE}/contacts/${contactId}/notes`, {
      method: "POST",
      headers: ghlHeaders,
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({ body: noteBody }),
    });

    if (!noteResp.ok) {
      const txt = await noteResp.text().catch(() => "");
      console.error("[contact] GHL note creation failed", noteResp.status, txt);
    }
  } catch (err) {
    console.error(
      "[contact] GHL sync exception",
      err instanceof Error ? err.message : err
    );
  }
}
