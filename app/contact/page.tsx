import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact  |  P5 Marketing",
  description:
    "Thirty minutes with a senior strategist. Honest questions, an honest fit assessment, and no pitch. If P5 is a fit, we tell you what we would do.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          aria-labelledby="contact-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            Contact
          </p>
          <h1
            id="contact-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[18ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            Let&apos;s work out a time.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            Three quick fields. A senior strategist follows up within one business day to find thirty minutes that works.
          </p>
        </section>

        {/* The form */}
        <section
          aria-labelledby="contact-form-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-5">
                What the call covers
              </p>
              <h2
                id="contact-form-heading"
                className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mb-8"
              >
                Five questions. One honest read.
              </h2>
              <ul className="space-y-4 text-ink text-[16px] md:text-[17px] leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Where the business is today: revenue, customer value, growth target for the next twelve months.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>The current vendor stack: who is doing what, who is paying attention, who is talking to whom.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>What is broken or quiet: where the plan is leaking, what is not being measured.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>What good looks like: specific outcome you want six months from now.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="block w-5 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Whether P5 is the right call. If not, who is.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Detail strip — fallback contact */}
        <section
          aria-labelledby="contact-detail"
          className="bg-bone-deep border-t border-taupe/20"
        >
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-3">
                  Or email direct
                </p>
                <a
                  href="mailto:rdonnell@p5marketing.com"
                  className="font-display text-ink text-[18px] md:text-[20px] hover:opacity-70 transition-opacity duration-150 break-words"
                >
                  rdonnell@p5marketing.com
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-3">
                  Office
                </p>
                <p className="font-display text-ink text-[18px] md:text-[20px]">
                  Bedford, Texas
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-3">
                  Hours
                </p>
                <p className="font-display text-ink text-[18px] md:text-[20px] max-w-[24ch]">
                  Senior strategist replies within one business day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
