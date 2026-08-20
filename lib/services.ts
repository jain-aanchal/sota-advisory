export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
};

export const services: Service[] = [
  {
    slug: "interim-cto",
    title: "Interim CTO Leadership",
    short:
      "I step in during transitions and keep engineering moving, so you can run the search for your permanent technical leader without losing a quarter.",
    long: "Hiring, standups, architecture reviews, board updates, customer conversations. Best when the CTO seat is vacant, the roadmap can't wait, and momentum is worth more than a shortcut.",
  },
  {
    slug: "ai-technology-strategy",
    title: "AI & Technology Strategy",
    short:
      "I find the two or three places where AI actually changes your unit economics, then build the roadmap around those. Everything else waits.",
    long: "Best when you have a growing pile of AI bets and can't tell which two matter. I map the surface area, score by margin impact and feasibility, and produce a board-ready strategy that names what to build and what to kill.",
  },
  {
    slug: "ai-cost-reduction",
    title: "AI Cost Reduction",
    short:
      "I rearchitect AI infrastructure with embedded evals and observability, so you can see what every call costs before you decide what to cut. Most teams are paying for tokens they can't account for.",
    long: "Model routing, prompt hygiene, caching, batching, and vendor mix. Recent engagement: 85% AI spend reduction in weeks, with the resulting architecture the subject of a patent.",
  },
  {
    slug: "where-ai-runs",
    title: "Where AI Runs and Where It Doesn't",
    short:
      "I put AI on your screens, parsing, and workflows, and keep financial, margin, and pricing logic deterministic. A wrong number costs more than the AI ever saves.",
    long: "Best when AI has crept into places it shouldn't be (billing, pricing, quotes, compliance) and the risk is starting to feel real. I draw the line between what AI does well and what has to stay deterministic, and I redesign accordingly.",
  },
  {
    slug: "technical-due-diligence",
    title: "Technical Due Diligence",
    short:
      "I tell you what's true about the engineering, the people, and the risk before you acquire, invest, or bet the roadmap.",
    long: "For boards, investors, and acquirers. Independent read on code quality, infrastructure, security posture, team strength, and AI readiness. Delivered as a document your finance and legal teams can act on.",
  },
];
