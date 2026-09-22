import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for isn't here. Head back to the SOTA Advisory home page, services, or case study.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-32">
      <div className="text-xs tracking-display text-gold mb-6">404</div>
      <h1 className="font-serif text-4xl md:text-5xl max-w-2xl">
        This page didn&rsquo;t make it to production.
      </h1>
      <p className="mt-6 text-muted max-w-2xl leading-relaxed">
        The URL you followed no longer exists, or was mistyped. Try one of
        these instead.
      </p>
      <ul className="mt-10 space-y-3 text-base">
        <li>
          <Link href="/" className="text-gold hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services/" className="text-gold hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="/case-study/" className="text-gold hover:underline">
            Case study
          </Link>
        </li>
        <li>
          <Link href="/about/" className="text-gold hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact/" className="text-gold hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
}
