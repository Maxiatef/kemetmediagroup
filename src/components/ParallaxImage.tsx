"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  className = "aspect-[16/9] sm:aspect-[16/8]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const clip = useTransform(scrollYProgress, [0, 0.35], ["inset(8% 6% 8% 6% round 36px)", "inset(0% 0% 0% 0% round 36px)"]);
  return (
    <motion.div ref={ref} style={{ clipPath: clip }} className={`relative overflow-hidden bg-[#d9d9d6] ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>
    </motion.div>
  );
}
