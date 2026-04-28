import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-border/60 sticky top-0 z-40 bg-background/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="SOTA Advisory home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8 text-sm">
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
            href="https://calendly.com/jain-aanchal"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 border border-gold text-gold text-xs tracking-display hover:bg-gold hover:text-background transition-colors"
          >
            BOOK A CALL
          </Link>
        </nav>
      </div>
    </header>
  );
}
