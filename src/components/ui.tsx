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

export function SocialIcon({ name, className = "size-[18px]" }: { name: string; className?: string }) {
  switch (name) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.8V14h2.7v8h3Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M16.6 2.5c.4 2.4 1.9 3.9 4.2 4.1v3.3c-1.6 0-3-.5-4.2-1.3v6.3a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.4a3.1 3.1 0 1 0 2.2 3V2.5h3.3Z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path
            fillRule="evenodd"
            d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z"
          />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.5l11.2 14.5Z" />
        </svg>
      );
    default:
      return null;
  }
}
