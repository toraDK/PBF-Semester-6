import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "contents.mediadecathlon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "down-id.img.susercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cardinal.co.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.puma.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
