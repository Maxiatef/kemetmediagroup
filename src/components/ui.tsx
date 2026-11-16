import Link from "next/link";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Pill button with a circular arrow badge that rotates on hover. */
export function PillButton({
  href,
  children,
  variant = "dark",
  className = "",
  full = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "accent";
  className?: string;
  full?: boolean;
}) {
  const styles = {
    dark: "bg-ink text-white",
    light: "bg-white text-ink ring-1 ring-line",
    accent: "bg-accent text-white",
  }[variant];
  const badge = {
    dark: "bg-white text-ink",
    light: "bg-ink text-white",
    accent: "bg-white text-accent",
  }[variant];
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const inner = (
    <>
      <span className="pl-5 pr-3 text-[15px] font-medium tracking-tight">{children}</span>
      <span
        className={`grid size-10 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-45 ${badge}`}
      >
        <Arrow className="size-4" />
      </span>
    </>
  );
  const cls = `group inline-flex h-12 items-center ${full ? "w-full justify-between" : ""} rounded-full p-1 transition-transform duration-300 active:scale-[0.98] ${styles} ${className}`;
  return external ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex h-9 items-center rounded-full px-4 text-[13px] ${
        dark ? "bg-white/10 text-white/80" : "bg-chip text-ink-2"
      }`}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] ${
        dark ? "bg-white/10 text-white/80" : "bg-white text-ink-2 ring-1 ring-line"
      }`}
    >
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
