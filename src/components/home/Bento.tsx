"use client";

import { motion } from "motion/react";
import { CountUp, Reveal, ease } from "../motion";
import { Arrow } from "../ui";

const card = "relative flex min-h-[300px] flex-col overflow-hidden rounded-[28px] p-7";

/** Radial "dial" of ticks that slowly turns — signals AI working in real time. */
function Dial() {
  return (
    <div className="relative mx-auto mt-2 grid size-36 place-items-center">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 text-ink/35"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 48 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="4"
            x2="50"
            y2={i % 4 === 0 ? 15 : 11}
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            transform={`rotate(${i * 7.5} 50 50)`}
          />
        ))}
      </motion.svg>
      <span className="grid size-14 place-items-center rounded-full bg-ink text-[13px] font-semibold tracking-wide text-white">AI</span>
    </div>
  );
}

export default function Bento() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {/* Dark highlight card */}
      <Reveal className={`${card} bg-ink text-white`}>
        <span className="grid size-11 place-items-center rounded-xl bg-white text-ink">
          <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
            <path d="m3 17 6-6 4 4 8-8M15 7h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <CountUp to={120} suffix="+" className="display mt-5 text-[4rem]" />
        <p className="mt-auto max-w-[16rem] text-[14px] leading-relaxed text-white/65">
          Projects delivered for clients across 4 countries — from strategy to execution.
        </p>
      </Reveal>

      {/* Presence + satisfaction (split) */}
      <div className="grid gap-3">
        <Reveal delay={0.06} className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-ink/15 bg-white/60 p-6 text-center">
          <div className="flex -space-x-2">
            {["US", "AE", "EG"].map((c, i) => (
              <motion.span
                key={c}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.1 }}
                className="grid size-11 place-items-center rounded-full bg-white text-[12px] font-semibold ring-2 ring-paper"
              >
                {c}
              </motion.span>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-ink-2">Offices in the USA, UAE & Egypt</p>
        </Reveal>
        <Reveal delay={0.1} className="flex items-center gap-4 rounded-[28px] bg-chip p-6">
          <CountUp to={98} suffix="%" className="display text-[2.5rem]" />
          <span className="text-[13px] leading-snug text-mute">Clients satisfied and returning</span>
        </Reveal>
      </div>

      {/* AI dial */}
      <Reveal delay={0.14} className={`${card} bg-chip`}>
        <Dial />
        <h3 className="mt-auto pt-6 font-[family-name:var(--font-display)] text-[1.35rem] font-semibold tracking-[-0.02em]">
          Real-time optimization
        </h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-mute">Machine learning tunes every campaign while it runs.</p>
      </Reveal>

      {/* Approach card */}
      <Reveal delay={0.18} className={`${card} bg-white ring-1 ring-line`}>
        <span className="font-[family-name:var(--font-display)] text-[3rem] leading-none text-accent">&ldquo;</span>
        <p className="mt-auto text-[15px] leading-relaxed text-ink-2">
          Kemet is harnessing the power of AI to scale your business with data-driven marketing solutions — not a prediction.
        </p>
        <p className="mt-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-mute">
          <span className="size-1.5 rounded-full bg-accent" /> Our approach
          <Arrow className="ml-auto size-3.5 text-ink" />
        </p>
      </Reveal>
    </div>
  );
}
