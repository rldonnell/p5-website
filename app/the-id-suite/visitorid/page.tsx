import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "VisitorID  |  Anonymous Visitor Identification  |  P5",
  description:
    "VisitorID identifies up to 60% of anonymous website visitors, scores them by intent, and routes the serious ones to your CRM. The measurement and attribution layer inside a P5 engagement.",
  alternates: { canonical: "/the-id-suite/visitorid/" },
};

export default function VisitorIdPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          aria-labelledby="visitorid-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            04 &middot; VisitorID
          </p>
          <h1
            id="visitorid-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[20ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            The visitor identification layer.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            Anonymous website visitors identified, scored, and routed to your CRM. The 95 percent of traffic that leaves without filling out a form, finally visible.
          </p>
        </section>

        <section
          aria-labelledby="visitorid-what-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What it does</p>
            <h2
              id="visitorid-what-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              Four-stage pipeline. Anonymous traffic to CRM rows.
            </h2>
            <div className="space-y-5 text-ink text-[17px] md:text-[19px] leading-relaxed">
              <p>
                Most prospects do not raise their hand on the first visit. They browse your services, compare options, and leave without filling anything out. Traditional analytics tells you a session happened. VisitorID tells you who showed up, what they researched, and how serious they look.
              </p>
              <p>
                The pipeline runs four stages. Identify. Classify. Score. Deliver. Records are filtered by confidence so bots and junk do not clutter your CRM. Each visitor is tagged by interest area, intent tier, and source. Qualified records arrive in your CRM automatically with the context your team needs to follow up.
              </p>
              <p>
                U.S. only. Built on a consented identity graph. Compliance configured per vertical: healthcare-adjacent practices get extra care, including HIPAA-adjacent filtering and minimum-data-footprint defaults.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="visitorid-how-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">How the primary agency uses it</p>
            <h2
              id="visitorid-how-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              The measurement and attribution layer that closes the loop with sales.
            </h2>
            <p className="text-ink text-[17px] md:text-[19px] leading-relaxed">
              The plan reads from VisitorID continuously. Which channels are producing qualified visitors. Which content is converting. Which prospects called and booked. That read feeds back into the plan and rewrites it. VisitorID is the single most important tool in the toolkit for understanding whether the marketing is actually working.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="visitorid-output-heading"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[68ch]">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What you get</p>
              <h2
                id="visitorid-output-heading"
                className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
              >
                A dashboard, a table, deep profiles, and CRM sync.
              </h2>
              <ul className="space-y-4 text-ink text-[17px] md:text-[18px] leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Real-time dashboard with intent scoring, traffic sources, and filterable date windows.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>High-intent visitors table with names, locations, scores, tier badges, and research interests.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Deep visitor profiles with demographic attributes, intent signals, and page-level browsing history.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Automatic CRM sync with tagged records. No manual exports.</span>
                </li>
              </ul>
              <p className="mt-8 text-taupe text-[15px]">
                Existing free resources (The 97% Problem report, the identity retargeting walkthrough, the pitch deck) are still available as deeper-dive material. They live below the main work.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="visitorid-cta-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">The first step</p>
            <h2
              id="visitorid-cta-heading"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              VisitorID ships with the engagement.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              VisitorID is the measurement layer under the plan. Begin a Plan of Record and the pixel is on your site within the first week, identification running by week two.
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
