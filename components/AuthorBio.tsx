import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <aside className="mt-16 border border-border/60 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
      <div className="relative w-24 h-24 shrink-0 overflow-hidden border border-gold/30">
        <Image
          src="/aanchal.jpg"
          alt="Aanchal Jain, Founder of SOTA Advisory"
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="text-xs tracking-display text-gold mb-2">
          ABOUT THE AUTHOR
        </div>
        <div className="font-serif text-xl mb-2">Aanchal Jain</div>
        <p className="text-base text-muted leading-relaxed">
          Founder of SOTA Advisory. Twenty years turning technical strategy
          into working software, most recently as Interim CTO at Double Blind
          Bio. Ex-Block, Slack, Quantcast.{" "}
          <Link href="/about/" className="text-gold hover:underline">
            More about her work →
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="https://calendly.com/jain-aanchal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gold text-background text-xs tracking-display hover:bg-gold-light transition-colors"
          >
            BOOK A DISCOVERY CALL
          </Link>
        </div>
      </div>
    </aside>
  );
}
