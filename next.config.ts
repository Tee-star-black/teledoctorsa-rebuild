import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        has: [{ type: "query", key: "type", value: "demo" }],
        destination: "/demo",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
