import { getAllPosts } from "@/lib/writing";

export const dynamic = "force-static";

const BASE = "https://sotaadvisory.com";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getAllPosts();
  const now = new Date().toUTCString();

  const items = posts
    .map((p) => {
      const url = `${BASE}/writing/${p.slug}/`;
      const pubDate = new Date(p.date).toUTCString();
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(p.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SOTA Advisory Writing</title>
    <link>${BASE}/writing/</link>
    <description>Essays on AI strategy, engineering leadership, and what actually ships. By Aanchal Jain, Founder of SOTA Advisory.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
