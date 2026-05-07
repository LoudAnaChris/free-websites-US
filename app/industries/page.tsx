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
  title: "Free SEO Websites by Industry | Plumbers, HVAC, Contractors & More",
  description: `Loudachris builds free SEO websites for ${INDUSTRIES.length}+ US small-business industries. Plumbers, HVAC, electricians, contractors, accountants, lawyers, restaurants, and more. Find your industry below.`,
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
      "Plumbers, HVAC, electricians, contractors, roofers, landscapers, painters. Every trade has its own SEO landscape. We build pages for the specific work each trade gets hired for, in the cities your customers search from.",
    Icon: Wrench,
  },
  professional: {
    label: "Professional services",
    eyebrow: "Professional services",
    intro:
      "Lawyers, accountants, real estate agents, photographers. Clients research before they call. We build the content and authority pages they read.",
    Icon: Briefcase,
  },
  "home-services": {
    label: "Home services",
    eyebrow: "Home services",
    intro:
      "Cleaning, pest control, locksmiths, movers, tree services. Specialty home-service work that needs trust signals and visibility on Google for local + service searches.",
    Icon: Building2,
  },
  lifestyle: {
    label: "Lifestyle and personal services",
    eyebrow: "Lifestyle",
    intro:
      "Hair salons, beauty salons, personal trainers, makeup artists, tutors, pet groomers. Small businesses that grow on neighborhood-level search.",
    Icon: Sparkles,
  },
  hospitality: {
    label: "Hospitality",
    eyebrow: "Hospitality",
    intro:
      "Restaurants, cafes, food trucks. Local pack ranking and dedicated booking / reservation / catering pages built for the way US diners search.",
    Icon: Utensils,
  },
  specialty: {
    label: "Specialty",
    eyebrow: "Specialty",
    intro:
      "Pool builders, disability-services providers, and other specialty industries with their own compliance and search behavior.",
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
            <span className="rose-underline">{INDUSTRIES.length}+ US small-business industries.</span>
          </>
        }
        subtitle={`Plumbers, HVAC, electricians, contractors, accountants, lawyers, restaurants, real estate, and more. Each industry page covers trade-specific copy, US keyword research, and case-study fit. Same offer, same 5-day build, same $247/mo.`}
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
