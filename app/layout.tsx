import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "P5  |  The lead marketing agency for high-value service businesses",
  description:
    "P5 is the lead marketing and sales agency for owner-operators of high-value service businesses, $1M to $5M in revenue, where one customer is worth $10K and up and the buying journey takes weeks. We build the ICP, write the plan that coordinates paid, ads, PR, and content, and measure the whole program with visitor identification and attribution.",
  openGraph: {
    title: "P5  |  One accountable lead agency, not another vendor",
    description:
      "For owner-operators of high-value service businesses where one customer is worth $10K+ and the buying journey takes weeks.",
    type: "website",
    siteName: "P5",
  },
  metadataBase: new URL("https://p5marketing.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-bone text-ink font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
