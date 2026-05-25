import Link from "next/link";
import ReportSignup from "@/components/ReportSignup";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-bone-deep border-t border-taupe/25">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-14 md:pt-20 pb-10">
        <p className="font-display font-normal text-ink leading-[1.2] tracking-[-0.005em] text-[22px] md:text-[26px] lg:text-[28px] max-w-[680px] mb-20 md:mb-24">
          The lead marketing agency for owner-operators of high-value service businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-3xl md:text-4xl text-ink font-medium tracking-tight inline-block"
              aria-label="P5 home"
            >
              P5
            </Link>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-4">
              Stay in touch
            </p>
            <p className="text-ink text-[15px] leading-relaxed mb-5 max-w-xs">
              The State of High-Ticket Service Marketing 2026 publishes this fall.
            </p>
            <ReportSignup compact />
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-4">
              Contact
            </p>
            <a
              href="mailto:rdonnell@p5marketing.com"
              className="text-forest text-[15px] hover:text-ink transition-colors duration-150 underline-offset-4 hover:underline"
            >
              rdonnell@p5marketing.com
            </a>
            <p className="text-taupe text-[14px] mt-3">Bedford, Texas</p>
          </div>
        </div>

        <div className="mt-20 md:mt-28 pt-8 border-t border-taupe/20">
          <p className="text-taupe text-[12px] tracking-[0.02em] flex flex-wrap gap-x-3 gap-y-1">
            <span>&copy; {year} P5 Marketing</span>
            <span aria-hidden="true">·</span>
            <Link href="/privacy-policy/" className="hover:text-ink transition-colors duration-150">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-and-conditions/" className="hover:text-ink transition-colors duration-150">
              Terms and Conditions
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-of-service/" className="hover:text-ink transition-colors duration-150">
              Terms of Service
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/do-not-sell/" className="hover:text-ink transition-colors duration-150">
              Do Not Sell My Info
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
