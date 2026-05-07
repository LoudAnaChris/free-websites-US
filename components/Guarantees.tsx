import { Clock, Shield, Lock, Key, Unlock, PhoneOff } from "lucide-react";
import { Reveal } from "./Reveal";

const guarantees = [
  {
    n: "01",
    Icon: Clock,
    title: "5-day delivery",
    body: "Live in 5 working days, or your build is free for life.",
  },
  {
    n: "02",
    Icon: Shield,
    title: "90-day lead guarantee",
    body: "First qualified lead within 90 days, or we keep working at no cost.",
  },
  {
    n: "03",
    Icon: Lock,
    title: "Price lock",
    body: "Your monthly fee is locked for 24 months. No surprise hikes.",
  },
  {
    n: "04",
    Icon: Key,
    title: "Full ownership",
    body: "You own your domain, content and code from day one.",
  },
  {
    n: "05",
    Icon: Unlock,
    title: "No lock-in",
    body: "Cancel after the minimum term with 30 days notice. No exit fees.",
  },
  {
    n: "06",
    Icon: PhoneOff,
    title: "No calls",
    body: "Everything by email or Loom. You stay in your business. We do the build.",
  },
];

export function Guarantees() {
  return (
    <section className="section section-dark">
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">In writing</span>
          <h2 style={{ marginTop: 14 }}>Six guarantees. All in writing.</h2>
          <p
            className="mt-5 text-lg"
            style={{ color: "rgba(245,245,245,0.8)" }}
          >
            Read every promise below. Each one lives word-for-word in the
            agreement we send before any commitment.
          </p>
        </Reveal>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g, i) => (
            <Reveal
              key={g.n}
              delay={i * 60}
              className="relative p-7 rounded-[18px]"
            >
              <div
                className="absolute inset-0 rounded-[18px]"
                style={{
                  background: "rgba(245,245,245,0.04)",
                  border: "1px solid rgba(245,245,245,0.08)",
                  pointerEvents: "none",
                }}
              />
              <span
                className="relative block text-xs mb-5"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-rose)",
                  letterSpacing: "0.16em",
                }}
              >
                {g.n}
              </span>
              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(227,87,171,0.14)",
                  color: "var(--color-rose)",
                }}
              >
                <g.Icon size={22} strokeWidth={2.2} />
              </div>
              <h3
                className="relative"
                style={{ color: "var(--color-platinum)" }}
              >
                {g.title}
              </h3>
              <p
                className="relative mt-3"
                style={{ color: "rgba(245,245,245,0.78)", lineHeight: 1.6 }}
              >
                {g.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
