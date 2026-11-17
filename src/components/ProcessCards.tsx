"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { PillButton } from "./ui";
import { WordReveal } from "./motion";

type Step = { step: string; title: string; text: string; image: string };

function StepCard({ s, i, total, progress }: { s: Step; i: number; total: number; progress: MotionValue<number> }) {
  const slot = 0.75 / total;
  const start = i * slot;
  const y = useTransform(progress, [start, start + slot], ["110%", "0%"]);
  const rotate = useTransform(progress, [start, start + slot], [6, 0]);
  const o = useTransform(progress, [start, start + slot * 0.6], [0, 1]);
  return (
    <motion.article
      style={{ y, rotate, opacity: o }}
      className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[#1b1b1b] text-white"
    >
      <div className="p-6 pb-5">
        <p className="text-right text-[14px] text-white/70">Step {s.step}</p>
        <h3 className="mt-6 font-[family-name:var(--font-display)] text-[1.6rem] font-semibold tracking-[-0.03em]">{s.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-white/60">{s.text}</p>
      </div>
      <div className="relative mt-auto aspect-[5/4] overflow-hidden rounded-[28px]">
        <Image src={s.image} alt="" fill sizes="25vw" className="object-cover" />
      </div>
    </motion.article>
  );
}

function CtaCard({ progress, total }: { progress: MotionValue<number>; total: number }) {
  const start = 0.75 * (total / (total + 1));
  const y = useTransform(progress, [start, 0.95], ["110%", "0%"]);
  const rotate = useTransform(progress, [start, 0.95], [6, 0]);
  const opacity = useTransform(progress, [start, start + 0.12], [0, 1]);
  return (
    <motion.article style={{ y, rotate, opacity }} className="flex h-full flex-col rounded-[28px] bg-white p-3 ring-1 ring-line">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-paper grid-bg">
        <div className="absolute left-1/2 top-1/2 aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffb489,#ff5b14_55%,#c73d00)] shadow-[0_30px_60px_rgba(255,91,20,0.35)]" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.9rem] font-semibold tracking-[-0.03em]">Start your project</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2/75">
          Ready to grow? Let&apos;s build a strategy powered by data, creativity and automation.
        </p>
        <div className="mt-auto pt-6">
          <PillButton href="/contact">Start a project</PillButton>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProcessCards({ steps, title = "How we work" }: { steps: Step[]; title?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section>
      {/* Desktop: pinned, cards rise in one by one */}
      <div ref={ref} className="relative hidden h-[320vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container-x">
            <div className="mb-10 flex items-end justify-between">
              <WordReveal text={title} className="h2" />
              <p className="eyebrow">(Process)</p>
            </div>
            <div className="grid h-[62vh] max-h-[600px] grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <StepCard key={s.step} s={s} i={i} total={steps.length + 1} progress={scrollYProgress} />
              ))}
              <CtaCard progress={scrollYProgress} total={steps.length} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: simple stacked reveal */}
      <div className="container-x py-24 lg:hidden">
        <WordReveal text={title} className="h2 mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <motion.article
              key={s.step}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-[28px] bg-[#1b1b1b] text-white"
            >
              <div className="p-6">
                <p className="text-[14px] text-white/60">Step {s.step}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">{s.text}</p>
              </div>
              <div className="relative aspect-[16/10]">
                <Image src={s.image} alt="" fill sizes="100vw" className="object-cover" />
              </div>
            </motion.article>
          ))}
          <div className="rounded-[28px] bg-white p-6 ring-1 ring-line">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">Start your project</h3>
            <p className="mt-3 text-[15px] text-ink-2/75">Let&apos;s build a strategy powered by data, creativity and automation.</p>
            <div className="mt-6">
              <PillButton href="/contact">Start a project</PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
