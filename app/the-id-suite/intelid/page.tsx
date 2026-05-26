import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "IntelID  |  Weekly Intelligence Briefing  |  P5",
  description:
    "IntelID is the weekly intelligence read on your market. Competitors, category, public reputation, synthesized into a Monday-morning briefing P5 uses to inform the plan.",
  alternates: { canonical: "/the-id-suite/intelid/" },
};

export default function IntelIdPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          aria-labelledby="intelid-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            01 &middot; IntelID
          </p>
          <h1
            id="intelid-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[20ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            The weekly intelligence read on your market.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            A single Monday-morning briefing on your competitors, your category, and your public reputation. Synthesized from search, social, and review data. In your inbox by 9 AM.
          </p>
        </section>

        <section
          aria-labelledby="intelid-what-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What it does</p>
            <h2
              id="intelid-what-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              Five minutes of reading. The thinking, not the data.
            </h2>
            <div className="space-y-5 text-ink text-[17px] md:text-[19px] leading-relaxed">
              <p>
                IntelID pulls signal from every channel that matters to your category. Competitor search activity. Social mentions. Review velocity. Ad creative changes. Press coverage. P5 synthesizes that signal into a short briefing the owner can read in five minutes over coffee.
              </p>
              <p>
                The briefing is not a dashboard. It is a written read. What changed. What matters. What we are doing about it in the plan this week. It exists because most owners do not have time to keep up with their own market, and most agencies do not bother to read it for them.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="intelid-how-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">How the primary agency uses it</p>
            <h2
              id="intelid-how-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              The weekly input to the plan.
            </h2>
            <p className="text-ink text-[17px] md:text-[19px] leading-relaxed">
              Significant moves in the competitor set or the category trigger plan adjustments in the next monthly working session. Most weeks the briefing confirms the plan is on track. The weeks it doesn&apos;t are the ones that earn their keep.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="intelid-output-heading"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[68ch]">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What you get</p>
              <h2
                id="intelid-output-heading"
                className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
              >
                A 600-to-1000-word briefing in your inbox by 9 AM Monday.
              </h2>
              <p className="text-ink text-[17px] md:text-[19px] leading-relaxed">
                Plain language. No charts. No KPIs. The thinking, not the data.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="intelid-cta-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">The first step</p>
            <h2
              id="intelid-cta-heading"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              The briefing ships with the engagement.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              IntelID is the intelligence input to the lead-agency plan. Begin a Plan of Record and the first briefing arrives within two weeks.
            </p>
            <ButtonLink
              href="mailto:rdonnell@p5marketing.com?subject=Plan%20of%20Record%20diagnostic"
              variant="forest"
            >
              Begin a Plan of Record
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
