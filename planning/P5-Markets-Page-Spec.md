# P5 /markets/ Umbrella Page Spec, v1

**Pass:** 1 of 2 (spec + locked copy)
**Page URL:** `/markets/` (preserved)
**Stack target (new project):** Next.js 14 App Router, Tailwind, soft-white + forest palette, Fraunces + Inter
**Live-site mirror:** content-only refresh of `app/markets/page.js`, dark `#0a0e14` visual preserved until full site migration

**Operator decisions locked:**
- Shape C: horizontal umbrella page + existing vertical pages stay alive for SEO with light rewrites scheduled separately
- Lead-agency story woven into the fit profile, not a separate block
- 9 verticals on the umbrella (existing 7 + Spine & Orthopedic Surgery + Consultants & Professional Services); restaurants explicitly dropped
- URL stays `/markets/`
- Visual: new soft-white + forest palette for the new-project version
- Path 3 shipping: build in new project AND content-only refresh on live site
- Primary CTA: Begin a Plan of Record

---

## Restated understanding

The umbrella page exists to answer one question for the reader: "Am I the kind of business P5 works with?" The answer is economics-first, vertical-second. Owner-operators of $1M–$5M service businesses where one customer is worth $10K and up and the buying journey takes weeks. The lead-agency model is woven into the fit profile so the reader who qualifies leaves the page knowing both that they fit and what working with P5 looks like.

The wedge insight at the center of the page is that the buyer journey is structurally identical across every vertical we serve. A $20K wedding booking, a $35K cosmetic procedure, a $25K legal retainer, and a $60K roof replacement all involve discovery, due diligence, multiple visits, competitor comparisons, and weeks of consideration. The same engagement model serves all of them.

Existing `/markets/plastic-surgeons/` and `/markets/wedding-venues/` pages remain live for SEO and warm-referral landings. The page at `/markets/high-value-service-businesses/` is essentially the prior umbrella; the new `/markets/` content supersedes it, and that URL either redirects to `/markets/` or stays as a thin alias (decision deferred to the build step).

---

## Page structure

Six sections in order.

### Section 1: Hero

**Purpose.** Pre-qualify the reader in five seconds. Establish the wedge.

**Copy.**

- Eyebrow (taupe caps): `WHO WE WORK WITH`
- Headline: `Your industry doesn't matter. Your economics do.`
- Sub-headline: `P5 is the lead marketing and sales agency for owner-operators where one new customer pays for the engagement many times over.`

**Layout intent.** Type-led, no imagery. Headline left-aligned, max ~18ch. Sub-head Inter lede at 22–24px, max ~720px. No CTA in the hero (the qualifying happens in the next section, the CTA happens at the bottom).

**Type usage.** Headline Fraunces 48–64px desktop, tight 1.05 line height. Sub-head Inter 22–24px ink, 1.4 line height. Eyebrow Inter caps 14px taupe.

**Color usage.** Bone background, ink headline and sub-head, taupe on eyebrow. No forest in the hero.

**Imagery.** None.

**Builder notes.** Hero sits below the Nav with `pt-8 md:pt-10 lg:pt-14` (the same scale as the homepage hero). Bottom padding `pb-12 md:pb-14 lg:pb-20`.

### Section 2: The fit profile, lead-agency paragraph woven in

**Purpose.** Name the four shared criteria that qualify a P5 fit, then anchor what working with P5 actually looks like.

**Copy.**

- Eyebrow: `01 / WHAT EVERY P5 CLIENT SHARES`
- Headline: `Four things, in this order.`

Four numbered fit criteria, each a Fraunces micro-head + 2-3 sentences of Inter body:

**01. Owner-operator.**
The person making the call has their name on all the paperwork. They own the outcome. They are not a marketing director answering to someone else, and they are not part of a corporate group with its own agency. The decision-maker is the same person who lives or dies by the result.

**02. $1M–$5M revenue, $10K+ per customer.**
Established enough to invest in marketing seriously. Margins healthy enough to absorb a $10K+ monthly marketing spend. One booked customer pays for the engagement many times over. Below this range the math does not support what we do; above it, you usually have a full in-house team that doesn't fit our model.

**03. Done managing your last agency.**
Most P5 clients have worked with agencies before and were quietly unhappy. Junior account managers between the owner and the work. Status calls that went nowhere. Reports on impressions instead of bookings. P5 clients want a senior team that runs the work, not another vendor they have to manage.

**04. Trusts experts to do the job.**
The single biggest predictor of whether a P5 engagement succeeds. Our work needs runway to compound. SEO takes time. Content takes time. Audience signal takes time to tune. Clients who let us run the play see real results. Clients who want to approve every asset and intervene weekly tend not to.

