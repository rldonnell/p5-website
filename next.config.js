/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old placeholder legal URLs → live legal pages
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
