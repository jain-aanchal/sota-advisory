import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What founders and CEOs say about working with Aanchal Jain and SOTA Advisory as fractional CTO.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials | SOTA Advisory",
    description:
      "What founders and CEOs say about working with Aanchal Jain as fractional CTO.",
    url: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">
          TESTIMONIALS
        </div>
        <h1 className="font-serif text-4xl md:text-5xl max-w-3xl">
          What founders and CEOs say.
        </h1>
        <p className="mt-6 text-muted max-w-2xl leading-relaxed">
          Straight from the leaders I&apos;ve partnered with, on what happens
          when the person setting AI strategy is also the person shipping it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="border border-border/60 p-8 md:p-10 relative"
          >
            <div className="absolute -top-3 left-8 bg-background px-3 text-gold font-serif text-3xl leading-none">
              &ldquo;
            </div>
            <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-foreground/95">
              {t.quote}
            </blockquote>
            <div className="gold-divider my-6 max-w-[80px]" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <div className="text-sm tracking-display text-gold">
                  {t.name.toUpperCase()}
                </div>
                <div className="text-base text-muted mt-1">{t.title}</div>
              </div>
              <div className="text-sm text-muted">{t.date}</div>
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-gold/40 p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Want a similar outcome for your team?
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Start with a 30-minute discovery call.
          </p>
          <Link
            href="https://calendly.com/jain-aanchal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-6 py-3 bg-gold text-background text-xs tracking-display hover:bg-gold-light transition-colors"
          >
            BOOK A DISCOVERY CALL
          </Link>
        </div>
      </section>
    </>
  );
}
