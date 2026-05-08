import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { IndustryCaseStudyEmbed } from "@/components/IndustryCaseStudyEmbed";
import { LeadEmailProof } from "@/components/LeadEmailProof";
import { FinalCTA } from "@/components/FinalCTA";
import { CASE_STUDIES } from "@/lib/case-studies";
import {
  breadcrumbSchema,
  videoSchemas,
  serviceSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: `${SITE.url}/case-studies/${c.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${c.business} - Free Website Case Study`,
    author: {
      "@type": "Person",
      name: SITE.founder.name,
      sameAs: [SITE.founder.linkedIn],
    },
    publisher: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SITE.parentUrl,
    },
    datePublished: "2026-04-28",
    dateModified: "2026-04-28",
    mainEntityOfPage: `${SITE.url}/case-studies/${c.slug}`,
    description: c.meta.description,
  };

  const videoSchema = c.videoId
    ? videoSchemas().find((v) => (v as { contentUrl: string }).contentUrl?.includes(c.videoId!))
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Case studies", href: "/case-studies" },
              {
                name: c.business,
                href: `/case-studies/${c.slug}`,
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/case-studies" },
          { name: c.business, href: `/case-studies/${c.slug}` },
        ]}
      />

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
          padding: "clamp(40px, 5vw, 72px) 0 clamp(32px, 4vw, 48px)",
        }}
      >
        <div className="container-x relative max-w-4xl">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs mb-5"
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
              letterSpacing: "0.12em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {c.buildType === "free-subscription"
              ? "Free build · $247/mo subscription"
              : "Loudachris full-service plan"}
          </span>
          <h1>
            {c.business}  - {c.industry} in {c.city}
          </h1>
          <p
            className="mt-5 text-lg sm:text-xl"
            style={{ color: "var(--color-ink-2)", lineHeight: 1.55 }}
            dangerouslySetInnerHTML={{ __html: c.outcome }}
          />
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <a
              href={c.liveSite}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit live site <ExternalLink size={15} strokeWidth={2.5} />
            </a>
            <Link href={c.industryHref} className="btn btn-ghost">
              See more {c.industry.toLowerCase()} →
            </Link>
          </div>
        </div>
      </section>

      {c.screenshot && (
        <section
          className="py-10"
          style={{ background: "var(--color-platinum)" }}
        >
          <div className="container-x max-w-6xl">
            <Reveal>
              <figure
                className="relative rounded-[18px] overflow-hidden"
                style={{
                  boxShadow: "0 32px 80px -24px rgba(18,41,51,0.35)",
                  border: "1px solid var(--hair-strong)",
                  background: "white",
                }}
              >
                <Image
                  src={c.screenshot}
                  alt={`${c.business} live website screenshot`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto block"
                  priority
                />
                <figcaption
                  className="px-6 py-4 flex items-center justify-between gap-4 flex-wrap text-xs"
                  style={{
                    background: "var(--color-navy)",
                    color: "rgba(245,245,245,0.85)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="live-dot" /> Live ·{" "}
                    {c.liveSite.replace(/^https?:\/\//, "")}
                  </span>
                  <a
                    href={c.liveSite}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    style={{ color: "var(--color-rose)" }}
                  >
                    Visit site <ExternalLink size={11} strokeWidth={2.5} />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {c.videoId && (
        <section
          className="section"
          style={{ background: "var(--color-platinum)" }}
        >
          <div className="container-x max-w-5xl">
            <Reveal className="mb-8">
              <span className="eyebrow on-light">In their own words</span>
              <h2 className="mt-4">Watch the testimonial.</h2>
            </Reveal>
            <Reveal delay={120}>
              <IndustryCaseStudyEmbed videoId={c.videoId} />
            </Reveal>
          </div>
        </section>
      )}

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow on-light">Outcome</span>
            <h2 className="mt-4">The numbers.</h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 mt-7">
            {c.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 60}>
                <div
                  className="p-6 rounded-[14px] text-center"
                  style={{
                    background: "var(--color-platinum)",
                    border: "1px solid var(--hair-strong)",
                  }}
                >
                  <div
                    className="text-3xl sm:text-4xl font-extrabold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-rose)",
                      letterSpacing: "-0.02em",
                    }}
                    dangerouslySetInnerHTML={{ __html: m.value }}
                  />
                  <div
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      color: "var(--color-ink-3)",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 space-y-5">
            {c.story.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p
                  className="text-lg"
                  style={{
                    color: "var(--color-ink-2)",
                    lineHeight: 1.7,
                  }}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={c.liveSite}
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Visit {c.liveSite.replace(/^https?:\/\//, "")}{" "}
                <ExternalLink size={15} strokeWidth={2.5} />
              </a>
              <Link href={c.industryHref} className="btn btn-ghost">
                See more {c.industry.toLowerCase()} pages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {c.slug === "pool-resurfacing-adelaide" && (
        <LeadEmailProof
          eyebrow="The actual lead"
          heading="The first BlueRevive lead, 8 days after launch."
          caption="The exact email Marty received. Personal contact details redacted. Real lead from a real Adelaide pool resurfacing inquiry."
        />
      )}

      {c.slug === "lucky-duck-mowing-caloundra" && (
        <LeadEmailProof
          eyebrow="The actual lead"
          heading="The first Lucky Duck lead, 28 minutes after launch."
          caption="The exact email Rowan received at 3:15pm, 28 minutes after the site went live at 2:47pm. Tony from Dicky Beach asking for rear duplex lawn mowing on a sub-100sqm yard. Personal contact details redacted. Same lead-delivery format on every Free SEO Websites build for US clients."
          imageSrc="/lead-email-lucky-duck-mowing.png"
          imageAlt="Real lead email from a Lucky Duck Mowing customer: name, email, phone (redacted), Dicky Beach suburb, rear duplex lawn mowing on sub-100sqm yard, full message in their own words."
        />
      )}

      <FinalCTA
        heading={`Want a free website like ${c.business}?`}
        body="Apply in 60 seconds. We email back in 24 hours with a written agreement or a polite decline. No call needed."
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />
    </>
  );
}
