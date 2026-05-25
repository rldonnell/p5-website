# P5 Homepage Spec, v1

**Pass:** 1 of 2 (spec only, no code)
**Stack target:** Next.js 14 App Router, Tailwind, shadcn/ui, next/font, deployed to Vercel
**Source brief:** `P5-Visual-Brief-2026-05.docx` (visual direction), `P5-Site-Build-Prompt-2026-05.md` (homepage structure and constraints)
**Operator decisions locked (May 22, 2026):**

- Accent color: forest green `#3B4E36`
- Typography: GT Sectra (display) + Inter (body), loaded via `next/font/google`
- Plan of Record price: not shown on homepage; named as a paid diagnostic, price introduced in reply email or first call
- Scope: homepage only for v1
- Header / Footer: new components scoped to `/` only, existing `Header.js` / `Footer.js` left in place for interior pages
- Repo: introduce Tailwind and `tsconfig.json`, new homepage files are `.tsx`, existing `.js` files untouched

---

## Restated understanding

P5 is the lead marketing and sales agency for owner-operators of high-value service businesses, $1M–$5M in revenue, where one customer is worth $10K and up and the buying journey takes weeks. The category includes cosmetic and plastic surgery, wedding venues, luxury contractors, legal practices, specialty medical and dental, restaurant groups, and other owner-operated service businesses with the same buyer-journey shape. The work has several pieces. P5 defines the business's ideal customer profile (ICP). P5 writes the plan that ties together paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships. P5 runs proprietary research tooling to identify what is trending and worth writing for. P5 ships (or hands off) the content that follows. P5 runs the bridge from marketing to the business's sales process and feeds sales outcomes back into the plan. P5 measures the whole program continuously through anonymous website visitor identification and traffic attribution. P5 is not a fractional CMO, not an all-in-one agency, not another line item on the vendor list.

The visual direction synthesizes boutique advisory authority (Joele Frank, Sard Verbinnen, Karla Otto) with editorial fluency (The Gentlewoman, Cereal, T Magazine). The combination is the moat. The look is warm bone background, ink text, a single muted forest accent, and editorial serif paired with a confident grotesque. Restraint is the design language. No gradients, no parallax, no dashboards in the hero, no icons doing decorative work, no "trusted by" logo strip. The site can ship with zero photography and still feel finished if the typography is right.

The audience is the owner-operator, never the customer or patient. The voice is confident, direct, and pragmatic. No hedging, no exclamation points, no em-dashes, no emojis. For the healthcare-adjacent verticals in the book (cosmetic surgery, specialty medical and dental), no patient-facing language and no references to specific procedures or outcomes. One key idea per section. The reader has been pitched. They are tired of inspiration.

## Items raised for the operator before code

1. **PoR section without a price.** The brief frames the Plan of Record as the firmness test and the first paid step. Removing the dollar figure softens that signal. The spec resolves this by describing the deliverable concretely (vendor audit, measurement baseline, 90-day priority order, written plan you own regardless of whether you continue) so the section still reads as a defined paid step, not a free consult. Tell me if it should read harder than that.
2. **Header / Footer split-brain risk.** New components ship only on `/`. Interior pages keep the existing dark Header / Footer until they are rebuilt. A reader who clicks from the new homepage into `/about/` or `/the-id-suite/` will land on the old visual identity. That is reversible and known, but worth saying out loud. Sequencing the interior page rebuilds is a follow-on conversation.
3. **The existing `/the-id-suite/` and `/markets/` trees.** The new homepage does not link to them. Decisions on what happens to those trees (sunset, redirect, archive, restyle) are out of scope for this pass but are the obvious next conversation.

---

## Type scale (Tailwind theme)

| Use | Family | Size | Line height |
| --- | --- | --- | --- |
| Hero headline | GT Sectra | 64–72px desktop, 40–44px mobile | 1.05 |
| Section head | GT Sectra | 36–44px desktop, 28–32px mobile | 1.1 |
| Lede / large body | Inter | 22–24px | 1.4 |
| Body | Inter | 17–18px | 1.6 |
| Eyebrow / caps label | Inter caps tracking 0.08em | 14px | 1.2 |
| Captions / legal | Inter | 14–15px | 1.5 |

