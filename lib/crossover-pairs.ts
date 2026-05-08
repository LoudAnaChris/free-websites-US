/**
 * Industry x City crossover pages (per UK sibling pattern).
 * 20 priority industries x 20 priority cities = 400 crossover pages.
 *
 * Industries chosen for highest local-search volume + trade relevance.
 * Cities chosen for Tier 1 quick wins + biggest US metros.
 *
 * Each crossover renders at /industries/[slug]/[city] with combined
 * industry + city content, schema, and internal linking.
 */

export const CROSSOVER_INDUSTRY_SLUGS = [
  "plumbers",
  "hvac",
  "electricians",
  "contractors",
  "roofers",
  "landscapers",
  "painters",
  "solar-installers",
  "pest-control",
  "movers",
  "locksmiths",
  "cleaners",
  "accountants",
  "lawyers",
  "real-estate-agents",
  "restaurants",
  "photographers",
  "auto-repair",
  "garage-doors",
  "tree-services",
] as const;

export const CROSSOVER_CITY_SLUGS = [
  "phoenix",
  "fort-worth",
  "new-york",
  "los-angeles",
  "chicago",
  "houston",
  "dallas",
  "philadelphia",
  "san-antonio",
  "san-diego",
  "austin",
  "jacksonville",
  "charlotte",
  "seattle",
  "denver",
  "atlanta",
  "miami",
  "nashville",
  "tampa",
  "las-vegas",
] as const;

export type CrossoverIndustrySlug = (typeof CROSSOVER_INDUSTRY_SLUGS)[number];
export type CrossoverCitySlug = (typeof CROSSOVER_CITY_SLUGS)[number];

export const CROSSOVER_PAIRS: Array<{
  industry: CrossoverIndustrySlug;
  city: CrossoverCitySlug;
}> = CROSSOVER_INDUSTRY_SLUGS.flatMap((industry) =>
  CROSSOVER_CITY_SLUGS.map((city) => ({ industry, city }))
);
