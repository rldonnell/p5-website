# P5 Site Build Prompt (May 2026)

## How to use this file

1. Open an LLM that can output code well. Claude with the code editor (Claude Code, or the desktop app with file access), or v0.dev (for direct React output), or Cursor pointed at a fresh Next.js project. ChatGPT or Gemini work too if your iteration loop is paste-and-run.
2. Attach the file `P5-Visual-Brief-2026-05.docx` (or export to PDF first if the LLM handles PDFs better).
3. Paste everything below the horizontal rule as your prompt.
4. The LLM will produce a spec first, then code on your go-ahead. Do not skip the spec step. The spec lets you correct positioning and layout before code is generated; code-first means iterating on code that may have foundational problems.

---

You are designing and building the homepage of the new P5 marketing site. The stack is **Next.js 14 (App Router), Tailwind CSS, shadcn/ui primitives, deployed to Vercel**. The operator runs other Next.js client automation apps on Vercel already, so this site fits the existing pattern.

Treat the attached **P5 Visual Direction Brief** as the source of truth for all visual decisions: typography, color, layout patterns, photography direction, and do-not-do rules. Do not invent visual direction that contradicts the brief. If you need to invent something the brief does not specify, name what you are inventing and why.

## About P5

P5 is the lead marketing and sales agency for owner-operated aesthetic medicine practices doing $1M+ in revenue. Aesthetic medicine includes plastic surgery, cosmetic surgery, cosmetic dermatology, facial plastic surgery, physician-owned medical spas, and aesthetic OB-GYN.

P5 leads with three disciplines: SEO, anonymous visitor identification, and measurement. Those three are the visibility layer that lets P5 hold the plan across the client's full vendor stack. P5 works alongside the practice's existing specialists (their PR firm, paid media team, web developer, etc.) rather than replacing them.

P5 is not a fractional CMO. P5 is not an all-in-one agency. P5 is the lead agency that holds the plan and owns the measurement layer.

## Audience for this homepage

The reader is a practice owner: a surgeon, dermatologist, or physician who owns and operates an aesthetic medicine practice. They have probably been quarterbacking their own marketing because nobody else in their organization can. They have five or six marketing vendors, none of whom talk to each other. They are quietly unhappy with the agency they currently have. They are smart, time-poor, and have seen every pitch.

The reader is not a patient. Nothing on this site should sound like patient marketing. Patient-facing language is a hard fail.

## Copy voice rules

- Confident and direct. No hedging verbs ("we believe," "we strive to," "we are passionate about").
- No em-dashes. Use hyphens with spaces or commas.
- No exclamation points.
- No emojis.
- Short sentences mixed with medium ones. Avoid long winding constructions.
- Pragmatic over inspirational. The reader has been pitched. They are tired of inspiration.
- One key idea per section. Resist the urge to list features.
- Use the framing "lead agency" rather than "Strategist of Record" in public-facing language.

## Stack and technical constraints

- **Next.js 14 App Router.** Server Components by default. Mark `'use client'` only when interactivity is genuinely required (form components, anything using hooks, etc.).
- **Tailwind CSS** for all styling. No CSS modules, no styled-components, no inline `<style>` tags. Custom values (colors, font families, spacing) defined as Tailwind theme extensions in `tailwind.config.ts`.
- **shadcn/ui** for primitives (Button, Input, Dialog, etc.) where appropriate. Install only the components actually used. Provide the `npx shadcn add <component>` commands at the top of the code output.
- **Typography via `next/font`.** Google Fonts loaded via `next/font/google` (GT Sectra is available there, Inter is too). For Tiempos and Söhne (paid Klim fonts), use `next/font/local` with the operator's licensed font files in `public/fonts/`. Default the v1 build to GT Sectra + Inter unless the operator specifies Klim.
- **Lucide React** for icons. Import only the specific icons used.
- **No browser storage.** No `localStorage`, `sessionStorage`, `IndexedDB`, or cookies in v1.
- **No third-party scripts.** No analytics, no chat widgets, no embeds in v1. The operator will add measurement after the site is live.
- **Mobile-first responsive.** Design and code for 375px, 768px, and 1280px breakpoints. Hero typography must scale down without breaking line breaks awkwardly.
- **Accessibility.** Semantic HTML, proper heading hierarchy (one `h1` per page), descriptive alt text on any images, sufficient color contrast (verify the chosen accent passes WCAG AA against the bone background).
- **SEO basics.** Proper `<title>`, `<meta name="description">`, Open Graph tags, canonical URL. No structured data in v1.

## Color palette as Tailwind theme

Extend `tailwind.config.ts` with these named colors (use forest green as the accent unless the operator picks a different option):

```ts
extend: {
  colors: {
    bone: '#F4F0E8',      // primary background
    ink: '#14110D',       // body text, near-black with warmth
    forest: '#3B4E36',    // primary accent (default)
    taupe: '#6B6358',     // secondary text, dividers
    // alternates if operator picks a different accent:
    burnish: '#A38356',   // alternate accent, warmer metallic
    oxblood: '#6B2A2A',   // alternate accent, editorial fashion
  }
}
```

