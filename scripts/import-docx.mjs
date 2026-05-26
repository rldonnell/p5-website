#!/usr/bin/env node
/**
 * Convert a Word .docx file into an MDX blog post.
 *
 * Usage:
 *   npm run import-docx -- "/path/to/your-post.docx"
 *   (note the double-dash so npm passes the argument through)
 *
 * What it does:
 *   1. Reads the .docx with mammoth → produces HTML.
 *   2. Converts the HTML to clean markdown with turndown.
 *   3. Slugifies the filename to make the output filename
 *      (e.g. "My Great Post.docx" → "my-great-post.mdx").
 *   4. Writes the file to content/blog/<slug>.mdx with starter
 *      frontmatter (title from filename, today's date, placeholder
 *      description). You edit the frontmatter before publishing.
 *   5. Inline images embedded in the .docx are extracted to
 *      public/blog-images/<slug>-<n>.<ext> and referenced in the
 *      MDX with the correct /blog-images/ path.
 *
 * Things to review after import:
 *   - Fill in the description in the frontmatter.
 *   - Check headings: Word's "Heading 1" / "Heading 2" styles map
 *     to MDX # and ##. If you used Normal text bolded as a heading,
 *     it'll come through as bold paragraph instead — fix manually.
 *   - Word's smart quotes are preserved as Unicode characters and
 *     render correctly. No change needed.
 *   - Tables come through as markdown tables but complex layouts
 *     may need adjustment.
 *
 * The script never overwrites existing files. If <slug>.mdx already
 * exists in content/blog/, it errors out and tells you.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, basename, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import mammoth from "mammoth";
import TurndownService from "turndown";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const POSTS_DIR = resolve(ROOT, "content", "blog");
const IMAGES_DIR = resolve(ROOT, "public", "blog-images");

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: npm run import-docx -- <path-to-docx>");
  console.error("  e.g. npm run import-docx -- ~/Desktop/my-post.docx");
  process.exit(1);
}

const absInput = resolve(inputPath);
if (!existsSync(absInput)) {
  console.error(`File not found: ${absInput}`);
  process.exit(1);
}
if (extname(absInput).toLowerCase() !== ".docx") {
  console.error(`Expected a .docx file, got: ${extname(absInput)}`);
  process.exit(1);
}

// Build the output slug from the source filename
const sourceName = basename(absInput, ".docx");
const slug = slugify(sourceName);
const outputPath = resolve(POSTS_DIR, `${slug}.mdx`);

if (existsSync(outputPath)) {
  console.error(`Output already exists: ${outputPath}`);
  console.error(`Rename the .docx or delete the existing .mdx and try again.`);
  process.exit(1);
}

mkdirSync(POSTS_DIR, { recursive: true });
mkdirSync(IMAGES_DIR, { recursive: true });

console.log(`Importing: ${absInput}`);
console.log(`  → slug: ${slug}`);

let imageCounter = 0;
const extractedImages = [];

// Convert .docx → HTML, extracting embedded images to /public/blog-images/
const result = await mammoth.convertToHtml(
  { path: absInput },
  {
    convertImage: mammoth.images.imgElement(async (image) => {
      imageCounter += 1;
      const ext = guessExtFromMime(image.contentType);
      const filename = `${slug}-${imageCounter}${ext}`;
      const dest = resolve(IMAGES_DIR, filename);
      const buffer = await image.readAsBuffer();
      writeFileSync(dest, buffer);
      extractedImages.push(filename);
      return { src: `/blog-images/${filename}`, alt: image.altText || "" };
    }),
  }
);

if (result.messages.length > 0) {
  console.log("Mammoth conversion notes:");
  for (const msg of result.messages) {
    console.log(`  - [${msg.type}] ${msg.message}`);
  }
}

// HTML → markdown
const turndown = new TurndownService({
  headingStyle: "atx", // # H1, ## H2, etc.
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "_",
});
// Preserve <strong> as ** and <em> as _ by default (turndown handles this)
const markdownBody = turndown.turndown(result.value).trim();

const today = new Date().toISOString().split("T")[0];
const titleGuess = sourceName.replace(/[-_]+/g, " ").trim();

const frontmatter = [
  "---",
  `title: ${JSON.stringify(titleGuess)}`,
  `date: "${today}"`,
  `description: "Add a one-sentence description here for the blog index and SEO meta."`,
  "---",
  "",
].join("\n");

writeFileSync(outputPath, frontmatter + markdownBody + "\n", "utf8");

console.log("");
console.log(`✓ Wrote ${outputPath}`);
if (extractedImages.length > 0) {
  console.log(`✓ Extracted ${extractedImages.length} image(s) to public/blog-images/:`);
  for (const name of extractedImages) console.log(`    - ${name}`);
}
console.log("");
console.log("Next steps:");
console.log("  1. Open the new .mdx file and edit the frontmatter description.");
console.log("  2. Review headings, lists, links. Tweak anything Word fouled up.");
console.log("  3. git add content/blog/ public/blog-images/");
console.log("  4. git commit -m \"Publish: " + titleGuess + "\"");
console.log("  5. git push (Vercel deploys automatically)");

/* ── helpers ──────────────────────────────────────────────────────── */

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // strip diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function guessExtFromMime(mime) {
  if (!mime) return ".png";
  if (mime.includes("png")) return ".png";
  if (mime.includes("jpeg") || mime.includes("jpg")) return ".jpg";
  if (mime.includes("gif")) return ".gif";
  if (mime.includes("webp")) return ".webp";
  if (mime.includes("svg")) return ".svg";
  return ".png";
}
