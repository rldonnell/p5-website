import ButtonLink from "@/components/ButtonLink";
import PlanOfRecordCover from "@/components/artifacts/PlanOfRecordCover";

const CTA_HREF =
  "mailto:rdonnell@p5marketing.com?subject=Plan%20of%20Record%20diagnostic";

export default function PlanOfRecord() {
  return (
    <section
      id="plan-of-record"
      aria-labelledby="por-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7 max-w-[720px]">
          <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
            05  ·  The first step
          </p>
          <h2
            id="por-heading"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[40px] md:text-[52px] lg:text-[60px] mb-10"
          >
            The Plan of Record
          </h2>
          <div className="space-y-5 text-ink leading-relaxed text-[17px] md:text-[19px] mb-12">
            <p>
              A standalone paid diagnostic that produces the business&apos;s written marketing plan. Independent of any ongoing engagement. The plan is the deliverable, and you own it whether or not you continue with P5.
            </p>
            <p>
              What it includes. The ICP, defined for the business. A research read using P5&apos;s proprietary tooling. A 90-day priority order that ties paid media, Google Ads, public relations, web, and SEO and GEO content together. The measurement setup using anonymous visitor identification and traffic attribution, including the feedback loop from the business&apos;s front-line conversion process. The written plan, formatted for the owner and leadership team.
            </p>
          </div>
          <ButtonLink href={CTA_HREF} variant="forest">
            Begin a Plan of Record
          </ButtonLink>
        </div>

        <div className="lg:col-span-5 lg:pl-8 lg:pt-8 flex justify-center lg:justify-end">
          <PlanOfRecordCover />
        </div>
      </div>
    </section>
  );
}
