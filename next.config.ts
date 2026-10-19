import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external image domains here if needed
    // e.g. remotePatterns: [{ hostname: "images.unsplash.com" }]
    unoptimized: true // Remove this when deploying to Vercel for optimal image handling
  }
};

export default nextConfig;
