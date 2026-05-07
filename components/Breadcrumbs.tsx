import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Visual breadcrumbs are currently disabled site-wide (per Chris, April 2026).
 * Google still gets breadcrumb rich-results from the BreadcrumbList JSON-LD
 * schema injected separately on every page (see lib/schema.ts → breadcrumbSchema).
 *
 * To re-enable visual breadcrumbs, delete the early `return null` below.
 */
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  // Visual breadcrumbs disabled. Schema markup remains.
  return null;

  // eslint-disable-next-line no-unreachable
  return (
    <nav
      aria-label="Breadcrumb"
      className="container-x pt-5 pb-1"
    >
      <ol
        className="flex items-center gap-1.5 text-sm flex-wrap"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-ink-3)",
          letterSpacing: "0.04em",
        }}
      >
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.href} className="inline-flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  size={12}
                  strokeWidth={2}
                  className="opacity-50"
                />
              )}
              {last ? (
                <span style={{ color: "var(--color-ink)" }}>{it.name}</span>
              ) : (
                <Link
                  href={it.href}
                  className="transition-colors hover:text-rose"
                >
                  {it.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
