import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { AnswerBox } from "@/components/AnswerBox";
import { Reveal } from "@/components/Reveal";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  localBusinessSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";
import type { Industry, Location } from "@/lib/industry-types";

export function CrossoverPageTemplate({
  industry,
  location,
}: {
  industry: Industry;
  location: Location;
}) {
  const cityName = location.city;
  const stateAbbr = location.state;
  const industryLabel = industry.name;
  const industryPlural = industry.pluralLowercase;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: industry.name, href: `/industries/${industry.slug}` },
    {
      name: cityName,
      href: `/industries/${industry.slug}/${location.slug}`,
    },
  ];

  // Combined FAQ: 4 city+industry specific + 3 from base industry
  const combinedFaq = [
    {
      q: `How much does a ${industryLabel.toLowerCase()} website cost in ${cityName}?`,
      a: `$0 upfront. After launch, $247/month on the 12-month plan, $397/month on the 6-month plan, or $497/month with no lock-in. Hosting, local SEO, call tracking, monthly ranking work, and one new content piece every month are all bundled. Specifically tuned for the ${cityName} ${industryPlural} market: city-specific service-area pages, neighborhood coverage, and Google Business Profile alignment for the ${stateAbbr} local pack. First payment only after the site is live and tracking is verified.`,
    },
    {
      q: `Will my site rank for ${industryLabel.toLowerCase()} searches in ${cityName}?`,
      a: `Most of our builds rank top 10 for the city + service keyword (e.g. ${industry.hero.titleAccent.toLowerCase().includes(cityName.toLowerCase()) ? cityName : `${industryLabel.toLowerCase()} ${cityName}`}) within 45 to 60 days of launch. The 90-day qualified-lead guarantee is in writing: first qualified lead in 90 days, or we keep working at no cost until you get one. ${cityName} ${industryPlural} who rank for the local + service combination consistently outperform those targeting only generic terms.`,
    },
    {
      q: `Do you handle ${cityName} neighborhood coverage?`,
      a: `Yes. ${cityName} is a multi-neighborhood market where customers search at the suburb and zip-code level. We build dedicated neighborhood and zip-code pages over the year as part of monthly content, so coverage compounds. Most of our ${industryLabel.toLowerCase()} clients service 5 to 15 neighborhoods or zip codes; the site is built to rank for each separately rather than competing on a single citywide page.`,
    },
    {
      q: `Why hire an outside team to build a ${cityName} ${industryLabel.toLowerCase()} website?`,
      a: `${location.cityNotes[1] || `${cityName} SERPs reward depth over presence.`} Most local web designers are template shops that don't include ongoing local SEO. We build the website and run the SEO as one bundled service for $247/month. Operated remotely from Adelaide, Australia (parent brand: Loudachris Digital Marketing, 80+ five-star Google reviews), serving US ${industryPlural} async via email + Loom video.`,
    },
    // Reuse top 3 from industry FAQ (skip the very first which usually duplicates the cost question)
    ...(industry.faq.slice(1, 4) || []),
  ];

  // Top neighborhood references for this city (use cityCharacter as a proxy)
  const cityIntro = location.cityNotes[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Free SEO Website for ${cityName} ${industryPlural}`,
              description: `Free 5-day SEO website build for ${cityName} ${industryPlural}. $247/month bundled (hosting + local SEO + monthly content). 90-day qualified-lead guarantee.`,
              url: `${SITE.url}/industries/${industry.slug}/${location.slug}`,
              serviceType: `${industryLabel} Website Design and SEO in ${cityName}`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: `${cityName}, ${stateAbbr}, USA`,
            address: {
              "@type": "PostalAddress",
              addressLocality: cityName,
              addressRegion: stateAbbr,
              addressCountry: "US",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(combinedFaq)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow={`For ${cityName}, ${stateAbbr} ${industryPlural}`}
        title={
          <>
            Free SEO website for{" "}
            <span className="rose-underline">
              {cityName} {industryPlural}.
            </span>
          </>
        }
        subtitle={`A done-for-you SEO website built specifically for ${cityName} ${industryPlural}. Free 5-day build, $247/month bundled (hosting, local SEO, content), 90-day qualified-lead guarantee in writing. No upfront fees. ${cityIntro}`}
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />

      <AnswerBox
        question={`How does a free ${cityName} ${industryLabel.toLowerCase()} website actually work?`}
        answer={
          <>
            <p>
              <strong>$0 upfront.</strong> {cityName}-specific site live in 5
              working days. After launch, $247/month on the 12-month plan
              (best value), $397/month on the 6-month plan, or $497/month with
              no lock-in. Hosting, local SEO, call tracking, monthly ranking
              work, and one new {cityName} neighborhood or service page every
              month are all bundled.
            </p>
            <p className="mt-3">
              The site is built around the searches{" "}
              <em>
                {industryLabel.toLowerCase()} {cityName}
              </em>
              ,{" "}
              <em>
                {industry.hero.titleAccent.replace(/\.$/, "").toLowerCase()}{" "}
                {cityName}
              </em>
              , and the neighborhood + service combinations {cityName}{" "}
              customers actually type into Google. The 90-day qualified-lead
              guarantee is in writing: first qualified lead from {cityName}{" "}
              search within 90 days, or we keep working at no cost.
            </p>
          </>
        }
      />

      {/* Industry's problem section */}
      {industry.problem && (
        <section className="section" style={{ background: "white" }}>
          <div className="container-x max-w-4xl">
            <Reveal>
              <span className="eyebrow on-light">
                {industry.problem.eyebrow}
              </span>
              <h2 className="mt-4">
                Why most {cityName} {industryLabel.toLowerCase()} websites do
                not get the phone ringing.
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              {industry.problem.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
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
          </div>
        </section>
      )}

      {/* What you get - city-flavored */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-5xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">What you get</span>
            <h2 className="mt-4">
              Built for how {cityName} customers find {industryPlural}.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {industry.whatYouGet.slice(0, 4).map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div
                  className="p-6 rounded-[16px] h-full"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair-strong)",
                  }}
                >
                  <h3 className="mb-3" style={{ fontSize: 20 }}>
                    {item.title}
                  </h3>
                  <p
                    className="text-[15px]"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific market notes */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow on-light">
              About the {cityName} {industryLabel.toLowerCase()} market
            </span>
            <h2 className="mt-4">
              What we&apos;ve learned building for {cityName} {industryPlural}.
            </h2>
          </Reveal>
          <div className="mt-7 space-y-5">
            {location.cityNotes.map((note, i) => (
              <Reveal key={i} delay={i * 60}>
                <p
                  className="text-lg"
                  style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: note }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pricing withId={false} />

      {/* Industry success arc, lightly city-flavored via heading */}
      {industry.success && (
        <section
          className="section"
          style={{
            background:
              "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
          }}
        >
          <div className="container-x max-w-4xl">
            <Reveal>
              <span className="eyebrow on-light">
                {industry.success.eyebrow}
              </span>
              <h2 className="mt-4">
                What 90 days looks like for a {cityName}{" "}
                {industryLabel.toLowerCase()}.
              </h2>
              <div className="mt-7 space-y-5">
                {industry.success.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.7,
                    }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Internal linking back to parents */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Link
                href={`/industries/${industry.slug}`}
                className="block p-6 rounded-[16px] h-full transition-transform hover:-translate-y-1 group"
                style={{
                  background: "white",
                  border: "1px solid var(--hair-strong)",
                }}
              >
                <span
                  className="text-xs mb-2 inline-block"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-indigo-deep)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  All cities &middot; {industry.name}
                </span>
                <h3 className="mb-2" style={{ fontSize: 22 }}>
                  Free SEO websites for US {industryPlural} (national)
                </h3>
                <p
                  className="text-[15px]"
                  style={{
                    color: "var(--color-ink-2)",
                    lineHeight: 1.55,
                  }}
                >
                  See the full {industry.name} page covering every keyword,
                  service, and city we build for. Same offer, same 5-day
                  build, same 90-day qualified-lead guarantee.
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm mt-4 transition-transform group-hover:translate-x-1"
                  style={{
                    color: "var(--color-rose)",
                    fontWeight: 700,
                  }}
                >
                  See {industry.name.toLowerCase()} (national){" "}
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={80}>
              <Link
                href={`/locations/${location.slug}`}
                className="block p-6 rounded-[16px] h-full transition-transform hover:-translate-y-1 group"
                style={{
                  background: "white",
                  border: "1px solid var(--hair-strong)",
                }}
              >
                <span
                  className="text-xs mb-2 inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-indigo-deep)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  <MapPin size={12} /> All industries &middot; {cityName}
                </span>
                <h3 className="mb-2" style={{ fontSize: 22 }}>
                  Free SEO websites for {cityName} small businesses (all
                  verticals)
                </h3>
                <p
                  className="text-[15px]"
                  style={{
                    color: "var(--color-ink-2)",
                    lineHeight: 1.55,
                  }}
                >
                  See the {cityName} city page covering all the industries we
                  build for in {cityName} and {location.state}. Same offer,
                  built for the {cityName} search market.
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm mt-4 transition-transform group-hover:translate-x-1"
                  style={{
                    color: "var(--color-rose)",
                    fontWeight: 700,
                  }}
                >
                  See {cityName} (all verticals){" "}
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ
        faqs={combinedFaq}
        heading={`${cityName} ${industryLabel} website FAQs.`}
        eyebrow={`${cityName} ${industryLabel} FAQ`}
      />

      <FinalCTA
        heading={`Free ${cityName} ${industryLabel.toLowerCase()} website. 5 days. 90-day lead guarantee.`}
        body="Apply in 60 seconds. Written agreement in your inbox within 24 hours."
      />
    </>
  );
}
