import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Who We Work With  |  P5 Marketing",
  description:
    "P5 is the primary marketing agency for owner-operators of high-value service businesses, $1M to $5M in revenue, where one customer is worth $10K and up and the buying journey takes weeks.",
  alternates: { canonical: "/markets/" },
  openGraph: {
    title: "Who We Work With  |  P5 Marketing",
    description:
      "Owner-operators of high-value service businesses. Cosmetic surgery, wedding venues, spine and orthopedic surgery, legal, luxury contractors, consultants, and more.",
    type: "website",
    siteName: "P5",
    url: "https://p5marketing.com/markets/",
  },
};

const FIT_CRITERIA: { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "Owner-operator.",
    body: "The person making the call has their name on all the paperwork. They own the outcome. They are not a marketing director answering to someone else, and they are not part of a corporate group with its own agency. The decision-maker is the same person who lives or dies by the result.",
  },
  {
    number: "02",
    title: "$1M–$5M revenue, $10K+ per customer.",
    body: "Established enough to invest in marketing seriously. Margins healthy enough to absorb a $10K+ monthly marketing spend. One booked customer pays for the engagement many times over. Below this range the math does not support what we do; above it, you usually have a full in-house team that does not fit our model.",
  },
  {
    number: "03",
    title: "Done managing your last agency.",
    body: "Most P5 clients have worked with agencies before and were quietly unhappy. Junior account managers between the owner and the work. Status calls that went nowhere. Reports on impressions instead of bookings. P5 clients want a senior team that runs the work, not another vendor they have to manage.",
  },
  {
    number: "04",
    title: "Trusts experts to do the job.",
    body: "The single biggest predictor of whether a P5 engagement succeeds. Our work needs runway to compound. SEO takes time. Content takes time. Audience signal takes time to tune. Clients who let us run the play see real results. Clients who want to approve every asset and intervene weekly tend not to.",
  },
];

const VERTICALS: { name: string; range: string; href?: string }[] = [
  { name: "Cosmetic & Plastic Surgery", range: "$15K–$60K+ per patient" },
  { name: "Spine & Orthopedic Surgery", range: "$15K–$80K+ per case" },
  { name: "Wedding Venues", range: "$10K–$40K per booking" },
  { name: "Roofing & Exterior Contractors", range: "$15K–$80K+ per project" },
  { name: "HVAC & Mechanical Contractors", range: "$10K–$50K+ per install" },
  { name: "Luxury Home Renovation & Remodeling", range: "$25K–$150K+ per project" },
  { name: "Legal Practices", range: "$10K–$70K+ per matter" },
  { name: "Specialty Medical & Dental", range: "$10K–$35K+ per case" },
  { name: "Consultants & Professional Services", range: "$10K–$50K per engagement" },
];

const DISQUALIFIERS: string[] = [
  "You have a senior marketing executive who needs to own the strategy top to bottom.",
  "Your monthly marketing budget is below $10K.",
  "You want weekly status calls and to approve every asset.",
  "Your average customer is worth less than a few thousand dollars.",
  "Your operations can't handle more inbound right now.",
];

