import { SITE } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.fullName,
    alternateName: ["Free Websites US", SITE.domain],
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    parentOrganization: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SITE.parentUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postcode,
        addressCountry: SITE.address.country,
      },
    },
    founder: {
      "@type": "Person",
      name: SITE.founder.name,
      sameAs: [SITE.founder.linkedIn],
    },
    sameAs: [SITE.parentUrl, SITE.socials.linkedIn],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "customer support",
      areaServed: "US",
      availableLanguage: ["en-US"],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.fullName,
    url: SITE.url,
    image: `${SITE.url}/og-image.png`,
    email: SITE.email,
    priceRange: "$247-$497/month",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.9526,
      longitude: 138.5949,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SITE.parentUrl,
    },
    ratingValue: "5.0",
    reviewCount: "80",
    bestRating: "5",
    url: "https://www.google.com/search?q=Loudachris+Digital+Marketing+reviews",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder.name,
    jobTitle: SITE.founder.role,
    worksFor: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SITE.parentUrl,
    },
    url: `${SITE.url}/about`,
    sameAs: [SITE.founder.linkedIn, `${SITE.parentUrl}/about`],
    image: `${SITE.url}/images/chris-lourenco.jpg`,
  };
}

export function videoSchemas() {
  return SITE.videos.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${v.name} - ${v.business} ${v.city} - Free Website Case Study`,
    description: `${v.name}, ${v.business} (${v.city}). ${v.outcome}.`,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
    uploadDate: v.uploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    publisher: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SITE.parentUrl,
    },
    creator: {
      "@type": "Person",
      name: SITE.founder.name,
      sameAs: [SITE.founder.linkedIn],
    },
  }));
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SITE.parentUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: opts.url,
    offers: [
      {
        "@type": "Offer",
        name: "12-month plan",
        price: "247",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "247",
          priceCurrency: "USD",
          unitCode: "MON",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
      },
      {
        "@type": "Offer",
        name: "6-month plan",
        price: "397",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "397",
          priceCurrency: "USD",
          unitCode: "MON",
        },
      },
      {
        "@type": "Offer",
        name: "No lock-in plan",
        price: "497",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "497",
          priceCurrency: "USD",
          unitCode: "MON",
        },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

export function howToSchema(steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How a free website with Loudachris works",
    description: "5-day async build, 90-day qualified-lead guarantee, monthly subscription.",
    totalTime: "P5D",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
