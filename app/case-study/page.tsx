import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "10-week Interim CTO engagement at Double Blind Bio, an early-stage healthtech startup: 85% cloud cost reduction, engineering restructuring, and executive handover.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    title: "Case Study | SOTA Advisory",
    description:
      "10-week Interim CTO turnaround at Double Blind Bio: 85% AI spend reduction, 10x developer velocity, and a patent on the resulting architecture.",
    url: "/case-study",
    type: "article",
  },
};

const highlights = [
  { stat: "85%", label: "Daily cloud spend reduction" },
  { stat: "$1,957 → $300", label: "Per-day cost, post-remediation" },
  { stat: "10x", label: "Developer velocity improvement" },
  { stat: "10 wks", label: "End-to-end turnaround" },
];

const workstreams = [
  {
    title: "Cloud & AI Cost Optimization",
    body: "Identified and remediated a Sev 0 GCP and Vertex AI cost spike. Reduced daily cloud spend from $1,957 per day to under $300 per day, an 85% reduction, while maintaining critical system capabilities and extending runway. The resulting AI architecture is the subject of a patent.",
  },
  {
    title: "Engineering Leadership & Culture",
    body: "Rebuilt the engineering org around sprint discipline, on-call rotation, and blameless post-mortems, then moved the team to spec-driven development. Developer velocity: up 10x.",
  },
  {
    title: "Architecture & Product Delivery",
    body: "Directed the on-time delivery of the flagship modules. Architected an intelligent routing layer for the core AI agent, significantly improving system latency, response accuracy, and contextual memory.",
  },
  {
    title: "System Reliability & Data Pipelines",
    body: "Silent data failures and agent hallucinations were driving a steady stream of support tickets and slowing every new integration. Consolidated ingestion into a single pipeline (fix once, propagates everywhere) and rebuilt the agent's router to eliminate context loss and timeouts. Result: support load down, and new integrations became straightforward instead of bespoke.",
  },
  {
    title: "Compliance",
    body: "Drove the technical work and documentation to advance ongoing SOC 2 compliance certification.",
  },
  {
    title: "Executive Transition & Hiring",
    body: "Ran the technical hiring pipeline and authored a comprehensive strategy for a seamless handover to the incoming permanent executive.",
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">
          CASE STUDY · INTERIM CTO
        </div>
        <h1 className="font-serif text-4xl md:text-5xl max-w-3xl">
          10-week technical turnaround at Double Blind Bio.
        </h1>
        <p className="mt-6 text-muted max-w-3xl leading-relaxed">
          As Interim CTO at Double Blind Bio, an early-stage healthtech
          startup, I led a 10-week technical turnaround and organizational
          restructuring. The mandate: stabilize infrastructure, optimize AI
          compute costs, and establish a high-performing engineering culture
          before onboarding the permanent executive leadership.
        </p>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-4 border-t border-b border-border/60 py-10">
          {highlights.map((h) => (
            <div key={h.label} className="border-l border-gold/40 pl-5">
              <div className="font-serif text-3xl text-gold">{h.stat}</div>
              <div className="mt-2 text-base text-muted leading-relaxed">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workstreams */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-xs tracking-display text-gold mb-8">
          KEY ACCOMPLISHMENTS
        </div>
        <div className="grid gap-px bg-border/60 border border-border/60 md:grid-cols-2">
          {workstreams.map((w, i) => (
            <article key={w.title} className="bg-background p-8">
              <div className="text-xs tracking-display text-gold mb-3">
                ◆ {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="font-serif text-xl mb-3">{w.title}</h2>
              <p className="text-base text-muted leading-relaxed">{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-gold/40 p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Facing a similar turnaround?
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Let&apos;s talk about the highest-impact move you can make in the
            next 10 weeks.
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
