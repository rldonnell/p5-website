/**
 * Blog data layer.
 *
 * Posts live as MDX files in `content/blog/` (the `_drafts/` subfolder is
 * ignored). Each file has YAML frontmatter with at least `title`, `date`,
 * and `description`. Body is MDX (markdown plus optional React components).
 *
 * All reads happen at build time. No external API, no runtime fetches.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string; // ISO date string, e.g. 2026-05-06
  description: string;
  excerpt?: string;
  featuredImage?: string;
  draft?: boolean;
  tags?: string[];
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  content: string; // raw MDX body
};

function isMdxFile(name: string): boolean {
  return name.endsWith(".mdx") || name.endsWith(".md");
}

function fileToSlug(filename: string): string {
  return filename.replace(/\.(mdx|md)$/i, "");
}

/** Return every published (non-draft) post, sorted newest first. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter(isMdxFile);

  const posts: PostMeta[] = files
    .map((file) => {
      const slug = fileToSlug(file);
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as PostFrontmatter;
      const stats = readingTime(content);
      return {
        ...fm,
        slug,
        readingMinutes: Math.max(1, Math.round(stats.minutes)),
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return posts;
}

/** Return one post by slug, with raw MDX body. Null if not found. */
export function getPostBySlug(slug: string): Post | null {
  const tryFiles = [
    path.join(POSTS_DIR, `${slug}.mdx`),
    path.join(POSTS_DIR, `${slug}.md`),
  ];
  const file = tryFiles.find((p) => fs.existsSync(p));
  if (!file) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  if (fm.draft) return null;
  const stats = readingTime(content);

  return {
    ...fm,
    slug,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    content,
  };
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/** Format an ISO date as a human-readable string (e.g. "May 6, 2026"). */
export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
