/**
 * MDX component overrides for blog posts.
 *
 * Default tags (h1, h2, p, a, ul, etc.) inside MDX are mapped to styled
 * components below so post bodies inherit the soft-white + forest visual
 * without needing per-post styling. Edit here once, every post updates.
 *
 * Imported by app/blog/[slug]/page.tsx and passed to MDXRemote.
 */

import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[36px] md:text-[48px] mt-12 mb-6"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="font-display font-normal text-ink leading-[1.1] tracking-[-0.01em] text-[28px] md:text-[36px] mt-12 mb-5"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-display font-normal text-ink leading-[1.15] text-[22px] md:text-[26px] mt-10 mb-4"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p
      className="text-ink leading-[1.7] text-[17px] md:text-[19px] mb-6"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const url = href || "#";
    const isExternal = /^https?:\/\//.test(url) || url.startsWith("mailto:");
    const className =
      "text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150";
    if (isExternal) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={url} className={className} {...props}>
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside pl-6 my-6 space-y-2 text-ink text-[17px] md:text-[19px] leading-[1.7] marker:text-forest"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside pl-6 my-6 space-y-2 text-ink text-[17px] md:text-[19px] leading-[1.7] marker:text-forest"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-forest pl-6 my-8 text-ink text-[18px] md:text-[20px] italic leading-[1.6]"
      {...props}
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-ink" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  hr: () => <hr className="my-10 border-0 border-t border-taupe/30" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src as string}
      alt={alt || ""}
      className="my-8 w-full h-auto"
      loading="lazy"
    />
  ),
  code: ({ children, ...props }) => (
    <code
      className="bg-bone-deep border border-taupe/30 px-1.5 py-0.5 text-[14px] font-mono"
      {...props}
    >
      {children}
    </code>
  ),
};
