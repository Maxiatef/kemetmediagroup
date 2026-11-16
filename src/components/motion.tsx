"use client";

import { animate, motion, useInView, useMotionValue, useTransform, type HTMLMotionProps } from "motion/react";
import { useEffect, useRef } from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  ...rest
}: { children: React.ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Words slide up from a mask, one after another. */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = "h2",
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  immediate?: boolean;
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } })}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 1, ease } } }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Number counts up once visible. */
export function CountUp({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(to > 1000 ? to - 40 : 0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 2, ease });
    return () => c.stop();
  }, [inView, mv, to]);
  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
