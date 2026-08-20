export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
};

export const services: Service[] = [
  {
    slug: "ai-strategy-observability",
    title: "AI Strategy, Observability-First",
    short:
      "Measure before you build. I instrument model performance, token spend, and user outcomes so every AI bet is grounded in data, not vibes.",
    long: "Observability-first AI means you never ship a model, agent, or workflow you can't explain to the board. I stand up the metrics, evals, and dashboards first, then map the AI surface area of your business, prioritize bets by ROI and feasibility, and produce a board-ready strategy your team can actually ship against.",
  },
  {
    slug: "ai-cost-unit-economics",
    title: "AI Cost & Unit Economics",
    short:
      "Move AI from experimental burn to a predictable, high-margin cost structure. Recent engagement: 85% AI spend reduction in weeks.",
    long: "I audit inference and token spend end-to-end: model routing, prompt hygiene, caching, batching, and vendor mix. Then I put controls in place, monitored budgets, per-feature unit costs, and margin-aware guardrails, so AI stays a lever, not a leak.",
  },
  {
    slug: "custom-ai-builds",
    title: "Custom AI Builds",
    short:
      "Scoped builds, from architecture to production, that I take on personally so nothing gets lost between your strategy and your shipped product.",
    long: "Twenty years of shipping software. I take on scoped custom builds personally, from architecture through production, for operators who need the platform to just work. Ideal when the roadmap has a critical technical bet and you'd rather not hand it to an agency.",
  },
  {
    slug: "interim-cto",
    title: "Fractional & Interim CTO Leadership",
    short:
      "Full technical ownership during a transition, or an ongoing fractional partner for founders who need depth without a full-time hire.",
    long: "Full technical ownership: hiring, standups, architecture reviews, board updates, customer conversations. I step in during CTO gaps or partner long-term with founders who need a strategic technology leader without the full-time commitment.",
  },
  {
    slug: "engineering-org-design",
    title: "Engineering Organization Design",
    short:
      "Teams, hiring plans, and operating cadences that scale from 5 to 50 engineers without losing founder-speed.",
    long: "Org charts, leveling, hiring sequences, performance frameworks, and cross-functional operating cadences. The goal: a durable engineering organization that keeps shipping as it grows.",
  },
  {
    slug: "architecture-diligence",
    title: "Architecture & Technical Due Diligence",
    short:
      "Platform reviews, scalability roadmaps, and independent diligence for investors and boards before major decisions.",
    long: "Architecture reviews and pragmatic refactor plans that balance velocity today with the leverage you need next year. For investors and boards: independent diligence covering code quality, infrastructure, security posture, team strength, and AI readiness.",
  },
];
