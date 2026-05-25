import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "SearchID  |  SEO and GEO Content Engine  |  P5",
  description:
    "SearchID is the SEO and GEO content engine inside a P5 engagement. 25 years of search expertise plus generative engine optimization. Compounding organic traffic you own.",
  alternates: { canonical: "/the-id-suite/seo-accelerator/" },
  keywords: ["SearchID", "SEO Accelerator", "SEO", "GEO", "generative engine optimization"],
};

export default function SearchIdPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          aria-labelledby="searchid-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            02 &middot; SearchID
          </p>
          <h1
            id="searchid-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[18ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            The SEO and GEO content engine.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            The execution layer that turns your expertise into the organic traffic your competitors cannot buy. Built on 25 years of P5 SEO legacy and now optimized for generative engine results.
          </p>
        </section>

        <section
          aria-labelledby="searchid-what-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What it does</p>
            <h2
              id="searchid-what-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              Three jobs. One engine. Compounding results.
            </h2>
            <div className="space-y-5 text-ink text-[17px] md:text-[19px] leading-relaxed">
              <p>
                SearchID does three things. Search engine optimization in the traditional sense: technical site architecture, keyword strategy, on-page work, authority building. Generative engine optimization: structuring content so ChatGPT, Perplexity, Claude, and Google AI Overviews surface and cite it. Content repurposing: turning one cornerstone piece of content into five-to-ten downstream assets across the channels you already use.
              </p>
              <p>
                The work compounds. Twelve months in, organic traffic generates qualified leads whether you are running ads that week or not. Eighteen months in, the agency&apos;s ad spend is doing less of the heavy lifting because the organic foundation is carrying its share.
              </p>
              <p>
                Twenty-five years of SEO work behind every decision. We have been doing this since before Google existed. We have seen what compounds and what doesn&apos;t.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="searchid-how-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">How the lead agency uses it</p>
            <h2
              id="searchid-how-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              The execution engine for the content half of the plan.
            </h2>
            <p className="text-ink text-[17px] md:text-[19px] leading-relaxed">
              Topics come from the ICP, the IntelID briefing, and the IntentID audience data. The content that ships gets attributed back through VisitorID so the plan knows which pieces are doing the work. SearchID is one of the few places in the toolkit where the same workflow runs all twelve months of the year.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="searchid-output-heading"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[68ch]">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What you get</p>
              <h2
                id="searchid-output-heading"
                className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
              >
                Published content monthly. Performance report monthly. Strategy review quarterly.
              </h2>
              <ul className="space-y-4 text-ink text-[17px] md:text-[18px] leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Blog posts, service-page enhancements, FAQ content, all mapped to keyword strategy and buyer intent.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>GEO structuring on every piece so AI engines can surface and cite it.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Content repurposed into social posts, email segments, and other formats.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Monthly performance report in plain English. Quarterly strategy review with the owner.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Ongoing technical SEO monitoring: site health, Core Web Vitals, schema, crawl errors.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="searchid-cta-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">The first step</p>
            <h2
              id="searchid-cta-heading"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              SearchID ships with the engagement.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              SearchID is the content execution layer inside a P5 engagement. Begin a Plan of Record and the foundation audit runs in week one.
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
