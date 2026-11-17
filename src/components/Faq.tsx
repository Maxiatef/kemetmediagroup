"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ease } from "./motion";

export const faqs = [
  {
    q: "What services does Kemet offer?",
    a: "Four core services: Marketing Planning & Strategy, Media Buying & Performance Marketing, Branding & Creative Direction, and SEO & Growth Optimization — covering everything from strategy to execution.",
  },
  {
    q: "Which advertising platforms do you work with?",
    a: "Digital platforms including Meta, Google, TikTok, LinkedIn, YouTube and Snapchat, plus programmatic (display, CTV/OTT, native) and traditional media — TV, radio, outdoor and print.",
  },
  {
    q: "How do you use AI in our campaigns?",
    a: "We use AI for audience segmentation, ad optimization and programmatic buying — monitoring delivery in real time to reduce wasted spend and improve results.",
  },
  {
    q: "How will we see the results?",
    a: "Through transparent reporting and automated dashboards. Every campaign is measured, and every decision is backed by data you can see.",
  },
  {
    q: "Where are you based, and who do you work with?",
    a: "Our US office is in Clovis, California, with presence in the UAE and Egypt. We partner with businesses across the United States, the UAE and the wider Gulf region.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2.5">
      {faqs.map((f, i) => {
        const on = open === i;
        return (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.8, ease, delay: i * 0.05 }}
            className={`overflow-hidden rounded-[22px] transition-colors duration-500 ${on ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-line hover:bg-[#fafaf8]"}`}
          >
            <button
              onClick={() => setOpen(on ? null : i)}
              aria-expanded={on}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-[16px] font-medium tracking-[-0.01em] sm:text-[17px]">{f.q}</span>
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-500 ${on ? "rotate-45 bg-white/15" : "bg-chip"}`}
              >
                <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <p className="max-w-2xl px-6 pb-6 text-[15px] leading-relaxed text-white/65">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
