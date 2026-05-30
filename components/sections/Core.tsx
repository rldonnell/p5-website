export default function Core() {
  return (
    <section
      id="the-core"
      aria-labelledby="core-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        <div className="md:col-span-5">
          <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
            02  ·  The Core
          </p>
          <h2
            id="core-heading"
            className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[32px] md:text-[40px] lg:text-[48px]"
          >
            Four lines sit at the top of every Playbook.
          </h2>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-5">
          <p className="text-ink leading-relaxed text-[17px] md:text-[19px]">
            Before the strategy, before the channels, before any tactic. Every Playbook P5 builds opens with four lines: the ideal customer profile (ICP), the identification, the problem, the promise. The strategy, the tactics, and the toolkit all cascade from there.
          </p>

          <p className="pt-2 text-[11px] tracking-eyebrow uppercase text-taupe">
            Here&apos;s what ours looks like
          </p>

          <div className="border-l-2 border-forest pl-6 space-y-4">
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px]">
              For the owner-operator of a multi-vendor marketing stack.
            </p>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px]">
              You&apos;re accountable for the revenue. The PR firm, the paid media buyer, the web team, the social agency all report back to you.
            </p>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px]">
              Good people, no shared playbook. The owner ends up running the strategy by default.
            </p>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px]">
              P5 is the Playbook. We build it with you, then run it across all of it.
            </p>
          </div>

          <p className="pt-2 text-ink leading-relaxed text-[17px] md:text-[19px]">
            From there, the plan, the tactics, and the toolkit get specific.
          </p>
        </div>
      </div>
    </section>
  );
}
