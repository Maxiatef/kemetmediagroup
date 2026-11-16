"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { services } from "@/lib/data";
import { Arrow } from "./ui";
import { ease } from "./motion";

/** Large service rows; hovering opens the row and reveals details. */
export default function ServiceList() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="border-t border-line">
      {services.map((s, i) => {
        const open = active === i;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease, delay: i * 0.06 }}
            onMouseEnter={() => setActive(i)}
            className="border-b border-line"
          >
            <Link href={`/services/${s.slug}`} className="group block py-7 sm:py-9" onFocus={() => setActive(i)}>
              <div className="flex items-center gap-5 sm:gap-10">
                <span className="w-10 shrink-0 text-[14px] text-mute">({s.index})</span>
                <h3
                  className={`flex-1 font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.6vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] transition-colors duration-500 ${
                    open ? "text-ink" : "text-ink/35"
                  }`}
                >
                  {s.title}
                </h3>
                <span
                  className={`grid size-12 shrink-0 place-items-center rounded-full transition-all duration-500 ${
                    open ? "rotate-45 bg-accent text-white" : "bg-white text-ink ring-1 ring-line"
                  }`}
                >
                  <Arrow className="size-4" />
                </span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.7, ease }}
                className="overflow-hidden"
              >
                <div className="grid gap-6 pt-7 sm:pl-[5.5rem] md:grid-cols-[1fr_320px]">
                  <ul className="grid gap-x-8 gap-y-2.5 text-[15px] text-ink-2/80 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="relative hidden aspect-[16/9] overflow-hidden rounded-2xl md:block">
                    <Image src={s.image} alt="" fill sizes="320px" className="object-cover" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