## Section padding scale

Locked after a first review of the live build. The original brief called for "whitespace beyond what feels comfortable." Testing showed that read as the page being over, not as luxury, so the scale below is roughly 50% of the original.

| Section | Tailwind class |
| --- | --- |
| Standard section (Problem, Model, Practice, Fieldwork, Manifesto) | `py-12 md:py-16 lg:py-20` |
| Plan of Record (carries the most weight) | `py-16 md:py-20 lg:py-28` |
| Hero (top, then bottom) | `pt-8 md:pt-10 lg:pt-14` / `pb-12 md:pb-14 lg:pb-20` |
| Footer (top only) | `pt-14 md:pt-20` |

Future pages inherit this scale. Don't push a section above `lg:py-20` without a reason — readers should be able to tell another section is below them from the bottom of the current one.

## Color usage rules

- Background: bone `#F4F0E8` everywhere by default.
- Body ink: `#14110D`. Never pure black.
- Accent: forest `#3B4E36`. Used only on the primary CTA, the report opt-in submit, the very large section numbers in Section 4, and a single 1px rule where structure demands it. If forest appears more than four times on the page, cut one.
- Secondary neutral: taupe `#6B6358`. Eyebrows, captions, legal, secondary text, hairline rules.
- Section bands: when a band needs to read differently (Section 5 opt-in, Section 8 footer), use a one-step-deeper bone (`#EFEBE2`) rather than introducing a new color.

---

## Section 1: Hero

**Purpose.** The five-second pitch. Names the reader and the offer in language that pre-qualifies.

**Copy.**

- Eyebrow (optional, taupe caps): `THE LEAD MARKETING AGENCY FOR OWNER-OPERATED HIGH-VALUE SERVICE BUSINESSES`
- Headline (recommended): `You're the founder. You're the owner. Somehow you're also the marketing quarterback.` See three candidates at the end of this spec.
- Sub-headline (Inter lede, three short sentences, 22–24px): `We build the ideal customer profile (ICP). We coordinate paid, ads, PR, and content against one plan. We bridge the work to sales and measure the whole program with visitor identification and attribution.`
- Primary CTA label: `Begin a Plan of Record`
- Secondary anchor link (Inter 14px caps, taupe): `How we work` (jumps to Section 3)

**Layout intent.** Type-led, no imagery above the fold. Full viewport height on desktop (`min-h-[80vh]`), with the headline anchored to the top-left of an 8/12 column block. Eyebrow on a single line, then headline, then sub-headline, then the CTA pair, with generous space between each. Right four columns intentionally empty to let the page breathe like a journal cover.

**Type usage.** GT Sectra at the largest scale the headline can carry without breaking awkwardly at 375px. Inter for everything else. Hero headline gets the only display-weight type on the page above the fold.

**Color usage.** Bone background, ink headline and sub-head, taupe on the eyebrow, forest only on the primary CTA. No forest anywhere else in the hero.

**Imagery.** None. Brief explicitly rules out dashboards, before/afters, medical iconography, and stock photography. Type carries the hero.

**Builder notes.**

- Headline must hold its rhythm across breakpoints. Set explicit `text-balance` and lock line breaks with `<br>` only at the largest breakpoint if a particular phrasing demands it.
- Primary CTA: forest background, bone text, no rounded corners larger than `rounded-sm` (2px), no shadow, no hover gradient. Hover state is a 6% darken on the forest only.
- Secondary anchor link is a quiet underline-on-hover taupe caps label, not a button.
- Mobile: 40–44px headline, hero collapses to natural height (no forced 80vh), CTA pair stacks.

---

## Section 2: The problem named

**Purpose.** The structural diagnosis. Names the situation the reader is already in so they know they are being read.

**Copy.**

- Eyebrow: `01 / THE PROBLEM`
- Headline: `The problem isn't your marketing. It's that nobody is holding the plan.`
- Body (two short paragraphs):

  Most owner-operators end up with five or six vendors. A PR firm. A paid media buyer. A web developer. A social agency. Maybe an SEO consultant. None of them talk to each other.

  When no one is holding the plan, the business owner becomes the strategist by default. Growth then ceilings out at the owner's personal bandwidth. That is the structural problem, and it doesn't have a tactical fix.

