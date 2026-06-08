import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";
import ReportSignup from "@/components/ReportSignup";

const PDF = "/reports/p5-state-of-high-ticket-cosmetic-2026.pdf";

export const metadata: Metadata = {
  title:
    "The State of High-Ticket Service Marketing 2026 — Cosmetic & Plastic Surgery Edition  |  P5",
  description:
    "An early-access read for cosmetic and plastic surgery practice owners. Demand is growing, cosmetic surgery is the most expensive specialty in medicine to acquire a patient in, and about half of the leads practices pay for are never contacted. Where the money actually leaks, and what to do about it.",
  alternates: { canonical: "/high-ticket-2026/" },
  openGraph: {
    title:
      "The State of High-Ticket Service Marketing 2026 — Cosmetic & Plastic Surgery Edition",
    description:
      "An early-access read for cosmetic and plastic surgery practice owners, ahead of the full report this fall.",
    type: "article",
    siteName: "P5",
    url: "https://p5marketing.com/high-ticket-2026/",
    images: ["/reports/cover.png"],
  },
};

const FINDINGS: { number: string; body: string }[] = [
  {
    number: "13.6%",
    body: "Projected annual growth of the U.S. medical aesthetics market through 2030. The demand is real and still climbing.",
  },
  {
    number: "$610",
    body: "Cost to acquire one cosmetic-surgery patient, the highest of any medical specialty, against a cross-specialty average near $370.",
  },
  {
    number: "51%",
    body: "Of leads, industry-wide, are never contacted at all. The money is lost after the click, not before it.",
  },
];

export default function HighTicketReportPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          aria-labelledby="report-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-16 lg:pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-8 md:mb-10">
                P5  ·  Annual industry read
              </p>
              <h1
                id="report-hero"
                className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] mb-6"
              >
                The State of High-Ticket Service Marketing
              </h1>
              <p className="font-display text-forest text-[18px] md:text-[22px] mb-8">
                2026  ·  Cosmetic &amp; Plastic Surgery Edition  ·  Early access
              </p>
              <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] mb-9">
                Yours is the most expensive specialty in medicine to acquire a patient in,
                and across the board about half of the leads practices pay for are never
                contacted. This early-access read lays out where the money leaks and what to
                do about it. No form. No gate.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <ButtonLink href={PDF} variant="forest" external>
                  Read the report
                </ButtonLink>
                <a
                  href={PDF}
                  download
                  className="text-[12px] tracking-cta uppercase text-taupe hover:text-ink transition-colors duration-150"
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <a href={PDF} aria-label="Open the report PDF" className="block">
                <Image
                  src="/reports/cover.png"
                  alt="Cover of The State of High-Ticket Service Marketing 2026, Cosmetic and Plastic Surgery Edition"
                  width={1105}
                  height={1430}
                  priority
                  className="w-full max-w-[360px] mx-auto lg:ml-auto h-auto border border-taupe/20 shadow-sm"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section
          aria-labelledby="findings-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
            Three findings from inside
          </p>
          <h2
            id="findings-heading"
            className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] max-w-[22ch] mb-12 md:mb-16"
          >
            You don&apos;t have a demand problem. You have a follow-through problem.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-10">
            {FINDINGS.map(({ number, body }) => (
              <div key={number}>
                <p className="font-display font-medium text-forest leading-none text-[44px] md:text-[52px] lg:text-[56px] tracking-tight mb-4">
                  {number}
                </p>
                <p className="text-ink leading-relaxed text-[15px] md:text-[16px] max-w-[40ch]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Capture: full report this fall */}
        <section
          aria-labelledby="fall-heading"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
            <div className="w-14 h-px bg-forest mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              The full report publishes this fall
            </p>
            <h2
              id="fall-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[26px] md:text-[34px] lg:text-[38px] max-w-[24ch] mb-6"
            >
              Want the full 2026 report, with first-party benchmarks?
            </h2>
            <p className="text-ink leading-relaxed text-[16px] md:text-[18px] max-w-[60ch] mb-8">
              The complete edition goes deeper, with first-party data from the high-value
              service businesses we measure. Leave an email and we&apos;ll send it when it&apos;s
              ready. Optional, the read above is yours regardless.
            </p>
            <ReportSignup ctaLabel="Send me the full report" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
