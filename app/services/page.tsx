import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interim CTO leadership, AI strategy, AI cost reduction, technical due diligence, and engineering organization design for growth-stage startups.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | SOTA Advisory",
    description:
      "Interim CTO leadership, AI strategy, AI cost reduction, technical due diligence, and engineering organization design.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">SERVICES</div>
        <h1 className="font-serif text-4xl md:text-5xl max-w-3xl">
          Strategic technology leadership, scoped to your stage.
        </h1>
        <p className="mt-6 text-muted max-w-2xl leading-relaxed">
          Every engagement is shaped around the decisions in front of you,
          from your first technical hire to your next architecture rewrite to
          the AI roadmap your board needs to see.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border-t border-border/60">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid gap-8 md:grid-cols-[200px_1fr] py-12 border-b border-border/60 scroll-mt-24"
            >
              <div className="text-xs tracking-display text-gold">
                ◆ {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">{s.title}</h2>
                <p className="mt-4 text-foreground/85 leading-relaxed">
                  {s.short}
                </p>
                <p className="mt-4 text-muted leading-relaxed">{s.long}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionHeader
          eyebrow="QUESTIONS TO ASK ME"
          title="If any of these are on your mind, let&rsquo;s talk."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "When does it make sense to redesign our architecture vs. live with the technical debt for now?",
            "How do I replace an aging ERP without a two-year rebuild, and without breaking the operation while we do it?",
            "Where does AI genuinely help in logistics and documentation workflows, and where does it introduce risk we can't accept?",
          ].map((q) => (
            <li
              key={q}
              className="border border-border/60 p-6 text-base leading-relaxed flex gap-3"
            >
              <span className="text-gold">◆</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Link
            href="https://calendly.com/jain-aanchal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gold text-background text-xs tracking-display hover:bg-gold-light transition-colors"
          >
            BOOK A DISCOVERY CALL
          </Link>
        </div>
      </section>
    </>
  );
}