Use `bg-bone`, `text-ink`, `text-forest`, `border-taupe`, etc. throughout.

## The homepage structure

The page has eight sections, in this order:

1. **Hero.** The five-second pitch. Establishes who P5 serves and what they do, in language that pre-qualifies the reader. Strong candidate hooks: "You're the surgeon. You're the owner. And somehow you're also the marketing quarterback." Or: "One accountable lead agency for the marketing plan, not another vendor." Pick the one that works best with your layout intent and explain why.

2. **The problem named.** The structural diagnosis: too many vendors, no plan, owner becomes the de facto strategist, practice growth ceiling is the owner's personal bandwidth.

3. **The model.** P5 is the lead agency. Holds the plan. Leads with SEO, anonymous visitor identification, and measurement. Works alongside existing specialists. Name what P5 is not (fractional CMO, all-in-one agency, just another vendor).

4. **What it looks like in practice.** Three to four specific things P5 actually does. Concrete, not feature-bulleted. Anchors to consider: the Plan of Record document, the measurement layer that produces cross-vendor visibility, the lead-agency role spanning marketing and sales, the monthly truth-telling cadence with the client.

5. **Proof / authority signal.** Placeholder for v1. Design this section to gracefully hold a benchmark report opt-in titled "The State of Aesthetic Medicine Marketing 2026," with a fallback design for one anonymized client story if the report is not yet ready.

6. **The Plan of Record offer.** A standalone paid diagnostic priced between $1,500 and $3,000 that produces the practice's marketing plan as a deliverable. This is the firmness test and the first paid step. Treat it as the primary CTA on the page.

7. **Quiet manifesto / about.** One paragraph. Why P5 exists. Confident, no founder-story sentimentality. End with a single sentence that could stand alone on a billboard.

8. **Footer as destination.** Newsletter/report opt-in (the benchmark report ideally), contact email (rdonnell@p5marketing.com), and one quiet manifesto sentence above the legal line.

## Constraints

- Healthcare-adjacent. Never reference specific procedures, conditions, body parts, or patient outcomes. The site speaks to the practice owner about their business, never about clinical work.
- No "trusted by" logo strips without explicit permission. Do not invent or assume client logos.
- No before/after imagery anywhere. That is the client's terrain, not the agency's.
- No dashboard screenshots in the hero. Visibility and measurement are a proof point on an interior section, never the headline.
- No animated decoration, no parallax, no gradient overlays. Restraint is the design language.

## Process

You will produce two artifacts in two separate passes. Do not start the second pass until the operator approves the first.

### Pass 1: The Spec

Before writing the spec, restate in 2 to 3 short paragraphs what you understand about the visual direction and the lead-agency positioning. If anything is unclear or contradicts something you would recommend, raise it now.

Then ask any clarifying questions. Likely useful ones:
- Which accent color to lock (forest green, burnished metallic, or oxblood)?
- Which typography pairing (GT Sectra + Inter free, or Tiempos + Söhne paid)?
- Final price for the Plan of Record diagnostic ($1,500, $2,000, $2,500, $3,000)?

Once those are answered, produce the section-by-section spec for all eight sections in the order above. For each section, include:

1. Section name and one-line purpose
2. Copy (headline, sub-headline if any, body, CTA label if any)
3. Layout intent (how the section is constructed)
4. Type usage (typefaces and sizes from the brief)
5. Color usage (which colors from the palette and how they apply)
6. Imagery (what kind, or "no imagery" with one-line rationale)
7. Notes for the builder (spacing, animation restraint, mobile behavior)

End the spec with three hero headline candidates, each on its own line, followed by a one-sentence rationale. Recommend one.

Then **stop**. Wait for the operator to react.

### Pass 2: The Code (only when the operator gives the go-ahead)

Produce a complete, production-ready Next.js App Router implementation. Output, in order:

1. **Setup commands.** Any `npx shadcn add <component>` commands needed for primitives used, plus any `npm install` lines for additional packages.
2. **`tailwind.config.ts`.** The extended theme with the color palette and font families.
3. **`app/layout.tsx`.** Root layout with `next/font` loading, bone background, ink text, and metadata defaults.
4. **`app/globals.css`.** Tailwind directives and any small global overrides (smooth scroll, font smoothing).
5. **`app/page.tsx`.** The homepage, composed of the eight section components.
6. **`components/sections/[SectionName].tsx`** for each section. Server Components unless interactivity demands otherwise.
7. **Any supporting components** (e.g., a custom `Button` variant if shadcn's default does not fit the brief).

Code requirements:
- TypeScript throughout. No `any`. Proper prop types on every component.
- Mobile-first Tailwind classes. Use `sm:`, `md:`, `lg:` modifiers, not desktop-first negatives.
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`. One `<h1>` per page.
- Accessible: alt text on images, `aria-label` on icon-only buttons, focus states visible.
- No `localStorage` or other browser storage.
- All copy lives in the JSX, not extracted to a CMS or constants file in v1.

After the code output, list any items the operator needs to do manually (font files to drop into `public/fonts/`, environment variables to set on Vercel, etc.).

Do not generate code, mockups, or any other artifact until the spec in Pass 1 is approved.
