import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | SOTA Advisory",
  description:
    "Aanchal Jain is the founder of SOTA Advisory, a fractional CTO with 20+ years of engineering leadership at Block, Slack, Quantcast, and Razer.",
};

export default function AboutPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">ABOUT</div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl whitespace-nowrap">
          Aanchal Jain, Founder of SOTA Advisory.
        </h1>
        <p className="mt-6 text-muted max-w-2xl leading-relaxed">
          A technology executive with 20+ years of engineering leadership,
          shipping AI-driven products at the scale most growth-stage startups
          aspire to.
        </p>
        <div className="mt-8">
          <a
            href="/SOTA-Advisory-One-Pager.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 border border-gold text-gold text-xs tracking-display hover:bg-gold hover:text-background transition-colors"
          >
            ↓ DOWNLOAD ONE-PAGER (PDF)
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-12 md:grid-cols-[1fr_2fr]">
        <aside className="space-y-8">
          <div className="relative aspect-square w-full overflow-hidden border border-gold/30">
            <Image
              src="/aanchal.jpg"
              alt="Aanchal Jain, Founder of SOTA Advisory"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-xs tracking-display text-gold mb-3">ROLE</h3>
            <p className="text-base">Founder & Fractional CTO</p>
          </div>
          <div>
            <h3 className="text-xs tracking-display text-gold mb-3">FOCUS</h3>
            <p className="text-base">
              AI strategy, engineering org design, technical due diligence
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-display text-gold mb-3">PRIOR</h3>
            <ul className="text-base space-y-1">
              <li>Block (Square)</li>
              <li>Slack</li>
              <li>Quantcast</li>
              <li>Razer</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-display text-gold mb-3">PATENTS</h3>
            <p className="text-base">3 in mobile software innovation</p>
          </div>
        </aside>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>
            At <span className="text-gold">Block (Square)</span>, she boosted
            production-ready AI code generation by 40% and managed four
            revenue products at $100M+ ARR.
          </p>
          <p>
            At <span className="text-gold">Slack</span>, she defined product
            strategy for Slack Connect, including the external user
            experiences and security policies that shaped how millions of
            organizations collaborate across boundaries.
          </p>
          <p>
            At <span className="text-gold">Quantcast</span>, she cut
            operational costs by 50% by transforming legacy systems into
            self-service platforms, turning infrastructure from a tax into a
            multiplier.
          </p>
          <p>
            At <span className="text-gold">Razer</span>, she shipped three
            Android phones and secured three patents in mobile software
            innovation.
          </p>
          <div className="gold-divider my-8 max-w-[120px]" />
          <p>
            As a fractional CTO, she brings depth to founders who need
            strategic technology leadership without the commitment of a
            full-time hire. Whether you&apos;re making your first technical
            hire or architecting for scale, she&apos;s the person in the room
            who&apos;s already made these calls before.
          </p>
          <p>
            She helps companies use AI and modern tech stacks to build
            competitive advantage, turning technology from a cost center into
            a growth engine.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-gold/40 p-10 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Ready to close the gap between your roadmap and your codebase?
            </h2>
            <p className="mt-2 text-muted">
              Start with a 30-minute discovery call.
            </p>
          </div>
          <Link
            href="https://calendly.com/jain-aanchal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gold text-background text-xs tracking-display hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            BOOK A CALL
          </Link>
        </div>
      </section>
    </>
  );
}
