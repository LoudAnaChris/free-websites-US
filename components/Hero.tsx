import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VideoTestimonialGrid } from "./VideoTestimonialGrid";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, var(--color-platinum) 100%)",
        padding: "clamp(48px, 7vw, 96px) 0 clamp(48px, 6vw, 80px)",
      }}
    >
      <div
        className="absolute -top-40 -right-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(227,87,171,0.12) 0%, rgba(227,87,171,0) 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,135,201,0.18) 0%, rgba(140,135,201,0) 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="container-x relative">
        <div className="text-center max-w-[960px] mx-auto">
          <span className="eyebrow on-light">Small business web design + SEO, US</span>
          <h1 className="mt-5">
            Free SEO Websites for{" "}
            <span className="rose-underline">US small businesses.</span>
            <br />
            $297/mo. Leads in 90, guaranteed.
          </h1>
          <p
            className="mt-7 text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-ink-2)", lineHeight: 1.55 }}
          >
            A done-for-you small business web design with local SEO bundled.
            Live in 5 working days. Zero upfront. Compare to $2,999 upfront
            fees elsewhere.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/#qualifier" className="btn btn-primary btn-lg">
              See if I qualify <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link href="/case-studies" className="btn-link">
              See live examples →
            </Link>
          </div>

          <p className="trust-strip" style={{ justifyContent: "center" }}>
            <span>
              <strong style={{ color: "var(--color-ink)" }}>80+</strong>{" "}
              five-star Google reviews
            </span>
            <span className="dot" />
            <span>
              <span className="stars">★★★★★</span> Loudachris parent brand
            </span>
            <span className="dot" />
            <span>
              built by{" "}
              <a
                href="https://www.loudachris.com.au"
                rel=""
                style={{
                  color: "var(--color-ink)",
                  fontWeight: 700,
                }}
              >
                Loudachris
              </a>
            </span>
          </p>
        </div>

        <div className="mt-14">
          <VideoTestimonialGrid />
        </div>

        <div className="mt-8 text-center">
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.16em",
              color: "var(--color-ink-3)",
              textTransform: "uppercase",
            }}
          >
            Real businesses · Real outcomes · Real videos
          </p>
        </div>
      </div>
    </section>
  );
}
