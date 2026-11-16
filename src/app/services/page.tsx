import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProcessCards from "@/components/ProcessCards";
import ScrubText from "@/components/ScrubText";
import { Reveal } from "@/components/motion";
import { Arrow, Chip } from "@/components/ui";
import { process, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="360° AI-powered marketing"
        lead="We combine data, creativity and automation to deliver measurable marketing results — every service powered by AI and designed to optimize each stage of your marketing journey."
      />

      <section className="container-x grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 2) * 0.1}>
            <Link
              href={`/services/${s.slug}`}
              className="group block overflow-hidden rounded-[32px] bg-white p-2 ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[26px]">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[13px] backdrop-blur">
                  ({s.index})
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-6">
                  <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
                    {s.title}
                  </h2>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45 group-hover:bg-accent">
                    <Arrow className="size-4" />
                  </span>
                </div>
                <p className="mt-3 text-[15px] text-ink-2/75">{s.short}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.slice(0, 4).map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="container-x py-28 sm:py-40">
        <p className="eyebrow mb-8">Intelligent marketing, powered by AI. Designed for growth.</p>
        <ScrubText
          className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.8vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
          text="AI-driven planning and optimization, full integration of digital and traditional channels, transparent reporting with live dashboards, and proven results across industries."
        />
      </section>

      <ProcessCards steps={process} title="How we deliver" />
    </>
  );
}
