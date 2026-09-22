import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as fallback: smaller payloads for the Cloudinary
    // logos and the project screenshots.
    formats: ["image/avif", "image/webp"],
    // Next 16 restricts `quality` to this allowlist (default [75]); a prop
    // outside it is silently coerced. 70 is for the long project screenshots,
    // where the card renders small enough that the difference is invisible.
    qualities: [70, 75],
    // Remote images are immutable (Cloudinary URLs are version-pinned), so
    // cache optimized variants for a day rather than the 60s default.
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/shirajul-islam-shakur-cv.pdf",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
  async redirects() {
    // Project detail pages moved from numeric ids to slugs. These preserve the
    // URLs Google already indexed; the numbers map to the pre-slug ordering.
    return [
      { source: "/projects/3", destination: "/projects/bit-crm", permanent: true },
      // urban-dwell and devnotes never shipped, so their old numeric URLs go
      // to the projects index. Permanent, so the dead URLs drop out of the
      // index rather than lingering on a 302. If those projects come back,
      // give them fresh slugs rather than reusing these.
      { source: "/projects/1", destination: "/projects", permanent: true },
      { source: "/projects/2", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
