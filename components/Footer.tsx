import Link from "next/link";
import { LogoImage } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <LogoImage />
          <p className="mt-4 text-sm text-muted max-w-xs">
            Operator-grade fractional CTO and AI strategy for growth-stage
            startups.
          </p>
        </div>
        <div>
          <h3 className="text-xs tracking-display text-gold mb-4">EXPLORE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs tracking-display text-gold mb-4">CONNECT</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:jain.aanchal@gmail.com" className="hover:text-gold">
                jain.aanchal@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/aanchaljain16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/jain-aanchal/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Calendly
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-muted flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} SOTA Advisory. All rights reserved.</span>
          <span>Founded by Aanchal Jain</span>
        </div>
      </div>
    </footer>
  );
}
