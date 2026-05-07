import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Try Before You Commit",
    term: "6 months · minimum",
    monthly: 397,
    total: "$2,382",
    savings: "Equivalent to 1 month free",
    why: null,
    features: [
      "Free 5-day build",
      "Hosting + ranking care included",
      "Cancel after 6 months · 30 days notice",
    ],
    cta: "Choose 6 months",
  },
  {
    name: "Best Value",
    term: "12 months · minimum",
    monthly: 247,
    total: "$2,964",
    savings: "Save $1,800 vs 6-month plan",
    why: null,
    featured: true,
    features: [
      "Free 5-day build",
      "Hosting + ranking care included",
      "Price locked 24 months",
      "Cancel after 12 months · 30 days notice",
    ],
    cta: "Choose 12 months",
  },
  {
    name: "Maximum Flexibility",
    term: "No minimum · cancel any time",
    monthly: 497,
    total: "No lock-in",
    savings: null,
    why: "Why it costs more: full flexibility, zero lock-in.",
    features: [
      "Free 5-day build",
      "Hosting + ranking care included",
      "Cancel any time · 30 days notice",
    ],
    cta: "Choose no lock-in",
  },
];

export function Pricing({ withId = true }: { withId?: boolean }) {
  return (
    <section
      id={withId ? "pricing" : undefined}
      className="section section-dark"
    >
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Pricing</span>
          <h2 style={{ marginTop: 14 }}>Three ways to invest. All start at $0.</h2>
          <p
            className="mt-5 text-lg"
            style={{ color: "rgba(245,245,245,0.8)" }}
          >
            First payment only triggers when your site is live and tracking is
            confirmed. Same team. Same standards. Different price point.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className="relative p-7 sm:p-8 rounded-[20px]"
            >
              {p.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "var(--color-rose)",
                    color: "white",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Best Value
                </span>
              )}
              <div
                className="absolute inset-0 rounded-[20px]"
                style={{
                  background: p.featured
                    ? "linear-gradient(180deg, rgba(227,87,171,0.16) 0%, rgba(227,87,171,0.04) 100%)"
                    : "rgba(245,245,245,0.04)",
                  border: p.featured
                    ? "2px solid var(--color-rose)"
                    : "1px solid rgba(245,245,245,0.1)",
                  pointerEvents: "none",
                }}
              />

              <div className="relative">
                <div
                  className="text-xs mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-indigo)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.name}
                </div>
                <div
                  className="text-sm mb-5"
                  style={{ color: "rgba(245,245,245,0.7)" }}
                >
                  {p.term}
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className="text-base font-semibold"
                    style={{ color: "rgba(245,245,245,0.7)" }}
                  >
                    $
                  </span>
                  <span
                    className="text-5xl sm:text-6xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-platinum)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {p.monthly}
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "rgba(245,245,245,0.7)" }}
                  >
                    /month
                  </span>
                </div>
                <div
                  className="text-sm mb-2"
                  style={{ color: "rgba(245,245,245,0.7)" }}
                >
                  Total over minimum term:{" "}
                  <strong style={{ color: "var(--color-platinum)" }}>
                    {p.total}
                  </strong>
                </div>
                {p.savings && (
                  <div
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs mb-5"
                    style={{
                      background: "rgba(140,135,201,0.18)",
                      color: "var(--color-indigo)",
                      fontWeight: 600,
                    }}
                  >
                    {p.savings}
                  </div>
                )}
                {p.why && (
                  <p
                    className="text-sm mb-5"
                    style={{ color: "rgba(245,245,245,0.7)" }}
                  >
                    {p.why}
                  </p>
                )}

                <ul className="space-y-2.5 mb-7">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "rgba(245,245,245,0.85)" }}
                    >
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        color="var(--color-rose)"
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#qualifier"
                  className={p.featured ? "btn btn-primary w-full" : "btn btn-ghost-on-dark w-full"}
                >
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm"
          style={{ color: "rgba(245,245,245,0.7)" }}
        >
          {[
            "All prices in USD",
            "First payment after launch only",
            "Price locked for 24 months",
            "Cancel after minimum term",
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: "var(--color-rose)" }}
              >
                <Check size={10} strokeWidth={3} color="white" />
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
