# Project notes for Claude

## P5 Website — Next.js 14 (App Router), TypeScript, Tailwind

Repo: https://github.com/rlDonnell/p5-website
Deploys: Vercel, auto-deploys on push to `main`.

## User preferences

- **No em dashes.** Write naturally, like a human. Use commas, parentheses, or two sentences instead.
- **Plain ASCII straight quotes only in shell commands.** Never use curly smart quotes (`" "` or `' '`) when giving terminal commands. The chat UI sometimes renders quotes as curly, and when pasted into bash/zsh, the shell hangs at a `quote>` continuation prompt because it doesn't recognize them as delimiters. Prefer single quotes around commit messages and other strings so there's no ambiguity. If a value really needs double quotes, write the command in a code block and explicitly use straight `"` characters.
- **Give commands as copy-paste blocks**, not interleaved with prose, when the intent is "paste this into Terminal."

## Working with git in this repo

- **Never run mutating git commands from the sandbox.** This includes `git add`, `git commit`, `git push`, `git checkout`, `git merge`, anything that writes. The sandbox runs as a different user from the host, and any `.git/index.lock` files the sandbox creates cannot be cleaned up by the host terminal. The result is `fatal: Unable to create '.git/index.lock': File exists` next time the user runs git from their normal Terminal. Read-only inspection (`git status`, `git log`, `git diff`) is fine because it doesn't take the lock.
- **Git work belongs in copy-paste blocks for Robert to run himself**, not in sandbox bash calls. The pattern is: I make the file changes, he runs the git commands.
- **If a stale `index.lock` is reported**, the recovery is one line: `rm -f .git/index.lock`. Tell Robert to run that, then `git status`, then proceed based on what status reports.

## Codebase conventions

- Components live in `/components` (root-level) and `/components/sections` (page section components).
- All components are TypeScript `.tsx`.
- Path alias `@/*` maps to project root, so use `import X from "@/components/X"`.
- Styling is **Tailwind only** with the custom palette in `tailwind.config.ts`: `bone`, `bone-deep`, `ink`, `forest`, `taupe`, `oxblood`. No styled-jsx, no CSS modules.
- Typography uses CSS variables `--font-fraunces` (display serif) and `--font-inter` (sans). Reference via the `font-display` and `font-sans` Tailwind utilities.
- Custom letter-spacing tokens: `tracking-eyebrow`, `tracking-cta`, `tracking-nav`.
- Max widths: `max-w-site` (1280px), `max-w-prose-tight` (640px).

## Known pre-existing TypeScript errors

Not introduced by recent work — flagged here so they don't get re-investigated:
- `mdx-components.tsx`: implicit `any` on destructured props for all MDX overrides.
- `lib/blog.ts`: missing module declarations for `gray-matter` and `reading-time`.
- `app/blog/[slug]/page.tsx`: missing module declaration for `next-mdx-remote/rsc`.

These don't block dev or production builds (Next.js is more permissive than strict `tsc --noEmit`), but they should get cleaned up eventually.

## Hero video (added May 2026)

- Component: `components/HeroVideo.tsx`
- Assets: `public/video/own-the-team.mp4` (4.7MB, H.264, faststart), poster `own-the-team-poster.webp` (29KB) + `.jpg` (43KB).
- Source was a vertical clip in a 1280x720 frame with black pillarbox bars. Cropped to native 404x720.
- Embed uses `preload="none"` so the mp4 doesn't load until the visitor clicks play. Page load impact is essentially zero.
- Hero layout was converted from single column to a 12-column grid (text spans 8, video spans 4 on `lg`+). Adjust `lg:col-span-4` to resize the video slot.
