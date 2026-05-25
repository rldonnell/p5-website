import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Service  |  P5 Marketing",
  description:
    "SMS Terms of Service for P5 Marketing — what kinds of messages you can expect, how to opt out by texting STOP, how to get help, and related carrier and rate information.",
  alternates: { canonical: "/terms-of-service/" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20">
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            Legal
          </p>
          <h1 className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-6">
            Terms of Service
          </h1>
          <p className="text-taupe text-[15px]">Last updated: May 20, 2026</p>
        </section>

        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20">
          <article className="max-w-[68ch] mx-auto text-ink text-[17px] md:text-[18px] leading-[1.7] space-y-10">
            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                1. SMS Program Overview
              </h2>
              <p>
                P5 Marketing: This is simply a brief description of the kinds of messages users can expect to receive when they opt in. You can cancel the SMS service at any time by just texting STOP to 760-497-3986. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you wish to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                2. Help, Carriers, and Rates
              </h2>
              <p>
                If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at{" "}
                <a href="mailto:rdonnell@p5marketing.com" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  rdonnell@p5marketing.com
                </a>
                . Carriers are not liable for delayed or undelivered messages. As always, message and data rates may apply for any messages sent to you from us and from us to you. You will receive messages infrequently, once or twice a week. If you have any questions about your text plan or data plan, it&apos;s best to contact your wireless provider. If you have any questions regarding privacy, please read our full privacy policy{" "}
                <Link href="/privacy-policy/" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  here
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                Related Policies
              </h2>
              <p className="mb-3">
                <Link href="/privacy-policy/" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  Privacy Policy
                </Link>{" "}
                — how we collect, use, and protect your personal information.
              </p>
              <p>
                <Link href="/terms-and-conditions/" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  Terms and Conditions
                </Link>{" "}
                — the full terms governing use of our website and services.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
