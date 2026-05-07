import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Free Websites by City | NYC, LA, Chicago, Houston & More",
  description: `Loudachris builds free SEO websites for US small businesses across 14 major cities. Find your city below or email ${SITE.email}.`,
  alternates: { canonical: `${SITE.url}/locations` },
};

// US regional groupings — Northeast, South, Midwest, West
const REGION_GROUPS: { region: string; states: string[] }[] = [
  { region: "Northeast", states: ["NY", "PA"] },
  { region: "South", states: ["TX", "FL", "NC"] },
  { region: "Midwest", states: ["IL", "OH", "IN"] },
  { region: "West", states: ["CA", "AZ"] },
];

const REGION_DATA = REGION_GROUPS.map((g) => ({
  region: g.region,
  cities: LOCATIONS.filter((l) => g.states.includes(l.state)),
}));

export default function LocationsHubPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: LOCATIONS.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/locations/${l.slug}`,
      name: `Free Websites for ${l.city} Small Businesses`,
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
              { name: "Locations", href: "/locations" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />

      <PageHeader
        eyebrow="By city"
        title={
          <>
            Free websites for{" "}
            <span className="rose-underline">small businesses across the US.</span>
          </>
        }
        subtitle={`We build SEO websites for US small businesses in 14 major cities — from NYC to Phoenix to Indianapolis. Each city page is built around the local search market and the businesses who'd actually choose us.`}
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />

      {REGION_DATA.filter((g) => g.cities.length > 0).map((group, gi) => (
        <section
          key={group.region}
          className="section"
          style={{
            background: gi % 2 === 0 ? "white" : "var(--color-platinum)",
          }}
        >
          <div className="container-x max-w-5xl">
            <Reveal className="mb-8">
              <span className="eyebrow on-light">{group.region}</span>
              <h2 className="mt-4">
                Cities in the {group.region}
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.cities.map((c, i) => (
                <Reveal key={c.slug} delay={i * 60}>
                  <Link
                    href={`/locations/${c.slug}`}
                    className="block p-6 rounded-[16px] h-full transition-transform hover:-translate-y-1 group"
                    style={{
                      background:
                        gi % 2 === 0 ? "var(--color-platinum)" : "white",
                      border: "1px solid var(--hair-strong)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                      style={{
                        background: "var(--rose-soft)",
                        color: "var(--color-rose)",
                      }}
                    >
                      <MapPin size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="mb-2" style={{ fontSize: 22 }}>
                      {c.city}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--color-ink-2)",
                        lineHeight: 1.55,
                      }}
                    >
                      {c.cityNotes[0]}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm mt-4 transition-transform group-hover:translate-x-1"
                      style={{
                        color: "var(--color-rose)",
                        fontWeight: 700,
                      }}
                    >
                      See {c.city} websites{" "}
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <FinalCTA />
    </>
  );
}
