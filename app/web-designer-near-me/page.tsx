import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
import { SITE, NAV_LOCATIONS, NAV_INDUSTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Website Designer Near Me | Free SEO Website + $247/mo, US Nationwide",
  description:
    "Looking for a website designer near you? We build free SEO websites for US small businesses in any city. 5-day build, $247/mo bundled (hosting + SEO + content). 90-day qualified-lead guarantee. Beats $2,999 upfront from local web design companies.",
  alternates: { canonical: `${SITE.url}/web-designer-near-me` },
};

const FAQS = [
  {
    q: "How do I find a good website designer near me?",
    a: "Most local web designers are template shops charging $1,500 to $5,000 upfront for a Wix or Squarespace site that won't rank. Some agencies charge $5,000 to $15,000 plus monthly retainers. We build your SEO website for $0 upfront and $247/mo bundled  - hosting, SEO, monthly content. National coverage with city-specific builds, so you get the same level of local relevance as hiring a designer down the street.",
  },
  {
    q: "Why a national web designer instead of a local one?",
    a: "Local web designers usually have one of two problems: (1) they're template shops that don't do SEO, so your site looks fine but doesn't rank; or (2) they're full agencies charging custom-build prices ($5,000+ upfront) that small businesses can't justify. We bundle the build into a monthly subscription, so you get agency-level SEO at a price local designers can't match  - and your site is built for your city, not for ours.",
  },
  {
    q: "Do you really build sites for any US city?",
    a: "Yes. We've built sites that rank in Phoenix, Fort Worth, San Diego, Chicago, Charlotte, Jacksonville, Houston, LA, Dallas, NYC, and beyond. We do the city research, build city-specific copy and schema, and align your Google Business Profile with the site. The fact that we're not in your city is invisible to Google  - what matters is whether the site is built for your city's customers.",
  },
  {
    q: "What's the catch with a free website?",
    a: "No catch. The build is genuinely free. We make our money on the monthly $247-$497 care plan. Most clients stay 24-36 months because the site keeps producing leads. If you cancel after the minimum term, you keep the site, the domain, and the code. No held-hostage assets.",
  },
  {
    q: "How is this different from theaffordablewebguy or other 'affordable' web designers?",
    a: "theaffordablewebguy charges $2,999 upfront and serves Denver-metro only. We charge $0 upfront and serve any US city. The other 'affordable' web designers we've reviewed charge $1,000-$5,000 upfront for template-only sites that don't include ongoing SEO. Our $247/mo includes the build, hosting, monthly SEO work, monthly content, and call tracking.",
  },
  {
    q: "Do you do website redesigns or only new builds?",
    a: "Both. About 60% of our clients are replacing an existing site that didn't rank  - Wix, Squarespace, GoDaddy, an old WordPress, or a custom build that's gone stale. We migrate the content, build the new site, and handle the 301 redirects so you don't lose any existing rankings. The other 40% are starting fresh.",
  },
  {
    q: "What about Shopify or WordPress designers near me?",
    a: "We build on Next.js and headless WordPress, optimized for SEO performance. If you specifically need a Shopify store, we can integrate Shopify checkout into the site (we don't build full Shopify themes). For most service businesses, the SEO performance of a Next.js + WordPress build outperforms a Shopify theme by a wide margin.",
  },
  {
    q: "How fast can you have my site live?",
    a: "5 working days from the moment you submit the intake form. The 5-day clock is in writing  - if we don't deliver in 5 working days, your build is free for life. Most local web designers quote 6-12 weeks for an equivalent build.",
  },
  {
    q: "Will I have a single point of contact?",
    a: "Yes. Chris from Loudachris Digital Marketing builds and manages every site personally. No outsourcing, no offshoring, no junior agency staff. You get one named person who owns the result. Communication is async (email + Loom video), no calls  - that's how we keep the build cost low enough to give it away.",
  },
  {
    q: "What if I want to meet in person?",
    a: "We don't do in-person meetings. Loudachris is based in Adelaide, Australia, serving US clients async. If you need a designer who can meet at your office, we're not the right fit. If you want a website that ranks and a guarantee in writing, we are.",
  },
];

// Per architecture: priority order matches Tier 1 keyword targets.
const FEATURED_CITIES = [
  { name: "Phoenix, AZ", slug: "phoenix", note: "KD 8 quick win", desc: "Fastest-growing US metro. Trades and HVAC are particularly active." },
  { name: "Fort Worth, TX", slug: "fort-worth", note: "KD 9 quick win", desc: "DFW metro with softer SERPs than Dallas. Real volume, fragmented competition." },
  { name: "San Diego, CA", slug: "san-diego", note: "Tier 2", desc: "Neighborhood-driven search behavior. La Jolla, Pacific Beach, North Park each rank separately." },
  { name: "Chicago, IL", slug: "chicago", note: "Tier 2", desc: "Midwest's most winnable major-metro SEO market. KD 5-10 lower than coastal majors." },
  { name: "Charlotte, NC", slug: "charlotte", note: "Tier 2", desc: "Growth metro with soft SERPs in real estate and trades. New residents Google service providers." },
  { name: "Jacksonville, FL", slug: "jacksonville", note: "Tier 2", desc: "Strong roofing, HVAC, and contractor demand. Coastal small-business density." },
  { name: "Houston, TX", slug: "houston", note: "Tier 2", desc: "Sprawling metro with zip-code search behavior. Texas-friendly SEO compounds fast." },
  { name: "Los Angeles, CA", slug: "los-angeles", note: "Tier 2", desc: "Neighborhood + service is the only winning angle. Silver Lake ≠ Brentwood ≠ Long Beach." },
];

