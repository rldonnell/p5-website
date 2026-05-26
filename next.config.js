/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Permanent (301) redirects.
   *
   * This list combines:
   *   1. The legacy redirects that lived in the old site's vercel.json
   *      (Spanish paths, /products/ URLs, /home/, wp-* paths, feed paths,
   *      old blog permalinks, etc.) — preserved verbatim so existing
   *      inbound links and SEO rankings carry forward to the new site.
   *   2. New cutover redirects for pages that existed on the old live
   *      site but DO NOT exist on this project yet:
   *        - /how-it-works/                          → /
   *        - /markets/plastic-surgeons/              → /markets/
   *        - /markets/wedding-venues/                → /markets/
   *        - /markets/high-value-service-businesses/ → /markets/
   *        - The one unported blog post              → /blog/
   *
   * Vertical landing pages (plastic-surgeons, wedding-venues) and
   * /how-it-works/ are slated to be built on the new project later. When
   * they ship, remove or update the corresponding entry below.
   */
  async redirects() {
    return [
      /* ── Old placeholder paths from this project's earlier scaffold ── */
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions/", permanent: true },

      /* ── SearchID naming legacy ── */
      { source: "/the-id-suite/searchid/", destination: "/the-id-suite/seo-accelerator/", permanent: true },
      { source: "/the-id-suite/searchid", destination: "/the-id-suite/seo-accelerator/", permanent: true },

      /* ── Spanish-language paths (live site had a brief /es/ run) ── */
      { source: "/es/contacto/", destination: "/contact/", permanent: true },
      { source: "/es/portafolio/", destination: "/about/", permanent: true },
      { source: "/es/servicios/", destination: "/", permanent: true },
      { source: "/es/", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/", permanent: true },

      /* ── Old /products/ tree → ID Suite tools ── */
      { source: "/products/searchid/", destination: "/the-id-suite/seo-accelerator/", permanent: true },
      { source: "/products/visitorid/", destination: "/the-id-suite/visitorid/", permanent: true },
      { source: "/products/intentid/", destination: "/the-id-suite/intentid/", permanent: true },
      { source: "/products/inboxid/", destination: "/the-id-suite/inboxid/", permanent: true },
      { source: "/products/kasper-leads-identification-system/", destination: "/the-id-suite/visitorid/", permanent: true },
      { source: "/products/kustom-audiences-precise-audience-targeting/", destination: "/the-id-suite/", permanent: true },
      { source: "/products/", destination: "/the-id-suite/", permanent: true },

      /* ── Old top-level vertical paths ── */
      { source: "/home/", destination: "/", permanent: true },
      { source: "/wedding-venues/", destination: "/markets/", permanent: true },
      { source: "/plastic-surgeons/", destination: "/markets/", permanent: true },

      /* ── Vertical landing pages that don't exist on the new site yet ── */
      { source: "/markets/plastic-surgeons/", destination: "/markets/", permanent: true },
      { source: "/markets/plastic-surgeons", destination: "/markets/", permanent: true },
      { source: "/markets/wedding-venues/", destination: "/markets/", permanent: true },
      { source: "/markets/wedding-venues", destination: "/markets/", permanent: true },
      { source: "/markets/high-value-service-businesses/", destination: "/markets/", permanent: true },
      { source: "/markets/high-value-service-businesses", destination: "/markets/", permanent: true },
      { source: "/markets/high-trust-high-value/", destination: "/markets/", permanent: true },
      { source: "/markets/high-trust-high-value", destination: "/markets/", permanent: true },

      /* ── How It Works page is gone on new site ── */
      { source: "/how-it-works/", destination: "/", permanent: true },
      { source: "/how-it-works", destination: "/", permanent: true },
      { source: "/p5-marketing-processes-that-deliver-results/:slug*", destination: "/", permanent: true },

      /* ── ID Suite hyphenation legacy ── */
      { source: "/inbox-id/", destination: "/the-id-suite/inboxid/", permanent: true },
      { source: "/the-id-suite/inbox-id/", destination: "/the-id-suite/inboxid/", permanent: true },
      { source: "/the-id-suite/intent-id/", destination: "/the-id-suite/intentid/", permanent: true },
      { source: "/the-id-suite/visitor-id/", destination: "/the-id-suite/visitorid/", permanent: true },
      { source: "/visitorid/", destination: "/the-id-suite/visitorid/", permanent: true },
      { source: "/visitorid", destination: "/the-id-suite/visitorid/", permanent: true },

      /* ── Other old marketing URLs ── */
      { source: "/anonymous-website-visitors-kasper-leads-explained/", destination: "/the-id-suite/visitorid/", permanent: true },
      { source: "/about-p5-marketing-data-driven-marketing-agency/", destination: "/about/", permanent: true },
      { source: "/search-engine-compliance/", destination: "/the-id-suite/seo-accelerator/", permanent: true },
      { source: "/wcla/", destination: "/", permanent: true },

      /* ── Blog URL forwarding ─────────────────────────────────────────── */
      /* The one post that's ported keeps its slug.                        */
      { source: "/the-importance-of-a-strong-content-strategy/", destination: "/blog/the-importance-of-a-strong-content-strategy/", permanent: true },
      /* The one unported post sends visitors to the blog index.           */
      { source: "/ai-website-development-a-tool-that-knows-you/", destination: "/blog/", permanent: true },
      { source: "/blog/ai-website-development-a-tool-that-knows-you/", destination: "/blog/", permanent: true },
      /* Older non-blog blog posts that were already 301'd to /blog/.      */
      { source: "/social-media-magic/", destination: "/blog/", permanent: true },
      { source: "/website-maintenance-and-hosting-are-key-to-your-website-success/", destination: "/blog/", permanent: true },
      { source: "/building-engagement-using-our-focus-pages-content-engine/", destination: "/blog/", permanent: true },

      /* ── Legal aliases ── */
      { source: "/disclaimer-statement/", destination: "/terms-and-conditions/", permanent: true },

      /* ── WordPress detritus from the old install (security + cleanup) ── */
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/tag/:path*", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/feed/", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/:slug+/feed/", destination: "/", permanent: true },
      { source: "/:slug+/feed", destination: "/", permanent: true },

      /* ── Garbage path catch-all ── */
      { source: "/:path*P5marketing.com", destination: "/", permanent: true },
    ];
  },

  /**
   * Security and cache headers, ported from the old site's vercel.json.
   * Standard HSTS + framing protection + sensible cache TTLs for static
   * assets. No behavior change for end users.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:all*(woff2|woff|ttf|otf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/:all*(jpg|jpeg|png|webp|avif|svg|gif|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

module.exports = nextConfig;
