import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SOTA Advisory. Book a discovery call, send a note, or connect on LinkedIn.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact | SOTA Advisory",
    description:
      "Book a 30-minute discovery call with Aanchal Jain, or reach out by email or LinkedIn.",
    url: "/contact/",
  },
};

const channels = [
  {
    label: "EMAIL",
    value: "aanchal@sotaadvisory.com",
    href: "mailto:aanchal@sotaadvisory.com",
  },
  {
    label: "CALENDLY",
    value: "calendly.com/jain-aanchal/30min",
    href: "https://calendly.com/jain-aanchal/30min",
  },
  {
    label: "LINKEDIN",
    value: "in/aanchaljain16",
    href: "https://linkedin.com/in/aanchaljain16",
  },
  {
    label: "WEB",
    value: "sotaadvisory.com",
    href: "https://sotaadvisory.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-xs tracking-display text-gold mb-6">CONTACT</div>
        <h1 className="font-serif text-4xl md:text-5xl max-w-3xl">
          Let&apos;s talk about what&apos;s next for your company.
        </h1>
        <p className="mt-6 text-muted max-w-2xl leading-relaxed">
          The fastest way to start is a 30-minute discovery call. Prefer email?
          That works too. Pick whichever channel suits you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-px bg-border/60 border border-border/60 md:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-background p-8 hover:bg-foreground/[0.03] transition-colors group"
            >
              <div className="text-xs tracking-display text-gold mb-3">
                ◆ {c.label}
              </div>
              <div className="font-serif text-xl group-hover:text-gold transition-colors break-all">
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-gold/40 p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Book a discovery call.
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Thirty minutes. No deck. I&apos;ll spend the time with you on the
            highest-impact move you can make this quarter.
          </p>
          <a
            href="https://calendly.com/jain-aanchal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-6 py-3 bg-gold text-background text-xs tracking-display hover:bg-gold-light transition-colors"
          >
            OPEN CALENDLY
          </a>
        </div>
      </section>
    </>
  );
}
