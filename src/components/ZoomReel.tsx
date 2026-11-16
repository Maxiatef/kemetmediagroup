"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function ZoomReel({
  images,
  title = "SHOWREEL",
  caption,
}: {
  images: { src: string; name: string }[];
  title?: string;
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const width = useTransform(scrollYProgress, [0, 0.7], ["54vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.7], ["56vh", "100vh"]);
  const radius = useTransform(scrollYProgress, [0, 0.7], [36, 0]);
  const titleX = useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]);
  const yearX = useTransform(scrollYProgress, [0, 0.6], ["0%", "30%"]);
  const textO = useTransform(scrollYProgress, [0.35, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const captionO = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 2600);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.p
          style={{ x: titleX, opacity: textO }}
          className="display absolute left-[clamp(16px,4vw,48px)] top-[10vh] z-0 text-[clamp(3rem,10vw,9.5rem)]"
        >
          {title}
        </motion.p>
        <motion.p
          style={{ x: yearX, opacity: textO }}
          className="display absolute bottom-[10vh] right-[clamp(16px,4vw,48px)] z-20 text-[clamp(3rem,10vw,9.5rem)]"
        >
          ©{new Date().getFullYear()}
        </motion.p>

        <motion.div
          style={{ width, height, borderRadius: radius }}
          className="relative z-10 overflow-hidden bg-[#d9d9d6] max-sm:!w-[92vw]"
        >
          <motion.div style={{ scale: imgScale }} className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image src={images[idx].src} alt={images[idx].name} fill sizes="100vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <motion.div
            style={{ opacity: captionO }}
            className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-12"
          >
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.75rem)] font-semibold tracking-[-0.03em]">
              {images[idx].name}
            </p>
            {caption && <p className="hidden max-w-xs text-right text-[15px] text-white/75 sm:block">{caption}</p>}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
