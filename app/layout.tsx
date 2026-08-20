import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://sotaadvisory.com";
const DESCRIPTION =
  "Fractional CTO and AI strategy advisory for growth-stage startups. Strategy that ships, from Aanchal Jain, ex-Block, Slack, Quantcast.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SOTA Advisory | Fractional CTO & AI Strategy",
    template: "%s | SOTA Advisory",
  },
  description: DESCRIPTION,
  applicationName: "SOTA Advisory",
  authors: [{ name: "Aanchal Jain", url: SITE_URL }],
  creator: "Aanchal Jain",
  publisher: "SOTA Advisory",
  keywords: [
    "fractional CTO",
    "interim CTO",
    "AI strategy",
    "AI cost reduction",
    "technical due diligence",
    "engineering leadership",
    "growth-stage startup",
    "Aanchal Jain",
    "SOTA Advisory",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "SOTA Advisory",
    title: "SOTA Advisory | Fractional CTO & AI Strategy",
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SOTA Advisory · Fractional CTO & AI Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOTA Advisory | Fractional CTO & AI Strategy",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aanchal Jain",
  jobTitle: "Founder & Fractional CTO",
  url: SITE_URL,
  image: `${SITE_URL}/aanchal.jpg`,
  email: "mailto:aanchal@sotaadvisory.com",
  sameAs: ["https://linkedin.com/in/aanchaljain16"],
  description:
    "Founder of SOTA Advisory. 20+ years of engineering leadership at Block, Slack, Quantcast, and Razer. Recent engagement: 85% AI spend reduction and 10x developer velocity improvement at Double Blind Bio as Interim CTO. Holds 4 patents spanning mobile software and AI infrastructure.",
  knowsAbout: [
    "Fractional CTO",
    "Interim CTO leadership",
    "AI strategy",
    "AI agents",
    "AI cost reduction",
    "Cloud and AI cost optimization",
    "AI infrastructure",
    "AI observability",
    "Technical due diligence",
    "Engineering organization design",
    "Developer velocity",
    "Spec-driven development",
  ],
  award: [
    "Patent on AI infrastructure architecture (Double Blind Bio)",
    "3 patents in mobile software innovation (Razer)",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SOTA Advisory",
    url: SITE_URL,
  },
  alumniOf: [
    { "@type": "Organization", name: "Block (Square)" },
    { "@type": "Organization", name: "Slack" },
    { "@type": "Organization", name: "Quantcast" },
    { "@type": "Organization", name: "Razer" },
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SOTA Advisory",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    "SOTA Advisory provides fractional and interim CTO leadership, AI strategy, cloud and AI cost optimization, AI agent architecture, and technical due diligence for growth-stage startups. Recent engagement delivered 85% AI spend reduction and 10x developer velocity at Double Blind Bio.",
  slogan: "Strategy that ships",
  email: "aanchal@sotaadvisory.com",
  areaServed: "Worldwide",
  founder: {
    "@type": "Person",
    name: "Aanchal Jain",
    url: SITE_URL,
  },
  sameAs: ["https://linkedin.com/in/aanchaljain16"],
  serviceType: [
    "Fractional CTO",
    "Interim CTO Leadership",
    "AI Strategy",
    "AI Cost Reduction",
    "Cloud and AI Cost Optimization",
    "AI Agent Architecture",
    "AI Observability",
    "Technical Due Diligence",
    "Engineering Organization Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Cloudflare Web Analytics: cookie-free, aggregate pageviews only */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "bdd6df8543c1412c95ba0b6d0e08bd46"}'
        />
      </body>
    </html>
  );
}
