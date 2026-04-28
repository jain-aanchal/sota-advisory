import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start leading-none ${className}`}>
      <span className="font-serif text-2xl tracking-display text-silver">
        SOTA
      </span>
      <span className="text-[0.6rem] tracking-display text-gold mt-1">
        ADVISORY
      </span>
    </div>
  );
}

export function LogoImage({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="SOTA Advisory"
      width={260}
      height={142}
      className={`object-contain h-auto w-auto ${className}`}
      style={{ maxHeight: 110 }}
    />
  );
}

export default Logo;
