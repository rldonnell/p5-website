import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Terms  |  P5",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="max-w-prose-tight mx-auto px-6 md:px-12 py-24 md:py-32">
        <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
          Terms
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink leading-[1.1] mb-8">
          Terms of service
        </h1>
        <p className="text-ink leading-relaxed text-base md:text-lg">
          Placeholder. Replace before launch with the actual terms.
        </p>
      </main>
      <Footer />
    </>
  );
}
