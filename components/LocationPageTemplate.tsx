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
import { INDUSTRIES } from "@/lib/industries";
import type { Location } from "@/lib/industry-types";

export function LocationPageTemplate({ location }: { location: Location }) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: location.city, href: `/locations/${location.slug}` },
  ];

  const topIndustryData = location.topIndustries
    .map((slug) => INDUSTRIES.find((i) => i.slug === slug))
    .filter(Boolean);

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${location.city}, ${location.state}, USA`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "US",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
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
              name: `Free SEO Website for ${location.city} Small Businesses`,
              description: `5-day build, $297/month bundled. 90-day qualified-lead guarantee. Built for ${location.city} customers.`,
              url: `${SITE.url}/locations/${location.slug}`,
              serviceType: `${location.city} Website Design and SEO`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(location.faq)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow={location.hero.eyebrow}
        title={
          <>
            {location.hero.titleLead}{" "}
            <span className="rose-underline">{location.hero.titleAccent}</span>
          </>
        }
        subtitle={location.hero.subtitle}
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />

      <AnswerBox
        question={location.answerBox.question}
        answer={
          <>
            {location.answerBox.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i > 0 ? "mt-3" : ""}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </>
        }
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow on-light">
              About the {location.city} market
            </span>
            <h2 className="mt-4">
              What we&apos;ve learned building for {location.city}.
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

      {topIndustryData.length > 0 && (
        <section
          className="section"
          style={{ background: "var(--color-platinum)" }}
        >
          <div className="container-x max-w-5xl">
            <Reveal className="mb-10 text-center">
              <span className="eyebrow on-light">
                Industries we build for in {location.city}
              </span>
              <h2 className="mt-4">
                Specific pages for the work {location.city} customers actually
                Google.
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topIndustryData.map((industry, i) => (
                <Reveal key={industry!.slug} delay={i * 60}>
                  <Link
                    href={`/industries/${industry!.slug}`}
                    className="block p-6 rounded-[16px] h-full transition-transform hover:-translate-y-1 group"
                    style={{
                      background: "white",
                      border: "1px solid var(--hair-strong)",
                      boxShadow: "0 12px 30px -16px rgba(18,41,51,0.12)",
                    }}
                  >
                    <h3 className="mb-3" style={{ fontSize: 20 }}>
                      {industry!.name} in {location.city}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--color-ink-2)",
                        lineHeight: 1.55,
                      }}
                    >
                      {industry!.meta.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm mt-4 transition-transform group-hover:translate-x-1"
                      style={{
                        color: "var(--color-rose)",
                        fontWeight: 700,
                      }}
                    >
                      See {industry!.name.toLowerCase()}{" "}
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Pricing withId={false} />

      <FAQ
        faqs={location.faq}
        heading={`${location.city} small-business website FAQs.`}
        eyebrow={`${location.city} FAQ`}
      />

      <FinalCTA
        heading={`Free ${location.city} small-business website. 90-day lead guarantee.`}
        body="Apply in 60 seconds. Written agreement in your inbox within 24 hours."
      />
    </>
  );
}
