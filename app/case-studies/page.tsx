import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { VideoTestimonialGrid } from "@/components/VideoTestimonialGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { CASE_STUDIES } from "@/lib/case-studies";
import {
  breadcrumbSchema,
  videoSchemas,
  aggregateRatingSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Loudachris Case Studies | Free Websites Ranking in 45 Days",
  description:
    "See real small businesses Loudachris built websites for: bathroom renos, pool resurfacing, underpinning, plumbing, hair, automotive. Each ranking and producing leads within 45 days. Same approach now serves US small businesses.",
  alternates: { canonical: `${SITE.url}/case-studies` },
};

export default function CaseStudiesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: CASE_STUDIES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/case-studies/${c.slug}`,
      name: `${c.business} - ${c.city}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Case studies", href: "/case-studies" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema()),
        }}
      />
      {videoSchemas().map((vs, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vs) }}
        />
      ))}

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/case-studies" },
        ]}
      />

      <PageHeader
        eyebrow="Proof"
        title={
          <>
            Free SEO websites that rank and produce leads within{" "}
            <span className="rose-underline">45 days.</span>
          </>
        }
        subtitle="From the team behind Loudachris. 80+ five-star Google reviews on the parent agency. Each site below is built with the same approach. Each one ranks and produces organic leads within 45 days of launch. The same craft now applied to US small businesses."
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow on-light">Video testimonials</span>
            <h2 className="mt-4">
              Three small business owners. In their own words.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)" }}
            >
              Click any card to play. Note: each of these clients is on
              Loudachris&apos;s full-service plan, not the $247/mo
              free-website subscription. The team and SEO approach is
              identical  - same craft, different price point.
            </p>
          </Reveal>

          <VideoTestimonialGrid />
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow on-light">Live builds</span>
            <h2 className="mt-4">
              Live free-website builds. All ranking. All producing leads.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {CASE_STUDIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 40}>
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="block h-full p-6 rounded-[16px] transition-transform hover:-translate-y-1 group"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair-strong)",
                    boxShadow: "0 12px 30px -16px rgba(18,41,51,0.12)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className="inline-block px-2.5 py-1 rounded-full text-xs"
                      style={{
                        background:
                          c.buildType === "free-subscription"
                            ? "var(--rose-soft)"
                            : "var(--indigo-soft)",
                        color:
                          c.buildType === "free-subscription"
                            ? "var(--color-rose)"
                            : "var(--color-indigo-deep)",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.06em",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {c.buildType === "free-subscription"
                        ? "Free build"
                        : "Full-service"}
                    </span>
                    {c.videoId && (
                      <span
                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--color-navy)",
                          color: "white",
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        <Play size={9} fill="white" stroke="white" /> VIDEO
                      </span>
                    )}
                  </div>
                  <div
                    className="text-xs mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      color: "var(--color-ink-3)",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.industry} · {c.city}
                  </div>
                  <h3 className="text-lg leading-tight">{c.business}</h3>
                  <p
                    className="text-sm mt-3"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.55,
                    }}
                    dangerouslySetInnerHTML={{ __html: c.outcome }}
                  />
                  <div
                    className="mt-4 pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: "var(--hair)" }}
                  >
                    <span
                      className="text-xs inline-flex items-center gap-1.5"
                      style={{ color: "var(--color-ink-3)" }}
                    >
                      <span className="live-dot" /> Live
                    </span>
                    <span
                      className="text-sm inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                      style={{
                        color: "var(--color-rose)",
                        fontWeight: 700,
                      }}
                    >
                      Read story <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Want a free website like these?"
        body="Apply in 60 seconds. We email back in 24 hours with a written agreement (or polite decline)."
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />
    </>
  );
}
