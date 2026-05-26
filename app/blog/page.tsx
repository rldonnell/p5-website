import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog  |  P5 Marketing",
  description:
    "Field notes from P5 on running marketing for owner-operators of high-value service businesses. SEO, GEO, intent data, visitor identification — what actually moves bookings.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          aria-labelledby="blog-hero"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-14 lg:pb-20"
        >
          <p className="text-[11px] tracking-eyebrow uppercase text-taupe mb-10 md:mb-14">
            Field notes
          </p>
          <h1
            id="blog-hero"
            className="font-display font-normal text-ink leading-[1.05] tracking-[-0.015em] max-w-[20ch] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] mb-8 md:mb-10"
          >
            Notes from the work.
          </h1>
          <p className="text-ink leading-relaxed max-w-prose-tight text-[17px] md:text-[20px] lg:text-[22px]">
            What we are seeing across owner-operated high-value service businesses. SEO, GEO, intent data, visitor identification, and what actually moves bookings.
          </p>
        </section>

        {/* Post list */}
        <section
          aria-labelledby="post-list-heading"
          className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 border-t border-taupe/20"
        >
          <h2 id="post-list-heading" className="sr-only">
            All posts
          </h2>

          {posts.length === 0 ? (
            <p className="text-taupe text-[17px] leading-relaxed max-w-[60ch]">
              No posts yet. Check back soon — or{" "}
              <Link
                href="/contact/"
                className="text-forest hover:text-ink underline underline-offset-4 transition-colors duration-150"
              >
                tell us what you want to read about
              </Link>
              .
            </p>
          ) : (
            <ul className="border-t border-taupe/25 list-none p-0">
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-taupe/25">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="block py-10 md:py-12 group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
                      <div className="md:col-span-3">
                        <p className="text-taupe text-[13px] tracking-[0.04em] uppercase">
                          {formatPostDate(post.date)}
                        </p>
                        <p className="text-taupe text-[13px] mt-1">
                          {post.readingMinutes} min read
                        </p>
                      </div>
                      <div className="md:col-span-9">
                        <h3 className="font-display font-normal text-ink text-[24px] md:text-[28px] lg:text-[32px] leading-tight mb-4 group-hover:opacity-70 transition-opacity duration-150">
                          {post.title}
                        </h3>
                        <p className="text-ink text-[16px] md:text-[17px] leading-relaxed max-w-[64ch]">
                          {post.description}
                        </p>
                        <p className="mt-5 inline-block text-[12px] tracking-cta uppercase text-taupe group-hover:text-ink transition-colors duration-150 border-b border-transparent group-hover:border-taupe pb-0.5">
                          Read post →
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
