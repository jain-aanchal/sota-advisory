import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH at build time when deploying to a project page
// (e.g. https://<user>.github.io/<repo>). Leave empty for a custom domain
// or user/organization page (https://<user>.github.io).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