const ALL_CITIES = NAV_LOCATIONS;

const SERVICES = NAV_INDUSTRIES.slice(0, 8);

export default function WebDesignerNearMePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Website designer near me", href: "/web-designer-near-me" },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "US Cities We Build Websites In",
    itemListElement: ALL_CITIES.map((city, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: city.name,
      url: `${SITE.url}${city.href}`,
    })),
  };

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
              name: "Website Designer for US Small Businesses",
              description:
                "Free SEO website build for US small businesses in any city. $247/mo bundled (hosting, SEO, content). 90-day qualified-lead guarantee.",
              url: `${SITE.url}/web-designer-near-me`,
              serviceType: "Website Design and SEO",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQS)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Website designer · US nationwide"
        title={
          <>
            A website designer{" "}
            <span className="rose-underline">built for your city,</span>{" "}
            from $0 upfront.
          </>
        }
        subtitle="The only US web designer service that's genuinely national and genuinely local. Free 5-day build, $247/mo bundled, 90-day qualified-lead guarantee. Built for your city's customers, regardless of where you are."
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />

      <AnswerBox
        question="How does a website designer that's not in my city actually help me rank locally?"
        answer={
          <>
            <p>
              <strong>Google ranks websites, not designers.</strong> What
              matters is whether your site is built for your city's customers,
              has city-specific schema, aligns with your Google Business
              Profile, and earns links over time. None of that requires the
              designer to be in your city.
            </p>
            <p className="mt-3">
              We do the local research (your competitors, your city's search
              behavior, your neighborhood structure) and build the site for
              your customers, not ours. Our $247/mo bundles ongoing local SEO
              work so the rankings compound. Most local designers either
              don't do SEO or charge $1,000-$2,500/mo extra for it.
            </p>
          </>
        }
      />

      {/* The "near me but national" positioning */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-5xl">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow on-light">National coverage, local builds</span>
            <h2 className="mt-4">
              The local web designers near you charge $2,999 upfront. We
              charge $0.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.65 }}
            >
              We've reviewed quotes from web design companies near our
              clients in every major US metro. Here's what we've consistently
              seen.
            </p>
          </Reveal>

          <div
            className="rounded-[20px] overflow-hidden"
            style={{
              background: "white",
              border: "1px solid var(--hair-strong)",
              boxShadow: "0 12px 40px -20px rgba(18,41,51,0.12)",
            }}
          >
            <div
              className="grid grid-cols-3 gap-px"
              style={{ background: "var(--hair)" }}
            >
              {[
                "",
                "Local web designer near you",
                "Free SEO Websites by Loudachris",
              ].map((h, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 text-sm font-bold"
                  style={{
                    background: i === 2 ? "var(--rose-soft)" : "white",
                    color:
                      i === 2 ? "var(--color-rose)" : "var(--color-ink)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {h || "."}
                </div>
              ))}
              {[
                ["Upfront fee", "$1,500 - $5,000", "$0"],
                ["Time to live site", "4 - 12 weeks", "5 working days"],
                ["Hosting", "Sometimes included", "Always included"],
                [
                  "Local SEO included",
                  "Rarely (or $500-$2,000/mo extra)",
                  "Always  - bundled in monthly fee",
                ],
                [
                  "Google Business Profile alignment",
                  "Sometimes",
                  "Always",
                ],
                [
                  "Call tracking",
                  "Add-on",
                  "Included",
                ],
                [
                  "Lead guarantee",
                  "Almost never",
                  "90 days, in writing",
                ],
                [
                  "Ongoing content (1 piece/mo)",
                  "Add-on at $200-$500/mo",
                  "Included",
                ],
                [
                  "Total Year 1 cost",
                  "$5,000 - $30,000",
                  "$2,964 (12-month plan)",
                ],
              ].map((row, ri) => (
                <div key={ri} style={{ display: "contents" }}>
                  {row.map((cell, ci) => (
                    <div
                      key={`${ri}-${ci}`}
                      className="p-5 sm:p-6 text-sm"
                      style={{
                        background:
                          ci === 2 ? "rgba(227,87,171,0.04)" : "white",
                        color:
                          ci === 0
                            ? "var(--color-ink-2)"
                            : "var(--color-ink)",
                        fontWeight: ci === 0 ? 600 : 400,
                      }}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured cities */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-6xl">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow on-light">Cities we build for</span>
            <h2 className="mt-4">
              City-specific builds, not generic templates with your city
              swapped in.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.65 }}
            >
              Each city has its own search behavior, competitor density,
              and SERP structure. We build accordingly. Phoenix and Fort
              Worth are the highest-leverage starting points right now.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_CITIES.map((city, i) => (
              <Reveal key={city.slug} delay={i * 50}>
                <Link
                  href={`/locations/${city.slug}`}
                  className="block p-6 rounded-[16px] h-full transition-transform hover:-translate-y-1 group"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair-strong)",
                    boxShadow: "0 12px 30px -16px rgba(18,41,51,0.12)",
                  }}
                >
                  <div className="flex items-start gap-2.5 mb-3">
                    <MapPin
                      size={18}
                      strokeWidth={2.5}
                      color="var(--color-rose)"
                      className="flex-shrink-0 mt-0.5"
                    />
                    <h3 style={{ fontSize: 18 }}>{city.name}</h3>
                  </div>
                  <span
                    className="inline-block mb-3 text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(140,135,201,0.18)",
                      color: "var(--color-indigo-deep)",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {city.note}
                  </span>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.55,
                    }}
                  >
                    {city.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm mt-4 transition-transform group-hover:translate-x-1"
                    style={{
                      color: "var(--color-rose)",
                      fontWeight: 700,
                    }}
                  >
                    See {city.name.split(",")[0]} build{" "}
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center" delay={300}>
            <Link
              href="/locations"
              className="btn btn-ghost"
              style={{ color: "var(--color-ink)" }}
            >
              See all US cities <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* What "near me" actually means for SEO */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">What &lsquo;near me&rsquo; actually means for SEO</span>
            <h2 className="mt-4">
              Three reasons local web design companies near you don&apos;t
              rank.
            </h2>
          </Reveal>

          <div className="space-y-7">
            {[
              {
                heading: "1. They use templates that skip the SEO basics.",
                body: "Most local web designers (especially the &lsquo;affordable&rsquo; ones) build on Wix, Squarespace, or GoDaddy templates. Those templates skip the schema markup, page structure, internal linking, and Google Business Profile alignment that get you onto page 1. Your competitors who paid $5,000 for a custom site look the same as you on Google. Neither of you ranks.",
              },
              {
                heading: "2. They build the site, then disappear.",
                body: "A typical local web designer charges $2,500-$5,000 upfront, takes 6-12 weeks to deliver, and then you don&apos;t hear from them again unless you pay a separate SEO retainer. Google rewards sites that get updated, get new content, and earn new links. Static sites slide down the SERP over 12-24 months even if they ranked initially.",
              },
              {
                heading: "3. They don&apos;t track the leads, so they can&apos;t prove the site works.",
                body: "We&apos;ve never met a local web designer who installed call tracking, form analytics, or Search Console properly on a small business site. So when the phone doesn&apos;t ring, nobody knows whether the problem is the site, the listing, or the market. We install all three on day 1 and report on them monthly.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="p-6 sm:p-7 rounded-[16px]"
                  style={{
                    background: "var(--color-platinum)",
                    border: "1px solid var(--hair-strong)",
                  }}
                >
                  <h3
                    className="mb-3"
                    style={{ fontSize: 20, lineHeight: 1.3 }}
                    dangerouslySetInnerHTML={{ __html: item.heading }}
                  />
                  <p
                    className="text-base"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.7,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-5xl">
          <Reveal className="mb-10 text-center max-w-3xl mx-auto">
            <span className="eyebrow on-light">By industry</span>
            <h2 className="mt-4">
              Industry-specific builds for the verticals we know best.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.65 }}
            >
              We don&apos;t build for everyone. We build for service-based
              small businesses where local SEO is the highest-leverage
              channel.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 50}>
                <Link
                  href={s.href}
                  className="block p-5 rounded-[14px] h-full transition-transform hover:-translate-y-1 group"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair-strong)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2
                      size={16}
                      strokeWidth={2.5}
                      color="var(--color-rose)"
                    />
                    <span
                      style={{
                        fontWeight: 700,
                        color: "var(--color-ink)",
                      }}
                    >
                      {s.name}
                    </span>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-xs mt-2 transition-transform group-hover:translate-x-1"
                    style={{
                      color: "var(--color-rose)",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    SEE BUILD →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pricing withId={false} />

      <FAQ
        faqs={FAQS}
        heading="Website designer near me, answered."
        eyebrow="FAQ"
      />

      <FinalCTA
        heading="Free SEO website. Built for your city. Live in 5 days."
        body="Apply in 60 seconds. Written agreement in your inbox within 24 hours. 90-day qualified-lead guarantee in writing."
      />
    </>
  );
}
