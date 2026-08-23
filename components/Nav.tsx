"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/services/", label: "Services" },
  { href: "/case-study/", label: "Case Study" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

const CALENDLY = "https://calendly.com/jain-aanchal/30min";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-border/60 sticky top-0 z-40 bg-background/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="SOTA Advisory home" onClick={close}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-base">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gold text-gold text-xs tracking-display hover:bg-gold hover:text-background transition-colors"
          >
            BOOK A CALL
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-foreground/80 hover:text-gold transition-colors"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4 text-lg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-foreground/85 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center px-4 py-3 border border-gold text-gold text-xs tracking-display hover:bg-gold hover:text-background transition-colors"
            >
              BOOK A CALL
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
