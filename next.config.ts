import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      }
    ],
  },
  async redirects() {
    // Project detail pages moved from numeric ids to slugs. These preserve the
    // URLs Google already indexed; the numbers map to the pre-slug ordering.
    return [
      { source: "/projects/3", destination: "/projects/bit-crm", permanent: true },
      // urban-dwell and devnotes are commented out in lib/data.ts, so their
      // old numeric URLs go to the homepage rather than a 404. Restore the
      // slug destinations if those projects come back.
      { source: "/projects/1", destination: "/", permanent: false },
      { source: "/projects/2", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
