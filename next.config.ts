import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel does not need static export
  // output: "export",
  // trailingSlash: true,

  // Optional (you can remove this too if you want Next Image optimization)
  // images: { unoptimized: true },

  // Remove GitHub Pages project settings
  // basePath: `/${repo}`,
  // assetPrefix: `/${repo}/`,
};

export default nextConfig;
