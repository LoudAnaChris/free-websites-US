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
    twelveMonth: 247,
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

// Tier 1 launch sprint industries (per architecture spec) - in nav.
// Full list of 50+ industries lives in lib/industries.ts and is exposed via /industries hub.
// Nav order reflects search volume + KD: plumbers, HVAC, contractors, electricians, accountants.
export const NAV_INDUSTRIES = [
  { name: "Plumbers", href: "/industries/plumbers" },
  { name: "HVAC", href: "/industries/hvac" },
  { name: "Electricians", href: "/industries/electricians" },
  { name: "Contractors", href: "/industries/contractors" },
  { name: "Roofers", href: "/industries/roofers" },
  { name: "Solar Installers", href: "/industries/solar-installers" },
  { name: "Auto Repair", href: "/industries/auto-repair" },
  { name: "Landscapers", href: "/industries/landscapers" },
  { name: "Pest Control", href: "/industries/pest-control" },
  { name: "Cleaners", href: "/industries/cleaners" },
  { name: "Movers", href: "/industries/movers" },
  { name: "Accountants", href: "/industries/accountants" },
  { name: "Lawyers", href: "/industries/lawyers" },
  { name: "Real estate agents", href: "/industries/real-estate-agents" },
  { name: "Restaurants", href: "/industries/restaurants" },
  { name: "Med Spas", href: "/industries/med-spas" },
  { name: "Veterinarians", href: "/industries/veterinarians" },
  { name: "Photographers", href: "/industries/photographers" },
] as const;

export const FOOTER_INDUSTRIES = [
  // Trades
  { name: "Plumbers", href: "/industries/plumbers" },
  { name: "HVAC", href: "/industries/hvac" },
  { name: "Electricians", href: "/industries/electricians" },
  { name: "Contractors", href: "/industries/contractors" },
  { name: "Roofers", href: "/industries/roofers" },
  { name: "Solar Installers", href: "/industries/solar-installers" },
  { name: "Garage Doors", href: "/industries/garage-doors" },
  { name: "Foundation Repair", href: "/industries/foundation-repair" },
  { name: "Auto Repair", href: "/industries/auto-repair" },
  { name: "Landscapers", href: "/industries/landscapers" },
  // Home services
  { name: "Cleaners", href: "/industries/cleaners" },
  { name: "Pest Control", href: "/industries/pest-control" },
  { name: "Movers", href: "/industries/movers" },
  { name: "Carpet Cleaning", href: "/industries/carpet-cleaning" },
  { name: "Junk Removal", href: "/industries/junk-removal" },
  // Professional
  { name: "Accountants", href: "/industries/accountants" },
  { name: "Lawyers", href: "/industries/lawyers" },
  { name: "Real Estate Agents", href: "/industries/real-estate-agents" },
  { name: "Architects", href: "/industries/architects" },
  { name: "Marketing Agencies", href: "/industries/marketing-agencies" },
  // Lifestyle / hospitality
  { name: "Restaurants", href: "/industries/restaurants" },
  { name: "Cafes", href: "/industries/cafes" },
  { name: "Hair Salons", href: "/industries/hair-salons" },
  { name: "Med Spas", href: "/industries/med-spas" },
  { name: "Veterinarians", href: "/industries/veterinarians" },
  { name: "Photographers", href: "/industries/photographers" },
] as const;

// US metros surfaced in primary nav. Full list of 65 cities lives in lib/locations.ts
// and is exposed via the /locations hub. Order: Tier 1 quick wins first (Phoenix KD 8,
// Fort Worth KD 9), then biggest metros, then Sunbelt growth markets.
export const NAV_LOCATIONS = [
  { name: "Phoenix", href: "/locations/phoenix" },
  { name: "Fort Worth", href: "/locations/fort-worth" },
  { name: "New York", href: "/locations/new-york" },
  { name: "Los Angeles", href: "/locations/los-angeles" },
  { name: "Chicago", href: "/locations/chicago" },
  { name: "Houston", href: "/locations/houston" },
  { name: "Dallas", href: "/locations/dallas" },
  { name: "Philadelphia", href: "/locations/philadelphia" },
  { name: "San Antonio", href: "/locations/san-antonio" },
  { name: "San Diego", href: "/locations/san-diego" },
  { name: "Austin", href: "/locations/austin" },
  { name: "Jacksonville", href: "/locations/jacksonville" },
  { name: "Charlotte", href: "/locations/charlotte" },
  { name: "Seattle", href: "/locations/seattle" },
  { name: "Denver", href: "/locations/denver" },
  { name: "Washington DC", href: "/locations/washington" },
  { name: "Boston", href: "/locations/boston" },
  { name: "Atlanta", href: "/locations/atlanta" },
  { name: "Miami", href: "/locations/miami" },
  { name: "Nashville", href: "/locations/nashville" },
  { name: "Las Vegas", href: "/locations/las-vegas" },
  { name: "Tampa", href: "/locations/tampa" },
  { name: "Orlando", href: "/locations/orlando" },
  { name: "Portland", href: "/locations/portland" },
  { name: "Minneapolis", href: "/locations/minneapolis" },
] as const;
