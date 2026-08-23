import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://sotaadvisory.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Trailing slashes match next.config.ts `trailingSlash: true` — Google's
  // canonical for each URL is the trailing-slash version, so the sitemap
  // must list them the same way to avoid "Page with redirect" and
  // "Duplicate, Google chose different canonical" errors.
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/services/", priority: 0.9 },
    { path: "/case-study/", priority: 0.9 },
    { path: "/testimonials/", priority: 0.8 },
    { path: "/about/", priority: 0.8 },
    { path: "/contact/", priority: 0.7 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
