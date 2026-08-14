import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No remote image hosts: DESIGN.md bans stock photography standing in for the
  // work. Real product screenshots and team portraits will be served locally
  // from /public once the client supplies them.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
