# P5 Homepage — Next.js 14 + Tailwind

The v1 homepage for P5, the primary marketing agency for owner-operators of high-value service businesses. Built to the locked v1 visual brief: soft white background (#FAFAF6), forest accent (#6B8068), Fraunces + Inter typography via Google Fonts.

This is a fully self-contained Next.js 14 project. No `create-next-app` step needed. Drop the whole folder onto the target machine, install dependencies, run.

## Quick start on your coding machine

### 1. Verify Node.js is installed

```bash
node --version
```

Should print something like `v20.x.x` or higher. If you get `command not found`, install Node from https://nodejs.org (download the LTS .pkg installer for macOS) or via Homebrew:

```bash
brew install node
```

### 2. Enter the project directory

```bash
cd "P5 Website 20260530"
```

### 3. Install dependencies and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. You should see the P5 homepage.

## File map

```
P5 Website 20260530/
├── package.json              dependencies and scripts
├── next.config.js            Next.js config
├── tsconfig.json             TypeScript config (with @/ alias)
├── tailwind.config.ts        theme tokens (bone, bone-deep, ink, forest, taupe, oxblood)
├── postcss.config.js         tailwind + autoprefixer
├── .gitignore                standard Next.js gitignore
│
├── planning/                 design and strategy docs (not built into the site)
│   ├── P5-Homepage-Spec-v1.md
│   ├── P5-Homepage-Preview-v1.html
│   ├── P5-Site-Build-Prompt-2026-05.md
│   ├── P5-Visual-Brief-2026-05.docx
│   └── session-log-2026-05-22-p5-homepage-redesign-spec-and-preview.md
│
├── app/
│   ├── layout.tsx            root layout, font loading, metadata
│   ├── page.tsx              homepage composition
│   ├── globals.css           tailwind directives + minimal globals
│   ├── privacy/page.tsx      placeholder
│   ├── terms/page.tsx        placeholder
│   └── api/report-signup/route.ts   stub endpoint for the email opt-in
│
└── components/
    ├── Nav.tsx               top navigation
    ├── ReportSignup.tsx      'use client' email opt-in (reused twice)
    ├── ButtonLink.tsx        forest CTA button
    └── sections/
        ├── Hero.tsx
        ├── Problem.tsx
        ├── Model.tsx
        ├── Practice.tsx
        ├── Fieldwork.tsx
        ├── PlanOfRecord.tsx
        ├── Manifesto.tsx
        └── Footer.tsx
```

## Deploy to Vercel

From inside the project directory:

```bash
npx vercel
```

Or push to a Git remote and import the repo in the Vercel dashboard. The project has no required env vars in v1, no third-party scripts, no database.

To put it under version control before deploying:

```bash
git init
git add .
git commit -m "Initial homepage v1"
```

## Positioning summary

The site speaks to **owner-operators of high-value service businesses**, $1M–$5M in revenue, where one customer is worth $10K and up and the buying journey takes weeks. The category spans cosmetic surgery, wedding venues, luxury contractors, legal practices, specialty medical and dental, and restaurant groups. The structural insight at the center: the buyer journey is identical across these verticals, which is why one model serves all of them.

P5's role is the **primary marketing agency**. P5 defines the ICP, writes the plan that coordinates paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships, runs proprietary research tooling, bridges marketing to the business's front-line sales process, and measures the whole program continuously through anonymous website visitor identification and traffic attribution. P5 is not a fractional CMO, not an all-in-one agency, not another vendor to manage.

## Manual to-dos before launch

1. **Email backend for the report opt-in.** `/api/report-signup` currently returns 200 without persisting anything. Wire it to your preferred backend: Resend for confirmation emails, Vercel KV for a waitlist, or a Klaviyo/ConvertKit list. The endpoint contract is `{ email: string }` in, `{ ok: true }` out.
2. **Plan of Record CTA destination.** Currently a `mailto:rdonnell@p5marketing.com` link. When the diagnostic intake form is built, swap the `href` in `components/sections/PlanOfRecord.tsx` to `/diagnostic`.
3. **Wordmark.** The current `P5` mark is set in Fraunces. Replace with a proper SVG wordmark once that exploration round happens.
4. **Privacy and Terms.** Both pages are placeholders. Replace with real copy before launch.
5. **Open Graph image.** Add a `public/og.png` (1200x630) for share previews; reference it in `app/layout.tsx` metadata.
6. **Accessibility verification.** Run axe DevTools or Lighthouse against the deployed site. Forest should not appear on body text (reserved for CTAs, the contact email link, and the large numeric markers in the Practice section); verify.
7. **Font swap (optional).** Fraunces is the production display face. If you license GT Sectra from Grilli Type, replace the `Fraunces` import in `app/layout.tsx` with `next/font/local` pointing at the GT Sectra font files in `public/fonts/`. No other changes needed.

## Section padding scale

Inter-section padding is intentionally tighter than the original visual brief suggested. The brief asked for "whitespace beyond what feels comfortable"; the live experience read as the page being over rather than luxurious. Locked values:

- Standard section (Problem, Model, Practice, Fieldwork, Manifesto): `py-12 md:py-16 lg:py-20`
- Plan of Record (carries the most weight): `py-16 md:py-20 lg:py-28`
- Hero top / bottom: `pt-8 md:pt-10 lg:pt-14` / `pb-12 md:pb-14 lg:pb-20`
- Footer top: `pt-14 md:pt-20`

Future pages inherit this scale. Don't push a section above `lg:py-20` without a reason — readers should be able to sense another section below from the bottom of the current one.

## Publishing a blog post

Posts live as MDX files in `content/blog/`. Each file is a markdown body with a YAML frontmatter block at the top:

```mdx
---
title: "The post title"
date: "2026-05-25"
description: "One sentence shown on the index and in search meta."
---

Post body in markdown. Paragraphs separated by blank lines. **Bold**, _italic_, [links](https://example.com), bulleted lists, headings (`##`, `###`), block quotes, all standard markdown.
```

### Option A — write the post in Word, import

The cleanest path for long-form posts. Draft in Word using normal headings and styles, save as `.docx`, then run:

```bash
npm run import-docx -- "/path/to/Your Post.docx"
```

(Note the double-dash — that's how npm passes the argument to the script.)

The script reads the docx, converts it to clean markdown, extracts inline images to `public/blog-images/`, and writes `content/blog/<slugified-filename>.mdx` with starter frontmatter. Then:

1. Open the new `.mdx` file
2. Edit the `description:` line (currently a placeholder)
3. Review the body — headings, lists, links should survive intact; if Word fouled anything up, fix it
4. Commit and push:
   ```bash
   git add content/blog/ public/blog-images/
   git commit -m "Publish: <post title>"
   git push
   ```
5. Vercel deploys automatically. New post is live in 1-2 minutes.

### Option B — write directly in markdown

Create a new file at `content/blog/<slug>.mdx`, write the frontmatter, write the body in markdown, commit. Same final steps.

### Drafts

Put work-in-progress files in `content/blog/_drafts/`. The blog data layer ignores that subfolder, so drafts don't show up on the live site. Move the file up one level into `content/blog/` when ready to publish.

### Styling

Post body styling comes from `mdx-components.tsx` at the project root. Headings, paragraphs, links, lists, and blockquotes all inherit the soft-white + forest visual automatically — no per-post styling needed. To change how a particular tag renders across every post, edit the matching component in that file.

### Where to write the post URL

The post's URL is `/blog/<slug>/`. The slug comes from the filename without `.mdx`, so `the-importance-of-a-strong-content-strategy.mdx` becomes `https://p5marketing.com/blog/the-importance-of-a-strong-content-strategy/`. Pick clean filenames at import time and you don't need to think about URLs.

## Voice and constraints baked in

No em-dashes anywhere in copy. No exclamation points. No emojis. No before/after imagery, no dashboard screenshots, no procedure references. No "trusted by" logo strip. No animation, no parallax, no gradients. One `<h1>` per page (in Hero).

## Future pages

This homepage establishes the design tokens and component patterns. Subsequent pages (Plan of Record landing, Approach, What We Do, Tools, Who We Work With, About) extend this foundation rather than introducing new visual decisions.
