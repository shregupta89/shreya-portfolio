import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
};

export default nextConfig;