**Layout intent.** Single column, 6 of 12 grid columns, left-aligned. Section head sits above the body with one line of breathing room. No sidebars, no callouts, no bulleted list.

**Type usage.** Sectra section head at 36–44px. Inter body at 17–18px with 1.6 line height. Eyebrow in Inter caps taupe.

**Color usage.** Bone, ink, taupe eyebrow. No forest in this section.

**Imagery.** None.

**Builder notes.**

- Resist any urge to break this section into bullets. The diagnosis lands as prose. The bulleted version reads like another vendor's deck.
- Vertical padding generous on top and bottom (`py-24 md:py-32`) so the section breathes against the hero and Section 3.

---

## Section 3: The model

**Purpose.** Describe the actual work. ICP, proprietary research, strategic direction, content. Then name what P5 is not.

**Copy.**

- Eyebrow: `02 / THE MODEL`
- Headline: `We build the ICP. We write the plan. We measure the whole program.`
- Body (five short paragraphs):

  The first work for every business is the ICP. Who your best customers actually are, where they are, and what they need to see before they call. Most owner-operators have never had this done with rigor.

  From the ICP we write the plan. A working document, not a deck. It ties together paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships. One plan that every vendor in the stack works against.

  Proprietary research tooling, built in-house, finds what is actually trending in the business's market and worth writing for. The content that follows is built for SEO and GEO. Sometimes P5 ships it. Sometimes the business's team does. The plan is the through line either way.

  Measurement is anonymous website visitor identification and traffic attribution, run continuously. The read tells us which channels are doing the work and which aren't, and when to change direction. Not a separate product. The layer underneath every decision.

  P5 also runs the bridge from marketing to sales. Visitor identification and attribution close the loop with the business's front-line conversion process. Which prospects called, which booked, which became revenue. That feedback rewrites the plan.

  What this isn't. P5 is not a fractional CMO. P5 is not an all-in-one agency. P5 is not another vendor for you to manage.

**Layout intent.** 8 of 12 columns for the body, left-aligned. No right-rail labels. The structure is the paragraphs.

**Type usage.** Sectra section head 36–44px. Inter body 17–18px with 1.6 line height.

**Color usage.** Bone, ink, taupe eyebrow. No forest in this section.

**Imagery.** None.

**Builder notes.**

- The five paragraphs are short on purpose. Do not consolidate them into two longer paragraphs. The rhythm is the section.
- The "what this isn't" paragraph is the section's pivot. Don't soften it into a list, don't bold the negations.
- The phrase "proprietary research tooling" is the moat claim. Don't dress it up with a tool name, screenshot, or sub-brand in v1. The tooling is named only by what it does.

---

## Section 4: What it looks like in practice

**Purpose.** Make the work concrete. Four specific things P5 actually does.

**Copy.**

- Eyebrow: `03 / IN PRACTICE`
- Headline: `What P5 actually does for an owner-operator`

Four numbered items. Each is a Sectra micro-head plus two to three sentences of Inter body.

**01. The ICP, defined.**
Who your best customers really are, defined with the rigor most owner-operators have never given it. Demographics, motivations, objections, and the language they use when they search. The foundation everything else is built against.

**02. Research-driven SEO and GEO content.**
Proprietary tooling, built in-house, finds what is actually trending in the business's market and worth writing for. The content that follows is built to rank in Google, surface in ChatGPT and Perplexity, and read as a credible voice. P5 hands it off or ships it, whichever serves the plan.

**03. Vendor coordination across the stack.**
Paid media, Google Ads, public relations, and web all work against the same plan. P5 holds the document, runs the cadence, and keeps the priorities aligned. The business has one accountable agency, not five disconnected ones.

**04. Measurement and the feedback loop from sales.**
Anonymous website visitor identification and traffic attribution, run continuously. P5 closes the loop with the business's front-line conversion process so the plan can see which prospects called, which booked, and which became revenue. That read feeds back in, and the plan changes because the sales data changed.

