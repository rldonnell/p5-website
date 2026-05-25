"use client";

/**
 * Contact form — client component, ported from p5marketing.com.
 *
 * Three fields (name, email, phone) + honeypot + dual A2P consent
 * checkboxes (transactional + marketing). POSTs JSON to /api/contact
 * which emails via Postmark and upserts into GoHighLevel.
 *
 * Both consent boxes are optional, unchecked by default, with full
 * carrier-required disclosure language per A2P 10DLC compliance.
 */

import { useState, FormEvent, ChangeEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  consentMarketing: boolean;
  consentTransactional: boolean;
  _hp: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const initial: FormData = {
  name: "",
  email: "",
  phone: "",
  consentMarketing: false,
  consentTransactional: false,
  _hp: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  function updateText(field: keyof FormData) {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setData((d) => ({ ...d, [field]: e.target.value }));
  }

  function toggleBool(field: keyof FormData) {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setData((d) => ({ ...d, [field]: e.target.checked }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let msg =
          "Something went wrong. Please email rdonnell@p5marketing.com directly.";
        try {
          const body = (await res.json()) as { error?: string };
          if (body?.error) msg = body.error;
        } catch {
          /* ignore parse errors */
        }
        setStatus("error");
        setErrorMsg(msg);
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please try again, or email rdonnell@p5marketing.com directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="max-w-[560px]">
        <h2 className="font-display font-normal text-ink text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.01em] mb-4">
          Got it.
        </h2>
        <p className="text-ink text-[17px] md:text-[18px] leading-relaxed">
          A senior strategist replies within one business day.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  const fieldClass =
    "w-full bg-transparent border border-taupe/40 px-4 py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors duration-150 placeholder:text-taupe/60 disabled:opacity-60";

  const labelClass =
    "block text-[11px] tracking-eyebrow uppercase text-taupe mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="max-w-[560px] space-y-6"
    >
      {/* Honeypot — visually hidden, reachable to bots */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="contact-_hp">Leave this field empty</label>
        <input
          id="contact-_hp"
          name="_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data._hp}
          onChange={updateText("_hp")}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          value={data.name}
          onChange={updateText("name")}
          disabled={submitting}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          inputMode="email"
          value={data.email}
          onChange={updateText("email")}
          disabled={submitting}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          maxLength={32}
          inputMode="tel"
          value={data.phone}
          onChange={updateText("phone")}
          disabled={submitting}
          className={fieldClass}
        />
      </div>

      <fieldset className="border border-taupe/30 p-5 md:p-6 space-y-4">
        <legend className="px-2 text-[11px] tracking-eyebrow uppercase text-taupe">
          Optional — how can we follow up?
        </legend>

        <label
          htmlFor="contact-consent-transactional"
          className="flex items-start gap-3 cursor-pointer"
        >
          <input
            id="contact-consent-transactional"
            name="consentTransactional"
            type="checkbox"
            checked={data.consentTransactional}
            onChange={toggleBool("consentTransactional")}
            disabled={submitting}
            className="mt-1.5 h-4 w-4 flex-shrink-0 accent-forest cursor-pointer"
          />
          <span className="text-ink text-[14px] md:text-[15px] leading-relaxed">
            I agree to receive <strong>non-marketing</strong> emails, calls, and text messages from P5 Marketing related to my inquiry — scheduling, account servicing, and other transactional communications. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. See our{" "}
            <a
              href="/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms-and-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150"
            >
              Terms
            </a>
            .
          </span>
        </label>

        <label
          htmlFor="contact-consent-marketing"
          className="flex items-start gap-3 cursor-pointer"
        >
          <input
            id="contact-consent-marketing"
            name="consentMarketing"
            type="checkbox"
            checked={data.consentMarketing}
            onChange={toggleBool("consentMarketing")}
            disabled={submitting}
            className="mt-1.5 h-4 w-4 flex-shrink-0 accent-forest cursor-pointer"
          />
          <span className="text-ink text-[14px] md:text-[15px] leading-relaxed">
            I agree to receive <strong>marketing</strong> emails, calls, and text messages from P5 Marketing, including promotions, newsletters, offers, and updates. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. See our{" "}
            <a
              href="/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms-and-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150"
            >
              Terms
            </a>
            .
          </span>
        </label>

        <p className="text-taupe text-[13px] leading-relaxed pt-2 border-t border-taupe/20">
          Both boxes are optional. We will not share your phone number or opt-in information with third parties for their marketing purposes.
        </p>
      </fieldset>

      {status === "error" && errorMsg && (
        <p
          role="alert"
          className="text-oxblood text-[14px] leading-relaxed border-l-2 border-oxblood pl-3"
        >
          {errorMsg}
        </p>
      )}

      <p className="text-taupe text-[12px] tracking-[0.02em]">
        <a href="/privacy-policy/" className="text-forest hover:text-ink transition-colors duration-150">
          Privacy Policy
        </a>
        <span className="mx-2">·</span>
        <a href="/terms-and-conditions/" className="text-forest hover:text-ink transition-colors duration-150">
          Terms
        </a>
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center border border-forest bg-forest text-bone px-7 py-3.5 text-[14px] tracking-cta uppercase font-medium transition-colors duration-150 hover:bg-ink hover:border-ink disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Start the Conversation →"}
      </button>
    </form>
  );
}
