import Link from "next/link";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
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
          <p className="mt-8 text-xl text-muted max-w-2xl leading-relaxed">
            I partner with founders and CEOs to turn AI and technology bets
            into outcomes the market and the boardroom can measure.
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

      {/* Positioning quote */}
      <section className="border-y border-border/60 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="gold-divider mb-10 max-w-[120px]" />
          <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground/95">
            &ldquo;Most fractional CTOs hand you a slide deck and leave the
            execution to your team. I&apos;ve shipped software at scale for
            Slack and Quantcast, and built AI products past $100M+ ARR at
            Block. I design AI strategy grounded in what actually ships, then
            I build it myself, so nothing gets lost between the roadmap and
            the codebase.&rdquo;
          </blockquote>
          <div className="mt-8 text-sm tracking-display text-gold">
            AANCHAL JAIN · FOUNDER
          </div>
        </div>
      </section>

      {/* AI-first / observability */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="APPROACH"
          title="AI-first. Observability before you build."
          subtitle="Most teams ship AI features and then wonder what happened. I flip the order: instrument first, so every model, agent, and prompt has metrics, evals, and a unit-cost attached from day one."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Instrument",
              body:
                "Metrics, evals, dashboards, and per-feature token accounting go in before a single production prompt ships.",
            },
            {
              step: "02",
              title: "Prioritize",
              body:
                "AI bets ranked by ROI, gross-margin impact, and evidence, so table stakes and needle-movers don&rsquo;t get confused.",
            },
            {
              step: "03",
              title: "Ship & Contain",
              body:
                "Model routing, caching, guardrails, and budget alerts turn AI from experimental burn into a predictable, high-margin cost line.",
            },
          ].map((s) => (
            <div key={s.step} className="border border-border/60 p-8">
              <div className="text-xs tracking-display text-gold mb-4">
                ◆ {s.step}
              </div>
              <h3 className="font-serif text-xl mb-3">{s.title}</h3>
              <p className="text-base text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="TRACK RECORD"
          title="Built and shipped at the scale you&rsquo;re aiming for."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {[
            { stat: "85%", label: "AI spend reduction for a recent fractional-CTO client" },
            { stat: "40%", label: "Lift in production-ready AI code generation at Block" },
            { stat: "$100M+", label: "ARR products managed across 4 revenue lines" },
            { stat: "50%", label: "Operational cost reduction at Quantcast" },
            { stat: "20+", label: "Years of engineering leadership" },
          ].map((m) => (
            <div key={m.label} className="border-l border-gold/40 pl-5">
              <div className="font-serif text-4xl text-gold">{m.stat}</div>
              <div className="mt-2 text-base text-muted leading-relaxed">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case study callout */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/case-study"
          className="block border border-border/60 hover:border-gold/60 transition-colors p-8 md:p-12 group"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-center">
            <div>
              <div className="text-xs tracking-display text-gold mb-3">
                ◆ CASE STUDY
              </div>
              <div className="font-serif text-5xl md:text-6xl text-gold">
                85%
              </div>
              <div className="text-xs tracking-display text-muted mt-2">
                CLOUD SPEND REDUCTION · 10 WEEKS
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl group-hover:text-gold transition-colors">
                Interim CTO turnaround at an early-stage healthtech startup.
              </h3>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Remediated a Sev 0 GCP + Vertex AI cost spike, restructured the
                engineering org, and handed the platform to the incoming
                permanent leadership, all in 10 weeks.
              </p>
              <div className="mt-6 text-xs tracking-display text-gold">
                READ THE FULL STORY →
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Services preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="PROBLEMS I SOLVE"
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
              <p className="text-base text-muted leading-relaxed">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          title="What founders and CEOs say."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="border border-border/60 p-8 flex flex-col"
            >
              <blockquote className="font-serif text-lg leading-relaxed text-foreground/95 flex-1">
                &ldquo;{t.quote.split(". ").slice(0, 2).join(". ")}.&rdquo;
              </blockquote>
              <div className="gold-divider my-6 max-w-[60px]" />
              <div>
                <div className="text-sm tracking-display text-gold">
                  {t.name.toUpperCase()}
                </div>
                <div className="text-sm text-muted mt-1">{t.title}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground text-xs tracking-display hover:border-gold hover:text-gold transition-colors"
          >
            READ FULL TESTIMONIALS
          </Link>
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
