export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="display text-[clamp(2rem,5vw,4.5rem)] text-ink/90">{t}</span>
            <span className="size-3 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