Below the four criteria, **the lead-agency paragraph** as connective tissue (boxed or rule-separated, Inter body in ink, ~18–19px):

> As your lead agency, P5 defines the ideal customer profile (ICP), writes the plan that ties together paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships, and measures the whole program continuously with anonymous website visitor identification and traffic attribution. The plan is the through line across every vendor in your stack.

**Layout intent.** Four criteria in a 2×2 grid (or single column on mobile) using the same large-number-as-decoration treatment from the homepage Practice section (forest numbers, Fraunces, 64–112px). Lead-agency paragraph sits below the grid, separated by a 1px taupe hairline above it and a small forest rule below the eyebrow on the paragraph (read it like a quoted insight, not just another paragraph).

**Type usage.** Fraunces section head 28–36px. Item micro-heads Fraunces 22–28px. Body Inter 17–18px. Numbers Fraunces 64–112px forest. Lead-agency paragraph Inter 18–19px ink, slightly larger than the criterion bodies to give it weight.

**Color usage.** Bone, ink, taupe on eyebrows, forest on the four large numbers and the rule above the lead-agency paragraph.

**Imagery.** None.

**Builder notes.** The lead-agency paragraph is the section's pivot. Don't bury it visually. It should read as the answer to "and what does that lead agency actually do?" — implicit question raised by the four criteria above it.

### Section 3: The verticals

**Purpose.** Make the horizontal niche concrete with the categories P5 serves. Name dollar ranges so the reader can self-place.

**Copy.**

- Eyebrow: `02 / NINE VERTICALS, ONE BUYER JOURNEY`
- Headline: `Different industries. Same buyer journey.`
- Body (setup paragraph, Inter 17–18px ink):

  The buyer journey for a $20K wedding booking, a $35K cosmetic procedure, a $25K legal retainer, and a $60K roof replacement is structurally identical. Discovery. Due diligence. Multiple visits to your site. Comparisons against competitors. Objections that need to be answered. Weeks of consideration before they call. Same engagement model across all of them. Different segments, different content, different conversion paths — all tailored to your buyer.

Nine vertical lines (each: name in Fraunces, dollar range in Inter):

1. **Cosmetic & Plastic Surgery Practices** — $15K–$60K+ per patient
2. **Spine & Orthopedic Surgery** — $15K–$80K+ per case
3. **Wedding Venues** — $10K–$40K per booking
4. **Roofing & Exterior Contractors** — $15K–$80K+ per project
5. **HVAC & Mechanical Contractors** — $10K–$50K+ per install
6. **Luxury Home Renovation & Remodeling** — $25K–$150K+ per project
7. **Legal Practices** — $10K–$70K+ per matter
8. **Specialty Medical & Dental** — $10K–$35K+ per case
9. **Consultants & Professional Services** — $10K–$50K per engagement

**Layout intent.** Setup paragraph in a single column (8/12 max width). Vertical list as a 3-column grid on desktop (3 rows × 3 cols), 2-col on tablet, 1-col on mobile. Each vertical entry is two lines: name (Fraunces, 17–18px, ink) on top, dollar range (Inter, 14–15px, taupe) below. Hairline above the section, hairline below.

**Type usage.** Section head Fraunces 28–36px. Setup paragraph Inter 17–18px ink. Vertical names Fraunces 17–18px ink. Dollar ranges Inter 14–15px taupe.

**Color usage.** Bone, ink, taupe. No forest in this section — the typographic restraint is the point.

**Imagery.** None.

**Builder notes.** The two existing vertical pages (`/markets/plastic-surgeons/`, `/markets/wedding-venues/`) link from their respective entries here. The Spine entry, Consultants entry, and any vertical without a dedicated landing page don't link out (no broken link, no orphan page). Plastic Surgery and Wedding Venues entries underline on hover; the rest don't.

### Section 4: If you're not on this list

**Purpose.** Keep the door open for adjacent owner-operators whose vertical isn't pictured. Reinforce the wedge.

**Copy.**

- Eyebrow: `03 / NOT ON THE LIST?`
- Headline: `The vertical matters less than the economics.`
- Body (one paragraph, Inter 17–18px ink):

  If your business fits the four criteria above and the buyer journey looks the same — long, considered, comparative, with one customer paying for the engagement many times over — we should still talk. The categories above are where we have a track record. The fit profile is what qualifies you.

**Layout intent.** Single column, 6/12 width, left-aligned, centered horizontally within the page. Short — the section is a beat, not a destination.

