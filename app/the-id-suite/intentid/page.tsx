import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "IntentID  |  Intent Audience Engine  |  P5",
  description:
    "IntentID builds custom audiences of people actively researching your services and syncs them into the ad platforms where your buyers convert. Inside every P5 engagement.",
  alternates: { canonical: "/the-id-suite/intentid/" },
};

export default function IntentIdPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          aria-labelledby="intentid-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            03 &middot; IntentID
          </p>
          <h1
            id="intentid-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[20ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            The audience layer for paid.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            Custom audiences of people actively researching your services, deployed across Meta, Google, X, TikTok, and LinkedIn. Refreshed weekly.
          </p>
        </section>

        <section
          aria-labelledby="intentid-what-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What it does</p>
            <h2
              id="intentid-what-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              Intent, not demographics.
            </h2>
            <div className="space-y-5 text-ink text-[17px] md:text-[19px] leading-relaxed">
              <p>
                IntentID builds custom intent audiences from third-party data signals across the web. The output is a list of real people in your service area who are demonstrably researching what you sell, refreshed weekly and synced into the ad platforms your buyers actually convert on.
              </p>
              <p>
                Standard demographic targeting wastes money on people who do not need what you sell. IntentID replaces &ldquo;women aged 35-55 in the Dallas metro&rdquo; with &ldquo;people who have read three pieces of content about your category in the last thirty days.&rdquo; Different list. Different cost-per-lead. Different conversion rate.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="intentid-how-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">How the lead agency uses it</p>
            <h2
              id="intentid-how-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              The audience layer for the paid half of the plan.
            </h2>
            <p className="text-ink text-[17px] md:text-[19px] leading-relaxed">
              Lists feed your paid media buyer&apos;s campaigns directly. Audiences refresh as the IntelID briefing surfaces shifts in the category. The plan tracks cost-per-lead from IntentID audiences against cost-per-lead from broader audiences as a continuous test.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="intentid-output-heading"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[68ch]">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What you get</p>
              <h2
                id="intentid-output-heading"
                className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
              >
                Custom audiences synced to your paid platforms within 48 to 72 hours.
              </h2>
              <p className="text-ink text-[17px] md:text-[19px] leading-relaxed">
                Weekly refresh. Monthly performance comparison against demographic baselines. Plan adjustments based on what the test is saying.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="intentid-cta-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">The first step</p>
            <h2
              id="intentid-cta-heading"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              IntentID ships with the engagement.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              IntentID is the audience layer inside a P5 engagement. Begin a Plan of Record and the first audiences sync into your paid platforms in week two or three.
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
