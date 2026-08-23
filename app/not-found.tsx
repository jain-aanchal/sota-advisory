import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
      <div className="text-xs tracking-display text-gold mb-6">404</div>
      <h1 className="font-serif text-4xl md:text-5xl max-w-2xl">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-6 text-base text-muted max-w-xl leading-relaxed">
        Try one of the pages below, or head back to the home page.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 text-base">
        <Link href="/" className="hover:text-gold">Home</Link>
        <span className="text-muted">·</span>
        <Link href="/services/" className="hover:text-gold">Services</Link>
        <span className="text-muted">·</span>
        <Link href="/case-study/" className="hover:text-gold">Case Study</Link>
        <span className="text-muted">·</span>
        <Link href="/testimonials/" className="hover:text-gold">Testimonials</Link>
        <span className="text-muted">·</span>
        <Link href="/about/" className="hover:text-gold">About</Link>
        <span className="text-muted">·</span>
        <Link href="/contact/" className="hover:text-gold">Contact</Link>
      </div>
    </section>
  );
}
