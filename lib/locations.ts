import type { Location } from "./industry-types";

function makeLocation(opts: {
  slug: string;
  city: string;
  state: string;
  cityCharacter: string;
  competitorNote: string;
  topIndustries: string[];
  whyPick?: string;
  example: string;
}): Location {
  return {
    slug: opts.slug,
    city: opts.city,
    state: opts.state,
    hero: {
      eyebrow: `For ${opts.city} small businesses`,
      titleLead: `Free websites for`,
      titleAccent: `${opts.city} small businesses.`,
      subtitle: `Whatever you do (trades, professional services, hospitality, real estate) we build the SEO website that gets ${opts.city} customers calling. Free 5-day build, $247/mo, 90-day lead guarantee.`,
      bullets: [
        `Built specifically for ${opts.city} search results`,
        `Neighborhood-level coverage across Greater ${opts.city}`,
        `Local pack alignment via Google Business Profile`,
        `Phone call tracking on every inquiry`,
        `90-day qualified-lead guarantee, in writing`,
      ],
    },
    answerBox: {
      question: `How does a free ${opts.city} small-business website work?`,
      paragraphs: [
        `$0 upfront. Site live in 5 working days. After launch, $247/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in). Hosting, SEO, call tracking, monthly ranking work, and one new content piece every month bundled. 90-day qualified-lead guarantee in writing.`,
        `${opts.cityCharacter} The site is built around the searches ${opts.city} customers actually do, not generic templates that could be in any city.`,
      ],
    },
    cityNotes: [
      opts.cityCharacter,
      opts.competitorNote,
      opts.whyPick || `${opts.city} small businesses with under 15 staff and a clear specialty are exactly who we build for. If you're trying to compete with national chains on raw budget, this isn't right for you. If you want to own the searches in your neighborhood and earn ${opts.city} customers who'd actually choose you, we're a fit.`,
    ],
    topIndustries: opts.topIndustries,
    faq: [
      {
        q: `How much does a website for a ${opts.city} small business cost?`,
        a: `$0 upfront. $247/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in) bundled — hosting, SEO, content, all included. First payment only after the site is live and tracking is verified.`,
      },
      {
        q: `Will my site rank for ${opts.city} searches?`,
        a: `Most of our builds rank top 10 for the city + service keyword (e.g. <em>${opts.example}</em>) within 45-60 days. The 90-day qualified-lead guarantee is in writing.`,
      },
      {
        q: `Do you work with multi-neighborhood businesses?`,
        a: `Yes. ${opts.city} is large — most of our clients service 5-15 neighborhoods or zip codes. We build dedicated location pages over the year as part of monthly content so coverage compounds.`,
      },
      {
        q: `Can you handle Google Business Profile setup?`,
        a: `Yes. We align your Google Business Profile with the website (NAP consistency, service areas, categories). Map results often drive more traffic than organic search for local businesses.`,
      },
      {
        q: `Do I need to be in the ${opts.city} downtown area?`,
        a: `No. We build for businesses anywhere in Greater ${opts.city}. Outer neighborhoods often have less competition and rank faster than downtown-focused builds.`,
      },
      {
        q: `Can I cancel after the minimum term?`,
        a: `Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, and the code. No exit fees.`,
      },
    ],
    meta: {
      title: `Web Design ${opts.city} | Free SEO Website + $247/mo`,
      description: `Web design ${opts.city}: free 5-day build, $247/mo bundled (hosting, local SEO, content). Built specifically for ${opts.city} small businesses. 90-day qualified-lead guarantee.`,
    },
  };
}

