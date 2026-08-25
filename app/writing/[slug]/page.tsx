import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost } from "@/lib/writing";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";
import AuthorBio from "@/components/AuthorBio";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${slug}/` },
    openGraph: {
      title: `${post.title} | SOTA Advisory`,
      description: post.description,
      url: `/writing/${slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: ["Aanchal Jain"],
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function WritingPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing/" },
          { name: post.title, path: `/writing/${slug}/` },
        ]}
      />
      <ArticleSchema
        slug={slug}
        title={post.title}
        description={post.description}
        datePublished={post.date}
      />

      <article className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <Link
          href="/writing/"
          className="text-xs tracking-display text-gold hover:text-gold-light"
        >
          ← WRITING
        </Link>

        <h1 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="text-xs tracking-display text-gold">
            {formatDate(post.date).toUpperCase()}
          </span>
          <span className="text-xs tracking-display text-muted">
            {post.readingMinutes} MIN READ
          </span>
        </div>

        {post.description && (
          <p className="mt-6 text-lg text-muted leading-relaxed">
            {post.description}
          </p>
        )}

        <div className="gold-divider my-10 max-w-[120px]" />

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-display text-muted border border-border/60 px-2 py-1"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        )}

        <AuthorBio />
      </article>
    </>
  );
}
