import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CrossoverPageTemplate } from "@/components/CrossoverPageTemplate";
import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { CROSSOVER_PAIRS } from "@/lib/crossover-pairs";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return CROSSOVER_PAIRS.map((p) => ({ slug: p.industry, city: p.city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  const location = LOCATIONS.find((l) => l.slug === city);
  if (!industry || !location) return {};

  const cityName = location.city;
  const industryName = industry.name;
  const industryPlural = industry.pluralLowercase;

  return {
    title: `Free SEO Website for ${cityName} ${industryName} | $247/mo, 5-Day Build`,
    description: `Free SEO website for ${cityName} ${industryPlural}. 5-day build. $247/month bundled (hosting + local SEO + content). 90-day qualified-lead guarantee. Built specifically for the ${cityName}, ${location.state} market.`,
    alternates: {
      canonical: `${SITE.url}/industries/${industry.slug}/${location.slug}`,
    },
  };
}

export default async function IndustryCityCrossoverPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!industry || !location) notFound();

  // Verify this is a registered crossover pair (defense in depth)
  const isValidPair = CROSSOVER_PAIRS.some(
    (p) => p.industry === slug && p.city === city
  );
  if (!isValidPair) notFound();

  return <CrossoverPageTemplate industry={industry} location={location} />;
}
