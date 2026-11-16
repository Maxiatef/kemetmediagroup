import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import StackingProjects from "@/components/StackingProjects";
import ZoomReel from "@/components/ZoomReel";
import { Reveal, WordReveal } from "@/components/motion";
import { gallery, projects } from "@/lib/data";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Creative work with incredible people"
        lead="We take a comprehensive approach to building brands — helping local companies enter the market and well-known brands expand their audience."
      />

      <section className="container-x">
        <p className="eyebrow">Case studies · ({projects.length})</p>
        <StackingProjects items={projects} />
      </section>

      <ZoomReel
        images={gallery.map((g) => ({ src: g.image, name: g.name }))}
        title="MORE WORK"
        caption="Website design & development, graphic design, logo & branding, print & signage."
      />

      <section className="container-x py-28 sm:py-36">
        <div className="mb-14">
          <p className="eyebrow mb-4">Recent work</p>
          <WordReveal text="Websites, brands & more" className="h2" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 0.08} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#e2e2df]">
                <Image
                  src={g.image}
                  alt={g.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between px-1">
                <h3 className="font-[family-name:var(--font-display)] text-[1.25rem] font-semibold tracking-[-0.02em]">{g.name}</h3>
                <span className="text-[14px] text-mute">{g.type}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
