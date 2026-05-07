import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

type ProofItem = {
  industry: string;
  domain: string;
  metric: string;
  href: string;
  live: string;
  screenshot: string;
};

const proof: ProofItem[] = [
  {
    industry: "Bathroom Renovations · Adelaide",
    domain: "bathroomrenovationsadelaide.com.au",
    metric: "Ranking inside 8 weeks. Strong before-and-after gallery.",
    href: "/case-studies/bathroom-renovations-adelaide",
    live: "https://bathroomrenovationsadelaide.com.au",
    screenshot: "/case-study-bathroom-renovations-adelaide.jpg",
  },
  {
    industry: "Pool Resurfacing · Adelaide",
    domain: "poolresurfacingadelaide.com.au",
    metric: "First lead in 8 days from launch",
    href: "/case-studies/pool-resurfacing-adelaide",
    live: "https://poolresurfacingadelaide.com.au",
    screenshot: "/case-study-pool-resurfacing-adelaide.jpg",
  },
  {
    industry: "Underpinning · Sydney",
    domain: "sydney-underpinning.com.au",
    metric: "Top 3 for &ldquo;underpinning Sydney&rdquo;",
    href: "/case-studies/sydney-underpinning",
    live: "https://sydney-underpinning.com.au",
    screenshot: "/case-study-sydney-underpinning.jpg",
  },
];

export function Proof() {
  return (
    <section id="proof" className="section" style={{ background: "white" }}>
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow on-light">Proof</span>
          <h2 style={{ marginTop: 14 }}>Real websites. Real leads. Real numbers.</h2>
          <p
            className="mt-5 text-lg"
            style={{ color: "var(--color-ink-2)" }}
          >
            Every example below is built using the same approach. All metrics
            tracked through GA4 and Google Search Console. Each ranks and
            produces organic leads within 45 days.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {proof.map((c, i) => (
            <Reveal
              key={c.domain}
              delay={i * 60}
              className="rounded-[16px] overflow-hidden group"
            >
              <Link
                href={c.href}
                className="block h-full"
                style={{
                  background: "white",
                  border: "1px solid var(--hair-strong)",
                  borderRadius: 16,
                  boxShadow: "0 12px 30px -16px rgba(18,41,51,0.12)",
                }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="browser-bar">
                    <i />
                    <i />
                    <i />
                    <span className="url">{c.domain}</span>
                  </div>
                  <div className="absolute inset-0 top-[34px] overflow-hidden">
                    <Image
                      src={c.screenshot}
                      alt={`${c.industry} live website screenshot`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className="text-xs mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      color: "var(--color-rose)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {c.industry}
                  </div>
                  <p
                    className="text-base font-semibold leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-ink)",
                    }}
                    dangerouslySetInnerHTML={{ __html: c.metric }}
                  />
                  <div className="flex items-center justify-between mt-4 pt-4 border-t" style={{ borderColor: "var(--hair)" }}>
                    <span
                      className="text-xs inline-flex items-center gap-1.5"
                      style={{ color: "var(--color-ink-3)" }}
                    >
                      <span className="live-dot" /> Live
                    </span>
                    <span
                      className="text-sm inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                      style={{ color: "var(--color-rose)", fontWeight: 700 }}
                    >
                      Read story <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <Link href="/case-studies" className="btn btn-ghost btn-lg">
            See all case studies <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
