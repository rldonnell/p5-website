import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "The P5 Toolkit  |  The ID Suite",
  description:
    "The toolkit P5 built to run as the primary marketing agency. Five tools: IntelID, SearchID, IntentID, VisitorID, InboxID. Three intelligence and identification layers, two execution layers. All in service of one written plan.",
  alternates: { canonical: "/the-id-suite/" },
  openGraph: {
    title: "The P5 Toolkit  |  The ID Suite",
    description:
      "The in-house tooling that powers a P5 engagement. Not a product line. The engine under the primary-agency model.",
    type: "website",
    siteName: "P5",
    url: "https://p5marketing.com/the-id-suite/",
  },
};

type Tool = {
  number: string;
  name: string;
  href: string;
  oneLine: string;
};

const INTELLIGENCE_TOOLS: Tool[] = [
  {
    number: "01",
    name: "IntelID",
    href: "/the-id-suite/intelid/",
    oneLine:
      "The weekly intelligence read on your market. Competitors, category, public reputation. Synthesized, in your inbox by 9 AM Monday.",
  },
  {
    number: "03",
    name: "IntentID",
    href: "/the-id-suite/intentid/",
    oneLine:
      "Custom audiences of people actively researching your services. Refreshed weekly, synced into the ad platforms where your buyers convert.",
  },
  {
    number: "04",
    name: "VisitorID",
    href: "/the-id-suite/visitorid/",
    oneLine:
      "Anonymous website visitors identified, scored, and routed to your CRM. The 95% of traffic that never fills out a form, finally visible.",
  },
];

const EXECUTION_TOOLS: Tool[] = [
  {
    number: "02",
    name: "SearchID",
    href: "/the-id-suite/seo-accelerator/",
    oneLine:
      "The SEO and GEO content engine. 25 years of search expertise plus generative engine optimization. Compounding organic traffic you own.",
  },
  {
    number: "05",
    name: "InboxID",
    href: "/the-id-suite/inboxid/",
    oneLine:
      "Same-day follow-up to the visitors VisitorID identifies. Behavior-triggered email and retargeting. Warm hand-offs to your team.",
  },
];

const FLOW = [
  "IntelID briefs the market every week.",
  "The ICP and the plan absorb the signal.",
  "SearchID ships the content that follows.",
  "IntentID targets paid against intent, not demographics.",
  "VisitorID identifies who shows up.",
  "InboxID closes the loop with same-day follow-up.",
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="block group border-t border-taupe/30 pt-6"
    >
      <p className="font-display font-medium text-forest leading-none text-[40px] md:text-[48px] tracking-tight mb-4">
        {tool.number}
      </p>
      <h3 className="font-display font-normal text-ink text-[22px] md:text-[26px] leading-tight mb-3 group-hover:opacity-70 transition-opacity duration-150">
        {tool.name}
      </h3>
      <p className="text-ink leading-relaxed text-[15px] md:text-[16px] max-w-[40ch] mb-4">
        {tool.oneLine}
      </p>
      <span className="inline-block text-[12px] tracking-cta uppercase text-taupe group-hover:text-ink transition-colors duration-150">
        Learn more →
      </span>
    </Link>
  );
}

export default function IdSuitePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Section 1: Hero */}
        <section
          aria-labelledby="id-suite-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            The P5 toolkit
          </p>
          <h1
            id="id-suite-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[18ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            The toolkit we built to run the work.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            Five tools. Three intelligence and identification layers. Two execution layers. All of them in service of one written plan and one accountable primary agency.
          </p>
        </section>

        {/* Section 2: Why we built it */}
        <section
          aria-labelledby="why-tools-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="max-w-[68ch]">
            <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              Why we built it
            </p>
            <h2
              id="why-tools-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] mb-8"
            >
              The primary-agency model only works if measurement is continuous.
            </h2>
            <div className="space-y-5 text-ink text-[17px] md:text-[19px] leading-relaxed">
              <p>
                A primary marketing agency cannot run the Playbook across paid, ads, PR, web, and content without seeing what every piece is doing in real time. The off-the-shelf tooling for that work was either too narrow, too expensive, or too detached from the actual marketing.
              </p>
              <p>
                So P5 built its own. The toolkit below is the engine under every P5 engagement. It is not a product line for sale separately. It is what makes the primary-agency model run.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Intelligence & identification */}
        <section
          aria-labelledby="intel-tools-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="mb-10 md:mb-14">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              Intelligence & identification
            </p>
            <h2
              id="intel-tools-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] max-w-[24ch]"
            >
              Three layers of signal feeding the Playbook.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {INTELLIGENCE_TOOLS.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        {/* Section 4: Execution */}
        <section
          aria-labelledby="exec-tools-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="mb-10 md:mb-14">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              Execution
            </p>
            <h2
              id="exec-tools-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] max-w-[24ch]"
            >
              Two layers of work that ship.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-[900px]">
            {EXECUTION_TOOLS.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        {/* Section 5: How it all feeds the plan */}
        <section
          aria-labelledby="flow-heading"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[760px]">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
                How the toolkit feeds the Playbook
              </p>
              <h2
                id="flow-heading"
                className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[40px] mb-10 max-w-[24ch]"
              >
                Six steps. One loop. The Playbook rewrites itself.
              </h2>
              <ol className="space-y-4 list-none p-0">
                {FLOW.map((line, i) => (
                  <li key={line} className="flex items-baseline gap-5 md:gap-6">
                    <span className="font-display font-medium text-forest text-[20px] md:text-[24px] leading-none flex-shrink-0 w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink leading-relaxed text-[17px] md:text-[19px]">
                      {line}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section
          aria-labelledby="id-suite-cta-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
              The first step
            </p>
            <h2
              id="id-suite-cta-heading"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[44px] lg:text-[52px] mb-8"
            >
              The toolkit ships with the engagement.
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              The ID Suite is not a product you buy separately. It is the engine under the Playbook. Build your Playbook and the toolkit is part of the work from day one.
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
