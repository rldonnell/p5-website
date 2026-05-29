import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import ButtonLink from "@/components/ButtonLink";
import { getAllSlugs, getPostBySlug, formatPostDate } from "@/lib/blog";
import { mdxComponents } from "@/mdx-components";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found  |  P5" };
  return {
    title: `${post.title}  |  P5`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://p5marketing.com/blog/${post.slug}/`,
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main>
        {/* Post hero */}
        <article>
          <header className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-10 md:pb-12 lg:pb-16">
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
              <Link
                href="/blog/"
                className="hover:text-ink transition-colors duration-150"
              >
                ← Field notes
              </Link>
            </p>
            <h1 className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[22ch] text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] mb-8 md:mb-10">
              {post.title}
            </h1>
            <p className="text-taupe text-[14px] tracking-[0.04em] uppercase">
              {formatPostDate(post.date)} &middot; {post.readingMinutes} min read
            </p>
          </header>

          {/* Post body */}
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-16 border-t border-taupe/20">
            <div className="max-w-[68ch] mx-auto">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </div>
        </article>

        {/* CTA — Build your Playbook */}
        <section
          aria-labelledby="blog-post-cta"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 border-t border-taupe/20"
        >
          <div className="max-w-[720px]">
            <div className="w-14 h-px bg-forest mb-8" aria-hidden="true" />
            <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-6">
              The first step
            </p>
            <h2
              id="blog-post-cta"
              className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] text-[32px] md:text-[40px] lg:text-[48px] mb-8"
            >
              Want this thinking applied to your business?
            </h2>
            <p className="text-ink leading-relaxed text-[17px] md:text-[19px] mb-10 max-w-[60ch]">
              The Playbook is the written marketing plan for your business. We build it with you, then we run it. Independent of any ongoing engagement.
            </p>
            <ButtonLink
              href="mailto:rdonnell@p5marketing.com?subject=Build%20my%20Playbook"
              variant="forest"
            >
              Build your Playbook
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
