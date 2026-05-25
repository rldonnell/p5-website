"use client";

import { useState, FormEvent } from "react";

interface ReportSignupProps {
  ctaLabel?: string;
  placeholder?: string;
  compact?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ReportSignup({
  ctaLabel = "Get the early read",
  placeholder = "you@yourcompany.com",
  compact = false,
}: ReportSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/report-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data: { error?: string } = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <p
        className={`font-display text-ink ${compact ? "text-lg" : "text-xl md:text-2xl"}`}
        role="status"
      >
        You are on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 ${compact ? "max-w-md" : "max-w-lg"}`}
      noValidate
    >
      <label htmlFor={compact ? "email-footer" : "email-fieldwork"} className="sr-only">
        Email
      </label>
      <input
        id={compact ? "email-footer" : "email-fieldwork"}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent border border-taupe/40 px-4 py-3 text-ink placeholder:text-taupe/70 focus:outline-none focus:border-ink transition-colors duration-150 text-[15px]"
        aria-describedby={status === "error" ? "signup-error" : undefined}
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-forest text-bone border border-forest px-6 py-3 text-[13px] tracking-cta uppercase font-medium hover:bg-ink hover:border-ink transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending" : ctaLabel}
      </button>
      {status === "error" && errorMessage && (
        <p
          id="signup-error"
          role="alert"
          className="text-[13px] text-oxblood mt-1 sm:mt-0 sm:w-full"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
