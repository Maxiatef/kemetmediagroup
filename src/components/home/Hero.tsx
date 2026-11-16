"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ease, CountUp } from "../motion";
import { Eyebrow, PillButton } from "../ui";

const line1 = "AI-POWERED".split("");
const line2 = "MARKETING".split("");

function Letters({ chars, delay }: { chars: string[]; delay: number }) {
  return (
    <span className="flex overflow-hidden">
      {chars.map((c, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, ease, delay: delay + i * 0.035 }}
          className="inline-block"
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

/** Soft glass composition — pure CSS, light and calm. */
function GlassScene({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const r1 = useTransform(progress, [0, 1], [0, 40]);
  const r2 = useTransform(progress, [0, 1], [0, -60]);
  const y1 = useTransform(progress, [0, 1], ["0%", "-18%"]);
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(120%_90%_at_30%_20%,#ffffff_0%,#e9e9e6_45%,#d4d4d0_100%)]">
      <motion.div
        style={{ rotate: r1, y: y1 }}
        className="absolute left-[18%] top-[14%] aspect-square w-[46%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(255,255,255,0.15)_55%,rgba(0,0,0,0.06)_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9),inset_-30px_-40px_80px_rgba(0,0,0,0.08),0_40px_80px_rgba(0,0,0,0.12)] backdrop-blur-md"
      />
      <motion.div
        style={{ rotate: r2 }}
        className="absolute left-[8%] top-[34%] h-[38%] w-[52%] rounded-full bg-gradient-to-br from-white/70 to-black/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8),0_30px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[22%] aspect-square w-[24%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffb489,#ff5b14_55%,#c73d00)] shadow-[0_40px_90px_rgba(255,91,20,0.35)]"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[40%] aspect-square w-[20%] rounded-full bg-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9),0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleO = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] grid-bg [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="container-x relative">
        <motion.h1
          style={{ y: titleY, opacity: titleO }}
          aria-label="AI-Powered Marketing"
          className="display text-[clamp(3.2rem,12.6vw,12.5rem)] leading-[0.86]"
        >
          <Letters chars={line1} delay={0.1} />
          <span className="flex items-end justify-between gap-6">
            <Letters chars={line2} delay={0.35} />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1 }}
              className="mb-[1.2vw] hidden max-w-[17rem] text-[15px] font-normal leading-snug tracking-normal text-ink-2 lg:block"
            >
              Data-driven marketing that scales your business — not a prediction.
            </motion.span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.5 }}
          className="relative mt-8 sm:mt-10"
        >
          <motion.div
            style={{ scale: cardScale }}
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[16/10] sm:rounded-[36px] lg:aspect-[16/8]"
          >
            <GlassScene progress={scrollYProgress} />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
              <div className="max-w-xl">
                <Eyebrow>What we do</Eyebrow>
                <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
                  Tailored AI-powered marketing for a smarter, stronger brand.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PillButton href="/services" variant="light">
                    Explore services
                  </PillButton>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease, delay: 1.2 }}
                className="hidden w-[300px] shrink-0 rounded-[24px] bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-white backdrop-blur-xl sm:block"
              >
                <div className="flex items-baseline justify-between">
                  <CountUp to={98} suffix="%" className="display text-6xl" />
                  <span className="text-[13px] text-mute">Satisfaction</span>
                </div>
                <div className="my-5 h-px bg-line" />
                <div className="flex items-baseline justify-between">
                  <CountUp to={120} suffix="+" className="display text-6xl" />
                  <span className="text-[13px] text-mute">Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
