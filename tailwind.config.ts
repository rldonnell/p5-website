import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Locked v1 palette
        bone: "#FAFAF6",        // primary background, soft white
        "bone-deep": "#F0F0EC", // one-step-deeper band for Section 5 and footer
        ink: "#14110D",         // body text, near-black with warmth
        forest: "#3B4E36",      // primary accent, used sparingly
        taupe: "#6B6358",       // secondary text, dividers, eyebrows
        oxblood: "#6B2A2A",     // reserved for error states only
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        cta: "0.06em",
        nav: "0.02em",
      },
      maxWidth: {
        "site": "1280px",
        "prose-tight": "640px",
      },
      transitionDuration: {
        "150": "150ms",
      },
    },
  },
  plugins: [],
};

export default config;
