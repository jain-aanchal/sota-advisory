import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import SectionHeader from "@/components/SectionHeader";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interim CTO leadership, AI strategy, AI cost reduction, technical due diligence, and engineering organization design for growth-stage startups.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Services | SOTA Advisory",
    description:
      "Interim CTO leadership, AI strategy, AI cost reduction, technical due diligence, and engineering organization design.",
    url: "/services/",
  },
};

// Map a pillar slug to a testimonial that proves its claim.
const testimonialByPillar: Record<string, number> = {
  "interim-cto": 0, // Shruti — part-time-scope proof
  "ai-cost-reduction": 1, // Katie — 85% AI spend cut
};

const engagementTiers = [
  {
    name: "Strategy Sprint",
    shape: "3 to 4 weeks, fixed scope",
    outcome: "a decision and a roadmap, not a deck",
  },
  {
    name: "Embedded CTO",
    shape: "2 to 3 days a week, 3 month minimum",
    outcome: "I own engineering outcomes",
  },
  {
    name: "Strategic Advisor",
    shape: "monthly retainer",
    outcome: "standing access for you and your team leads",
  },
];

const questions = [
  "When does it make sense to redesign our architecture vs. live with the technical debt for now?",
  "Our AI bill went from $8k to $60k a month. Which parts of that are load-bearing?",
  "We are two months from a raise. What does an investor's technical diligence find in our stack, and what can we fix first?",
  "My engineers want to rebuild it. My board wants features. Who is right?",
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">SERVICES</div>
        <h1 className="font-serif text-4xl md:text-5xl max-w-3xl">
          Strategic technology leadership, scoped to your stage.
        </h1>
        <p className="mt-6 text-muted max-w-2xl leading-relaxed">
          Six pillars of advisory work, three engagement shapes. Every one
          starts with the same thirty-minute call.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border-t border-border/60">
          {services.map((s, i) => {
            const testimonialIdx = testimonialByPillar[s.slug];
            const t =
              testimonialIdx !== undefined
                ? testimonials[testimonialIdx]
                : undefined;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid gap-8 md:grid-cols-[200px_1fr] py-12 border-b border-border/60 scroll-mt-24"
              >
                <div className="text-xs tracking-display text-gold">
                  ◆ {String(i + 1).padStart(2, "0")} /{" "}
                  {String(services.length).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-foreground/85 leading-relaxed">
                    {s.short}
                  </p>
                  <p className="mt-4 text-muted leading-relaxed">{s.long}</p>
                  {t && (
                    <figure className="mt-6 border-l-2 border-gold/60 pl-5">
                      <blockquote className="font-serif text-lg leading-relaxed text-foreground/90 italic">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-3 text-xs tracking-display text-gold">
                        {t.name.toUpperCase()}{" "}
                        <span className="text-muted normal-case tracking-normal font-normal">
                          · {t.title}
                        </span>
                      </figcaption>
                    </figure>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engagement shape */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionHeader
          eyebrow="HOW THIS USUALLY WORKS"
          title="Three shapes, one starting point."
        />
        <div className="mt-12 grid gap-px bg-border/60 border border-border/60 md:grid-cols-3">
          {engagementTiers.map((tier) => (
            <div key={tier.name} className="bg-background p-8">
              <h3 className="font-serif text-xl mb-3">{tier.name}</h3>
              <div className="text-xs tracking-display text-gold mb-4">
                {tier.shape.toUpperCase()}
              </div>
              <p className="text-base text-muted leading-relaxed">
                {tier.outcome}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-base text-muted">
          Every engagement starts with the same thirty-minute call.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionHeader
          eyebrow="QUESTIONS TO ASK ME"
          title="If any of these are on your mind, let&rsquo;s talk."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {questions.map((q) => (
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
