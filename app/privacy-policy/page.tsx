import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy  |  P5 Marketing",
  description:
    "How P5 Marketing collects, uses, and protects your personal information. Read our full privacy policy.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20">
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            Legal
          </p>
          <h1 className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-6">
            Privacy Policy
          </h1>
          <p className="text-taupe text-[15px]">
            Effective Date: September 12, 2025
          </p>
        </section>

        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20">
          <article className="max-w-[68ch] mx-auto text-ink text-[17px] md:text-[18px] leading-[1.7] space-y-10">
            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                1. Introduction
              </h2>
              <p>
                P5 Marketing provides digital marketing and lead-generation services. We are committed to protecting your personal information and ensuring transparency about how we collect, use, and share your data.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                <strong>Contact Information:</strong> Name, email address, phone number
              </p>
              <p className="mb-3">
                <strong>Behavioral & Technical Data:</strong> Website visits, browsing activity, IP address, device information, cookie and pixel identifiers
              </p>
              <p className="mb-3">
                <strong>Marketing Interaction Data:</strong> Email opens, link clicks, form completions, and ad engagement metrics
              </p>
              <p>
                We do not collect medical records, diagnosis codes, or treatment information and, therefore, are not a HIPAA-covered entity or business associate.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                3. How We Use Information
              </h2>
              <p>
                We use collected information to identify and segment audiences, deliver personalized advertisements, emails, and marketing communications, improve our websites and campaigns, and comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                4. How We Share Information
              </h2>
              <p className="mb-3">
                <strong>Service Providers:</strong> CRM systems, email and SMS platforms, analytics services, and ad networks
              </p>
              <p className="mb-3">
                <strong>Advertising Partners:</strong> Retargeting platforms, audience creation networks, and measurement providers
              </p>
              <p className="mb-3">
                <strong>Legal & Regulatory Authorities:</strong> When required by law or to protect our rights
              </p>
              <p>
                We do not sell personal information for money, but some sharing for digital advertising may be considered a sale or share under specific state laws (such as CCPA/CPRA). You may opt out at any time.
              </p>
            </div>

            <div id="non-sharing-clause">
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                5. Non-Sharing Clause
              </h2>
              <p>
                No mobile information will be shared with third parties or affiliates for marketing and promotional purposes. Information sharing to subcontractors and support services such as customer services is permitted. All other use case categories exclude text messaging originator, opt-in data and consent. This information will not be shared with any third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                6. Cookies and Tracking
              </h2>
              <p>
                We use cookies, pixels, and similar tracking technologies to enhance user experience and measure campaign performance. You can manage these preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                7. Your Privacy Choices
              </h2>
              <p className="mb-3">
                <strong>Access, Correct, or Delete:</strong> Request to access, correct, or delete your personal information
              </p>
              <p className="mb-3">
                <strong>Opt Out of Sale/Sharing:</strong> Decline data sharing for advertising purposes
              </p>
              <p className="mb-3">
                <strong>Opt Out of Marketing:</strong> Unsubscribe from marketing emails or send &ldquo;STOP&rdquo; to opt out of SMS
              </p>
              <p>
                Contact us at{" "}
                <a href="mailto:privacy@p5marketing.com" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  privacy@p5marketing.com
                </a>{" "}
                to exercise these rights.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                8. Data Security & Retention
              </h2>
              <p>
                We maintain reasonable safeguards to protect your personal information. We retain data only as long as necessary to provide our services or comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                10. Updates to This Policy
              </h2>
              <p>
                We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">
                11. Contact Us
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
              <p><strong>Address:</strong> 3000 Meadowview Court, Colleyville, TX 76034, United States</p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
