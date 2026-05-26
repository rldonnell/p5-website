import Link from "next/link";
import { ArrowDown } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
    >
      <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
        The primary marketing agency for owner-operated high-value service businesses
      </p>

      <h1
        id="hero-heading"
        className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] sm:text-[44px] md:text-[60px] lg:text-[72px] mb-8 md:mb-10"
      >
        You&apos;re the founder.
        <br />
        You&apos;re the owner.
        <br />
        Somehow you&apos;re also the
        <br />
        marketing quarterback.
      </h1>

      <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px] mb-12 md:mb-16">
        We build the ideal customer profile (ICP). We coordinate paid, ads, PR, and content against one plan. We bridge the work to sales and measure the whole program with visitor identification and attribution.
      </p>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
        <ButtonLink href="#plan-of-record" variant="forest">
          Begin a Plan of Record
        </ButtonLink>
        <Link
          href="#approach"
          className="inline-flex items-center gap-2 text-[12px] tracking-cta uppercase text-taupe hover:text-ink transition-colors duration-150"
        >
          <ArrowDown size={14} aria-hidden="true" />
          <span>How we work</span>
        </Link>
      </div>
    </section>
  );
}
