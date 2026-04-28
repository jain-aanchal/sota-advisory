export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <div className="text-xs tracking-display text-gold mb-4">{eyebrow}</div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
