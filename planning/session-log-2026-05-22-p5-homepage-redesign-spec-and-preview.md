# Session Log: P5 Homepage Redesign — Pass 1 Spec and Interactive Preview

**Date:** 2026-05-22
**Duration:** ~90 minutes
**Repo:** `/Users/phil/code/p5marketing` (Next.js 14 + JS, soon to be Tailwind + TSX layered in for the new homepage)

## What We Worked On

Robert uploaded two new docs for a planned redesign of p5marketing.com: `P5-Site-Build-Prompt-2026-05.md` (an LLM-as-builder instruction set for the homepage) and `P5-Visual-Brief-2026-05.docx` (the visual direction brief that synthesizes boutique advisory authority with editorial fluency — Karla Otto / Joele Frank / The Gentlewoman / Cereal as reference set). We reviewed both, audited the existing repo, ran several iterations on positioning and copy, produced a written Pass 1 spec, and built an interactive HTML preview with a live background color toggle. The session ended with the spec and preview reflecting a **horizontal positioning bet** (high-value service businesses, not aesthetic-medicine-only) and a partner-driven background color decision still open.

## Key Decisions

- **Accent color:** forest green `#3B4E36` (the brief's default; locked).
- **Typography:** GT Sectra (display) + Inter (body) via `next/font/google`. Preview substitutes **Fraunces** for GT Sectra because GT Sectra is actually a Grilli Type commercial face, not on Google Fonts as the build prompt claimed. Production ships on Fraunces unless Robert licenses GT Sectra and provides font files for `next/font/local`.
- **Plan of Record price:** *do not* show on the homepage. Describe the deliverable concretely, let price come up in reply email or first call. Trades some firmness signal for less friction.
- **Scope:** homepage only for v1. Interior pages (`/about`, `/how-it-works`, `/markets/*`, `/the-id-suite/*`, `/contact`, `/blog`) untouched in Pass 2.
- **Header/Footer:** new components scoped to `/` only. Existing `Header.js` and `Footer.js` left intact for interior pages. Reader who clicks from new homepage into interior pages lands on the old dark visual until those pages are rebuilt — known and reversible split-brain risk.
- **Stack additions:** introduce `tailwind.config.ts`, `tsconfig.json`, and `postcss.config.js` to the repo. New homepage files are `.tsx` with Tailwind. Existing `.js` files stay as-is.
- **Spec file:** `/Users/phil/code/p5marketing/P5-Homepage-Spec-v1.md` (lives alongside the build prompt and DESIGN_NOTES.md).
- **Hero headline:** *"You're the founder. You're the owner. Somehow you're also the marketing quarterback."* Started life as *"You're the surgeon..."* — changed when we pivoted to horizontal positioning.
- **Positioning bet:** **HORIZONTAL.** Not aesthetic-medicine-only. The wedge is "high-value service businesses, $1M–$5M revenue, where one customer is worth $10K+, weeks-long buying journey, owner-operated." Across verticals: cosmetic surgery, wedding venues, luxury contractors, legal, specialty medical and dental, restaurant groups. The insight at the center: *the buyer journey is structurally identical across these categories.*
- **ICP must be spelled out** as "ideal customer profile (ICP)" on first use (hero sub-head). Subsequent references stay as "ICP."
- **Model framing** has six components: ICP definition; the plan that ties paid/Google Ads/PR/web/content together; proprietary research tooling for trending topics; SEO and GEO content shipping (sometimes P5, sometimes client team); marketing-to-sales bridge with feedback loop from front-line conversion; continuous measurement via anonymous website visitor identification and traffic attribution.
- **Background color:** open — partner objected to bone `#F4F0E8` as too warm/dated. Preview has a live toggle with 4 candidates. **Default loads on "Soft white" `#FAFAF6`** (barely warm, paper-like, modern but not clinical). Decision deferred to Robert + partner.

## Deliverables Created

1. **`/Users/phil/code/p5marketing/P5-Homepage-Spec-v1.md`** — full Pass 1 spec. Eight sections with copy, layout intent, type usage, color usage, imagery direction, and builder notes. Includes type scale (Tailwind theme values), color-usage rules (forest green capped to ~4 appearances on the page), three hero headline candidates with recommendation, and three items raised for operator decision before Pass 2.

2. **`/Users/phil/code/p5marketing/P5-Homepage-Preview-v1.html`** — single-file static HTML preview. All 8 sections rendered with the actual copy, palette, and type scale. Includes a sticky top-bar toggle that swaps background between Pure white, Soft white, Cool near-white, and Bone original. CSS variables drive everything. No build step. Opens in any browser.

## Important Details

### The 8-section homepage structure

1. **Hero** — eyebrow + headline + sub-head + primary CTA + quiet secondary anchor. Type-led, no imagery. ~78vh on desktop.
2. **The problem named** — vendors don't talk to each other; owner becomes default strategist; growth ceilings out at owner's bandwidth. 6/12 column prose, no bullets.
3. **The model** — five short paragraphs covering the full work model.
4. **What it looks like in practice** — four numbered items with large serif numbers in forest as the only decorative element.
5. **Proof / authority signal** — benchmark report opt-in ("The State of High-Ticket Service Marketing 2026") on a one-step-deeper bone band. Fallback design for one anonymized client story if report isn't ready at launch.
6. **The Plan of Record offer** — primary CTA, paid diagnostic, no price shown. Extra vertical padding (most weight below hero). 1px forest rule above the eyebrow.
7. **Quiet manifesto** — one paragraph + standalone billboard line ("One plan. One agency. One accountable team.").
8. **Footer as destination** — quiet manifesto line, contact email, location, legal row. No "Solutions" column, no "Pages" column, no logo strip, no social icons.

### Locked palette (Tailwind theme values)

```ts
colors: {
  bone: '#FAFAF6',       // soft white, the current default (toggle-able)
  'bone-deep': '#F0F0EC', // one-step-deeper band for Section 5 and footer
  ink: '#14110D',         // body text, near-black with warmth
  forest: '#3B4E36',      // accent, used sparingly
  taupe: '#6B6358',       // secondary text, dividers, eyebrows
  hairline: '#D7D0C3',    // 1px borders
}
```

Alternates available via the preview toggle: bone original `#F4F0E8` / deep `#EFEBE2`; pure white `#FFFFFF` / deep `#F4F4F4`; cool near-white `#F6F6F7` / deep `#EBEBEC`.

### Locked hero copy

- **Eyebrow:** `THE LEAD MARKETING AGENCY FOR OWNER-OPERATED HIGH-VALUE SERVICE BUSINESSES`
- **Headline:** *You're the founder. You're the owner. Somehow you're also the marketing quarterback.*
- **Sub-head:** *We build the ideal customer profile (ICP). We coordinate paid, ads, PR, and content against one plan. We bridge the work to sales and measure the whole program with visitor identification and attribution.*
- **Primary CTA:** `Begin a Plan of Record`
- **Secondary anchor:** `How we work` (jumps to Section 3)

### Section 3 model copy (locked)

> The first work for every business is the ICP. Who your best customers actually are, where they are, and what they need to see before they call. Most owner-operators have never had this done with rigor.
>
> From the ICP we write the plan. A working document, not a deck. It ties together paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships. One plan that every vendor in the stack works against.
>
> Proprietary research tooling, built in-house, finds what is actually trending in the business's market and worth writing for. The content that follows is built for SEO and GEO. Sometimes P5 ships it. Sometimes your team does. The plan is the through line either way.
>
> Measurement is anonymous website visitor identification and traffic attribution, run continuously. The read tells us which channels are doing the work and which aren't, and when to change direction. Not a separate product. The layer underneath every decision.
>
> P5 also runs the bridge from marketing to sales. Visitor identification and attribution close the loop with the business's front-line conversion process. Which prospects called, which booked, which became revenue. That feedback rewrites the plan.
>
> What this isn't. P5 is not a fractional CMO. P5 is not an all-in-one agency. P5 is not another vendor for you to manage.

### Section 4 in-practice items (locked, four items)

1. **The ICP, defined.** Demographics, motivations, objections, the language they use when they search. The foundation everything else is built against.
2. **Research-driven SEO and GEO content.** Proprietary tooling finds what's trending. Content built to rank in Google, surface in ChatGPT and Perplexity, and read as a credible voice. P5 hands off or ships, whichever serves the plan.
3. **Vendor coordination across the stack.** Paid media, Google Ads, public relations, and web work against the same plan. P5 holds the document, runs the cadence. One accountable agency at the head of the table.
4. **Measurement and the feedback loop from sales.** Anonymous website visitor identification and traffic attribution, continuous. Plan changes because the sales data changed.

### Section 6 Plan of Record contents (locked)

> What it includes. The ICP, defined for the business. A research read using P5's proprietary tooling. A 90-day priority order that ties paid media, Google Ads, public relations, web, and SEO and GEO content together. The measurement setup using anonymous visitor identification and traffic attribution, including the feedback loop from the business's front-line conversion process. The written plan, formatted for the owner and leadership team.

### Section 7 manifesto (locked)

> P5 was built because too many owner-operators were carrying their own marketing plan and calling that "having an agency." That isn't an agency. That is a vendor list with a project manager who happens to also own the business. P5 is the lead agency for owner-operators who want one accountable plan instead of six disconnected vendors.
>
> **One plan. One agency. One accountable team.**

### Footer manifesto line

> *The lead marketing agency for owner-operators of high-value service businesses.*

### Critical stack audit finding

Existing repo is **Next.js 14 + plain JavaScript + hand-rolled CSS**. No TypeScript, no Tailwind, no shadcn, no `next/font`. Routes use `.js`, styling lives in `globals.css` + `p5-header.css` + `p5-footer.css`, many components carry `'use client'` directives. The May 4 ICP rewrite (per `DESIGN_NOTES.md`) was deliberately text-only — preserved dark navy `#0a0e14` aesthetic at every interior page. Pass 2 introduces Tailwind + TS as additive (does not migrate existing files), new homepage Header/Footer scoped to `/`, leaving interior pages on the existing dark visual until they are rebuilt in a future engagement.

### Strategic framing — how we got to horizontal

Initial spec was written aesthetic-medicine-only per the build prompt. Robert pushed back that the actual book is broader: a vibrant wedding venue client, a spine surgeon, consultants — the 10/10/$10K framing applies. Walked through three frames:

- **A. Niche all the way in to aesthetic medicine.** Trade existing horizontal niche for a deeper hold on one category. Costs: orphans the wedding venue and spine surgeon. Benefits: clearest positioning, can write *State of Aesthetic Medicine Marketing 2026*.
- **B. Niche out (horizontal).** Strengthen the existing `/markets/high-value-service-businesses/` positioning. Costs: harder benchmark report, broader positioning. Benefits: matches the actual book, full TAM stays open.
- **C. Niche-lead, breadth-tail (Joele Frank / Karla Otto pattern).** Aesthetic-lead on the homepage, quiet acknowledgment of adjacent categories on interior pages.

Robert chose **B** after reading `/markets/high-value-service-businesses/` together. The page is sharper than I initially gave it credit for — the insight *"the buyer journey for a $20K wedding booking, a $35K cosmetic procedure, a $25K legal retainer, and a $60K roof replacement is structurally identical"* is a real wedge, not generic copy. The horizontal niche is **a niche** (just a horizontal one), not the absence of one.

### Background color partner objection

Robert's partner didn't like the bone `#F4F0E8` background — wanted "more white, more modern." The brief explicitly warned against pure white (reads clinical), but there's a wide band between bone and pure white that reads modern without being sterile. Added a live toggle to the preview with 4 candidates. Decision deferred to Robert + partner.

### Robert's voice rules (apply to all P5 copy)

- Confident and direct.
- No hedging verbs ("we believe," "we strive to," "we are passionate about").
- No em-dashes. Use hyphens with spaces or commas.
- No exclamation points.
- No emojis (including the ✓ and ❌ characters used on the existing site).
- Short sentences mixed with medium. Avoid long winding constructions.
- One key idea per section. Resist the urge to list features.

## Open Items / Next Steps

1. **Background color decision.** Robert + partner to flip through the toggle in `P5-Homepage-Preview-v1.html` and pick one. Lock the choice into the spec and remove the toggle for production.
2. **Spec approval.** Pass 1 spec is complete and awaits Robert's "approve / approve with changes / wrong direction" call.
3. **Pass 2: the Next.js code.** Once spec is approved and background is locked, build the homepage in the existing repo:
   - Add `tailwind.config.ts`, `tsconfig.json`, `postcss.config.js`, `@tailwind` directives in `globals.css`
   - Run `npx shadcn add button input` (and any other primitives used)
   - Create `app/page.tsx` (and rename existing to `app/page.legacy.js` or rely on git history)
   - Create new `components/site/HeaderHome.tsx` and `components/site/FooterHome.tsx` scoped to `/`
   - One `components/sections/SectionName.tsx` per section
   - GT Sectra (or Fraunces fallback) + Inter via `next/font/google`
   - All Server Components unless a form requires `'use client'`
   - Deploy to a Vercel preview branch before merging to `main`
4. **Interior page strategy** (separate engagement). Decide fate of `/about`, `/how-it-works`, `/markets/*`, `/the-id-suite/*`, `/contact`, `/blog` — sunset, redirect, restyle. The existing `/markets/wedding-venues/` and `/markets/plastic-surgeons/` pages should stay live for warm-referral landings even though they don't link from the new homepage.
5. **Benchmark report production.** *The State of High-Ticket Service Marketing 2026* is named in Section 5. Falls back to one anonymized client story if not ready at launch. Worth scoping that production effort separately.
6. **Font licensing decision.** Production currently ships on Fraunces. Decide whether GT Sectra is worth licensing — production swap is a font import change, nothing else.

## Context for Future Sessions

### Files in the p5marketing repo to read first when resuming

- `/Users/phil/code/p5marketing/P5-Homepage-Spec-v1.md` — the spec (start here)
- `/Users/phil/code/p5marketing/P5-Homepage-Preview-v1.html` — interactive preview, open in browser
- `/Users/phil/code/p5marketing/DESIGN_NOTES.md` — May 4 ICP rewrite context, useful background on what's changed and why
- `/Users/phil/code/p5marketing/app/page.js` — existing homepage (will be replaced)
- `/Users/phil/code/p5marketing/app/Header.js`, `app/Footer.js` — existing components (stay intact for interior pages)
- `/Users/phil/code/p5marketing/app/globals.css` — existing CSS (will get `@tailwind` directives prepended in Pass 2)

### Uploaded source docs (not in the repo, came via attachment)

- `P5-Site-Build-Prompt-2026-05.md` — the operator's LLM instruction set for the homepage build
- `P5-Visual-Brief-2026-05.docx` — the visual direction brief

**Important caveat:** the build prompt claims GT Sectra is on Google Fonts. It isn't (Grilli Type commercial face). Production will ship on Fraunces unless GT Sectra is licensed.

### Live site reference (current state, unchanged in this session)

- `https://p5marketing.com` — dark navy `#0a0e14` theme, broader IA, three-vertical "Who We Work With" structure
- `https://p5marketing.com/markets/high-value-service-businesses/` — the page that crystallized the horizontal niche

### What changed about my mental model of the project mid-session

I started this work treating the build prompt as a literal spec for an aesthetic-medicine-only homepage. Robert correctly pulled me off that path twice: first by noting that the model description was too abstract (he wanted ICP, research, plan, content, coordination, measurement, and sales feedback named concretely), then by surfacing the existing `/high-value-service-businesses/` page which already articulated a sharp horizontal positioning. The lesson worth carrying forward: the build prompt was aspirational; the existing site reflects positioning that's been earned and refined over time. When the two conflict, the existing positioning is the prior — change it only with intent.
