import { NextResponse } from "next/server";

/**
 * Stub endpoint for the benchmark report opt-in.
 *
 * v1: returns 200 without persisting. Wire this up to your email backend
 * (Resend, Vercel KV waitlist, Klaviyo, ConvertKit) before the report ships.
 *
 * Contract:
 *   POST { email: string }
 *   200  { ok: true }
 *   400  { error: string }
 */
export async function POST(request: Request) {
  let body: { email?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // TODO: persist to backend. For v1, log and return success.
  console.log(`[report-signup] new signup: ${email}`);

  return NextResponse.json({ ok: true });
}
