import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/motion";
import { contact, socials } from "@/lib/data";
import { SocialIcon } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start something special"
        lead="Drop us a line and get the project started. We're excited to hear from you."
      />

      <section className="container-x grid gap-4 pb-28 lg:grid-cols-[1fr_1.5fr]">
        <Reveal className="flex flex-col justify-between gap-12 rounded-[32px] bg-white p-8 ring-1 ring-line sm:p-10">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Email</p>
              <a href={`mailto:${contact.email}`} className="mt-2 block font-[family-name:var(--font-display)] text-[clamp(1.25rem,2vw,1.6rem)] font-semibold tracking-[-0.02em] hover:text-accent">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="eyebrow">Phone</p>
              <a href={contact.phoneHref} className="mt-2 block font-[family-name:var(--font-display)] text-[clamp(1.25rem,2vw,1.6rem)] font-semibold tracking-[-0.02em] hover:text-accent">
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow">US Office</p>
              <a href={contact.mapUrl} target="_blank" rel="noreferrer" className="mt-2 block text-[16px] leading-relaxed hover:text-accent">
                {contact.address}
                <br />
                {contact.city}
              </a>
              <p className="mt-3 text-[14px] text-mute">Also in {contact.offices.slice(1).join(" & ")}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Follow</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-chip px-4 py-2 text-[14px] transition-colors hover:bg-ink hover:text-white"
                >
                  <SocialIcon name={s.label} className="size-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[32px] bg-white p-8 ring-1 ring-line sm:p-10">
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
