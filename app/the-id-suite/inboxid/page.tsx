import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "InboxID  |  Behavior-Triggered Follow-Up  |  P5",
  description:
    "InboxID fires automated retargeting and behavior-triggered email the day a prospect engages. The execution layer for the sales-bridge half of a P5 engagement.",
  alternates: { canonical: "/the-id-suite/inboxid/" },
};

export default function InboxIdPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          aria-labelledby="inboxid-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            05 &middot; InboxID
          </p>
          <h1
            id="inboxid-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[22ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            Same-day follow-up to the visitors VisitorID identifies.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            Automated retargeting plus behavior-triggered email, fired the day a prospect engages. Warm hand-offs to your team, not cold lists.
          </p>
        </section>

        <section
          aria-labelledby="inboxid-what-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What it does</p>
            <h2
              id="inboxid-what-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              Identification turned into action, within hours.
            </h2>
            <div className="space-y-5 text-ink text-[17px] md:text-[19px] leading-relaxed">
              <p>
                InboxID turns visitor identification into action. The day a prospect visits a high-intent page on your site, they enter a behavior-triggered sequence. Retargeting ads keep your brand visible across the platforms they use. The email sequence delivers content tailored to what they engaged with. The hottest prospects flow into your CRM with the context your team needs to pick up the phone.
              </p>
              <p>
                Same-day matters. Identified prospects who get follow-up within twenty-four hours convert at materially higher rates than those who get follow-up a week later. InboxID exists because the window between &ldquo;they showed interest&rdquo; and &ldquo;they called your competitor&rdquo; is shorter than most owners think.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="inboxid-how-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">How the primary agency uses it</p>
            <h2
              id="inboxid-how-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
            >
              The execution layer for the sales-bridge half of the plan.
            </h2>
            <p className="text-ink text-[17px] md:text-[19px] leading-relaxed">
              Sequences are tuned to the practice&apos;s intake process and the conversion patterns VisitorID is reporting. The plan tracks open rates, click-through, and identified-to-booked conversion as continuous reads. InboxID is the tool that turns &ldquo;we know who visited&rdquo; into &ldquo;we booked the consult.&rdquo;
            </p>
          </div>
        </section>

        <section
          aria-labelledby="inboxid-output-heading"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[68ch]">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">What you get</p>
              <h2
                id="inboxid-output-heading"
                className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
              >
                Sequences firing same-day. Engagement history in your CRM. Reporting tied to bookings.
              </h2>
              <ul className="space-y-4 text-ink text-[17px] md:text-[18px] leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Same-day automated email sequences triggered by what the prospect engaged with on the site.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Retargeting audiences refreshed daily across the platforms your buyers actually use.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>CRM rows enriched with engagement history so your team picks up the phone with context.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Monthly performance summary tied to bookings, not impressions.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="inboxid-cta-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">The first step</p>
            <h2
              id="inboxid-cta-heading"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              InboxID ships with the engagement.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              InboxID is the follow-up layer inside a P5 engagement. Build your Playbook and the first sequences are running by week three.
            </p>
            <ButtonLink
              href="mailto:rdonnell@p5marketing.com?subject=Build%20my%20Playbook"
              variant="forest"
            >
              Build your Playbook
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
