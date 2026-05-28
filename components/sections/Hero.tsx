import Link from "next/link";
import { ArrowDown } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
    >
      <p className="text-[17px] tracking-eyebrow uppercase text-forest mb-10 md:mb-14">
        The primary marketing agency for owner-operated high-value service businesses
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-8">
          <h1
            id="hero-heading"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[28px] sm:text-[34px] md:text-[48px] lg:text-[56px] mb-8 md:mb-10"
          >
            You&apos;re the owner.
            <br />
            <span className="text-forest">Somehow you&apos;re also the marketing quarterback.</span>
            <br />
            Is it time to focus on what you do best again?
          </h1>

          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px] mb-12 md:mb-16">
            We coordinate the plan across your vendors so your team is focused toward a single outcome.
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
        </div>

        <div className="lg:col-span-4">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
