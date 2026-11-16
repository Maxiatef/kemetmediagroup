import { WordReveal, Reveal } from "./motion";
import { Eyebrow } from "./ui";

export default function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-x relative">
        <Reveal y={16}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <WordReveal
          as="h1"
          immediate
          delay={0.1}
          text={title}
          className="display mt-6 max-w-[14ch] text-[clamp(3rem,8.6vw,8.5rem)]"
        />
        {lead && (
          <Reveal delay={0.4} className="mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-ink-2/80">
            {lead}
          </Reveal>
        )}
      </div>
    </section>
  );
}
