export default function Problem() {
  return (
    <section
      id="approach"
      aria-labelledby="problem-heading"
      className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        <div className="md:col-span-5">
          <div className="w-20 h-px bg-taupe/40 mb-6" aria-hidden="true" />
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
            01  ·  The problem
          </p>
          <h2
            id="problem-heading"
            className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[32px] md:text-[40px] lg:text-[48px]"
          >
            The problem isn&apos;t your marketing. It&apos;s that nobody is calling the plays.
          </h2>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-5">
          <p className="text-ink leading-relaxed text-[17px] md:text-[19px]">
            Most owner-operators end up with five or six vendors. A PR firm. A paid media buyer. A web developer. A social agency. Maybe an SEO consultant. None of them talk to each other.
          </p>
          <p className="text-ink leading-relaxed text-[17px] md:text-[19px]">
            When no one is calling the plays, the owner becomes the strategist by default. Growth then ceilings out at the owner&apos;s personal bandwidth. That is the structural problem, and it doesn&apos;t have a tactical fix.
          </p>
        </div>
      </div>
    </section>
  );
}
