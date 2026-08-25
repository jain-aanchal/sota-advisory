import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/writing";

export const dynamic = "force-static";

const BASE = "https://sotaadvisory.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/services/", priority: 0.9 },
    { path: "/case-study/", priority: 0.9 },
    { path: "/testimonials/", priority: 0.8 },
    { path: "/writing/", priority: 0.8 },
    { path: "/about/", priority: 0.8 },
    { path: "/contact/", priority: 0.7 },
  ];

  const posts = await getAllPosts();
  const postRoutes = posts.map((p) => ({
    url: `${BASE}/writing/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [...staticEntries, ...postRoutes];
}
