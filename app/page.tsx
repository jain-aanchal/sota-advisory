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
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="text-xs tracking-display text-gold mb-6">
            FOR FOUNDERS · CEOS · VC DILIGENCE
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Technology leadership that shows up in{" "}
            <span className="text-gold">the P&amp;L.</span>
          </h1>
          <p className="mt-8 text-xl text-muted max-w-3xl leading-relaxed">
            Fractional and interim CTO for founders and CEOs. AI strategy,
            cost reduction, and technical due diligence. At Double Blind
            Bio:{" "}
            <span className="text-foreground">
              $1,957 a day of AI spend down to under $300
            </span>
            , and a patent on the architecture, in ten weeks.
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
              href="/services/"
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
            &ldquo;Twenty years turning technical strategy into working
            software. The person who designs your architecture is the person
            who ships it, so nothing gets lost in the handoff.&rdquo;
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
          subtitle="Most teams push AI features into production and then wonder what happened. I flip the order: instrument first, so every model, agent, and prompt has metrics, evals, and a unit-cost attached from day one."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Instrument",
              body:
                "Metrics, evals, dashboards, and per-feature token accounting go in before a single production prompt goes live.",
            },
            {
              step: "02",
              title: "Prioritize",
              body:
                "AI bets ranked by ROI, gross-margin impact, and evidence, so table stakes and needle-movers don't get confused.",
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
          title="Built and delivered at the scale you&rsquo;re aiming for."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {[
            { stat: "85%", label: "AI spend reduction at Double Blind Bio (see case study)" },
            { stat: "40%", label: "Lift in production-ready AI code generation at Block" },
            { stat: "$100M+", label: "ARR products managed across 4 revenue lines" },
            { stat: "50%", label: "Operational cost reduction at Quantcast" },
            { stat: "Since 2000", label: "Shipping production systems" },
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
          href="/case-study/"
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
                10-week Interim CTO turnaround at Double Blind Bio.
              </h3>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Remediated a Sev 0 GCP + Vertex AI cost spike, restructured
                the engineering org, and handed the platform to the incoming
                permanent leadership, all in 10 weeks. The resulting AI
                architecture is the subject of a patent.
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
          subtitle="Each engagement starts with what&rsquo;s on your desk: the AI bill, the empty CTO seat, the roadmap you have to defend."
        />
        <div className="mt-12 grid gap-px bg-border/60 border border-border/60 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/#${s.slug}`}
              className="bg-background p-8 hover:bg-foreground/[0.03] transition-colors group"
            >
              <div className="text-xs tracking-display text-gold mb-3">
                ◆ PILLAR
              </div>
              <h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">
                {s.teaser}
              </p>
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
            Let&apos;s spend 30 minutes mapping the highest-impact move you
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
