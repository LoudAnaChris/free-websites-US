import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
        padding: "clamp(48px, 6vw, 80px) 0 clamp(40px, 5vw, 64px)",
      }}
    >
      <div
        className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(227,87,171,0.10) 0%, rgba(227,87,171,0) 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />
      <div className="container-x relative max-w-4xl">
        {eyebrow && <span className="eyebrow on-light">{eyebrow}</span>}
        <h1 className="mt-4">{title}</h1>
        {subtitle && (
          <p
            className="mt-6 text-lg sm:text-xl"
            style={{ color: "var(--color-ink-2)", maxWidth: 680, lineHeight: 1.55 }}
          >
            {subtitle}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <div className="mt-7">
            <Link href={ctaHref} className="btn btn-primary">
              {ctaLabel} <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
