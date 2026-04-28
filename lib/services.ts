export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
};

export const services: Service[] = [
  {
    slug: "ai-technology-strategy",
    title: "AI & Technology Strategy",
    short:
      "Identify high-impact AI opportunities, build your roadmap, and position your tech stack for the next wave, not the last one.",
    long: "We map the AI surface area of your business, prioritize bets by ROI and feasibility, and produce a board-ready strategy your team can actually ship against.",
  },
  {
    slug: "engineering-org-design",
    title: "Engineering Organization Design",
    short:
      "Teams, hiring plans, and culture that attract top talent and ship reliably, from your first engineer to your fiftieth.",
    long: "Org charts, leveling, hiring sequences, performance frameworks, and the operating cadences that turn a small team into a durable engineering organization.",
  },
  {
    slug: "architecture-scalability",
    title: "Architecture & Scalability",
    short:
      "Review and redesign your platform to handle growth without accumulating the technical debt that slows you down later.",
    long: "Architecture reviews, scalability roadmaps, and pragmatic refactor plans that balance velocity today with the leverage you need next year.",
  },
  {
    slug: "technical-due-diligence",
    title: "Technical Due Diligence",
    short:
      "For investors and boards: a thorough assessment of engineering quality, team capability, and technical risk before major decisions.",
    long: "Independent diligence for funding rounds, M&A, and board reviews, covering code quality, infrastructure, security posture, team strength, and AI readiness.",
  },
  {
    slug: "interim-cto",
    title: "Interim CTO Leadership",
    short:
      "Step in during transitions to keep engineering momentum, providing steady leadership while you search for your permanent technical leader.",
    long: "Hands-on executive leadership during a CTO gap, from running standups and architecture reviews to representing engineering to the board and customers.",
  },
  {
    slug: "founder-coaching",
    title: "Founder Technical Coaching",
    short:
      "One-on-one guidance for non-technical founders learning to evaluate, manage, and communicate with their engineering teams effectively.",
    long: "A trusted thinking partner for founders: how to evaluate engineers, read technical proposals, set realistic expectations, and grow into the technical leader your company needs.",
  },
];
