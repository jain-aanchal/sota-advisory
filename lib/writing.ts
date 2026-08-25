import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTimeFn from "reading-time";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  draft?: boolean;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "writing");

function readAllFiles(): { slug: string; source: string }[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({
      slug: f.replace(/\.md$/, ""),
      source: fs.readFileSync(path.join(POSTS_DIR, f), "utf8"),
    }));
}

function parsePost(slug: string, source: string): Post {
  const { data, content } = matter(source);
  const fm = data as PostFrontmatter;
  const stats = readingTimeFn(content);
  // Rendered synchronously later; we return HTML from an async function below.
  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    tags: fm.tags,
    draft: fm.draft,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    contentHtml: content,
  };
}

async function renderMarkdown(md: string): Promise<string> {
  const processed = await remark().use(html).process(md);
  return processed.toString();
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = readAllFiles();
  const posts = files.map(({ slug, source }) => parsePost(slug, source));
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ contentHtml, ...meta }) => meta);
}

export async function getPost(slug: string): Promise<Post | null> {
  const files = readAllFiles();
  const found = files.find((f) => f.slug === slug);
  if (!found) return null;
  const post = parsePost(found.slug, found.source);
  if (post.draft) return null;
  const rendered = await renderMarkdown(post.contentHtml);
  return { ...post, contentHtml: rendered };
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