export const LOCATIONS: Location[] = [
  makeLocation({
    slug: "new-york",
    city: "New York",
    state: "NY",
    cityCharacter:
      "New York is the deepest small-business market in the country. Five boroughs, hundreds of neighborhoods, and every category fully contested.",
    competitorNote:
      "NYC SERPs are the toughest in the US. National agencies and franchise chains dominate generic searches. The path through is borough-specific + service-specific: an Upper West Side plumber doesn't compete with a Bay Ridge plumber for searches, even though both are 'NYC'.",
    topIndustries: ["contractors", "plumbers", "electricians", "lawyers", "restaurants"],
    example: "plumber NYC",
    whyPick:
      "NYC small businesses with under 15 staff need a website that ranks for their specific borough or neighborhood + service combination. National chains can't beat you on hyper-local relevance, only on raw budget. We build for the search angles where local relevance wins.",
  }),
  makeLocation({
    slug: "los-angeles",
    city: "Los Angeles",
    state: "CA",
    cityCharacter:
      "LA's small-business density is extraordinary across hospitality, trades, professional services, lifestyle. Each neighborhood has its own micro-economy.",
    competitorNote:
      "LA SERPs are second only to NYC in competition. The hospitality scene is saturated; the trades market has every operator from solo licensed plumbers to national franchises. The winning angle is consistently neighborhood + service.",
    topIndustries: ["restaurants", "personal-trainers", "contractors", "hair-salons", "real-estate-agents"],
    example: "plumber Los Angeles",
    whyPick:
      "LA small businesses thrive on neighborhood identity — Silver Lake is different from Brentwood is different from Long Beach. We build sites that lean into that, not against it.",
  }),
  makeLocation({
    slug: "chicago",
    city: "Chicago",
    state: "IL",
    cityCharacter:
      "Chicago is one of the deepest mid-American small-business markets. Trades, restaurants, professional services, and real estate are all dense and active across 77 community areas.",
    competitorNote:
      "Chicago SERPs are competitive but not at NYC/LA levels. KD scores are 5-10 points lower for equivalent terms. Quick wins are real here — most of our Chicago-style builds rank inside 45-60 days.",
    topIndustries: ["plumbers", "contractors", "real-estate-agents", "lawyers", "restaurants"],
    example: "plumber Chicago",
    whyPick:
      "Chicago is the Midwest's most winnable major-metro SEO market. Real volume, less brutal competition than the coasts, and a population that searches before they call.",
  }),
  makeLocation({
    slug: "houston",
    city: "Houston",
    state: "TX",
    cityCharacter:
      "Houston is the most diverse major US city by population, sprawling across hundreds of square miles. The trade and professional services markets are deep, with strong demand from a growing homeowner base.",
    competitorNote:
      "Houston SERPs are friendlier than the coastal majors. Volume is huge; competition is more fragmented. Texas-friendly SEO (city + service + zip) compounds fast.",
    topIndustries: ["hvac", "plumbers", "contractors", "real-estate-agents", "lawyers"],
    example: "HVAC Houston",
    whyPick:
      "Houston small businesses need to be findable across a sprawling metro. We build for zip-code + service search behaviour, which is how Houston customers actually search.",
  }),
  makeLocation({
    slug: "phoenix",
    city: "Phoenix",
    state: "AZ",
    cityCharacter:
      "Phoenix is one of the fastest-growing US metros. Population growth means new homeowners, new businesses, and constantly changing search behaviour. Trades and HVAC are particularly active.",
    competitorNote:
      "Phoenix SERPs are easier than coastal majors. Strong search volume, fragmented competition. Most of our Phoenix-equivalent builds rank inside 45 days.",
    topIndustries: ["hvac", "contractors", "plumbers", "landscapers", "real-estate-agents"],
    example: "HVAC Phoenix",
    whyPick:
      "Phoenix is one of the easiest major US markets to rank in. Lower competition, growing search volume, and a population that searches before they call.",
  }),
  makeLocation({
    slug: "philadelphia",
    city: "Philadelphia",
    state: "PA",
    cityCharacter:
      "Philadelphia has dense small-business activity across trades, professional services, and hospitality. The neighborhood structure (Center City, South Philly, Northern Liberties, etc.) drives hyper-local search.",
    competitorNote:
      "Philly SERPs are competitive but rankable. The neighborhood angle works exceptionally well here because Philadelphians search by neighborhood more than by 'Philadelphia'.",
    topIndustries: ["contractors", "plumbers", "lawyers", "restaurants", "real-estate-agents"],
    example: "plumber Philadelphia",
    whyPick:
      "Philadelphia search behavior is neighborhood-first. We build sites for the specific neighborhood + service combinations Philadelphians actually type.",
  }),
  makeLocation({
    slug: "san-antonio",
    city: "San Antonio",
    state: "TX",
    cityCharacter:
      "San Antonio is steadily growing with a strong local-services economy. Trades, hospitality, and real estate are all active.",
    competitorNote:
      "San Antonio SERPs are among the easier major-metro markets. Lower competition than Houston/Dallas, decent volume, and a population that uses Google to find local services.",
    topIndustries: ["contractors", "plumbers", "hvac", "restaurants", "real-estate-agents"],
    example: "contractor San Antonio",
    whyPick:
      "San Antonio is the easiest large Texas market to rank in. Decent volume, less ferocious competition than the bigger Texas metros.",
  }),
  makeLocation({
    slug: "san-diego",
    city: "San Diego",
    state: "CA",
    cityCharacter:
      "San Diego combines a stable resident base with strong tourism, military, and tech. Trades, restaurants, and lifestyle services are all dense.",
    competitorNote:
      "San Diego SERPs are competitive but more rankable than LA. Neighborhood targeting (La Jolla, Pacific Beach, North Park) breaks the SERPs into winnable slices.",
    topIndustries: ["contractors", "restaurants", "personal-trainers", "real-estate-agents", "hair-salons"],
    example: "contractor San Diego",
    whyPick:
      "San Diego search behaviour is neighborhood-driven. Customers search for La Jolla plumber, not San Diego plumber. We build for the neighborhood granularity.",
  }),
  makeLocation({
    slug: "fort-worth",
    city: "Fort Worth",
    state: "TX",
    cityCharacter:
      "Fort Worth has the cultural distinctness from Dallas (it's a separate city, not just 'DFW') and a small-business economy that's deep across trades, professional services, and hospitality. Population growth from 750k to over 950k in a decade has driven steady demand for new local service providers.",
    competitorNote:
      "Fort Worth SERPs are noticeably friendlier than Dallas — KD 9 on the headline 'web design fort worth' versus KD 60 for Dallas. Most Fort Worth SERPs are still occupied by template-only sites and a few local solo operators. Quick wins are real here.",
    topIndustries: ["contractors", "hvac", "plumbers", "real-estate-agents", "accountants"],
    example: "web design Fort Worth",
    whyPick:
      "Fort Worth is one of the easiest large Texas markets to rank in. Real volume, soft competition, growing population. We build for the Fort Worth + service searches that haven't been claimed yet, while Dallas operators chase the metroplex-wide pillar SERPs.",
  }),
  makeLocation({
    slug: "dallas",
    city: "Dallas",
    state: "TX",
    cityCharacter:
      "Dallas has strong professional services, real estate, and trades. The DFW metroplex (Dallas + Fort Worth + suburbs) means location targeting matters more here than in most cities.",
    competitorNote:
      "Dallas SERPs are competitive in real estate and professional services, friendlier in trades. The DFW metro split means hyper-local pages outperform city-wide pages consistently.",
    topIndustries: ["real-estate-agents", "lawyers", "contractors", "hvac", "accountants"],
    example: "realtor Dallas",
    whyPick:
      "Dallas-Fort Worth is a metroplex, not a single market. We build for specific suburbs (Plano, Frisco, Irving, Arlington) which is where the rankings actually live.",
  }),
  makeLocation({
    slug: "austin",
    city: "Austin",
    state: "TX",
    cityCharacter:
      "Austin is one of the fastest-growing US cities. Tech migration has driven rapid expansion in trades, real estate, restaurants, and professional services.",
    competitorNote:
      "Austin SERPs have gotten more competitive as the city has grown, but neighborhoods (East Austin, South Lamar, Cedar Park, Round Rock) still have winnable SERPs.",
    topIndustries: ["real-estate-agents", "contractors", "restaurants", "personal-trainers", "lawyers"],
    example: "realtor Austin",
    whyPick:
      "Austin's growth means new customers searching every week. The site that ranks first wins them before they pick a service provider through word-of-mouth.",
  }),
  makeLocation({
    slug: "jacksonville",
    city: "Jacksonville",
    state: "FL",
    cityCharacter:
      "Jacksonville is Florida's largest city by area. The trades market is deep, the real-estate market is active from year-round migration, and small business density is growing.",
    competitorNote:
      "Jacksonville SERPs are friendlier than Miami/Orlando. Lower competition, decent volume, and rankings hold once achieved.",
    topIndustries: ["contractors", "real-estate-agents", "hvac", "plumbers", "restaurants"],
    example: "contractor Jacksonville",
    whyPick:
      "Jacksonville is one of the easier Florida markets to rank in. Less crowded than Miami, growing population, real search demand.",
  }),
  makeLocation({
    slug: "columbus",
    city: "Columbus",
    state: "OH",
    cityCharacter:
      "Columbus is one of the fastest-growing Midwestern cities. Strong trades, professional services, and a dense Ohio State University-adjacent local economy.",
    competitorNote:
      "Columbus SERPs are very rankable. Lower competition than Chicago or Detroit, growing search volume, and a population that uses Google for local services.",
    topIndustries: ["contractors", "plumbers", "real-estate-agents", "restaurants", "lawyers"],
    example: "plumber Columbus",
    whyPick:
      "Columbus is one of the most underrated SEO markets in the US. Real volume, low competition, and rankings tend to stick.",
  }),
  makeLocation({
    slug: "charlotte",
    city: "Charlotte",
    state: "NC",
    cityCharacter:
      "Charlotte is one of the South's fastest-growing cities. Banking, trades, real estate, and small business density are all expanding.",
    competitorNote:
      "Charlotte SERPs are competitive in financial services, friendlier elsewhere. Real estate and trades have winnable SERPs at the neighborhood + service level.",
    topIndustries: ["real-estate-agents", "contractors", "lawyers", "accountants", "hvac"],
    example: "realtor Charlotte",
    whyPick:
      "Charlotte's growth makes it a high-leverage SEO market. New residents search Google for service providers; the site that ranks gets the call.",
  }),
  makeLocation({
    slug: "indianapolis",
    city: "Indianapolis",
    state: "IN",
    cityCharacter:
      "Indianapolis has a deep local economy: trades, professional services, real estate, manufacturing-adjacent service providers. Competition is lower than coastal majors.",
    competitorNote:
      "Indianapolis SERPs are among the most rankable major-metro markets in the US. Real search volume, modest competition, fast-compounding rankings.",
    topIndustries: ["contractors", "plumbers", "hvac", "real-estate-agents", "restaurants"],
    example: "plumber Indianapolis",
    whyPick:
      "Indianapolis offers more rankable real estate per dollar of SEO effort than nearly any other major US metro. Quiet competition, real demand, durable rankings.",
  }),
];
