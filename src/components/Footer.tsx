"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLenis } from "lenis/react";
import { contact, nav, services, socials } from "@/lib/data";
import { Arrow } from "./ui";

export default function Footer() {
  const lenis = useLenis();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const leftX = useTransform(scrollYProgress, [0, 0.55], ["-30%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.55], ["30%", "0%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.6], [-180, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [0.4, 1]);
  const pillRotate = useTransform(scrollYProgress, [0, 0.55], [-14, -3]);

  return (
    <footer ref={ref} className="px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="relative overflow-hidden rounded-[28px] bg-ink text-white sm:rounded-[40px]">
        {/* Big CTA */}
        <Link
          href="/contact"
          aria-label="Start a project with Kemet"
          className="group relative block overflow-hidden border-b border-white/10 py-20 grid-bg-dark sm:py-28"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[120px]" />
          <div className="relative flex items-center justify-center gap-[2.5vw] px-4">
            <motion.span style={{ x: leftX }} className="display text-[clamp(3.5rem,13vw,13rem)] uppercase">
              Let&apos;s
            </motion.span>
            <motion.span
              style={{ rotate, scale }}
              className="grid aspect-square w-[clamp(3.5rem,11vw,10.5rem)] shrink-0 place-items-center rounded-full bg-white text-ink transition-colors duration-500 group-hover:bg-accent group-hover:text-white"
            >
              <Arrow className="w-[42%] transition-transform duration-500 group-hover:rotate-45" />
            </motion.span>
            <motion.span
              style={{ x: rightX, rotate: pillRotate }}
              className="display rounded-[clamp(14px,2vw,28px)] bg-gradient-to-br from-accent-2 to-accent px-[0.18em] pb-[0.06em] pt-[0.1em] text-[clamp(3.5rem,13vw,13rem)] uppercase shadow-[0_0_60px_rgba(255,91,20,0.45)] ring-1 ring-white/30"
            >
              Work
            </motion.span>
          </div>
          <p className="relative mt-10 text-center text-[15px] text-white/50">
            It&apos;s all about unique thinking — creativity and quality for complex problems, made simple.
          </p>
        </Link>

        {/* Columns */}
        <div className="grid gap-12 px-6 py-16 sm:px-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Image src="/img/logo-light.png" alt="Kemet" width={800} height={118} className="h-6 w-auto" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/55">
              Global presence. Local insight. AI-powered marketing for brands across the USA and the Gulf region.
            </p>
            <div className="mt-8 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full bg-white/10 text-[12px] font-medium text-white/80 transition-colors hover:bg-white hover:text-ink"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[15px] font-medium">Company</h4>
            <ul className="mt-5 space-y-3 text-[15px] text-white/55">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[15px] font-medium">Services</h4>
            <ul className="mt-5 space-y-3 text-[15px] text-white/55">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[15px] font-medium">Contact</h4>
            <div className="mt-5 space-y-3 text-[15px] text-white/55">
              <a href={`mailto:${contact.email}`} className="block text-white transition-colors hover:text-accent-2">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="block text-white transition-colors hover:text-accent-2">
                {contact.phone}
              </a>
              <a href={contact.mapUrl} target="_blank" rel="noreferrer" className="block pt-2 hover:text-white">
                {contact.address}
                <br />
                {contact.city}
              </a>
              <p className="pt-2">{contact.offices.join(" · ")}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-6 text-[13px] text-white/40 sm:flex-row sm:px-12">
          <p>© {new Date().getFullYear()} Kemet Marketing Solutions. All rights reserved.</p>
          <button
            onClick={() => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <Arrow className="size-3.5 -rotate-45" />
          </button>
        </div>
      </div>
    </footer>
  );
}
