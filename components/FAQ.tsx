"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import type { Faq } from "@/lib/faqs";

export function FAQ({
  faqs,
  heading = "Everything you want to ask before you claim a slot.",
  eyebrow = "FAQ",
}: {
  faqs: Faq[];
  heading?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <span className="eyebrow on-light">{eyebrow}</span>
          <h2 style={{ marginTop: 14 }}>{heading}</h2>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="border-b"
              style={{ borderColor: "var(--hair)" }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                className="w-full flex items-start justify-between gap-5 py-5 text-left transition-colors hover:text-rose"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-ink)",
                }}
              >
                <span className="text-lg font-semibold leading-snug">
                  {f.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    background:
                      open === i ? "var(--color-rose)" : "var(--hair)",
                    color: open === i ? "white" : "var(--color-ink)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100 pb-5"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="text-[15.5px] pr-12"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.65,
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
