import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/writing";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI strategy, engineering leadership, and the gap between the deck and the shipping product. By Aanchal Jain, Founder of SOTA Advisory.",
  alternates: { canonical: "/writing/" },
  openGraph: {
    title: "Writing | SOTA Advisory",
    description:
      "Essays on AI strategy, engineering leadership, and the gap between the deck and the shipping product.",
    url: "/writing/",
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function WritingIndex() {
  const posts = await getAllPosts();

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing/" },
        ]}
      />

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">WRITING</div>
        <h1 className="font-serif text-4xl md:text-5xl max-w-3xl">
          Essays on AI strategy, engineering leadership, and what ships.
        </h1>
        <p className="mt-6 text-muted max-w-2xl leading-relaxed">
          Short reads on the questions I keep answering in engagements. Each
          post starts from something I shipped, or something I saw fail to
          ship, and works backward to the decision that shaped it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        {posts.length === 0 ? (
          <p className="text-muted text-base">
            First essays coming soon. In the meantime, the{" "}
            <Link href="/case-study/" className="text-gold hover:underline">
              case study
            </Link>{" "}
            and{" "}
            <Link href="/services/" className="text-gold hover:underline">
              services
            </Link>{" "}
            pages carry the current thinking.
          </p>
        ) : (
          <ul className="divide-y divide-border/60">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/writing/${p.slug}/`}
                  className="block py-8 group"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                    <span className="text-xs tracking-display text-gold">
                      {formatDate(p.date).toUpperCase()}
                    </span>
                    <span className="text-xs tracking-display text-muted">
                      {p.readingMinutes} MIN READ
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl group-hover:text-gold transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-base text-muted leading-relaxed">
                    {p.description}
                  </p>
                  {p.tags && p.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-display text-muted border border-border/60 px-2 py-1"
                        >
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
