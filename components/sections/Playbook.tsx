import ButtonLink from "@/components/ButtonLink";
import PlaybookCover from "@/components/artifacts/PlaybookCover";

const CTA_HREF =
  "mailto:rdonnell@p5marketing.com?subject=Build%20my%20Playbook";

export default function Playbook() {
  return (
    <section
      id="playbook"
      aria-labelledby="playbook-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7 max-w-[720px]">
          <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
            05  ·  The first step
          </p>
          <h2
            id="playbook-heading"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[40px] md:text-[52px] lg:text-[60px] mb-10"
          >
            The Playbook
          </h2>
          <div className="space-y-5 text-ink leading-relaxed text-[17px] md:text-[19px] mb-12">
            <p>
              We build the Playbook with you. Then we run it for you.
            </p>
            <p>
              A standalone paid diagnostic that produces your written Playbook. Independent of any ongoing engagement. The Playbook is the deliverable, and you own it whether or not you continue with P5.
            </p>
            <p>
              What it includes. The ICP, defined for the business. A research read using P5&apos;s proprietary tooling. A 90-day priority order that ties paid media, Google Ads, public relations, web, and SEO and GEO content together. The measurement setup using anonymous visitor identification and traffic attribution, including the feedback loop from the business&apos;s front-line conversion process. The written Playbook, formatted for the owner and leadership team.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <ButtonLink href={CTA_HREF} variant="forest">
                Build your Playbook
              </ButtonLink>
            </div>
            <p className="text-[13px] text-taupe">
              60 minutes. No commitment beyond the conversation.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-8 lg:pt-8 flex justify-center lg:justify-end">
          <PlaybookCover />
        </div>
      </div>
    </section>
  );
}