**Layout intent.** Stacked vertically, each item in a full-width band with the section's number in very large display weight forest on the left, the micro-head and body on the right (8 of 12 columns for the text). Items separated by a 1px taupe hairline.

**Type usage.** Section head Sectra 36–44px. Item numbers Sectra 96–120px desktop, 64px mobile, forest. Micro-heads Sectra 24–28px ink. Item body Inter 17–18px ink.

**Color usage.** Bone, ink, forest on the large item numbers, taupe on the hairlines.

**Imagery.** None. The large numbers are the only decoration.

**Builder notes.**

- This is the section where the reader's eye expects a three-up icon grid. Refuse the icon grid. The large numbers carry the structure.
- Four items, ordered ICP → research → content → cadence. That order is the work in sequence, and the order matters more than the visual symmetry of three.

---

## Section 5: Proof and authority signal

**Purpose.** Holds the benchmark report opt-in as the primary v1 proof point. Falls back to one anonymized client story if the report isn't ready when the site ships.

**Copy (report-led, default).**

- Eyebrow: `04 / FORTHCOMING`
- Headline: `The State of High-Ticket Service Marketing 2026`
- Body (one paragraph):

  An annual read on what is actually working for owner-operators of high-value service businesses. Pulled from search behavior, on-site identification, and measurement across the businesses P5 works with — cosmetic surgery, wedding venues, luxury contractors, legal, specialty medical and dental, restaurant groups. Free to qualified owners. Released this fall.

- Form: single email input, label `Business email`, submit button labeled `Send me the report`.

