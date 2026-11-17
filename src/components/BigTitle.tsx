"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";

function Asterisk() {
  return (
    <svg viewBox="0 0 100 100" className="mx-[0.25em] inline-block h-[0.62em] w-[0.62em] shrink-0 text-ink/10" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x="46" y="2" width="8" height="48" rx="4" fill="currentColor" transform={`rotate(${i * 30} 50 50)`} />
      ))}
    </svg>
  );
}

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/**
 * Giant repeating word that drifts on its own, and speeds up while you scroll
 * (faster scroll = faster drift, then it eases back to the base speed).
 */
export default function BigTitle({
  word,
  speed = 1, // base drift, % of one copy per second
  reverse = false,
}: {
  word: string;
  speed?: number;
  reverse?: boolean;
}) {
  const base = useMotionValue(0);
  const rot = useRef(0);
  const star = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 60, stiffness: 120, mass: 1.2 });
  const boost = useTransform(smooth, [-2000, 0, 2000], [3, 0, 3], { clamp: false });

  // 4 identical copies; shifting by one copy (-25%) loops seamlessly.
  const x = useTransform(base, (v) => `${wrap(-25, 0, v)}%`);
  const dir = reverse ? -1 : 1;

  useAnimationFrame((_, delta) => {
    const factor = 1 + Math.abs(boost.get());
    const move = -dir * speed * factor * (delta / 1000);
    base.set(base.get() + move);
    rot.current += 12 * factor * (delta / 1000);
    star.set(rot.current);
  });

  return (
    <div className="overflow-hidden py-6 sm:py-10" aria-label={word}>
      <motion.div style={{ x }} className="flex w-max items-center whitespace-nowrap will-change-transform" aria-hidden>
        {Array.from({ length: 4 }).map((_, c) => (
          <span key={c} className="flex">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="display flex items-center text-[clamp(4.5rem,14vw,13rem)] leading-none">
                {word}
                <motion.span style={{ rotate: star }} className="inline-flex">
                  <Asterisk />
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