export default function MarketsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Section 1: Hero */}
        <section
          aria-labelledby="markets-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            Who we work with
          </p>
          <h1
            id="markets-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[18ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            Your industry doesn&apos;t matter. Your economics do.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            P5 is the primary marketing agency for owner-operators where one new customer pays for the engagement many times over.
          </p>
        </section>

        {/* Section 2: Fit profile + lead-agency paragraph */}
        <section
          aria-labelledby="fit-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="mb-12 md:mb-16">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              01  ·  What every P5 client shares
            </p>
            <h2
              id="fit-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] max-w-[24ch]"
            >
              Four things, in this order.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 md:gap-y-14">
            {FIT_CRITERIA.map(({ number, title, body }) => (
              <div key={number} className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-3 md:col-span-3">
                  <p className="font-display font-medium text-forest leading-none text-[56px] md:text-[64px] lg:text-[80px] tracking-tight">
                    {number}
                  </p>
                </div>
                <div className="col-span-9 md:col-span-9">
                  <h3 className="font-display font-normal text-ink text-[20px] md:text-[22px] lg:text-[24px] leading-tight mb-3">
                    {title}
                  </h3>
                  <p className="text-ink leading-relaxed text-[15px] md:text-[16px] max-w-[52ch]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lead-agency paragraph */}
          <div className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-taupe/30">
            <div className="w-14 h-px bg-forest mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              And working together looks like this
            </p>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] max-w-[68ch]">
              As your primary marketing agency, P5 defines the ideal customer profile (ICP), writes the plan that ties together paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships, and measures the whole program continuously with anonymous website visitor identification and traffic attribution. The plan is the through line across every vendor in your stack.
            </p>
          </div>
        </section>

        {/* Section 3: The verticals */}
        <section
          aria-labelledby="verticals-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="mb-10 md:mb-12">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              02  ·  Nine verticals, one buyer journey
            </p>
            <h2
              id="verticals-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] mb-8 max-w-[20ch]"
            >
              Different industries. Same buyer journey.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[18px] max-w-[64ch]">
              The buyer journey for a $20K wedding booking, a $35K cosmetic procedure, a $25K legal retainer, and a $60K roof replacement is structurally identical. Discovery. Due diligence. Multiple visits to your site. Comparisons against competitors. Objections that need to be answered. Weeks of consideration before they call. Same engagement model across all of them. Different segments, different content, different conversion paths, all tailored to your buyer.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10 lg:gap-x-12 border-t border-taupe/30 pt-10">
            {VERTICALS.map(({ name, range, href }) => {
              const inner = (
                <>
                  <p className="font-display font-normal text-ink text-[17px] md:text-[18px] leading-snug mb-1.5">
                    {name}
                  </p>
                  <p className="text-taupe text-[14px] md:text-[15px]">
                    {range}
                  </p>
                </>
              );

              return (
                <li key={name}>
                  {href ? (
                    <Link
                      href={href}
                      className="block hover:opacity-70 transition-opacity duration-150"
                    >
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Section 4: If you're not on this list */}
        <section
          aria-labelledby="not-on-list-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 border-t border-taupe/20"
        >
          <div className="max-w-[680px] mx-auto">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              03  ·  Not on the list?
            </p>
            <h2
              id="not-on-list-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[24px] md:text-[28px] lg:text-[32px] mb-6"
            >
              The vertical matters less than the economics.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[18px]">
              If your business fits the four criteria above and the buyer journey looks the same, long, considered, comparative, with one customer paying for the engagement many times over, we should still talk. The categories above are where we have a track record. The fit profile is what qualifies you.
            </p>
          </div>
        </section>

        {/* Section 5: Honest disqualifiers */}
        <section
          aria-labelledby="disqualifiers-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[720px] mx-auto">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              04  ·  Who P5 isn&apos;t for
            </p>
            <h2
              id="disqualifiers-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] mb-10"
            >
              Honestly, you&apos;re probably not a fit if…
            </h2>
            <ul className="space-y-5">
              {DISQUALIFIERS.map((line) => (
                <li key={line} className="flex items-start gap-4">
                  <span
                    className="block w-5 h-px bg-forest mt-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-ink leading-relaxed text-[17px] md:text-[18px]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-taupe text-[15px] leading-relaxed">
              We&apos;ll tell you in the fit conversation if any of that applies. Better to find out in thirty minutes than four months in.
            </p>
          </div>
        </section>

        {/* Section 6: CTA — Build your Playbook */}
        <section
          aria-labelledby="markets-cta-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
              05  ·  The first step
            </p>
            <h2
              id="markets-cta-heading"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              Build your Playbook.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              If you fit the profile and want a written Playbook that ties your full vendor stack together, building the Playbook is the first paid step. Independent of any ongoing engagement. The Playbook is the deliverable, and you own it whether or not you continue with P5.
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
