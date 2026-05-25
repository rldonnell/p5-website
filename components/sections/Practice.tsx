const ITEMS: { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "The ICP, defined.",
    body: "Who your best customers really are, defined with the rigor most owner-operators have never given it. Demographics, motivations, objections, and the language they use when they search. The foundation everything else is built against.",
  },
  {
    number: "02",
    title: "Research-driven SEO and GEO content.",
    body: "Proprietary tooling, built in-house, finds what is actually trending in the business's market and worth writing for. The content that follows is built to rank in Google, surface in ChatGPT and Perplexity, and read as a credible voice. P5 hands it off or ships it, whichever serves the plan.",
  },
  {
    number: "03",
    title: "Vendor coordination across the stack.",
    body: "Paid media, Google Ads, public relations, and web all work against the same plan. P5 holds the document, runs the cadence, and keeps the priorities aligned. You have one accountable agency at the head of the table, not five disconnected ones.",
  },
  {
    number: "04",
    title: "Measurement and the feedback loop from sales.",
    body: "Anonymous website visitor identification and traffic attribution, run continuously. P5 closes the loop with the business's front-line conversion process so the plan can see which prospects called, which booked, and which became revenue. That read feeds back in, and the plan changes because the sales data changed.",
  },
];

export default function Practice() {
  return (
    <section
      id="in-practice"
      aria-labelledby="practice-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
    >
      <div className="mb-16 md:mb-20">
        <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
        <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
          03  ·  In practice
        </p>
        <h2
          id="practice-heading"
          className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[32px] md:text-[40px] lg:text-[48px] max-w-[20ch]"
        >
          What P5 actually does for an owner-operator.
        </h2>
      </div>

      <div className="border-t border-taupe/25">
        {ITEMS.map(({ number, title, body }) => (
          <div
            key={number}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-b border-taupe/25"
          >
            <div className="md:col-span-3 lg:col-span-2">
              <p className="font-display font-medium text-forest leading-none text-[64px] md:text-[88px] lg:text-[112px] tracking-tight">
                {number}
              </p>
            </div>
            <div className="md:col-span-9 lg:col-span-9 lg:col-start-4">
              <h3 className="font-display font-normal text-ink text-[22px] md:text-[26px] lg:text-[28px] leading-tight mb-4">
                {title}
              </h3>
              <p className="text-ink leading-relaxed text-[16px] md:text-[17px] max-w-[56ch]">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
