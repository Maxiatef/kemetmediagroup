import Hero from "@/components/home/Hero";
import ScrubText from "@/components/ScrubText";
import StackingProjects from "@/components/StackingProjects";
import ServiceList from "@/components/ServiceList";
import ProcessCards from "@/components/ProcessCards";
import ZoomReel from "@/components/ZoomReel";
import Marquee from "@/components/Marquee";
import BigTitle from "@/components/BigTitle";
import Bento from "@/components/home/Bento";
import Faq from "@/components/Faq";
import { Reveal, WordReveal } from "@/components/motion";
import { PillButton, Eyebrow } from "@/components/ui";
import { gallery, process, projects, reasons } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro statement */}
      <section className="container-x pb-10 pt-28 sm:pt-40">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <Reveal>
            <Eyebrow>Kemet</Eyebrow>
          </Reveal>
          <div>
            <ScrubText
              className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.8vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
              text="Kemet Marketing Solutions transforms how businesses in the USA and the Gulf region grow — through data, creativity, and automation. From digital to traditional channels, we blend strategy, technology and human insight to drive measurable results."
            />
          </div>
        </div>
        {/* NEW (SpartanAI vibe): bento stat cards */}
        <div className="mt-16 sm:mt-20">
          <Bento />
        </div>
      </section>

      {/* NEW (SpartanAI vibe): giant drifting title */}
      <BigTitle word="Our Work" />

      {/* Featured work — stacking cards */}
      <section className="pb-10">
        <div className="container-x flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">Featured work · ({projects.length})</p>
            <p className="max-w-md text-[17px] leading-relaxed text-ink-2/80">
              Excellence in creative work — websites, campaigns and content built for measurable growth.
            </p>
          </div>
          <Reveal>
            <PillButton href="/work" variant="light">
              View all work
            </PillButton>
          </Reveal>
        </div>
        <div className="container-x">
          <StackingProjects items={projects} />
        </div>
      </section>

      <Marquee items={["Featured Work", "Web Creativity", "Built for Impact", "Product Stories", "Signature Projects"]} />

      {/* Services */}
      <section className="container-x py-28 sm:py-36">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">Our expertise, your growth</p>
            <WordReveal text="The performance marketing savvy" className="h2 max-w-[13ch]" />
          </div>
          <Reveal>
            <PillButton href="/services" variant="light">
              All services
            </PillButton>
          </Reveal>
        </div>
        <ServiceList />
      </section>

      {/* Process — rising cards */}
      <ProcessCards steps={process} title="From insight to impact" />

      {/* Showreel zoom */}
      <ZoomReel
        images={gallery.filter((g) => g.type === "Website").map((g) => ({ src: g.image, name: g.name }))}
        title="SELECTED"
        caption="Websites, campaigns and brands built for measurable growth."
      />

      {/* Why Kemet */}
      <section className="container-x py-28 sm:py-40">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-4">Why Kemet?</p>
          <WordReveal text="Built different. Measured always." className="h2" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.07}
              className="group flex min-h-[260px] flex-col justify-between rounded-[28px] bg-white p-7 ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.07)]"
            >
              <span className="text-[14px] text-mute">0{i + 1}</span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.45rem] font-semibold leading-tight tracking-[-0.03em]">
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2/70">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEW (SpartanAI vibe): FAQ */}
      <section className="container-x pb-28 sm:pb-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">Common questions</p>
            <WordReveal text="Everything you need to know." className="h2 max-w-[11ch]" />
            <Reveal className="mt-8">
              <PillButton href="/contact">Ask us anything</PillButton>
            </Reveal>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}
