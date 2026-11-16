import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ParallaxImage from "@/components/ParallaxImage";
import ScrubText from "@/components/ScrubText";
import { Reveal, WordReveal } from "@/components/motion";
import { Arrow, PillButton } from "@/components/ui";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.name ?? "Project", description: p?.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  const meta = [
    { k: "Client", v: p.client },
    { k: "Service", v: p.service },
    { k: "Year", v: p.year },
    { k: "Platforms", v: p.platforms },
  ];

  return (
    <>
      <PageHeader eyebrow="Case study" title={p.name} lead={p.headline} />

      <section className="container-x">
        <ParallaxImage src={p.image} alt={p.name} />
        <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.k} className="bg-white p-6">
              <p className="text-[13px] text-mute">{m.k}</p>
              <p className="mt-2 text-[15px] font-medium">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-28 sm:py-36">
        <p className="eyebrow mb-8">The challenge & approach</p>
        <ScrubText
          className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em]"
          text={p.body}
        />
      </section>

      {p.stats && (
        <section className="container-x pb-28">
          <WordReveal text="Results that matter" className="h2 mb-12" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.stats.map((s, k) => (
              <Reveal key={s.label} delay={k * 0.07} className="rounded-[28px] bg-white p-7 ring-1 ring-line">
                <p className="display text-[clamp(3rem,5vw,4.5rem)]">{s.value}</p>
                <p className="mt-6 text-[15px] font-medium">{s.label}</p>
                <p className="mt-1 text-[14px] text-mute">{s.note}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {p.goals && (
        <section className="container-x pb-28">
          <WordReveal text="Goals we delivered on" className="h2 mb-12" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.goals.map((g, k) => (
              <Reveal key={g.title} delay={k * 0.07} className="flex min-h-[220px] flex-col justify-between rounded-[28px] bg-white p-7 ring-1 ring-line">
                <span className="text-[14px] text-mute">0{k + 1}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] font-semibold tracking-[-0.03em]">{g.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2/75">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="container-x grid gap-12 pb-28 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow mb-4">Scope</p>
          <WordReveal text="What we delivered" className="h2" />
          <Reveal className="mt-8">
            <PillButton href="/contact">Start a similar project</PillButton>
          </Reveal>
        </div>
        <ul className="border-t border-line">
          {p.deliverables.map((d, k) => (
            <Reveal key={d} delay={k * 0.05} className="flex items-baseline gap-6 border-b border-line py-6">
              <span className="text-[14px] text-mute">0{k + 1}</span>
              <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,1.8vw,1.6rem)] font-medium tracking-[-0.02em]">{d}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-x pb-28">
        <Link href={`/work/${next.slug}`} className="group block overflow-hidden rounded-[32px] bg-white p-2 ring-1 ring-line">
          <div className="flex items-center justify-between gap-6 p-6 sm:p-10">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="display mt-3 text-[clamp(2.5rem,7vw,6.5rem)]">{next.name}</p>
            </div>
            <span className="grid size-16 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45 group-hover:bg-accent">
              <Arrow className="size-6" />
            </span>
          </div>
          <div className="relative aspect-[16/6] overflow-hidden rounded-[26px]">
            <Image
              src={next.image}
              alt={next.name}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
            />
          </div>
        </Link>
      </section>
    </>
  );
}