**Type usage.** Section head Fraunces 24–32px. Body Inter 17–18px ink. Eyebrow Inter caps 14px taupe.

**Color usage.** Bone, ink, taupe.

**Imagery.** None.

**Builder notes.** This section is intentionally smaller than the ones around it. Vertical padding tighter (`py-10 md:py-14`). It reads as a brief acknowledgment, not a feature.

### Section 5: Honest disqualifiers

**Purpose.** Build trust by saying who P5 is *not* for. Cuts down misfit conversations.

**Copy.**

- Eyebrow: `04 / WHO P5 ISN'T FOR`
- Headline: `Honestly, you're probably not a fit if…`
- Body (Inter, 5 short lines, each starting with a 1px taupe hairline rule or a quiet bullet):

  - You have a senior marketing executive who needs to own the strategy top to bottom.
  - Your monthly marketing budget is below $10K.
  - You want weekly status calls and to approve every asset.
  - Your average customer is worth less than a few thousand dollars.
  - Your operations can't handle more inbound right now.

Closing line (Inter 15px taupe, separate paragraph below the list):

> We'll tell you in the fit conversation if any of that applies. Better to find out in thirty minutes than four months in.

**Layout intent.** Section head left-aligned. List as a stacked set of short lines, each preceded by a thin forest rule (the only forest in this section) or as a typographic block with hairline separators. 6/12 column width.

**Type usage.** Section head Fraunces 28–36px. List items Inter 17–18px ink. Closing line Inter 15px taupe.

**Color usage.** Bone, ink, taupe. Small forest rule beside each disqualifier line (matches the rule treatment on the homepage Plan of Record section).

**Imagery.** None.

**Builder notes.** No emojis, no ❌ marks — just typographic restraint. The hairlines or rules carry the structure. Avoid making the list look like a feature comparison.

### Section 6: CTA — Plan of Record

**Purpose.** Single conversion moment. Direct the qualified reader to the paid first step.

**Copy.**

- Eyebrow: `05 / THE FIRST STEP`
- Headline: `Begin a Plan of Record.`
- Body (one short paragraph, Inter 17–18px ink):

  If you fit the profile and want a written marketing plan that ties your full vendor stack together, the Plan of Record is the first paid step. Independent of any ongoing engagement. The plan is the deliverable, and you own it whether or not you continue with P5.

- CTA: `Begin a Plan of Record` (forest button, same component as homepage)

**Layout intent.** Mirror the homepage Plan of Record section visually so the experience is consistent: 1px forest rule above the eyebrow, generous vertical padding (`py-16 md:py-20 lg:py-28`), 8/12 column width left-aligned.

**Type usage.** Section head Fraunces 40–52px. Body Inter 17–19px ink. CTA Inter caps 14px on forest button.

**Color usage.** Bone, ink, taupe eyebrow, forest on the rule and the CTA.

**Imagery.** None.

**Builder notes.** The button links to the same `mailto:rdonnell@p5marketing.com?subject=Plan%20of%20Record%20diagnostic` as the homepage version. When the diagnostic intake form is built, both CTAs swap to `/diagnostic` simultaneously.

---

## Nav update (new project)

The new project's `Nav.tsx` adds a fifth link: `Who we work with → /markets/`. Order becomes: Approach · What we do · **Who we work with** · Plan of Record · Contact. Mobile sticky CTA stays as Plan of Record.

---

## Live site mirror (Path 3)

`/Users/phil/code/p5marketing/app/markets/page.js` is updated with the new copy and structure, preserving the dark `#0a0e14` visual, the existing CSS variables (`--p5-bg-deep`, `--p5-text-dim`, etc.), and the BreadcrumbList JSON-LD. The Section 2 lead-agency paragraph carries the new positioning. The 9-vertical grid replaces the 3-card layout. Disqualifiers and the Plan of Record CTA section are added.

The live-site version reads as: same positioning, older visual. The new-project version reads as: same positioning, new visual. They share the spec.

---

## Open items

- **Dollar ranges to confirm with Robert if any feel off** when he reads the draft. Spine and Consultants are best-guess; the rest carry over from the existing high-value-service-businesses page.
- **What happens to `/markets/high-value-service-businesses/`** once the new `/markets/` content ships. Options: 301 redirect to `/markets/`, keep as a thin alias, or leave as-is for SEO continuity. Decision can wait until after the new page is live.
- **Verticals page rewrites** (`/markets/plastic-surgeons/`, `/markets/wedding-venues/`) — scheduled as separate engagements per Shape C. Both need a top-of-page lead-agency band aligned with the new framing.
