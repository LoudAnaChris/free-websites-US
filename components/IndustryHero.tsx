import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function IndustryHero({
  eyebrow,
  title,
  subtitle,
  bullets,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
        padding: "clamp(48px, 6vw, 88px) 0 clamp(40px, 5vw, 64px)",
      }}
    >
      <div
        className="absolute -top-48 -right-48 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(227,87,171,0.10) 0%, rgba(227,87,171,0) 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />
      <div className="container-x relative grid gap-10 lg:grid-cols-[7fr_5fr] items-center max-w-6xl">
        <div>
          <span className="eyebrow on-light">{eyebrow}</span>
          <h1 className="mt-4">{title}</h1>
          <p
            className="mt-6 text-lg sm:text-xl"
            style={{ color: "var(--color-ink-2)", lineHeight: 1.55 }}
          >
            {subtitle}
          </p>
          <div className="mt-7 flex items-center gap-4 flex-wrap">
            <Link href="/#qualifier" className="btn btn-primary">
              See if I qualify <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link href="/case-studies" className="btn-link">
              See case studies →
            </Link>
          </div>
        </div>

        <div
          className="rounded-[18px] p-6 sm:p-7"
          style={{
            background: "white",
            border: "1px solid var(--hair-strong)",
            boxShadow: "0 18px 40px -16px rgba(18,41,51,0.12)",
          }}
        >
          <div
            className="text-xs mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-rose)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            What you get
          </div>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[15.5px]"
                style={{ color: "var(--color-ink), lineHeight: 1.55" }}
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={2.2}
                  color="var(--color-rose)"
                  className="flex-shrink-0 mt-0.5"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
