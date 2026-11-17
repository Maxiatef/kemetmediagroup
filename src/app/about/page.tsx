import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ScrubText from "@/components/ScrubText";
import Marquee from "@/components/Marquee";
import { CountUp, Reveal, WordReveal } from "@/components/motion";
import { PillButton } from "@/components/ui";
import { contact, stats, team, values } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

const timeline = [
  { year: "2020", title: "Founded in Clovis, California", text: "Started with one purpose — help businesses grow through smarter, data-driven marketing." },
  { year: "Today", title: "AI-powered 360° firm", text: "Evolved from a boutique agency into an AI-powered, full-service marketing partner." },
  { year: "2025", title: "Expansion to UAE & KSA", text: "Virtual presence and remote expansion across the Gulf region." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Kemet"
        title="Reimagining the future of marketing"
        lead="From California to Dubai, Kemet Marketing Solutions blends artificial intelligence, creativity and strategy to redefine how businesses connect with their audience — and achieve results that matter."
      />

      <section className="container-x py-16 sm:py-24">
        <p className="eyebrow mb-8">How Kemet was born</p>
        <ScrubText
          className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.8vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
          text="We bring together the innovation and creativity of Silicon Valley with the ambition and growth of Dubai's business landscape — where data, automation and human creativity work together to build global success stories."
        />
      </section>

      <section className="container-x py-16 sm:py-24">
        <WordReveal text="From local agency to global AI growth partner" className="h2 mb-14 max-w-[16ch]" />
        <div className="grid gap-3 md:grid-cols-3">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.1} className="flex min-h-[300px] flex-col justify-between rounded-[28px] bg-white p-8 ring-1 ring-line">
              <p className="display text-[4.5rem] text-accent">{t.year}</p>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-semibold tracking-[-0.03em]">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2/75">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee items={["Innovation", "Partnership", "Accountability", "Art Direction", "Capability"]} />

      <section className="container-x py-28 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow mb-4">Our values</p>
            <WordReveal text="What drives us" className="h2" />
          </div>
          <div className="border-t border-line">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="grid gap-2 border-b border-line py-8 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold tracking-[-0.035em]">{v.title}</h3>
                <p className="text-[16px] leading-relaxed text-ink-2/75 sm:pt-2">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-20 grid gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <CountUp to={s.value} suffix={s.suffix} className="display text-[clamp(3rem,6vw,5.5rem)]" />
              <p className="mt-2 text-[15px] text-mute">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-28 sm:pb-36">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">Meet our team</p>
            <WordReveal text="The minds behind the strategy" className="h2 max-w-[13ch]" />
          </div>
          <Reveal>
            <PillButton href="/contact" variant="light">
              Work with us
            </PillButton>
          </Reveal>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#0e0e0e]">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="display text-[4rem] text-ink/15">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-4 px-1 font-[family-name:var(--font-display)] text-[1.2rem] font-semibold tracking-[-0.02em]">{m.name}</h3>
              <p className="px-1 text-[14px] text-mute">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-28">
        <Reveal className="grid gap-8 rounded-[32px] bg-white p-8 ring-1 ring-line sm:p-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Global presence. Local insight.</p>
            <p className="display mt-4 text-[clamp(2rem,4.5vw,4rem)]">{contact.offices.join(" · ")}</p>
          </div>
          <div className="self-end text-[15px] leading-relaxed text-ink-2/80">
            <p className="font-medium text-ink">US Office</p>
            <p>
              {contact.address}
              <br />
              {contact.city}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
