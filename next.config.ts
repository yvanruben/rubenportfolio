import type { NextConfig } from "next";

const repo = "rubenportfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // Required for GitHub Pages (Next/Image optimization needs a server)
  images: { unoptimized: true },

  // Only needed for project pages (NOT needed if repo is yvanruben.github.io)
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
