import Link from "next/link";
import { services } from "@/lib/services";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(201,169,97,0.12), transparent 60%), radial-gradient(ellipse at bottom right, rgba(184,115,51,0.08), transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="text-xs tracking-display text-gold mb-6">
            FRACTIONAL CTO · AI STRATEGY FOR GROWTH-STAGE STARTUPS
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Operator-grade technology leadership.{" "}
            <span className="text-gold">When you need it most.</span>
          </h1>
          <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
            SOTA Advisory partners with founders and CEOs to translate AI and
            technology bets into outcomes the market and the boardroom can
            measure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://calendly.com/jain-aanchal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gold text-background text-xs tracking-display hover:bg-gold-light transition-colors"
            >
              BOOK A DISCOVERY CALL
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-xs tracking-display hover:border-gold hover:text-gold transition-colors"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Quote / Positioning */}
      <section className="border-y border-border/60 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="gold-divider mb-10 max-w-[120px]" />
          <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground/95">
            “Most fractional CTOs hand you a slide deck. I&apos;ve shipped
            AI-driven products at $100M+ ARR scale inside Block, Slack, and
            Quantcast, and I bring that operator&apos;s playbook to leaders
            who need an AI strategy the board will actually trust.”
          </blockquote>
          <div className="mt-8 text-sm tracking-display text-gold">
            AANCHAL JAIN · FOUNDER
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="TRACK RECORD"
          title="Built and shipped at the scale you&rsquo;re aiming for."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {[
            { stat: "40%", label: "Lift in production-ready AI code generation at Block" },
            { stat: "$100M+", label: "ARR products managed across 4 revenue lines" },
            { stat: "50%", label: "Operational cost reduction at Quantcast" },
            { stat: "20+", label: "Years of engineering leadership" },
          ].map((m) => (
            <div key={m.label} className="border-l border-gold/40 pl-5">
              <div className="font-serif text-4xl text-gold">{m.stat}</div>
              <div className="mt-2 text-sm text-muted leading-relaxed">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="THE PROBLEMS WE SOLVE"
          title="Six pillars of advisory."
          subtitle="Each engagement is scoped to your stage, your team, and the decisions in front of you."
        />
        <div className="mt-12 grid gap-px bg-border/60 border border-border/60 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="bg-background p-8 hover:bg-foreground/[0.03] transition-colors group"
            >
              <div className="text-xs tracking-display text-gold mb-3">
                ◆ PILLAR
              </div>
              <h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="border border-gold/40 p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Ready to make technology a growth engine?
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Let&apos;s spend 30 minutes mapping the highest-leverage move you
            can make in the next quarter.
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
