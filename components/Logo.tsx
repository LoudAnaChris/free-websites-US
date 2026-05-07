import Link from "next/link";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Free Websites by Loudachris home"
      className="inline-flex items-baseline gap-0.5 no-underline"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: 22,
        letterSpacing: "-0.04em",
        color: onDark ? "var(--color-platinum)" : "var(--color-ink)",
      }}
    >
      free-websites
      <span
        aria-hidden
        className="inline-block w-2 h-2 rounded-full mx-0.5"
        style={{ background: "var(--color-rose)" }}
      />
    </Link>
  );
}
