import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aanchal Jain is the founder of SOTA Advisory. A fractional CTO with 20+ years of engineering leadership at Block, Slack, Quantcast, and Razer.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | SOTA Advisory",
    description:
      "Aanchal Jain, Founder of SOTA Advisory. Twenty years turning technical strategy into working software.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">ABOUT</div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl md:whitespace-nowrap">
          Aanchal Jain, Founder of SOTA Advisory.
        </h1>
        <p className="mt-6 text-muted max-w-2xl leading-relaxed">
          Twenty years turning technical strategy into working software.
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
              AI strategy, AI cost reduction, interim CTO, technical due
              diligence
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-display text-gold mb-3">PRIOR</h3>
            <ul className="text-base space-y-1">
              <li>Double Blind Bio</li>
              <li>Block (Square)</li>
              <li>Slack</li>
              <li>Quantcast</li>
              <li>Razer</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-display text-gold mb-3">PATENTS</h3>
            <p className="text-base">
              4, spanning mobile software and AI infrastructure
            </p>
          </div>
        </aside>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p className="text-lg">
            Aanchal Jain has spent her career doing the same thing at
            different scales: taking systems that cost too much, move too
            slow, or carry too much risk, and rebuilding them so they
            don&apos;t.
          </p>
          <p>
            At <span className="text-gold">Double Blind Bio</span>, that
            meant tearing into the AI architecture of a clinical trials
            startup and cutting token costs 85%+, with a patent on the
            system that came out of it.
          </p>
          <p>
            At <span className="text-gold">Block (Square)</span>, AI-driven
            developer workflows lifted production-ready code generation 40%.
          </p>
          <p>
            At <span className="text-gold">Slack</span>, she led product for
            Slack Connect, security and compliance included.
          </p>
          <p>
            At <span className="text-gold">Quantcast</span>, legacy
            infrastructure became self-service platforms and operational
            costs dropped 50%.
          </p>
          <p>
            At <span className="text-gold">Razer</span>, three Android
            phones and three patents.
          </p>
          <div className="gold-divider my-8 max-w-[120px]" />
          <p className="text-lg">
            Five companies, same pattern. She builds the strategy herself,
            then hands over a system that works.
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
