import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "About  |  P5 Marketing",
  description:
    "P5 is the lead marketing and sales agency for owner-operators of high-value service businesses. A senior team with twenty-five years building marketing engines for businesses where one customer is worth $10K and up.",
  alternates: { canonical: "/about/" },
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Robert Donnell",
    role: "Co-Founder · Strategy & Operations",
    bio: "Robert leads strategy, client relationships, and the overall direction of P5. Twenty-five years building marketing engines for owner-operated service businesses. He architected the in-house toolkit (IntelID, SearchID, IntentID, VisitorID, InboxID) and personally owns the senior strategic work for every client account.",
  },
  {
    name: "Irene Donnell",
    role: "Marketing · Social Media, SEO & AI Optimization",
    bio: "Irene leads P5 Marketing's digital growth strategy across social media, SEO, and AI optimization. Her work increases visibility, attracts qualified leads, and converts attention into measurable growth.",
  },
  {
    name: "Camilo Contreras",
    role: "Lead Developer",
    bio: "Camilo builds the technical infrastructure behind every campaign — landing pages, CRM integrations, tracking systems, and automation workflows. If it touches code, Camilo built it.",
  },
  {
    name: "Arlet Gutierrez",
    role: "Campaign Operations",
    bio: "Arlet manages day-to-day campaign execution — ad builds, audience uploads, reporting dashboards, and QA. She keeps every moving piece on schedule and on spec.",
  },
  {
    name: "Adrianne Panza",
    role: "Client Success & Onboarding",
    bio: "Adrianne is the first person new clients work with. She handles onboarding, CRM setup, and ongoing communication to make sure every client knows exactly what is happening and what is next.",
  },
  {
    name: "Stephie Althouse, PhD",
    role: "Strategic Advisor · Organizational Clarity & Growth",
    bio: "Dr. Stephie advises P5 and its clients on organizational clarity, strategic positioning, and scalable growth frameworks. She helps leadership teams align their messaging, structure, and go-to-market strategy so that every part of the business communicates with purpose and moves in the same direction.",
  },
  {
    name: "Joely Gardner, PhD",
    role: "Strategic Advisor · Healthcare Marketing",
    bio: "Dr. Joely brings deep expertise in web usability and regulatory strategy, backed by prior experience at Microsoft, Meta, and Oracle. She advises on messaging frameworks for medical device, pharmaceutical, and aesthetic practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          aria-labelledby="about-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            About
          </p>
          <h1
            id="about-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[20ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            Twenty-five years. One job: run the marketing for owner-operators.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            P5 is the lead marketing and sales agency for owner-operators of high-value service businesses. We hold the plan across your full vendor stack, build the toolkit that makes the plan run, and stay accountable to the only number that matters: customers booked.
          </p>
        </section>

        {/* The team */}
        <section
          aria-labelledby="team-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="mb-12 md:mb-16">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              The team
            </p>
            <h2
              id="team-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] max-w-[26ch]"
            >
              The people behind the plan.
            </h2>
          </div>

          <div className="border-t border-taupe/25">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-12 border-b border-taupe/25"
              >
                <div className="md:col-span-4">
                  <h3 className="font-display font-normal text-ink text-[22px] md:text-[26px] leading-tight mb-2">
                    {member.name}
                  </h3>
                  <p className="text-taupe text-[13px] tracking-[0.04em] uppercase">
                    {member.role}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-ink leading-relaxed text-[16px] md:text-[17px] max-w-[60ch]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why P5 exists — quiet manifesto, mirrors homepage */}
        <section
          aria-labelledby="about-manifesto"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[680px] mx-auto">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
              Why P5 exists
            </p>
            <p
              id="about-manifesto"
              className="text-ink leading-relaxed text-[18px] md:text-[20px] mb-16 md:mb-20"
            >
              P5 was built because too many owner-operators were carrying their own marketing plan and calling that &ldquo;having an agency.&rdquo; That isn&apos;t an agency. That is a vendor list with a project manager who happens to also own the business. P5 is the lead agency for owner-operators who want one accountable plan instead of six disconnected vendors.
            </p>
            <p className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[44px]">
              One plan. One agency. One accountable team.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="about-cta"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
              Think we might be a fit?
            </p>
            <h2
              id="about-cta"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              Begin a Plan of Record.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              Thirty minutes with a senior strategist. No pitch. Honest questions about your business and your current vendor stack. If P5 is a fit, we tell you what we would do. If we are not, we say so.
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
