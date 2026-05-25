import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions  |  P5 Marketing",
  description:
    "Terms and conditions governing the use of P5 Marketing services, website, and intent data marketing products including IntentID, VisitorID, and InboxID.",
  alternates: { canonical: "/terms-and-conditions/" },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20">
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            Legal
          </p>
          <h1 className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-6">
            Terms and Conditions
          </h1>
          <p className="text-taupe text-[15px]">Last updated: March 8, 2025</p>
        </section>

        <section className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20">
          <article className="max-w-[68ch] mx-auto text-ink text-[17px] md:text-[18px] leading-[1.7] space-y-10">
            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">2. Modifications to Terms</h2>
              <p>
                P5 Marketing reserves the right to modify these terms and conditions at any time. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">3. Use of the Website</h2>
              <p className="mb-4">
                You agree not to use the website in any way that may cause damage to the website or impair the availability or accessibility of the website. Prohibited behavior includes:
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="block w-4 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Engaging in fraudulent or illegal activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-4 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Interfering with the normal operation of the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-4 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Impersonating or attempting to impersonate any person or entity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-4 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Collecting or tracking personal data without authorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-4 h-px bg-forest mt-3 flex-shrink-0" aria-hidden="true" />
                  <span>Conducting activities that harm P5 Marketing or its operations</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of P5 Marketing or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">5. User Accounts</h2>
              <p>
                If you create an account on our website, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials. P5 Marketing reserves the right to suspend or terminate your account at our discretion.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">6. Limitation of Liability</h2>
              <p>
                P5 Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount you have paid to us.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">7. Disclaimer of Warranties</h2>
              <p>
                This website and all content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. P5 Marketing makes no warranties, expressed or implied, regarding the website or its content, including any warranty of merchantability or fitness for a particular purpose.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. P5 Marketing is not responsible for the content, accuracy, or practices of linked sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless P5 Marketing, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the website or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">10. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the State of Texas, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">11. Termination</h2>
              <p>
                P5 Marketing may terminate or suspend your access to the website at any time, with or without cause, and without notice or liability.
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">12. Terms of Service</h2>
              <p className="mb-4">
                P5 Marketing: This is simply a brief description of the kinds of messages users can expect to receive when they opt in. You can cancel the SMS service at any time by just texting STOP to 760-497-3986. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you wish to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.
              </p>
              <p>
                If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at{" "}
                <a href="mailto:rdonnell@p5marketing.com" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  rdonnell@p5marketing.com
                </a>
                . Carriers are not liable for delayed or undelivered messages. As always, message and data rates may apply for any messages sent to you from us and from us to you. You will receive messages infrequently, once or twice a week. If you have any questions about your text plan or data plan, it&apos;s best to contact your wireless provider. If you have any questions regarding privacy, please read our full privacy policy{" "}
                <Link href="/privacy-policy/" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  here
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display font-normal text-ink text-[24px] md:text-[28px] leading-tight mb-4">13. Contact Us</h2>
              <p className="mb-2"><strong>Company:</strong> P5 Marketing, Inc.</p>
              <p className="mb-2"><strong>President:</strong> Robert L Donnell</p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:robert@p5marketing.com" className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150">
                  robert@p5marketing.com
                </a>
              </p>
              <p className="mb-2"><strong>Phone:</strong> (760) 497-3986</p>
              <p><strong>Address:</strong> 3000 Meadowview Court, Colleyville, TX 76034</p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
