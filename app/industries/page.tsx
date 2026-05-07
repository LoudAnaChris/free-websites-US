import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Heart,
  Building2,
  Briefcase,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";
import type { IndustryCategory } from "@/lib/industry-types";

export const metadata: Metadata = {
  title: "Free Websites by Industry | Tradies, NDIS, Hospitality & More",
  description: `Loudachris builds free SEO websites for ${INDUSTRIES.length}+ Australian small-business industries. Find your industry below or call us on ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/industries` },
};

const CATEGORY_META: Record<
  IndustryCategory,
  { label: string; eyebrow: string; intro: string; Icon: typeof Wrench }
> = {
  trades: {
    label: "Trades",
    eyebrow: "Trades",
    intro:
      "Plumbers, electricians, builders, handymen, landscapers — every trade has its own SEO landscape. We build pages for the specific work each trade gets hired for.",
    Icon: Wrench,
  },
  professional: {
    label: "Professional services",
    eyebrow: "Professional services",
    intro:
      "Lawyers, accountants, photographers, migration agents, real estate. Clients research before they call. We build the content and authority pages they read.",
    Icon: Briefcase,
  },
  "home-services": {
    label: "Home services",
    eyebrow: "Home services",
    intro:
      "Cleaning, mould removal, tree removal, retaining walls. Specialty home-service work that needs trust and visibility on Google.",
    Icon: Building2,
  },
  lifestyle: {
    label: "Lifestyle and personal services",
    eyebrow: "Lifestyle",
    intro:
      "Hairdressers, beauty salons, personal trainers, makeup artists, tutors, dog walkers, pet groomers. Small business that grows on suburb-level search.",
    Icon: Sparkles,
  },
  hospitality: {
    label: "Hospitality",
    eyebrow: "Hospitality",
    intro:
      "Restaurants, cafes, food trucks. Local pack ranking and dedicated function/booking pages.",
    Icon: Utensils,
  },
  specialty: {
    label: "Specialty",
    eyebrow: "Specialty",
    intro:
      "NDIS providers and other specialty industries with their own compliance and search behaviour.",
    Icon: Heart,
  },
};

export default function IndustriesHubPage() {
  const grouped = (Object.keys(CATEGORY_META) as IndustryCategory[]).map(
    (cat) => ({
      cat,
      industries: INDUSTRIES.filter((i) => i.category === cat),
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries" },
            ])
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />

      <PageHeader
        eyebrow="By industry"
        title={
          <>
            Free websites for{" "}
            <span className="rose-underline">{INDUSTRIES.length}+ Australian industries.</span>
          </>
        }
        subtitle={`Trades, NDIS, professional services, hospitality, lifestyle. Each industry page covers trade-specific copy, keyword research, and case-study fit. Same offer, same 5-day build, same $247/mo.`}
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />

      {grouped
        .filter((g) => g.industries.length > 0)
        .map((g, gi) => {
          const meta = CATEGORY_META[g.cat];
          return (
            <section
              key={g.cat}
              className="section"
              style={{
                background: gi % 2 === 0 ? "white" : "var(--color-platinum)",
              }}
            >
              <div className="container-x max-w-6xl">
                <Reveal className="mb-10 max-w-3xl">
                  <span className="eyebrow on-light">{meta.eyebrow}</span>
                  <h2 className="mt-4">{meta.label}</h2>
                  <p
                    className="mt-5 text-lg"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {meta.intro}
                  </p>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {g.industries.map((industry, i) => (
                    <Reveal key={industry.slug} delay={i * 40}>
                      <Link
                        href={`/industries/${industry.slug}`}
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
                          <meta.Icon size={20} strokeWidth={2.2} />
                        </div>
                        <h3 className="mb-2" style={{ fontSize: 20 }}>
                          {industry.name}
                        </h3>
                        <p
                          className="text-sm"
                          style={{
                            color: "var(--color-ink-2)",
                            lineHeight: 1.55,
                          }}
                        >
                          {industry.meta.description.slice(0, 130)}...
                        </p>
                        <span
                          className="inline-flex items-center gap-1 text-sm mt-4 transition-transform group-hover:translate-x-1"
                          style={{
                            color: "var(--color-rose)",
                            fontWeight: 700,
                          }}
                        >
                          See {industry.name.toLowerCase()}{" "}
                          <ArrowRight size={14} strokeWidth={2.5} />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

      <FinalCTA />
    </>
  );
}
