export default function Manifesto() {
  return (
    <section
      id="why"
      aria-labelledby="manifesto-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
    >
      <div className="max-w-[680px] mx-auto">
        <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
          06  ·  Why P5
        </p>
        <p
          id="manifesto-heading"
          className="text-ink leading-relaxed text-[18px] md:text-[20px] mb-16 md:mb-20"
        >
          P5 was built because too many owner-operators were carrying their own marketing plan and calling that &ldquo;having an agency.&rdquo; That isn&apos;t an agency. That is a vendor list with a project manager who happens to also own the business. P5 is the lead agency for owner-operators who want one accountable plan instead of six disconnected vendors.
        </p>
        <p className="font-display font-normal text-ink leading-[1.05] tracking-[-0.02em] text-[36px] md:text-[52px] lg:text-[64px]">
          One plan. One agency. One accountable team.
        </p>
      </div>
    </section>
  );
}
