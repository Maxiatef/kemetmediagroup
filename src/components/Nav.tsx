"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { nav, contact, services, projects } from "@/lib/data";
import { Arrow, PillButton } from "./ui";
import { ease } from "./motion";

type SubItem = { label: string; note: string; href: string; image: string };
const menus: Record<string, SubItem[]> = {
  "/services": services.map((s) => ({ label: s.title, note: s.short, href: `/services/${s.slug}`, image: s.image })),
  "/work": projects.map((p) => ({ label: p.name, note: p.tags.join(" · "), href: `/work/${p.slug}`, image: p.image })),
};

export default function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => {
    setOpen(false);
    setDrop(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
      >
        <div className="container-x">
          <div
            className={`flex h-16 items-center justify-between rounded-full pl-6 pr-2 transition-all duration-500 ${
              scrolled || open ? "bg-white/75 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5 backdrop-blur-xl" : ""
            }`}
          >
            <Link href="/" aria-label="Kemet home" className="relative z-10">
              <Image src="/img/logo-dark.png" alt="Kemet" width={800} height={118} priority className="h-[18px] w-auto" />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((n) => {
                const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                const sub = menus[n.href];
                if (sub) {
                  return (
                    <div
                      key={n.href}
                      className="relative"
                      onMouseEnter={() => setDrop(n.href)}
                      onMouseLeave={() => setDrop(null)}
                    >
                      <Link
                        href={n.href}
                        onFocus={() => setDrop(n.href)}
                        aria-haspopup="true"
                        aria-expanded={drop === n.href}
                        className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] transition-colors ${
                          active ? "text-ink" : "text-ink-2/70 hover:text-ink"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-black/[0.05]"
                            transition={{ duration: 0.5, ease }}
                          />
                        )}
                        {n.label}
                        <svg
                          viewBox="0 0 12 12"
                          className={`size-2.5 transition-transform duration-300 ${drop === n.href ? "rotate-180" : ""}`}
                          aria-hidden
                        >
                          <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                      <AnimatePresence>
                        {drop === n.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.35, ease }}
                            className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-3"
                          >
                            <div className="rounded-[22px] bg-white/95 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur-xl">
                              {sub.map((s, k) => (
                                <motion.div
                                  key={s.href}
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, ease, delay: 0.04 * k }}
                                >
                                  <Link
                                    href={s.href}
                                    onClick={() => setDrop(null)}
                                    className="group flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-paper"
                                  >
                                    <span className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-chip">
                                      <Image src={s.image} alt="" fill sizes="48px" className="object-cover" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="block text-[14px] font-medium leading-tight text-ink">{s.label}</span>
                                      <span className="mt-0.5 block truncate text-[12.5px] text-mute">{s.note}</span>
                                    </span>
                                    <Arrow className="size-3.5 shrink-0 -translate-x-1 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                  </Link>
                                </motion.div>
                              ))}
                              <Link
                                href={n.href}
                                onClick={() => setDrop(null)}
                                className="mt-1 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-[13px] text-white"
                              >
                                {n.href === "/services" ? "All services" : "View all work"}
                                <Arrow className="size-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`relative rounded-full px-4 py-2 text-[14px] transition-colors ${
                      active ? "text-ink" : "text-ink-2/70 hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-black/[0.05]"
                        transition={{ duration: 0.5, ease }}
                      />
                    )}
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <PillButton href="/contact">Let&apos;s talk</PillButton>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-10 grid size-12 place-items-center rounded-full bg-ink text-white md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease }}
            data-lenis-prevent
            className="fixed inset-0 z-40 flex flex-col justify-between gap-8 overflow-y-auto bg-paper px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="space-y-1">
              {nav.map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.05 }}
                >
                  <Link href={n.href} className="display block py-1 text-[2.75rem]">
                    {n.label}
                  </Link>
                  {menus[n.href] && (
                    <div className="flex flex-wrap gap-1.5 pb-3 pt-1">
                      {menus[n.href].map((s) => (
                        <Link key={s.href} href={s.href} className="rounded-full bg-chip px-3 py-1.5 text-[13px] text-ink-2">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="space-y-1 text-ink-2">
              <a href={`mailto:${contact.email}`} className="block">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="block">
                {contact.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
