import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import {
  breadcrumbSchema,
  personSchema,
  aggregateRatingSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Free SEO Websites by Loudachris Digital Marketing",
  description: `${SITE.domain} is the US small-business arm of Loudachris Digital Marketing (Adelaide, AU). 80+ five-star Google reviews on the parent brand. Async-only via email and Loom. Meet Chris, Ana, and Audrey.`,
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema()),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <PageHeader
        eyebrow="About"
        title={
          <>
            From the team behind{" "}
            <span className="rose-underline">Loudachris.</span>
          </>
        }
        subtitle={`${SITE.domain} is the US small-business arm of Loudachris Digital Marketing. 80+ five-star Google reviews on the parent agency. Same team, same standards, different price point. Operated remotely from Adelaide, served async to US small businesses.`}
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <div
              className="rounded-[18px] p-7 sm:p-8 mb-12 inline-flex items-center gap-5 flex-wrap"
              style={{
                background: "var(--rose-soft)",
                border: "1px solid var(--rose-line)",
              }}
            >
              <div
                className="text-5xl sm:text-6xl font-extrabold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-rose)",
                  letterSpacing: "-0.02em",
                }}
              >
                80+
              </div>
              <div>
                <div
                  className="text-xs mb-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-rose)",
                    fontWeight: 700,
                  }}
                >
                  Five-star Google reviews
                </div>
                <div
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-ink)" }}
                >
                  on Loudachris Digital Marketing
                </div>
                <a
                  href="https://www.google.com/search?q=Loudachris+Digital+Marketing+Adelaide+reviews"
                  target="_blank"
                  rel="noopener"
                  className="text-sm inline-flex items-center gap-1 mt-1"
                  style={{
                    color: "var(--color-rose)",
                    fontWeight: 700,
                  }}
                >
                  See reviews on Google →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Latest review - Rowan, Lucky Duck Mowing */}
          <Reveal delay={120}>
            <blockquote
              className="rounded-[18px] p-7 sm:p-8 mb-12"
              style={{
                background: "var(--color-platinum)",
                border: "1px solid var(--hair-strong)",
                boxShadow: "0 14px 30px -16px rgba(18,41,51,0.18)",
              }}
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span
                  className="text-base"
                  style={{
                    color: "var(--color-rose)",
                    letterSpacing: "0.06em",
                  }}
                  aria-label="Five out of five stars"
                >
                  ★★★★★
                </span>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-rose)",
                    fontWeight: 700,
                  }}
                >
                  Latest review &middot; 7 May 2026
                </span>
              </div>
              <p
                className="text-lg"
                style={{
                  color: "var(--color-ink-2)",
                  lineHeight: 1.65,
                }}
              >
                &ldquo;Chris is a true superstar! I stumbled across Loudachris
                Digital Marketing and I&apos;m so happy I did. Everything was
                able to be done via email, no 1 hour wasted on a sales pitch
                as the pricing was clear and upfront. Super fast turnaround
                on my new website, looking forward to a long working
                partnership and Chris bringing me more leads so I can expand
                my business.&rdquo;
              </p>
              <footer
                className="mt-5 text-sm"
                style={{
                  color: "var(--color-ink-3)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em",
                }}
              >
                Rowan Barber, Lucky Duck Mowing (Caloundra QLD) &middot;{" "}
                <Link
                  href="/case-studies/lucky-duck-mowing-caloundra"
                  style={{
                    color: "var(--color-rose)",
                    fontWeight: 700,
                  }}
                >
                  Read the case study (28-min first lead)
                </Link>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal>
            <h2>Founder: Chris Lourenco.</h2>
            <p
              className="mt-5 text-lg"
              style={{
                color: "var(--color-ink-2)",
                lineHeight: 1.7,
              }}
            >
              Chris founded Loudachris Digital Marketing in Adelaide. Over the
              years he&apos;s built and ranked websites for plumbers,
              electricians, contractors, restaurants, and dozens of other small
              businesses. The Free SEO Websites offer is his way of bringing the
              same SEO and website craft to American small businesses that can&apos;t
              justify a $5,000 upfront agency build. Everything happens async  -
              email and Loom video, no calls, no time-zone scheduling pain.
            </p>
            <p
              className="mt-5 text-lg"
              style={{
                color: "var(--color-ink-2)",
                lineHeight: 1.7,
              }}
            >
              Every site is built personally by Chris. No outsourcing, no
              offshoring, no junior staff churning out templated work.
              That&apos;s why the Free SEO Websites offer is capped at 3-4
              new builds per month  - Chris is the limit.
            </p>
            <div className="mt-7 flex items-center gap-4 flex-wrap">
              <a
                href={SITE.founder.linkedIn}
                rel="me"
                target="_blank"
                className="btn btn-ghost"
              >
                Chris on LinkedIn <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href={SITE.parentUrl}
                rel=""
                className="btn-link"
              >
                loudachris.com.au →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow on-light">The team</span>
            <h2 className="mt-4">The same team that built the case studies.</h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 mt-10">
            {[
              {
                name: "Chris Lourenco",
                role: "Founder",
                body: "Builds every site personally. SEO and conversion strategy. 5-day build sprints.",
              },
              {
                name: "Ana",
                role: "SEO Specialist",
                body: "Monthly ranking work, keyword research, on-page improvements, monthly content.",
              },
              {
                name: "Audrey",
                role: "Customer Manager",
                body: "Intake, async support, monthly reporting, your point of contact between sprints.",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div
                  className="p-6 rounded-[16px] h-full"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair-strong)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-rose) 100%)",
                    }}
                  />
                  <h3 className="mb-1" style={{ fontSize: 22 }}>
                    {p.name}
                  </h3>
                  <div
                    className="text-xs mb-3"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-rose)",
                      fontWeight: 700,
                    }}
                  >
                    {p.role}
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow on-light">Two products, same team</span>
            <h2 className="mt-4">
              Loudachris vs Free SEO Websites  - what&apos;s the
              difference?
            </h2>
            <div
              className="mt-7 rounded-[18px] p-7"
              style={{
                background: "var(--color-platinum)",
                border: "1px solid var(--hair-strong)",
              }}
            >
              <p
                className="text-lg italic"
                style={{
                  color: "var(--color-ink-2)",
                  lineHeight: 1.7,
                }}
              >
                Loudachris.com.au is our full-service agency: SEO from
                $1,500/mo, Google Ads from $500/mo, websites from $3,000.
                Free SEO Websites is our entry-tier small-business arm:
                free build, $247-$497/mo subscription, no upfront. Same team,
                same standards, different price point.
              </p>
              <p
                className="text-lg mt-5"
                style={{
                  color: "var(--color-ink-2)",
                  lineHeight: 1.7,
                }}
              >
                If you&apos;re a business with a marketing budget who needs
                custom design, custom SEO strategy, or paid ads, you&apos;ll
                get more value from{" "}
                <a
                  href={SITE.parentUrl}
                  rel=""
                  style={{
                    color: "var(--color-rose)",
                    fontWeight: 700,
                  }}
                >
                  loudachris.com.au
                </a>
                . If you&apos;re a small business under 15 staff who needs an
                SEO-ready site live in 5 days for under $500/mo, you&apos;re
                in the right place.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-navy)", color: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">Legal entity</span>
            <h2
              className="mt-4"
              style={{ color: "var(--color-platinum)" }}
            >
              {SITE.parentBrand}
            </h2>
            <div
              className="mt-6 grid gap-4 sm:grid-cols-2 text-sm"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,245,245,0.85)",
                letterSpacing: "0.04em",
              }}
            >
              <div>
                <div
                  className="text-xs mb-1"
                  style={{ color: "var(--color-indigo)" }}
                >
                  EMAIL
                </div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <div
                  className="text-xs mb-1"
                  style={{ color: "var(--color-indigo)" }}
                >
                  OPERATED FROM
                </div>
                {SITE.address.street}
                <br />
                {SITE.address.locality} {SITE.address.region}{" "}
                {SITE.address.postcode}, Australia
              </div>
              <div>
                <div
                  className="text-xs mb-1"
                  style={{ color: "var(--color-indigo)" }}
                >
                  SERVICE AREA
                </div>
                United States, async-only
              </div>
              <div>
                <div
                  className="text-xs mb-1"
                  style={{ color: "var(--color-indigo)" }}
                >
                  PARENT BRAND
                </div>
                <a
                  href={SITE.parentUrl}
                  className="hover:text-white transition-colors"
                >
                  loudachris.com.au
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
