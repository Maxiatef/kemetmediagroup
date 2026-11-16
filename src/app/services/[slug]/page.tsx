import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ProcessCards from "@/components/ProcessCards";
import ParallaxImage from "@/components/ParallaxImage";
import { Reveal, WordReveal } from "@/components/motion";
import { Arrow, Chip, PillButton } from "@/components/ui";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.title ?? "Service", description: s?.intro };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = services.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const s = services[i];
  const next = services[(i + 1) % services.length];

  return (
    <>
      <PageHeader eyebrow={`Service (${s.index})`} title={s.title} lead={s.intro} />

      <section className="container-x">
        <Reveal className="mb-6 flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </Reveal>
        <ParallaxImage src={s.image} alt={s.title} />
      </section>

      <section className="container-x grid gap-12 py-28 sm:py-36 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow mb-4">What&apos;s included</p>
          <WordReveal text="Everything you need, one team." className="h2 max-w-[12ch]" />
        </div>
        <ul className="border-t border-line">
          {s.bullets.map((b, k) => (
            <Reveal key={b} delay={k * 0.05} className="flex items-baseline gap-6 border-b border-line py-6">
              <span className="text-[14px] text-mute">0{k + 1}</span>
              <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,1.8vw,1.6rem)] font-medium tracking-[-0.02em]">
                {b}
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      <ProcessCards
        title={s.processTitle}
        steps={s.steps.map((st, k) => ({
          step: `0${k + 1}`,
          title: st.title,
          text: st.text,
          image: services[(i + k) % services.length].image,
        }))}
      />

      <section className="container-x pb-28 pt-10 sm:pb-36">
        <div className="grid gap-3 md:grid-cols-3">
          {s.pillars.map((p, k) => (
            <Reveal key={p.title} delay={k * 0.08} className="rounded-[28px] bg-white p-8 ring-1 ring-line">
              <span className="grid size-10 place-items-center rounded-full bg-accent/10 text-[14px] font-medium text-accent">
                {k + 1}
              </span>
              <h3 className="mt-10 font-[family-name:var(--font-display)] text-[1.6rem] font-semibold tracking-[-0.03em]">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2/75">{p.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <PillButton href="/contact">Request a proposal</PillButton>
        </Reveal>
      </section>

      <section className="container-x pb-28">
        <Link
          href={`/services/${next.slug}`}
          className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-[32px] bg-white p-8 ring-1 ring-line sm:p-12"
        >
          <div className="relative z-10">
            <p className="eyebrow">Next service</p>
            <p className="display mt-3 text-[clamp(2rem,5vw,4.5rem)]">{next.title}</p>
          </div>
          <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45 group-hover:bg-accent">
            <Arrow className="size-6" />
          </span>
          <div className="absolute inset-y-0 right-0 w-1/3 opacity-0 transition-opacity duration-700 group-hover:opacity-100 max-md:hidden">
            <Image src={next.image} alt="" fill sizes="33vw" className="object-cover [mask-image:linear-gradient(to_right,transparent,black)]" />
          </div>
        </Link>
      </section>
    </>
  );
}
