import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration for build optimization
  reactStrictMode: false,
  experimental: {
    // Skip static optimization errors that don't affect runtime
    isrMemoryCacheSize: 0,
  },
};

export default nextConfig;
