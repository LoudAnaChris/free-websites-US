import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/case-studies";
import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { CROSSOVER_PAIRS } from "@/lib/crossover-pairs";

const NOW = "2026-05-08T00:00:00+09:30";

const RESOURCE_SLUGS = [
  "why-website-important-small-business",
  "what-makes-good-small-business-website",
  "how-much-does-website-cost-small-business",
  "best-website-builder-small-business-comparison",
  "is-wordpress-good-for-small-business-website",
  "how-to-design-website-for-small-business",
  "how-to-start-website-for-small-business",
  "seo-for-small-business-guide",
  "google-business-profile-small-business",
  "website-vs-social-media-small-business",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/web-designer-near-me", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/case-studies", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/agreement", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const resourceRoutes = RESOURCE_SLUGS.map((slug) => ({
    path: `/resources/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  const industryRoutes = INDUSTRIES.map((i) => ({
    path: `/industries/${i.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    path: `/locations/${l.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const caseStudyRoutes = CASE_STUDIES.map((c) => ({
    path: `/case-studies/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Industry x City crossover pages (e.g. /industries/plumbers/phoenix)
  // 20 priority industries x 20 priority cities = 400 high-intent local SEO pages
  const crossoverRoutes = CROSSOVER_PAIRS.map((pair) => ({
    path: `/industries/${pair.industry}/${pair.city}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...industryRoutes, ...locationRoutes, ...caseStudyRoutes, ...resourceRoutes, ...crossoverRoutes].map(
    (r) => ({
      url: `${SITE.url}${r.path}`,
      lastModified: NOW,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })
  );
}
