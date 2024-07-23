import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@pokenext/lib", "@pokenext/ui"],
  experimental: {
    // https://nextjs.org/blog/next-15-rc#client-router-cache-no-longer-caches-page-components-by-default
    staleTimes: {
      dynamic: 30,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/**",
      },
    ],
  },
};

export default nextConfig;
