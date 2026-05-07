import Link from "next/link";
import { Logo } from "./Logo";
import { SITE, FOOTER_INDUSTRIES, NAV_LOCATIONS } from "@/lib/site";

export function Footer() {
  return (
    <footer
      className="pt-16 pb-10"
      style={{ background: "var(--color-navy-2)", color: "var(--color-platinum)" }}
    >
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] mb-10">
          <div>
            <Logo onDark />
            <p
              className="mt-4 text-sm opacity-80 max-w-md"
              style={{ color: "rgba(245,245,245,0.8)" }}
            >
              A {SITE.parentBrand} offer. We build free SEO websites for
              US small businesses under 15 staff. Operated remotely from
              Adelaide, Australia.
            </p>
            <div
              className="mt-6 text-xs leading-relaxed"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,245,245,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-white transition-colors"
              >
                {SITE.email}
              </a>
              <br />
              Operated by Loudachris Digital Marketing
              <br />
              {SITE.address.street}, {SITE.address.locality}{" "}
              {SITE.address.region} {SITE.address.postcode}, Australia
            </div>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-[0.16em] mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-indigo)",
              }}
            >
              Site
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/how-it-works">How it works</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/case-studies">Case studies</FooterLink>
              <FooterLink href="/industries">All industries</FooterLink>
              <FooterLink href="/locations">All cities</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/agreement">Agreement</FooterLink>
              <FooterLink href="/privacy">Privacy</FooterLink>
            </ul>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-[0.16em] mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-indigo)",
              }}
            >
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_INDUSTRIES.map((i) => (
                <FooterLink key={i.href} href={i.href}>
                  {i.name}
                </FooterLink>
              ))}
              <li className="mt-2">
                <Link
                  href="/industries"
                  className="font-bold transition-colors hover:text-white"
                  style={{ color: "var(--color-rose)" }}
                >
                  See all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-[0.16em] mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-indigo)",
              }}
            >
              Cities
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LOCATIONS.slice(0, 8).map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.name}
                </FooterLink>
              ))}
              <li className="mt-2">
                <Link
                  href="/locations"
                  className="font-bold transition-colors hover:text-white"
                  style={{ color: "var(--color-rose)" }}
                >
                  See all cities →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs"
          style={{
            borderColor: "rgba(245,245,245,0.1)",
            color: "rgba(245,245,245,0.55)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
          }}
        >
          <span>
            © {SITE.parentBrand} {new Date().getFullYear()} ·{" "}
            <a
              href={SITE.parentUrl}
              className="hover:text-white transition-colors"
              rel=""
            >
              loudachris.com.au
            </a>
          </span>
          <span>{SITE.domain}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="transition-colors hover:text-white"
        style={{ color: "rgba(245,245,245,0.7)" }}
      >
        {children}
      </Link>
    </li>
  );
}
