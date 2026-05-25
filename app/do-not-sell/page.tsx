import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information  |  P5 Marketing",
  description:
    "Exercise your right to opt out of the sale or sharing of your personal information under applicable privacy laws.",
  alternates: { canonical: "/do-not-sell/" },
};

export default function DoNotSellPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20">
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            Legal
          </p>
          <h1 className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] max-w-[22ch]">
            Do Not Sell or Share My Personal Information
          </h1>
        </section>

        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20">
          <article className="max-w-[68ch] mx-auto text-ink text-[17px] md:text-[18px] leading-[1.7] space-y-10">
            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                What This Means
              </h2>
              <p>
                We do not sell personal information for money. However, some data sharing practices associated with digital advertising (such as sharing identifiers with ad platforms for retargeting or audience building) may be considered a sale or share under applicable state laws.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                How to Opt Out
              </h2>
              <p className="mb-3">
                <strong>Email:</strong> Send a request to{" "}
                <a href="mailto:privacy@p5marketing.com?subject=Do%20Not%20Sell%20or%20Share" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  privacy@p5marketing.com
                </a>{" "}
                with the subject &ldquo;Do Not Sell or Share&rdquo;
              </p>
              <p className="mb-3">
                <strong>Call:</strong> (760) 444-3078
              </p>
              <p>
                <strong>Mail:</strong> P5 Marketing Inc., 3000 Meadowview Court, Colleyville, TX 76034
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                What Happens After You Opt Out
              </h2>
              <p>
                Once we receive your opt-out request, we will stop sharing your personal information with third parties for advertising purposes. This does not affect data shared with service providers under contractual obligations to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                Verification
              </h2>
              <p>
                We may need to verify your identity before processing your request. We will contact you using the information you provide to confirm your request.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                Contact Information
              </h2>
              <p className="mb-2"><strong>Company:</strong> P5 Marketing, Inc.</p>
              <p className="mb-2"><strong>President:</strong> Robert L Donnell</p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@p5marketing.com" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  privacy@p5marketing.com
                </a>
              </p>
              <p className="mb-2"><strong>Phone:</strong> (760) 444-3078</p>
              <p><strong>Address:</strong> 3000 Meadowview Court, Colleyville, TX 76034</p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
