"use client";

import { useState } from "react";
import { contact, services } from "@/lib/data";
import { Arrow } from "./ui";

const budgets = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k +"];

/**
 * No backend yet: submitting opens the visitor's email app with the message filled in.
 * Swap handleSubmit for an API route / form service when ready.
 */
export default function ContactForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");

  const toggle = (t: string) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Company: ${f.get("company") || "-"}`,
      `Interested in: ${picked.join(", ") || "-"}`,
      `Budget: ${budget || "-"}`,
      "",
      String(f.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("New project inquiry")}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full border-0 border-b border-line bg-transparent py-4 text-[17px] outline-none transition-colors placeholder:text-mute focus:border-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <p className="mb-4 text-[15px] font-medium">I&apos;m interested in…</p>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const on = picked.includes(s.title);
            return (
              <button
                type="button"
                key={s.slug}
                onClick={() => toggle(s.title)}
                aria-pressed={on}
                className={`rounded-full px-4 py-2.5 text-[14px] transition-all duration-300 ${
                  on ? "bg-ink text-white" : "bg-chip text-ink-2 hover:bg-[#e2e2df]"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-8">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="email" type="email" required placeholder="Email address" className={field} />
        <input name="company" placeholder="Company (optional)" className={`${field} sm:col-span-2`} />
        <textarea name="message" required rows={4} placeholder="Tell us about your project" className={`${field} resize-none sm:col-span-2`} />
      </div>

      <div>
        <p className="mb-4 text-[15px] font-medium">Budget</p>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => setBudget(b === budget ? "" : b)}
              aria-pressed={budget === b}
              className={`rounded-full px-4 py-2.5 text-[14px] transition-all duration-300 ${
                budget === b ? "bg-ink text-white" : "bg-chip text-ink-2 hover:bg-[#e2e2df]"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="group inline-flex h-14 items-center rounded-full bg-accent p-1 text-white transition-transform active:scale-[0.98]"
      >
        <span className="pl-6 pr-4 text-[16px] font-medium">Send message</span>
        <span className="grid size-12 place-items-center rounded-full bg-white text-accent transition-transform duration-500 group-hover:rotate-45">
          <Arrow className="size-5" />
        </span>
      </button>
    </form>
  );
}
