import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "roommatesapp-production.up.railway.app", // Your additional domain
    ],
  },
};

export default nextConfig;
