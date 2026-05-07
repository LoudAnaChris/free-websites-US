"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_INDUSTRIES, NAV_LOCATIONS } from "@/lib/site";

export function Header() {
  const [openDrop, setOpenDrop] = useState<"industries" | "locations" | null>(
    null
  );
  const [mobile, setMobile] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpenDrop(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "saturate(140%) blur(10px)",
        WebkitBackdropFilter: "saturate(140%) blur(10px)",
        borderBottom: "1px solid var(--hair)",
      }}
    >
      <div className="container-x flex items-center justify-between gap-5 h-[72px]">
        <Logo />

        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Link
            href="/how-it-works"
            className="text-[14.5px] font-semibold text-ink hover:text-rose transition-colors"
            style={{ color: "var(--color-ink)" }}
          >
            How it works
          </Link>

          <div ref={dropRef} className="relative flex items-center gap-7">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDrop((v) =>
                    v === "industries" ? null : "industries"
                  );
                }}
                className="inline-flex items-center gap-1 text-[14.5px] font-semibold transition-colors hover:text-rose"
                style={{ color: "var(--color-ink)" }}
                aria-expanded={openDrop === "industries"}
                aria-haspopup="true"
              >
                Industries <ChevronDown size={14} strokeWidth={2.5} />
              </button>
              <div
                className={`absolute top-full left-[-16px] mt-3 grid grid-cols-1 sm:grid-cols-2 gap-0.5 p-3 min-w-[460px] bg-white rounded-[14px] shadow-[0_24px_60px_-20px_rgba(18,41,51,0.25)] border transition-all ${
                  openDrop === "industries"
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-1"
                }`}
                style={{ borderColor: "var(--hair)" }}
                role="menu"
              >
                {NAV_INDUSTRIES.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="text-[13.5px] px-2.5 py-2 rounded-lg hover:bg-platinum transition-colors"
                    style={{ color: "var(--color-ink)" }}
                    onClick={() => setOpenDrop(null)}
                  >
                    {i.name}
                  </Link>
                ))}
                <Link
                  href="/industries"
                  className="text-[13.5px] px-2.5 py-2 rounded-lg hover:bg-platinum transition-colors col-span-1 sm:col-span-2 font-bold"
                  style={{
                    color: "var(--color-rose)",
                    background: "var(--rose-soft)",
                  }}
                  onClick={() => setOpenDrop(null)}
                >
                  See all industries →
                </Link>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDrop((v) => (v === "locations" ? null : "locations"));
                }}
                className="inline-flex items-center gap-1 text-[14.5px] font-semibold transition-colors hover:text-rose"
                style={{ color: "var(--color-ink)" }}
                aria-expanded={openDrop === "locations"}
                aria-haspopup="true"
              >
                Locations <ChevronDown size={14} strokeWidth={2.5} />
              </button>
              <div
                className={`absolute top-full left-[-16px] mt-3 grid grid-cols-1 sm:grid-cols-2 gap-0.5 p-3 min-w-[420px] bg-white rounded-[14px] shadow-[0_24px_60px_-20px_rgba(18,41,51,0.25)] border transition-all ${
                  openDrop === "locations"
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-1"
                }`}
                style={{ borderColor: "var(--hair)" }}
                role="menu"
              >
                {NAV_LOCATIONS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[13.5px] px-2.5 py-2 rounded-lg hover:bg-platinum transition-colors"
                    style={{ color: "var(--color-ink)" }}
                    onClick={() => setOpenDrop(null)}
                  >
                    {l.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="text-[13.5px] px-2.5 py-2 rounded-lg hover:bg-platinum transition-colors col-span-1 sm:col-span-2 font-bold"
                  style={{
                    color: "var(--color-rose)",
                    background: "var(--rose-soft)",
                  }}
                  onClick={() => setOpenDrop(null)}
                >
                  See all locations →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/case-studies"
            className="text-[14.5px] font-semibold transition-colors hover:text-rose"
            style={{ color: "var(--color-ink)" }}
          >
            Case studies
          </Link>

          <Link
            href="/pricing"
            className="text-[14.5px] font-semibold transition-colors hover:text-rose"
            style={{ color: "var(--color-ink)" }}
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="text-[14.5px] font-semibold transition-colors hover:text-rose"
            style={{ color: "var(--color-ink)" }}
          >
            About
          </Link>

          <Link
            href="/#qualifier"
            className="btn btn-primary btn-sm"
          >
            Claim a Build Slot
          </Link>
        </nav>

        <button
          onClick={() => setMobile((v) => !v)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={mobile}
        >
          {mobile ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobile && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--hair)", background: "white" }}
        >
          <div className="container-x py-4 flex flex-col gap-2">
            <Link
              href="/how-it-works"
              onClick={() => setMobile(false)}
              className="py-3 font-semibold"
              style={{
                color: "var(--color-ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              How it works
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobile(false)}
              className="py-3 font-semibold"
              style={{
                color: "var(--color-ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              Case studies
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobile(false)}
              className="py-3 font-semibold"
              style={{
                color: "var(--color-ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              Pricing
            </Link>
            <details className="py-2">
              <summary
                className="font-semibold cursor-pointer"
                style={{
                  color: "var(--color-ink)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Industries
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-1">
                {NAV_INDUSTRIES.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setMobile(false)}
                    className="py-2"
                    style={{ color: "var(--color-ink-2)" }}
                  >
                    {i.name}
                  </Link>
                ))}
                <Link
                  href="/industries"
                  onClick={() => setMobile(false)}
                  className="py-2 font-bold"
                  style={{ color: "var(--color-rose)" }}
                >
                  See all industries →
                </Link>
              </div>
            </details>
            <details className="py-2">
              <summary
                className="font-semibold cursor-pointer"
                style={{
                  color: "var(--color-ink)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Locations
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-1">
                {NAV_LOCATIONS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobile(false)}
                    className="py-2"
                    style={{ color: "var(--color-ink-2)" }}
                  >
                    {l.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  onClick={() => setMobile(false)}
                  className="py-2 font-bold"
                  style={{ color: "var(--color-rose)" }}
                >
                  See all locations →
                </Link>
              </div>
            </details>
            <Link
              href="/about"
              onClick={() => setMobile(false)}
              className="py-3 font-semibold"
              style={{
                color: "var(--color-ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              About
            </Link>
            <Link
              href="/#qualifier"
              onClick={() => setMobile(false)}
              className="btn btn-primary mt-2"
            >
              Claim a Build Slot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
