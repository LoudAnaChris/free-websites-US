export const SITE = {
  name: "Free SEO Websites",
  fullName: "Free SEO Websites by Loudachris",
  domain: "freeseowebsites.com",
  url: "https://freeseowebsites.com",
  parentBrand: "Loudachris Digital Marketing",
  parentUrl: "https://www.loudachris.com.au",
  abn: "73 630 143 190",
  email: "chris@loudachris.com.au",
  // Email-only contact for v1; phone TBD for US market
  phone: "",
  phoneE164: "",
  // Loudachris operates from Adelaide, Australia. For schema purposes we list the
  // operator address but areaServed/locale are set to US in pages and schema.
  address: {
    street: "21-22 Greenhill Rd",
    locality: "Wayville",
    region: "SA",
    postcode: "5034",
    country: "AU",
  },
  founder: {
    name: "Chris Lourenco",
    role: "Founder",
    linkedIn: "https://www.linkedin.com/in/loudachris/",
  },
  socials: {
    linkedIn: "https://www.linkedin.com/in/loudachris/",
  },
  ga4: "G-7RDS5NRRMW",
  pricing: {
    sixMonth: 397,
    twelveMonth: 297,
    noLockIn: 497,
    statedValue: 2700,
  },
  // VideoObject uploadDate must be a full ISO 8601 datetime WITH timezone.
  // Same Loudachris case-study videos as the AU site (the operator and proof
  // are identical; only the locale targeting differs).
  videos: [
    {
      id: "AAelWSuGzAE",
      name: "Adam Nettleton",
      business: "Adam Plumbing and Gas",
      city: "Adelaide",
      outcome: "13 to 41 jobs/month in 4 months",
      industry: "plumbers",
      slug: "adam-plumbing-adelaide",
      uploadDate: "2026-04-01T10:00:00+10:30",
    },
    {
      id: "C0lg6FVXc68",
      name: "Mark Laird",
      business: "Mark L Hair",
      city: "Melbourne",
      outcome: "Bought his own salon 5 months in",
      industry: "hairdressers",
      slug: "mark-l-hair-melbourne",
      uploadDate: "2026-04-01T10:00:00+11:00",
    },
    {
      id: "hSumHgExvcs",
      name: "Ali Haque",
      business: "Fine Automotive Detailing",
      city: "Adelaide",
      outcome: "Bought his own workshop in 3 months",
      industry: "mechanics",
      slug: "fine-automotive-adelaide",
      uploadDate: "2026-04-01T10:00:00+10:30",
    },
  ],
} as const;

// Tier 1 launch sprint industries (per architecture spec).
// Order reflects keyword volume + KD: plumbers (14k vol), HVAC (14k vol),
// contractors (8.3k), electricians (3.6k), accountants (1.9k).
export const NAV_INDUSTRIES = [
  { name: "Plumbers", href: "/industries/plumbers" },
  { name: "HVAC", href: "/industries/hvac" },
  { name: "Electricians", href: "/industries/electricians" },
  { name: "Contractors", href: "/industries/contractors" },
  { name: "Accountants", href: "/industries/accountants" },
  { name: "Roofers", href: "/industries/roofers" },
  { name: "Landscapers", href: "/industries/landscapers" },
  { name: "Painters", href: "/industries/painters" },
  { name: "Lawyers", href: "/industries/lawyers" },
  { name: "Restaurants", href: "/industries/restaurants" },
  { name: "Photographers", href: "/industries/photographers" },
  { name: "Real estate agents", href: "/industries/real-estate-agents" },
] as const;

export const FOOTER_INDUSTRIES = [
  { name: "Plumbers", href: "/industries/plumbers" },
  { name: "HVAC", href: "/industries/hvac" },
  { name: "Electricians", href: "/industries/electricians" },
  { name: "Contractors", href: "/industries/contractors" },
  { name: "Accountants", href: "/industries/accountants" },
  { name: "Roofers", href: "/industries/roofers" },
  { name: "Landscapers", href: "/industries/landscapers" },
  { name: "Lawyers", href: "/industries/lawyers" },
  { name: "Restaurants", href: "/industries/restaurants" },
  { name: "Photographers", href: "/industries/photographers" },
  { name: "Hair salons", href: "/industries/hair-salons" },
  { name: "Personal trainers", href: "/industries/personal-trainers" },
] as const;

// US metros: Phoenix (KD 8) and Fort Worth (KD 9) are Tier 1 quick wins per spec.
export const NAV_LOCATIONS = [
  { name: "Phoenix", href: "/locations/phoenix" },
  { name: "Fort Worth", href: "/locations/fort-worth" },
  { name: "San Diego", href: "/locations/san-diego" },
  { name: "Chicago", href: "/locations/chicago" },
  { name: "Charlotte", href: "/locations/charlotte" },
  { name: "Jacksonville", href: "/locations/jacksonville" },
  { name: "Houston", href: "/locations/houston" },
  { name: "Los Angeles", href: "/locations/los-angeles" },
  { name: "Dallas", href: "/locations/dallas" },
  { name: "San Antonio", href: "/locations/san-antonio" },
  { name: "New York", href: "/locations/new-york" },
  { name: "Philadelphia", href: "/locations/philadelphia" },
  { name: "Austin", href: "/locations/austin" },
  { name: "Columbus", href: "/locations/columbus" },
  { name: "Indianapolis", href: "/locations/indianapolis" },
] as const;