**Copy (fallback, if report isn't ready at launch).**

- Eyebrow: `04 / IN THE FIELD`
- Headline: `What a P5 engagement looks like in year one`
- Body (two short paragraphs, anonymized client story to be written separately; no names, no procedure references, no before/after language, no dollar figures unless the operator approves them on a case-by-case basis).

**Layout intent.** Full-width band on the one-step-deeper bone (`#EFEBE2`). 6 of 12 columns for the report copy. Form input is one line, full width of the column, with the submit button to the right of the input.

**Type usage.** Sectra section head 32–36px. Inter body 18px. Form input Inter 16px. Submit button Inter 14px caps.

**Color usage.** Deeper bone band, ink, taupe eyebrow, forest on the submit button. Input border is 1px taupe.

**Imagery.** None.

**Builder notes.**

- No rounded corners, no shadows, no focus glow. The input is a flat 1px taupe border that switches to forest on focus.
- Wire the submit to a placeholder route in v1 (`/api/report-optin` or a no-op success state). The brief excludes third-party scripts in v1, so no Mailchimp / HubSpot embed.
- If the fallback story version is used, omit the form and instead end the section with the Plan of Record CTA repeated as a quiet text link. Don't introduce a second primary CTA.

---

## Section 6: The Plan of Record offer

**Purpose.** The primary CTA. The first paid step. The firmness test.

**Copy.**

- Eyebrow: `05 / THE FIRST STEP`
- Headline: `The Plan of Record`
- Body (two paragraphs):

  A standalone paid diagnostic that produces the business's written marketing plan. Independent of any ongoing engagement. The plan is the deliverable, and you own it whether or not you continue with P5.

  What it includes. The ICP, defined for the business. A research read using P5's proprietary tooling. A 90-day priority order that ties paid media, Google Ads, public relations, web, and SEO and GEO content together. The measurement setup using anonymous visitor identification and traffic attribution, including the feedback loop from the business's front-line conversion process. The written plan, formatted for the owner and leadership team.

- CTA: `Begin a Plan of Record`

**Layout intent.** This section carries the most weight below the hero. 8 of 12 columns. Top and bottom padding noticeably larger than the surrounding sections (`py-32 md:py-40`). A 1px forest rule above the eyebrow.

**Type usage.** Section head Sectra 44–52px tight. Body Inter 18–19px. CTA matches hero CTA.

**Color usage.** Bone, ink, taupe eyebrow, forest on the rule and the CTA. This is the only section that gets two forest moments.

**Imagery.** None.

**Builder notes.**

- No price on the page per operator decision. Do not write "starting at," "investment," or any equivalent euphemism. Let the price come up in reply.
- The CTA on this section is the same label as the hero CTA. Same label, same forest button. They are the same path; visual repetition is intentional.

---

## Section 7: Quiet manifesto

**Purpose.** One paragraph. Why P5 exists. Closes with a single billboard line.

**Copy.**

- Body (one paragraph):

  P5 was built because too many owner-operators were carrying their own marketing plan and calling that "having an agency." That isn't an agency. That is a vendor list with a project manager who happens to also own the business. P5 is the lead agency for owner-operators who want one accountable plan instead of six disconnected vendors.

- Standalone line below the paragraph, Sectra 32–40px:

  `One plan. One agency. One accountable team.`

**Layout intent.** 6 of 12 columns, left-aligned, centered horizontally within the page. The standalone line sits below the paragraph with two lines of breathing room.

**Type usage.** Paragraph in Inter 18–19px. Standalone line in Sectra 32–40px, tight line height (1.1).

**Color usage.** Bone, ink only. No forest. No taupe except on any quiet eyebrow if used.

**Imagery.** None.

**Builder notes.**

- This section is the breath before the footer. Pad generously above and below.
- The standalone line is the line a reader might quote in an email. Treat it like it could be printed on the cover of a journal.

---

## Section 8: Footer as destination

**Purpose.** Not a sitemap. A quiet closing band carrying the report opt-in (if used), the contact email, the manifesto line, and the legal row.

**Copy.**

- Quiet manifesto line (Sectra 22–24px): `The lead marketing agency for owner-operators of high-value service businesses.`
- Report opt-in (if Section 5 was the report version, repeat here. Otherwise omit and let Section 5 carry the form): same email input, same submit label.
- Contact line: `rdonnell@p5marketing.com` (mailto link)
- Location line (optional, taupe): `Bedford, Texas`
- Legal row: `© 2026 P5 Marketing`  ·  `Privacy`  ·  `Terms`  ·  `Do Not Sell`

**Layout intent.** Two-row footer on desktop. Top row carries the manifesto line and the contact email, spaced apart. Second row carries the legal links and copyright, smaller and in taupe. Generous top padding (`pt-24`).

**Type usage.** Manifesto line Sectra 22–24px ink. Contact and location Inter 16px ink / taupe. Legal Inter 14px taupe.

**Color usage.** Either bone or one-step-deeper bone band. Ink for the manifesto and email. Taupe for everything else. No forest.

**Imagery.** None. No logo strip. No social row in v1. (If a single LinkedIn link is essential, place it inline as a text link in taupe, not as an icon.)

**Builder notes.**

- Strip everything from the existing `Footer.js`: the "Solutions" column, the "Pages" column, the address block, the X handle. The new footer is intentionally quiet.
- Mobile: single column, stack manifesto / email / location / legal vertically with one line of space between each.

---

## Hero headline candidates

Three options. Each on its own line below, with a one-sentence rationale.

**A. You're the founder. You're the owner. Somehow you're also the marketing quarterback.**
Names the reader explicitly and lands the structural diagnosis in three short sentences. Works horizontally — surgeon, venue owner, contractor, restaurateur, attorney — without naming a category. The original aesthetic-only version dropped "surgeon" for "founder" to keep the rhythm and broaden the audience.

**B. Your industry doesn't matter. Your economics do.**
The line from the existing `/markets/high-value-service-businesses/` page. Sharp, distinctive, names the horizontal insight at the center of P5's positioning. Asks the reader to interpret slightly but rewards them for it.

**C. One lead agency for the marketing plan. Not another vendor.**
Leads with the category claim and reads as positioning, not provocation. Strong for a reader who has been pitched repeatedly and wants to know what kind of company this is. Horizontal by default.

**Recommendation: A.** It does the most work in the fewest words and lands a structural diagnosis the reader will recognize themselves in. B is the strongest single line on the existing site and is a candidate for a section head later on the page, or for paid media. C is a strong sub-head or interior-page lead.

---

**End of Pass 1.** No code, no implementation, no component scaffolding until the operator approves this spec or directs changes.
