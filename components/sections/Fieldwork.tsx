import ReportSignup from "@/components/ReportSignup";
import BenchmarkReportCover from "@/components/artifacts/BenchmarkReportCover";

export default function Fieldwork() {
  return (
    <section
      id="fieldwork"
      aria-labelledby="fieldwork-heading"
      className="bg-bone-deep border-t border-taupe/20"
    >
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 max-w-[680px]">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
              04  ·  Forthcoming
            </p>
            <h2
              id="fieldwork-heading"
              className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] lg:text-[44px] mb-6"
            >
              The State of High-Ticket Service Marketing 2026
            </h2>
            <p className="font-display italic text-taupe text-[18px] md:text-[21px] leading-snug mb-7">
              Our annual benchmark report. Publishing this fall.
            </p>
            <p className="text-ink leading-relaxed text-[16px] md:text-[17px] mb-8">
              An annual read on what is actually working for owner-operators of high-value service businesses. Pulled from search behavior, on-site identification, and measurement across the businesses P5 works with: cosmetic surgery, wedding venues, luxury contractors, legal, specialty medical and dental, restaurant groups. Free to qualified owners.
            </p>
            <ReportSignup />
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <BenchmarkReportCover />
          </div>
        </div>
      </div>
    </section>
  );
}
