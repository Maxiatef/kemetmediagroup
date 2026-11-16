"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import type { Project } from "@/lib/data";
import { Chip, PillButton } from "./ui";

function Card({
  p,
  i,
  total,
  progress,
}: {
  p: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - i) * 0.05;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const imgScale = useTransform(progress, [i / total, (i + 1) / total], [1.15, 1]);
  const dim = useTransform(progress, [(i + 1) / total, 1], [0, i === total - 1 ? 0 : 0.25]);

  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center">
      <motion.article
        style={{ scale, top: `calc(${i * 22}px)` }}
        className="relative w-full origin-top overflow-hidden rounded-[28px] bg-[#e6e6e3] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:rounded-[36px] sm:p-2.5"
      >
        <div className="grid h-[80svh] grid-rows-[1fr_auto] gap-2 md:h-auto md:grid-rows-none md:grid-cols-[1.45fr_1fr] md:aspect-[16/8.2]">
          <div className="relative overflow-hidden rounded-[22px] bg-[#d9d9d6] sm:rounded-[28px]">
            <motion.div style={{ scale: imgScale }} className="absolute inset-0">
              <Image
                src={p.image}
                alt={`${p.name} project`}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col rounded-[22px] bg-white p-6 sm:rounded-[28px] sm:p-9">
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <h3 className="display mt-6 text-[clamp(2.2rem,4vw,3.75rem)] sm:mt-8">{p.name}</h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-2/80">{p.summary}</p>
            <div className="my-6 border-t border-dashed border-line sm:my-8" />
            <div className="mt-auto flex items-end justify-between gap-4">
              <span className="display text-[clamp(2.75rem,4.6vw,4.25rem)]">{p.highlight.value}</span>
              <span className="pb-2 text-right text-[14px] text-mute">{p.highlight.label}</span>
            </div>
            <div className="mt-6">
              <PillButton href={`/work/${p.slug}`} full>
                View project details
              </PillButton>
            </div>
          </div>
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-paper" />
      </motion.article>
    </div>
  );
}

export default function StackingProjects({ items }: { items: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="relative">
      {items.map((p, i) => (
        <Card key={p.slug} p={p} i={i} total={items.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}
