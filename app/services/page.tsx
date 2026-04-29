import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Services | SOTA Advisory",
  description:
    "AI strategy, fractional CTO, technical due diligence, and architecture advisory for growth-stage startups.",
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
          title="If any of these are on your mind, we should talk."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Which AI initiatives will move the needle on our gross margins, and which are simply 'table stakes' for market parity?",
            "How do we link AI-assisted developer velocity to actual 'Time to Revenue' for our top-tier features?",
            "How do we transition our AI unit economics from 'experimental burn' to a predictable, high-margin cost structure?",
            "How do we scale from 5 to 50 engineers without losing the 'founder-speed' that keeps our Customer Acquisition Cost (CAC) low?",
            "Where are we 'over-building' proprietary tech that could be offloaded to commodity APIs to free up our talent for high-margin innovation?",
            "How do we identify 'unbilled' value in our current tech stack that can be productized into a high-margin revenue stream?",
          ].map((q) => (
            <li
              key={q}
              className="border border-border/60 p-6 text-sm leading-relaxed flex gap-3"
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
