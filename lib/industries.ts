import type { Industry } from "./industry-types";
import { HVAC_INDUSTRY } from "./industry-data/hvac";
import { ELECTRICIANS_INDUSTRY } from "./industry-data/electricians";
import { CONTRACTORS_INDUSTRY } from "./industry-data/contractors";
import { ACCOUNTANTS_INDUSTRY } from "./industry-data/accountants";
import { LAWYERS_INDUSTRY } from "./industry-data/lawyers";
import { REAL_ESTATE_AGENTS_INDUSTRY } from "./industry-data/real-estate-agents";
import { RESTAURANTS_INDUSTRY } from "./industry-data/restaurants";
import { PHOTOGRAPHERS_INDUSTRY } from "./industry-data/photographers";
import { ROOFERS_INDUSTRY } from "./industry-data/roofers";
import { LANDSCAPERS_INDUSTRY } from "./industry-data/landscapers";
import { CLEANERS_INDUSTRY } from "./industry-data/cleaners";
import { CAFES_INDUSTRY } from "./industry-data/cafes";
import { POOL_BUILDERS_INDUSTRY } from "./industry-data/pool-builders";

// ============================================================
// TIER 1 - LAUNCH SPRINT (US-localised originals)
// ============================================================

export const INDUSTRIES: Industry[] = [
  {
    slug: "trades",
    name: "Trades",
    pluralLowercase: "trades",
    category: "trades",
    hero: {
      eyebrow: "For US trades",
      titleLead: "A free website that wins the jobs",
      titleAccent: "you should be getting.",
      subtitle:
        "Cheaper trades are outranking you on Google. Angi and Thumbtack take a cut on every lead. Your old site looks fine but the phone barely rings. We fix that with a free 5-day SEO build, $247/mo, and a 90-day lead guarantee.",
      bullets: [
        "You stop competing on Angi and Thumbtack and start owning your city's searches",
        "You see exactly which keyword drove every phone call",
        "You get one new service-area page added every month",
        "You keep the site, the domain, and the code from day one",
        "You get a written 90-day lead guarantee or we work for free until you do",
      ],
    },
    problem: {
      eyebrow: "What you've been dealing with",
      heading: "Three reasons most trade websites don't get the phone ringing.",
      paragraphs: [
        "<strong>Your old site is built on a template that can't rank.</strong> Wix, Squarespace, GoDaddy templates skip the schema markup, page structure, and Google Business Profile alignment that get you onto page 1. Your competitors who paid $5k for a custom site look the same as you on Google. Neither of you ranks.",
        "<strong>You're paying Angi or Thumbtack a cut on every lead.</strong> Or you're spending $1,500+ a month on Google Ads with zero idea which clicks turn into calls. The work comes in but the margin is gone before you start. You're running faster to stand still.",
        "<strong>You can't see what's broken.</strong> No call tracking. No form analytics. No idea which Google search drove the one job you got this week. You can't fix what you can't measure, and your last agency never showed you any data.",
      ],
    },
    answerBox: {
      question: "How does a free trade website actually work?",
      paragraphs: [
        "A free trade website built by Loudachris costs $0 upfront and $247/month (12-month plan) for hosting plus SEO bundled. We build the site in 5 working days. The 90-day lead guarantee means first qualified lead within 90 days, or we keep working at no cost. Most builds rank top 10 on Google for their primary trade + city keyword within 45 days.",
        "Think <em>plumber Houston</em>, <em>electrician Phoenix</em>, <em>contractor Dallas</em>  - these are the searches that turn into calls. We build for those, not for awards.",
      ],
    },
    whatYouGet: [
      {
        icon: "Search",
        title: "Templates that rank",
        body: "Wix, Squarespace, GoDaddy templates skip the schema markup, page structure, and Google Business Profile alignment that get you onto page 1. We build the technical SEO from the start.",
      },
      {
        icon: "Phone",
        title: "Call tracking",
        body: "If you don't know which Google search drove a call, you can't improve. We install call tracking on day one so every phone inquiry is attributed to a specific keyword and page.",
      },
      {
        icon: "MapPin",
        title: "Service-area depth",
        body: "Trade SEO lives in service-area pages  - plumber Brooklyn, plumber Queens, plumber Bronx. We build the structure for these and add one new area or service page every month.",
      },
    ],
    caseStudyVideoId: "AAelWSuGzAE",
    faq: [
      {
        q: "How much does a trade website cost in the US?",
        a: "Most agencies charge trades $3,000-$10,000 upfront for a website plus $500-$1,500/mo for SEO. We charge $0 upfront and $247/mo bundled (12-month plan). Hosting, SEO, call tracking, and monthly content are all included. Your first invoice only triggers after the site is live and tracking is verified.",
      },
      {
        q: "Why do most trade websites fail to rank on Google?",
        a: "Three reasons. One: cheap drag-and-drop builders skip schema markup, fast hosting, and proper page structure. Two: there's no ongoing SEO work  - content stays static, no new service-area pages, no Google Business Profile alignment. Three: they don't track which searches drive calls, so the site can't be improved over time. We fix all three.",
      },
      {
        q: "How long does it take to build a trade website?",
        a: "5 working days from when you submit the intake form. Day 1: keyword research. Day 2: design. Day 3: build. Day 4: copy and on-page SEO. Day 5: launch and tracking setup. If we miss the deadline, your build is free for life.",
      },
      {
        q: "Will my website show up on Google for my city?",
        a: "Most of our trade builds rank top 10 for the city + service keyword within 45-60 days. The 90-day qualified-lead guarantee is in writing  - first lead within 90 days, or we keep working at no cost.",
      },
      {
        q: "Do you work with plumbers, electricians, contractors, AND HVAC?",
        a: "Yes. Trade-specific pages live at /industries/plumbers, /industries/electricians, /industries/contractors, /industries/hvac. Same offer, same 5-day build, same $247/mo. Each industry page covers trade-specific copy, keyword research, and case study fit.",
      },
    ],
    success: {
      eyebrow: "What 90 days looks like",
      heading: "By the time the guarantee expires, you've stopped paying for leads.",
      paragraphs: [
        "<strong>Day 1:</strong> Site live. Tracking installed. You can see which page got loaded, which keyword drove it, which call was answered.",
        "<strong>Day 30:</strong> First qualified lead from Google. Your name's in the inbox, not Angi's portal. You keep 100% of the job.",
        "<strong>Day 60:</strong> Multiple leads per week. The phone rings on a Tuesday morning and it's <em>emergency plumber Dallas</em> not <em>my mom's friend</em>.",
        "<strong>Day 90:</strong> The guarantee's been honored. You're paying $247/mo and getting more leads than you got from $1,500/mo in ads. The math flips.",
      ],
    },
    sisterIndustries: ["plumbers", "electricians", "contractors", "hvac", "landscapers"],
    topCities: ["new-york", "los-angeles", "houston", "phoenix", "dallas"],
    meta: {
      title: "Free Trade Website + SEO | Plumbers, Electricians, Contractors | $247/mo",
      description:
        "Free websites built for US trades in 5 working days. SEO and hosting bundled for $247/mo. 90-day qualified-lead guarantee. Plumbing, electrical, contractor case studies inside.",
    },
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    pluralLowercase: "plumbers",
    category: "trades",
    parentIndustry: "trades",
    hero: {
      eyebrow: "For US plumbers",
      titleLead: "Water heaters, blocked drains, emergencies  -",
      titleAccent: "the calls you should be getting.",
      subtitle:
        "Right now those calls are going to a plumber whose website ranks higher than yours. We fix that with a free 5-day SEO build, $247/mo, and a 90-day lead guarantee. Built around the searches plumbers get hired from.",
      bullets: [
        "You rank for emergency plumber [your city] within 60 days",
        "Every water heater, drain, gas, and emergency service gets its own page",
        "Neighborhood pages added monthly for the areas you actually cover",
        "Call tracking shows you which Google search drove which job",
        "90-day lead guarantee, in writing",
      ],
    },
    problem: {
      eyebrow: "What you've been dealing with",
      heading: "Why most plumber websites don't get the phone ringing.",
      paragraphs: [
        "<strong>You're paying Angi or Thumbtack a cut on every lead.</strong> Or you're spending the equivalent on Google Ads. Either way, the work comes in but the margin is gone before you start. You can't price your way out because the next plumber on the list is doing the same math.",
        "<strong>Your old website doesn't know what plumbers get hired for.</strong> No emergency page. No water heater repair page. No neighborhood pages. Google can't tell what you do or where you do it. Customers searching <em>emergency plumber Brooklyn</em> at 11pm aren't finding you  - they're finding the plumber two neighborhoods over.",
        "<strong>You've got no idea what's working.</strong> Last week's three calls  - were they Google? Word of mouth? The Yellow Pages ad you're still paying for? Without call tracking, you're guessing. And the agency that took your $1,500/mo never showed you a single keyword report.",
      ],
    },
    answerBox: {
      question: "How does a free plumber website actually work?",
      paragraphs: [
        "We build the site in 5 working days for $0 upfront. After launch, you pay $247/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in) for hosting, SEO, call tracking, monthly ranking work, and one new content piece every month. The 90-day lead guarantee means first qualified plumbing lead within 90 days, or we keep working at no cost.",
        "The site is built around the searches plumbers get hired from  - <em>emergency plumber [city]</em>, <em>water heater repair [neighborhood]</em>, <em>drain cleaning [zip]</em>  - not generic templates that look nice but rank nowhere.",
      ],
    },
    whatYouGet: [
      {
        icon: "Droplet",
        title: "Service-specific pages",
        body: "Water heater, drain cleaning, gas, emergency  - each gets its own page targeting the specific searches plumbers get hired from.",
      },
      {
        icon: "MapPin",
        title: "Neighborhood-level SEO",
        body: "If you service Manhattan, Brooklyn, Queens, Bronx  - each gets a service-area page over time. Monthly content adds one new area per month.",
      },
      {
        icon: "Phone",
        title: "Every call tracked",
        body: "Call tracking installed on launch day. You see which Google search drove which call. Improvement based on data, not guesses.",
      },
    ],
    caseStudyVideoId: "AAelWSuGzAE",
    caseStudySlug: "adam-plumbing-adelaide",
    faq: [
      {
        q: "How much does a plumber website cost?",
        a: "Most agencies charge plumbers $3,000-$8,000 upfront plus $500-$1,500/mo for SEO. Free Websites US by Loudachris charges $0 upfront and $247/mo (12-month plan) bundled  - hosting, SEO, call tracking, monthly content. First payment only after the site is live and tracking confirmed.",
      },
      {
        q: "Will my plumbing website rank on Google?",
        a: "Most of our plumber builds rank top 10 on Google for the city + service keyword (e.g. 'emergency plumber Houston', 'water heater Phoenix') within 45-60 days of launch. The 90-day lead guarantee is in writing.",
      },
      {
        q: "What's included for plumbers specifically?",
        a: "Service-area pages for the neighborhoods you cover, emergency / water heater / drain / gas service pages, schema markup for Plumber LocalBusiness, Google Business Profile alignment, call tracking on every phone inquiry, monthly ranking work and one new content piece per month.",
      },
      {
        q: "How is this different from Angi or Thumbtack?",
        a: "Angi and Thumbtack are paid lead networks where you pay per lead and compete with 5+ other plumbers. We build YOU a website that ranks for plumber searches in your city  - the leads come direct to your phone, no commission, no race-to-the-bottom on price.",
      },
      {
        q: "Can I see a real plumber example?",
        a: "Adam Nettleton from Adam Plumbing went from 13 to 41 jobs/month in 4 months working with Loudachris. The video testimonial is on our case studies page. Adam was on the full-service Loudachris plan, not the free-website subscription. The free-website plan uses the same SEO approach.",
      },
    ],
    success: {
      eyebrow: "What 90 days looks like",
      heading: "By month three, the phone's ringing for the right reasons.",
      paragraphs: [
        "<strong>Week 1:</strong> Site live. Adam Plumbing-style page architecture: emergency, water heater, drains, gas. Every neighborhood you cover gets coverage in the first wave.",
        "<strong>Month 1:</strong> First qualified lead from Google. Often a water heater emergency at 7pm  - the job that pays the rent for the week.",
        "<strong>Month 2:</strong> Multiple weekly leads. You can stop the Angi subscription. The Google Ads agency that was costing $1,500/mo? Gone.",
        "<strong>Month 3:</strong> The 90-day guarantee's done. You're getting more direct inquiries than you ever did from paid channels. And the site keeps compounding because we add a new neighborhood or service page every month.",
      ],
    },
    sisterIndustries: ["electricians", "trades", "contractors"],
    topCities: ["new-york", "houston", "phoenix", "dallas", "chicago"],
    meta: {
      title: "Free Plumber Website + SEO | Adam Plumbing Case Study | $247/mo",
      description:
        "Free SEO website for US plumbers. Built in 5 working days. See how Adam Plumbing grew from 13 to 41 jobs/month. 90-day guarantee.",
    },
  },
];

// ============================================================
// TRADE INDUSTRIES (Tier 2 - templated US version)
// ============================================================

function makeTradeIndustry(opts: {
  slug: string;
  name: string;
  pluralLower: string;
  parentIndustry?: string;
  primaryServices: string;
  example: string;
  bigPlayer: string;
  yourEdge: string;
  caseStudySlug?: string;
  caseStudyVideoId?: string;
  sisterIndustries?: string[];
  topCities?: string[];
  iconBlocks?: { icon: string; title: string; body: string }[];
}): Industry {
  const Name = opts.name;
  const lower = opts.pluralLower;
  const services = opts.primaryServices;
  return {
    slug: opts.slug,
    name: Name,
    pluralLowercase: lower,
    category: "trades",
    parentIndustry: opts.parentIndustry || "trades",
    hero: {
      eyebrow: `For US ${lower}`,
      titleLead: `${services}  -`,
      titleAccent: `the searches you should rank for.`,
      subtitle: `Right now those searches are going to a ${Name.toLowerCase().replace(/s$/, "")} whose website ranks higher than yours. We fix that with a free 5-day SEO build, $247/mo, and a 90-day lead guarantee.`,
      bullets: [
        `You rank for the ${Name.toLowerCase().replace(/s$/, "")} searches in your city within 60 days`,
        `Service pages for every job type you do (${services})`,
        `Neighborhood pages added monthly for the areas you actually cover`,
        `Call tracking on every phone inquiry`,
        `90-day lead guarantee, in writing`,
      ],
    },
    problem: {
      eyebrow: "What you've been dealing with",
      heading: `Why most ${Name.toLowerCase()} websites don't generate leads.`,
      paragraphs: [
        `<strong>${opts.bigPlayer}.</strong> They've got the marketing budget you don't, and they take the obvious top searches. The only way to win is to rank for the searches they're not chasing  - the specific service + neighborhood combinations that convert.`,
        `<strong>Your old site doesn't have the page structure to rank.</strong> Templates skip schema markup, separate service pages, and neighborhood coverage. Google sees a generic homepage and can't connect you to <em>${opts.example}</em>  - the search that pays.`,
        `<strong>You've got no idea what's working.</strong> No call tracking. No keyword report. The leads come in from <em>somewhere</em> but you can't double down on what works because you can't see it.`,
      ],
    },
    answerBox: {
      question: `How does a free ${Name.toLowerCase().replace(/s$/, "")} website actually work?`,
      paragraphs: [
        `We build the site in 5 working days for $0 upfront. After launch, $247/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in). Hosting, SEO, call tracking, monthly ranking work, and one new content piece every month are bundled. The 90-day lead guarantee means first qualified ${Name.toLowerCase().replace(/s$/, "")} lead within 90 days, or we keep working at no cost.`,
        `The site is built around the searches ${lower} get hired from  - not generic templates. ${opts.yourEdge}`,
      ],
    },
    whatYouGet: opts.iconBlocks || [
      {
        icon: "Wrench",
        title: "Service-specific pages",
        body: `Each ${Name.toLowerCase().replace(/s$/, "")} service you offer (${services}) gets its own page targeting the specific search a customer types in.`,
      },
      {
        icon: "MapPin",
        title: "Neighborhood-level SEO",
        body: `Every neighborhood you service gets coverage. Monthly content adds new service-area pages so coverage compounds over the year.`,
      },
      {
        icon: "Phone",
        title: "Every call tracked",
        body: `Call tracking installed on launch day. You see which keyword and page drove the call. The site improves based on data, not guesses.`,
      },
    ],
    caseStudySlug: opts.caseStudySlug,
    caseStudyVideoId: opts.caseStudyVideoId,
    success: {
      eyebrow: "What 90 days looks like",
      heading: `From "where do leads come from?" to a steady pipeline.`,
      paragraphs: [
        `<strong>Week 1:</strong> Site live with full service-page coverage. Tracking installed.`,
        `<strong>Month 1:</strong> First Google inquiry. Direct, not via a quote-shop site. Full margin.`,
        `<strong>Month 2:</strong> Multiple weekly leads from search. The site is doing the work that used to require Angi or paid ads.`,
        `<strong>Month 3:</strong> Guarantee honored. The pipeline's predictable. You're choosing which jobs to take.`,
      ],
    },
    faq: [
      {
        q: `How much does a ${Name.toLowerCase().replace(/s$/, "")} website cost?`,
        a: `Most agencies charge ${lower} $3,000-$8,000 upfront plus $500-$1,500/mo for SEO. We charge $0 upfront and $247/mo (12-month plan) bundled  - hosting, SEO, call tracking, and monthly content all included. First payment only after the site is live and tracking is verified.`,
      },
      {
        q: `Will my ${Name.toLowerCase().replace(/s$/, "")} website rank on Google?`,
        a: `Most of our trade builds rank top 10 for the city + service keyword (e.g. <em>${opts.example}</em>) within 45-60 days of launch. The 90-day qualified-lead guarantee is in writing  - first qualified lead in 90 days, or we work for free until you do.`,
      },
      {
        q: `What pages do you build for ${lower}?`,
        a: `Service pages for ${services}, plus neighborhood pages for each area you cover. Schema markup as a LocalBusiness. Google Business Profile alignment. We add one new page per month as part of monthly content.`,
      },
      {
        q: `What's the difference between this and Angi?`,
        a: `Angi takes a commission on every lead and forces you to compete with 4-5 other ${lower} on every job. Our build sends leads direct to your phone  - no commission, no race-to-the-bottom on price. The math is dramatically better once you have direct organic leads.`,
      },
      {
        q: `Can I cancel?`,
        a: `Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, and the code. No exit fees.`,
      },
    ],
    sisterIndustries: opts.sisterIndustries || ["trades"],
    topCities: opts.topCities || ["new-york", "los-angeles", "chicago", "houston", "phoenix"],
    meta: {
      title: `Free ${Name} Website + SEO | $247/mo, 5-Day Build | US`,
      description: `Free SEO website for US ${lower}. ${services}. 5-day build. 90-day qualified-lead guarantee. $247/mo bundled.`,
    },
  };
}

INDUSTRIES.push(
  ELECTRICIANS_INDUSTRY,
  CONTRACTORS_INDUSTRY,
  HVAC_INDUSTRY,
  ROOFERS_INDUSTRY,
  makeTradeIndustry({
    slug: "painters",
    name: "Painters",
    pluralLower: "painters",
    primaryServices: "interior, exterior, commercial, cabinets, deck staining, drywall repair, color consultation",
    example: "painter Phoenix",
    bigPlayer: "National painting franchises (Five Star, CertaPro) dominate generic searches",
    yourEdge: "Interior vs exterior, cabinet refinishing, and neighborhood searches each rank separately. We build pages for each.",
    sisterIndustries: ["contractors", "trades"],
    topCities: ["phoenix", "los-angeles", "dallas", "houston", "san-diego"],
  }),
  LANDSCAPERS_INDUSTRY,
  makeTradeIndustry({
    slug: "locksmiths",
    name: "Locksmiths",
    pluralLower: "locksmiths",
    primaryServices: "emergency lockout, residential, commercial, automotive, rekey, lock installation, smart locks, safes",
    example: "locksmith Phoenix",
    bigPlayer: "Lead aggregator scam-locksmith sites and big franchises dominate generic emergency searches",
    yourEdge: "Emergency, residential, commercial, automotive, and smart-lock searches each rank separately. We build dedicated pages for each plus neighborhood coverage so legitimate local customers can find you instead of the scam aggregators.",
    sisterIndustries: ["trades"],
    topCities: ["phoenix", "houston", "los-angeles", "dallas", "chicago"],
  }),
  makeTradeIndustry({
    slug: "pest-control",
    name: "Pest Control",
    pluralLower: "pest control companies",
    primaryServices: "general pest, termite, bed bug, rodent, mosquito, ant, roach, wildlife removal, commercial",
    example: "pest control Houston",
    bigPlayer: "Terminix, Orkin, Rollins, and other national pest-control chains own brand searches",
    yourEdge: "Pest-specific searches (termite, bed bug, mosquito, rodent, wildlife) each rank separately. National chains run generic 'pest control [city]' but rarely rank for the pest + city + service combinations. We build pages for each.",
    sisterIndustries: ["trades"],
    topCities: ["houston", "phoenix", "jacksonville", "san-antonio", "charlotte"],
  }),
  makeTradeIndustry({
    slug: "movers",
    name: "Moving Companies",
    pluralLower: "moving companies",
    primaryServices: "local moving, long-distance, residential, commercial, apartment, packing, storage, piano and specialty",
    example: "movers Chicago",
    bigPlayer: "Two Men and a Truck, Allied, Atlas Van Lines, and lead-aggregator sites dominate generic moving searches",
    yourEdge: "Local vs long-distance, residential vs commercial, and specialty (piano, antiques, fine art) each rank separately. Apartment-specific moves and neighborhood-to-neighborhood searches are winnable with dedicated pages.",
    sisterIndustries: ["trades"],
    topCities: ["new-york", "los-angeles", "chicago", "houston", "dallas"],
  }),
  makeTradeIndustry({
    slug: "tree-services",
    name: "Tree Services",
    pluralLower: "tree service companies",
    primaryServices: "removal, trimming, pruning, stump grinding, emergency, fertilization, hazard assessment",
    example: "tree service Charlotte",
    bigPlayer: "Davey, BrightView, and large franchise tree services own generic searches",
    yourEdge: "Removal vs trimming vs emergency, plus storm-damage seasonal spikes, each have separate keyword profiles. Storm-prone metros (Houston, Charlotte, Jacksonville) reward fast emergency-tree-service pages.",
    sisterIndustries: ["landscapers", "trades"],
    topCities: ["charlotte", "houston", "jacksonville", "dallas", "phoenix"],
  }),
  makeTradeIndustry({
    slug: "solar-installers",
    name: "Solar Installers",
    pluralLower: "solar installer companies",
    primaryServices: "residential solar, commercial solar, battery storage, solar panel maintenance, off-grid systems, EV charger plus solar combo",
    example: "solar installer Phoenix",
    bigPlayer: "Sunrun, Tesla Solar, and big national solar installers dominate brand searches",
    yourEdge: "State incentive plus city searches each rank separately. Hot-state markets (CA, AZ, TX, FL, NV) reward rapid neighborhood coverage.",
    sisterIndustries: ["electricians", "trades"],
    topCities: ["phoenix", "los-angeles", "dallas", "jacksonville", "san-diego"],
  }),
  makeTradeIndustry({
    slug: "garage-doors",
    name: "Garage Doors",
    pluralLower: "garage door companies",
    primaryServices: "garage door installation, repair, opener install, spring replacement, panel replacement, smart garage doors, commercial garage doors",
    example: "garage door repair Houston",
    bigPlayer: "Big national franchise chains (Precision Door, A1 Garage Door) dominate brand searches",
    yourEdge: "Repair vs install vs spring vs opener each rank separately, plus emergency variants.",
    sisterIndustries: ["trades", "contractors"],
    topCities: ["phoenix", "houston", "dallas", "jacksonville", "charlotte"],
  }),
  makeTradeIndustry({
    slug: "window-installation",
    name: "Window Installation",
    pluralLower: "window installation companies",
    primaryServices: "replacement windows, new construction, energy-efficient, hurricane impact, custom, commercial",
    example: "window installation Tampa",
    bigPlayer: "Renewal by Andersen, Pella, and big window franchises own brand searches",
    yourEdge: "Window-type-specific (impact, energy-efficient, custom) and storm-prone metro pages each rank separately.",
    sisterIndustries: ["contractors", "trades"],
    topCities: ["tampa", "jacksonville", "houston", "phoenix", "charlotte"],
  }),
  makeTradeIndustry({
    slug: "fence-installation",
    name: "Fence Installation",
    pluralLower: "fence companies",
    primaryServices: "wood fence, vinyl, chain link, aluminum, composite, custom, commercial",
    example: "fence installation Dallas",
    bigPlayer: "Big national franchise fence companies own generic searches",
    yourEdge: "Material-specific (wood vs vinyl vs metal) and HOA-compliance pages each rank separately.",
    sisterIndustries: ["landscapers", "contractors", "trades"],
    topCities: ["dallas", "houston", "phoenix", "charlotte", "jacksonville"],
  }),
  makeTradeIndustry({
    slug: "foundation-repair",
    name: "Foundation Repair",
    pluralLower: "foundation repair companies",
    primaryServices: "pier and beam, slab leveling, basement waterproofing, drainage, retaining walls",
    example: "foundation repair Houston",
    bigPlayer: "Big franchise foundation companies (Olshan, Foundation Recovery Systems) dominate brand searches",
    yourEdge: "Soil-condition plus city searches (clay soil plus texas, expansive soil plus dallas) each rank separately.",
    sisterIndustries: ["contractors", "trades"],
    topCities: ["houston", "dallas", "phoenix", "san-antonio", "charlotte"],
  }),
  makeTradeIndustry({
    slug: "appliance-repair",
    name: "Appliance Repair",
    pluralLower: "appliance repair companies",
    primaryServices: "refrigerator, washer and dryer, dishwasher, oven, microwave, ice maker, commercial appliances",
    example: "appliance repair Phoenix",
    bigPlayer: "Sears, Mr. Appliance, and big chains dominate generic searches",
    yourEdge: "Brand-specific (Samsung, LG, Whirlpool, Sub-Zero) repair searches each rank separately.",
    sisterIndustries: ["trades", "electricians"],
    topCities: ["phoenix", "los-angeles", "houston", "chicago", "dallas"],
  }),
  makeTradeIndustry({
    slug: "auto-detailing",
    name: "Auto Detailing",
    pluralLower: "auto detailing companies",
    primaryServices: "full detail, interior detail, ceramic coating, paint correction, paint protection film, mobile detailing",
    example: "auto detailing Los Angeles",
    bigPlayer: "Big franchise detailing chains and dealership detail departments dominate brand searches",
    yourEdge: "Service-specific (ceramic coating, paint correction, mobile detailing) and luxury-vehicle searches each rank separately.",
    sisterIndustries: ["auto-repair", "auto-body", "trades"],
    topCities: ["los-angeles", "miami", "phoenix", "dallas", "las-vegas"],
  }),
  makeTradeIndustry({
    slug: "auto-repair",
    name: "Auto Repair",
    pluralLower: "auto repair shops",
    primaryServices: "brakes, transmission, engine, oil change, alignment, AC repair, diagnostics, electrical",
    example: "auto repair Houston",
    bigPlayer: "Midas, Jiffy Lube, Pep Boys, and dealership service centers dominate brand searches",
    yourEdge: "Make-specific (Honda, Toyota, BMW, Mercedes specialist) and service-specific searches each rank separately.",
    sisterIndustries: ["auto-body", "auto-detailing", "trades"],
    topCities: ["houston", "los-angeles", "phoenix", "dallas", "chicago"],
  }),
  makeTradeIndustry({
    slug: "auto-body",
    name: "Auto Body Shops",
    pluralLower: "auto body shops",
    primaryServices: "collision repair, paint, dent repair, frame straightening, bumper, fender, insurance claims",
    example: "auto body shop Dallas",
    bigPlayer: "Maaco, CARSTAR, and insurance-network preferred shops dominate generic searches",
    yourEdge: "Insurance-claim, paint-match, luxury-vehicle, and emergency-collision searches each rank separately.",
    sisterIndustries: ["auto-repair", "auto-detailing", "trades"],
    topCities: ["dallas", "houston", "phoenix", "los-angeles", "chicago"],
  }),
  makeTradeIndustry({
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    pluralLower: "carpet cleaning companies",
    primaryServices: "residential carpet cleaning, upholstery, area rugs, tile and grout, pet stain removal, commercial",
    example: "carpet cleaning Tampa",
    bigPlayer: "Stanley Steemer, Chem-Dry, and franchise chains dominate brand searches",
    yourEdge: "Service-specific (pet odor, water damage, tile and grout) and emergency searches each rank separately.",
    sisterIndustries: ["trades"],
    topCities: ["phoenix", "tampa", "houston", "dallas", "charlotte"],
  }),
  makeTradeIndustry({
    slug: "junk-removal",
    name: "Junk Removal",
    pluralLower: "junk removal companies",
    primaryServices: "residential junk, commercial, estate cleanout, construction debris, appliance removal, hot tub removal, dumpster rental",
    example: "junk removal Phoenix",
    bigPlayer: "1-800-GOT-JUNK, College Hunks, and franchise chains dominate brand searches",
    yourEdge: "Specific-item (hot tub, piano, mattress) and emergency-cleanout searches each rank separately.",
    sisterIndustries: ["movers", "trades"],
    topCities: ["phoenix", "dallas", "houston", "tampa", "charlotte"],
  }),
  makeTradeIndustry({
    slug: "mold-remediation",
    name: "Mold Remediation",
    pluralLower: "mold remediation companies",
    primaryServices: "mold inspection, mold removal, water damage restoration, air quality testing, commercial",
    example: "mold remediation Tampa",
    bigPlayer: "ServiceMaster, ServPro, and Restoration 1 dominate emergency searches",
    yourEdge: "Mold-type, insurance-claim, and emergency-water-damage searches each rank separately.",
    sisterIndustries: ["water-damage-restoration", "trades"],
    topCities: ["tampa", "miami", "jacksonville", "new-orleans", "houston"],
  }),
  makeTradeIndustry({
    slug: "water-damage-restoration",
    name: "Water Damage Restoration",
    pluralLower: "water damage restoration companies",
    primaryServices: "water extraction, drying, structural drying, mold prevention, sewage cleanup, fire restoration",
    example: "water damage restoration Houston",
    bigPlayer: "ServPro, ServiceMaster, Paul Davis dominate emergency searches",
    yourEdge: "Insurance-claim and 24/7 emergency searches each rank separately. Storm-prone metros (TX, FL, LA) reward rapid emergency-response page coverage.",
    sisterIndustries: ["mold-remediation", "trades"],
    topCities: ["houston", "miami", "tampa", "new-orleans", "jacksonville"],
  })
);

// ============================================================
// PROFESSIONAL SERVICES
// ============================================================

function makeProfessionalIndustry(opts: {
  slug: string;
  name: string;
  pluralLower: string;
  primaryServices: string;
  example: string;
  externalProblem: string;
  internalProblem: string;
  yourEdge: string;
  complianceNote?: { eyebrow: string; heading: string; paragraphs: string[] };
  sisterIndustries?: string[];
  topCities?: string[];
}): Industry {
  return {
    slug: opts.slug,
    name: opts.name,
    pluralLowercase: opts.pluralLower,
    category: "professional",
    hero: {
      eyebrow: `For US ${opts.pluralLower}`,
      titleLead: `A website that wins clients`,
      titleAccent: `before they call.`,
      subtitle: `${opts.name} who rank on Google get chosen. Those who don't get the leftover inquiries. We build the SEO website that puts your firm on page 1 with a free 5-day build, $247/mo, and a 90-day lead guarantee.`,
      bullets: [
        `You rank for ${opts.pluralLower} searches in your city within 60 days`,
        `Service pages for every offering (${opts.primaryServices})`,
        `Authority content (FAQ, "what to expect", pricing transparency)`,
        `Form analytics on every inquiry`,
        `90-day qualified-lead guarantee, in writing`,
      ],
    },
    problem: {
      eyebrow: "What you've been dealing with",
      heading: `Why most ${opts.pluralLower} websites don't convert.`,
      paragraphs: [
        `<strong>${opts.externalProblem}</strong>`,
        `<strong>${opts.internalProblem}</strong>`,
        `<strong>The big firms have marketing teams, you don't.</strong> They've got SEO budgets you can't match, and they own the obvious top searches. Your edge has to come from the specific service + local angle they ignore.`,
      ],
    },
    answerBox: {
      question: `How does a free ${opts.name.toLowerCase().replace(/s$/, "")} website actually work?`,
      paragraphs: [
        `We build the site in 5 working days for $0 upfront. After launch, $247/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in). Hosting, SEO, form analytics, monthly ranking work, and one new content piece every month are bundled. The 90-day lead guarantee means first qualified ${opts.name.toLowerCase().replace(/s$/, "")} inquiry within 90 days, or we keep working at no cost.`,
        `${opts.yourEdge}`,
      ],
    },
    whatYouGet: [
      {
        icon: "Briefcase",
        title: "Service-specific pages",
        body: `Each service area you offer (${opts.primaryServices}) gets its own page targeting how clients actually search.`,
      },
      {
        icon: "Search",
        title: "Authority content",
        body: `FAQ, "what to expect" guides, and transparency about how you work. Clients searching for a ${opts.name.toLowerCase().replace(/s$/, "")} read 4-5 pages before they pick. We make sure those 4-5 pages are yours.`,
      },
      {
        icon: "Phone",
        title: "Every inquiry tracked",
        body: `Form analytics on every contact submission. You see which page and which search drove every inquiry. Improvement based on data.`,
      },
    ],
    success: {
      eyebrow: "What 90 days looks like",
      heading: `From referrals-only to a steady inbound pipeline.`,
      paragraphs: [
        `<strong>Week 1:</strong> Site live with full service-page coverage. Tracking installed.`,
        `<strong>Month 1:</strong> First Google inquiry. Often a higher-quality lead than you'd expect  - they've read your content and pre-qualified themselves.`,
        `<strong>Month 2:</strong> Multiple weekly inquiries. The site does what referrals can't: bring in new clients you don't know yet.`,
        `<strong>Month 3:</strong> Guarantee honored. Pipeline is no longer dependent on the size of your network.`,
      ],
    },
    complianceNote: opts.complianceNote,
    faq: [
      {
        q: `How much does a ${opts.name.toLowerCase().replace(/s$/, "")} website cost?`,
        a: `Most agencies charge ${opts.pluralLower} $5,000-$15,000 upfront for a website plus $1,000-$2,500/mo for SEO. We charge $0 upfront and $247/mo (12-month plan) bundled  - hosting, SEO, content, all included.`,
      },
      {
        q: `Will my ${opts.name.toLowerCase().replace(/s$/, "")} website rank on Google?`,
        a: `Most of our professional builds rank top 10 for the city + service keyword (e.g. <em>${opts.example}</em>) within 45-60 days of launch. The 90-day qualified-lead guarantee is in writing.`,
      },
      {
        q: `What pages do you build?`,
        a: `Homepage with clear service positioning, dedicated pages for each service area (${opts.primaryServices}), an about page that builds trust, FAQ, "what to expect" content, and a clear contact path. We add one new page per month as part of monthly content.`,
      },
      {
        q: `Will the copy match our professional tone?`,
        a: `Yes. We write the first draft based on your brief, you give feedback in writing or via Loom video, we revise. Two written feedback rounds. The final tone is yours  - we just give you a ranking-ready structure for it.`,
      },
      {
        q: `Can I cancel?`,
        a: `Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, and the code. No exit fees.`,
      },
    ],
    sisterIndustries: opts.sisterIndustries || [],
    topCities: opts.topCities || ["new-york", "los-angeles", "chicago", "houston", "phoenix"],
    meta: {
      title: `Free ${opts.name} Website + SEO | $247/mo, 5-Day Build | US`,
      description: `Free SEO website for US ${opts.pluralLower}. ${opts.primaryServices}. 5-day build. 90-day qualified-lead guarantee. $247/mo bundled.`,
    },
  };
}

INDUSTRIES.push(
  LAWYERS_INDUSTRY,
  ACCOUNTANTS_INDUSTRY,
  REAL_ESTATE_AGENTS_INDUSTRY,
  PHOTOGRAPHERS_INDUSTRY,
  makeProfessionalIndustry({
    slug: "architects",
    name: "Architects",
    pluralLower: "architects",
    primaryServices: "residential architecture, commercial, custom homes, additions, renovations, sustainable design",
    example: "architect Boston",
    externalProblem: "Big architecture firms own brand searches and AIA-listed firms compete for high-profile commercial work.",
    internalProblem: "Your portfolio is strong but discoverability is weak. New high-budget clients increasingly find architects via Google search before they ask for referrals.",
    yourEdge: "Project-type-specific pages (custom homes, ADUs, commercial, sustainable) each rank separately.",
    sisterIndustries: ["interior-designers", "engineers", "contractors"],
    topCities: ["boston", "los-angeles", "new-york", "austin", "denver"],
  }),
  makeProfessionalIndustry({
    slug: "interior-designers",
    name: "Interior Designers",
    pluralLower: "interior designers",
    primaryServices: "residential, commercial, kitchen design, bath design, color consulting, e-design, hospitality",
    example: "interior designer Los Angeles",
    externalProblem: "Houzz and Decorist dominate the brand-search and online-design markets. Local interior designers fight for visibility on neighborhood plus style searches.",
    internalProblem: "Your Instagram is full of beautiful work but bookings are inconsistent. The clients who become long-term repeat customers find you via search, not social.",
    yourEdge: "Style plus room plus city searches (modern kitchen design Austin, mid-century living room Los Angeles) each rank separately.",
    sisterIndustries: ["architects", "photographers"],
    topCities: ["los-angeles", "new-york", "miami", "dallas", "atlanta"],
  }),
  makeProfessionalIndustry({
    slug: "engineers",
    name: "Engineers",
    pluralLower: "engineering firms",
    primaryServices: "structural, civil, mechanical, electrical (consulting), forensic, geotechnical",
    example: "structural engineer Houston",
    externalProblem: "Big engineering firms (AECOM, Jacobs, Stantec) dominate large public-sector contracts, leaving small firms to compete on private commercial work.",
    internalProblem: "Your firm wins through referrals from architects and contractors but the pipeline is volatile. Direct project-owner searches via Google could stabilize the book.",
    yourEdge: "Discipline-specific (structural, civil, mechanical) and project-type pages each rank separately.",
    sisterIndustries: ["architects", "contractors"],
    topCities: ["houston", "dallas", "los-angeles", "atlanta", "denver"],
  }),
  makeProfessionalIndustry({
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    pluralLower: "marketing agencies",
    primaryServices: "SEO, paid ads, social media, content marketing, branding, web design, email marketing",
    example: "marketing agency Austin",
    externalProblem: "WebFX, Disruptive, and big national agencies dominate generic 'marketing agency [city]' searches with massive content libraries and DR scores.",
    internalProblem: "You're a small boutique that outperforms the big agencies on actual results, but you're invisible to prospects searching for 'best marketing agency [city]'.",
    yourEdge: "Specialty plus industry pages (B2B SEO, e-commerce paid ads, SaaS content marketing) each rank separately. We don't compete with big agencies, we flank them.",
    sisterIndustries: ["it-services"],
    topCities: ["austin", "denver", "atlanta", "charlotte", "miami"],
  }),
  makeProfessionalIndustry({
    slug: "it-services",
    name: "IT Services",
    pluralLower: "IT services companies",
    primaryServices: "managed IT, cybersecurity, cloud migration, network setup, helpdesk, backup and recovery, business continuity",
    example: "managed IT services Atlanta",
    externalProblem: "Big MSPs (Atos, Capgemini, big national franchises) dominate enterprise contracts. Small IT shops fight for SMB business on price.",
    internalProblem: "Your existing clients love you but referrals plateau at 50 to 100 SMB customers. Direct search-driven leads could double the book without doubling the sales effort.",
    yourEdge: "Service plus industry searches (HIPAA-compliant IT for medical, PCI-compliant IT for retail, ABA-compliant IT for legal) each rank separately.",
    sisterIndustries: ["marketing-agencies"],
    topCities: ["atlanta", "dallas", "charlotte", "denver", "austin"],
  }),
);

// ============================================================
// LIFESTYLE / SERVICE INDUSTRIES
// ============================================================

function makeLifestyleIndustry(opts: {
  slug: string;
  name: string;
  pluralLower: string;
  primaryServices: string;
  example: string;
  externalProblem: string;
  internalProblem: string;
  yourEdge: string;
  caseStudyVideoId?: string;
  caseStudySlug?: string;
  sisterIndustries?: string[];
  topCities?: string[];
}): Industry {
  return {
    slug: opts.slug,
    name: opts.name,
    pluralLowercase: opts.pluralLower,
    category: "lifestyle",
    hero: {
      eyebrow: `For US ${opts.pluralLower}`,
      titleLead: `Be the ${opts.name.toLowerCase().replace(/s$/, "")}`,
      titleAccent: `your neighborhood actually finds.`,
      subtitle: `${opts.name} who rank locally book out. Those who don't depend on Instagram and walk-ins. We build the SEO website that gets you found with a free 5-day build, $247/mo, and a 90-day lead guarantee.`,
      bullets: [
        `You rank for ${opts.pluralLower} searches in your neighborhood within 60 days`,
        `Service pages for every offering (${opts.primaryServices})`,
        `Booking-friendly content (pricing transparency, FAQ)`,
        `Form and call tracking`,
        `90-day qualified-lead guarantee, in writing`,
      ],
    },
    problem: {
      eyebrow: "What you've been dealing with",
      heading: `Why most ${opts.pluralLower} websites don't bring in new clients.`,
      paragraphs: [
        `<strong>${opts.externalProblem}</strong>`,
        `<strong>${opts.internalProblem}</strong>`,
        `<strong>You're paying for marketing channels that aren't yours.</strong> Instagram changes the algorithm and your reach drops. Facebook ads stop working. Walk-ins are slow. A website you own and rank  - once it's built  - keeps working.`,
      ],
    },
    answerBox: {
      question: `How does a free ${opts.name.toLowerCase().replace(/s$/, "")} website actually work?`,
      paragraphs: [
        `$0 upfront. Site live in 5 working days. After launch, $247/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in) for hosting, SEO, tracking, monthly ranking work, and one new content piece every month. 90-day qualified-lead guarantee in writing.`,
        opts.yourEdge,
      ],
    },
    whatYouGet: [
      {
        icon: "Smile",
        title: "Built for booking",
        body: `Pricing transparency, FAQ, "what to expect" content. The pages a customer reads before they book.`,
      },
      {
        icon: "MapPin",
        title: "Neighborhood-level SEO",
        body: `Every neighborhood you serve gets coverage. Monthly content adds new pages so coverage compounds.`,
      },
      {
        icon: "Phone",
        title: "Every inquiry tracked",
        body: `Form and call tracking from launch day. You see what works.`,
      },
    ],
    caseStudyVideoId: opts.caseStudyVideoId,
    caseStudySlug: opts.caseStudySlug,
    success: {
      eyebrow: "What 90 days looks like",
      heading: `From "Instagram dry spell" to a steady booking pipeline.`,
      paragraphs: [
        `<strong>Week 1:</strong> Site live with full service-page coverage. Tracking installed.`,
        `<strong>Month 1:</strong> First Google booking. Direct, no commission.`,
        `<strong>Month 2:</strong> Multiple weekly bookings via search. Less reliance on social.`,
        `<strong>Month 3:</strong> Guarantee honored. Pipeline diversified.`,
      ],
    },
    faq: [
      {
        q: `How much does a ${opts.name.toLowerCase().replace(/s$/, "")} website cost?`,
        a: `Most agencies charge ${opts.pluralLower} $3,000-$8,000 upfront plus $500-$1,500/mo for SEO. We charge $0 upfront and $247/mo (12-month plan) bundled.`,
      },
      {
        q: `Will my ${opts.name.toLowerCase().replace(/s$/, "")} website rank?`,
        a: `Most of our builds rank top 10 for the city + service keyword (e.g. <em>${opts.example}</em>) within 45-60 days. 90-day qualified-lead guarantee in writing.`,
      },
      {
        q: `Do I need to do my own SEO?`,
        a: `No. We do the keyword research, the content writing, and the monthly ranking work. You just need to approve the copy (two written feedback rounds) and stay reachable for new bookings.`,
      },
      {
        q: `What if Instagram is my main marketing channel?`,
        a: `Most of our lifestyle clients keep their social presence. We build the website to complement it  - when someone hears about you on Instagram and Googles your business name, they land on a site that converts.`,
      },
      {
        q: `Can I cancel?`,
        a: `Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, and the code.`,
      },
    ],
    sisterIndustries: opts.sisterIndustries || [],
    topCities: opts.topCities || ["new-york", "los-angeles", "chicago", "houston", "phoenix"],
    meta: {
      title: `Free ${opts.name} Website + SEO | $247/mo, 5-Day Build | US`,
      description: `Free SEO website for US ${opts.pluralLower}. ${opts.primaryServices}. 5-day build. 90-day qualified-lead guarantee. $247/mo bundled.`,
    },
  };
}

INDUSTRIES.push(
  makeLifestyleIndustry({
    slug: "hair-salons",
    name: "Hair Salons",
    pluralLower: "hair salons",
    primaryServices: "cuts, color, balayage, highlights, men's grooming, formal styling, treatments",
    example: "hair salon Los Angeles",
    externalProblem: "Big franchise salons (Great Clips, Supercuts, JCPenney Salon) own brand searches. Independent salons fight for visibility on neighborhood-specific terms.",
    internalProblem: "Your chairs are full but your books only go 3-4 weeks out. New clients come from Instagram and word of mouth  - both unpredictable. A steady search-driven pipeline could let you book 8 weeks out.",
    yourEdge: "Specific service searches (balayage, men's cut, formal styling) each rank separately. We build dedicated pages for each, with pricing transparency.",
    caseStudyVideoId: "C0lg6FVXc68",
    caseStudySlug: "mark-l-hair-melbourne",
    sisterIndustries: ["personal-trainers"],
    topCities: ["los-angeles", "new-york", "chicago", "san-diego", "austin"],
  }),
  makeLifestyleIndustry({
    slug: "personal-trainers",
    name: "Personal Trainers",
    pluralLower: "personal trainers",
    primaryServices: "1:1 PT, group fitness, online coaching, strength, weight loss, mobility",
    example: "personal trainer Los Angeles",
    externalProblem: "Big gym chains (24 Hour Fitness, LA Fitness, Equinox) dominate brand searches. Independent PTs compete on neighborhood and specialty.",
    internalProblem: "Your clients love you but you're capped at 25-30 hours of contact time per week. Online coaching could break that cap  - but only if your website ranks for the searches.",
    yourEdge: "1:1, group, online, and specialty searches (strength, weight loss, postnatal, prehab) each rank separately. We build pages for each.",
    sisterIndustries: ["hair-salons"],
    topCities: ["los-angeles", "new-york", "austin", "san-diego", "chicago"],
  }),
  RESTAURANTS_INDUSTRY,
  CAFES_INDUSTRY,
  CLEANERS_INDUSTRY,
  POOL_BUILDERS_INDUSTRY,
  makeLifestyleIndustry({
    slug: "veterinarians",
    name: "Veterinarians",
    pluralLower: "veterinary clinics",
    primaryServices: "small animal, large animal, exotic pets, emergency vet, dental, surgery, vaccinations, wellness",
    example: "veterinarian Phoenix",
    externalProblem: "Big chain veterinary networks (VCA, Banfield, BluePearl) dominate brand searches and emergency-care SERPs.",
    internalProblem: "Your hospital has a strong client base but new pet-owner acquisition has stalled. Younger pet owners increasingly find clinics via Google before asking for referrals.",
    yourEdge: "Service-specific (emergency vet, dental, exotic pet, holistic) and pet-type-specific (cat-only, dog-only, large-animal) searches each rank separately.",
    sisterIndustries: ["pet-groomers", "dog-trainers"],
    topCities: ["phoenix", "los-angeles", "charlotte", "austin", "denver"],
  }),
  makeLifestyleIndustry({
    slug: "pet-groomers",
    name: "Pet Groomers",
    pluralLower: "pet groomers",
    primaryServices: "full grooming, bath only, breed-specific cuts, nail trim, mobile grooming, cat grooming, large-dog grooming",
    example: "pet groomer Dallas",
    externalProblem: "PetSmart and Petco own brand searches. Independent groomers compete on neighborhood plus breed searches.",
    internalProblem: "Your client list is loyal but capacity-bound at 8 to 12 dogs a day. New clients via Google could justify hiring a second groomer or expanding hours.",
    yourEdge: "Breed-specific (poodle grooming, schnauzer grooming) and service-specific (mobile, cat-only) searches each rank separately.",
    sisterIndustries: ["veterinarians", "dog-trainers"],
    topCities: ["dallas", "los-angeles", "phoenix", "charlotte", "austin"],
  }),
  makeLifestyleIndustry({
    slug: "dog-trainers",
    name: "Dog Trainers",
    pluralLower: "dog trainers",
    primaryServices: "puppy training, obedience, behavior modification, aggression, board and train, group classes, private lessons",
    example: "dog trainer Austin",
    externalProblem: "Petco group classes and franchise trainers dominate generic searches. Independent trainers compete on specialty and outcome.",
    internalProblem: "Your reputation is built on reactive-dog and aggression rehab work but the searches that come to you are mostly basic obedience. A site that ranks for the specialty work would change the client mix.",
    yourEdge: "Specialty (aggression rehab, reactive dog, service dog training, board and train) and breed-specific searches each rank separately.",
    sisterIndustries: ["veterinarians", "pet-groomers"],
    topCities: ["austin", "denver", "los-angeles", "charlotte", "dallas"],
  }),
  makeLifestyleIndustry({
    slug: "med-spas",
    name: "Med Spas",
    pluralLower: "med spas",
    primaryServices: "Botox, fillers, laser hair removal, microneedling, chemical peels, body contouring, IV therapy, hormone therapy",
    example: "med spa Miami",
    externalProblem: "Plastic surgery practices and big franchise med-spa chains dominate brand searches in major metros.",
    internalProblem: "Your treatments are excellent but new client acquisition relies on Instagram and word of mouth. A site ranking for specific treatment plus city searches would diversify the funnel.",
    yourEdge: "Treatment-specific (Botox, fillers, laser hair removal, weight loss) and combination searches (med spa plus city) each rank separately.",
    sisterIndustries: ["massage-therapists", "hair-salons"],
    topCities: ["miami", "los-angeles", "dallas", "phoenix", "atlanta"],
  }),
  makeLifestyleIndustry({
    slug: "massage-therapists",
    name: "Massage Therapists",
    pluralLower: "massage therapists",
    primaryServices: "deep tissue, Swedish, sports massage, prenatal, hot stone, couples massage, mobile, corporate",
    example: "massage therapist Denver",
    externalProblem: "Massage Envy and franchise spa chains dominate brand searches.",
    internalProblem: "Your modality and client outcomes are strong but discoverability is weak. New clients searching for specific issues (back pain, sports recovery) often go to chains by default.",
    yourEdge: "Modality-specific (deep tissue, sports, prenatal, mobile) and outcome-specific (back pain, athletic recovery) searches each rank separately.",
    sisterIndustries: ["med-spas", "yoga-studios"],
    topCities: ["denver", "los-angeles", "austin", "portland", "seattle"],
  }),
  makeLifestyleIndustry({
    slug: "yoga-studios",
    name: "Yoga Studios",
    pluralLower: "yoga studios",
    primaryServices: "vinyasa, hatha, hot yoga, yin, restorative, prenatal, beginner, teacher training",
    example: "yoga studio Austin",
    externalProblem: "CorePower Yoga and big chain studios dominate brand searches in major metros.",
    internalProblem: "Your community is loyal but membership growth has plateaued. Younger studio-shoppers find classes via Google plus ClassPass.",
    yourEdge: "Style-specific (hot yoga, yin, prenatal, beginner) and outcome-specific (yoga for back pain, yoga for runners) searches each rank separately.",
    sisterIndustries: ["personal-trainers", "crossfit-gyms", "massage-therapists"],
    topCities: ["austin", "los-angeles", "denver", "portland", "miami"],
  }),
  makeLifestyleIndustry({
    slug: "crossfit-gyms",
    name: "CrossFit Gyms",
    pluralLower: "CrossFit gyms",
    primaryServices: "CrossFit, Olympic lifting, gymnastics, beginner on-ramp, kids classes, personal training, nutrition coaching",
    example: "CrossFit gym Denver",
    externalProblem: "Generic 'gym near me' searches are dominated by 24 Hour Fitness, Planet Fitness, and big chains.",
    internalProblem: "CrossFit affiliates have a strong community but member acquisition is increasingly competitive as the box count keeps growing.",
    yourEdge: "Specialty (Olympic lifting, gymnastics, on-ramp, kids) and outcome (functional fitness, weight loss) searches each rank separately.",
    sisterIndustries: ["personal-trainers", "yoga-studios", "martial-arts"],
    topCities: ["denver", "austin", "los-angeles", "charlotte", "dallas"],
  }),
  makeLifestyleIndustry({
    slug: "martial-arts",
    name: "Martial Arts Schools",
    pluralLower: "martial arts schools",
    primaryServices: "BJJ, MMA, boxing, kickboxing, karate, taekwondo, kids classes, women-only, self-defense",
    example: "BJJ Los Angeles",
    externalProblem: "Big franchise martial arts schools (Premier, ATA) dominate kids-class searches in major metros.",
    internalProblem: "Your school has a great culture but adult class enrollment has plateaued. Searches for specific styles (BJJ, MMA, boxing) need dedicated pages, which most martial-arts sites don't have.",
    yourEdge: "Style-specific (BJJ, MMA, kickboxing) and demographic (kids, women-only, adult-beginner) pages each rank separately.",
    sisterIndustries: ["crossfit-gyms", "personal-trainers", "dance-studios"],
    topCities: ["los-angeles", "austin", "denver", "dallas", "miami"],
  }),
  makeLifestyleIndustry({
    slug: "dance-studios",
    name: "Dance Studios",
    pluralLower: "dance studios",
    primaryServices: "ballet, jazz, tap, hip-hop, contemporary, ballroom, kids, adult beginner, competition team, weddings",
    example: "dance studio Atlanta",
    externalProblem: "Generic 'dance class' searches are flooded with kids-only studios and franchise chains.",
    internalProblem: "Your studio fills with kids and competition team but adult-beginner classes are underutilized. Adult dancers search differently (style plus adult plus city) and most studio sites don't have those pages.",
    yourEdge: "Style-specific (ballet, ballroom, hip-hop) and audience-specific (kids, adult beginner, wedding dance) searches each rank separately.",
    sisterIndustries: ["yoga-studios", "martial-arts"],
    topCities: ["atlanta", "los-angeles", "miami", "dallas", "austin"],
  }),
  makeLifestyleIndustry({
    slug: "tutors",
    name: "Tutors",
    pluralLower: "tutoring services",
    primaryServices: "SAT and ACT prep, math, reading, writing, science, foreign language, test prep, executive function, college essay",
    example: "SAT tutor Boston",
    externalProblem: "Sylvan, Kumon, and Mathnasium dominate franchise tutoring searches. Online tutoring platforms (Wyzant, Varsity Tutors) take generic 'tutor [subject]' searches.",
    internalProblem: "Your results with students are strong but new client acquisition depends on referrals from school counselors. Direct search by parents is the largest unrealized channel.",
    yourEdge: "Subject plus grade plus test (SAT, ACT, AP, ISEE) searches each rank separately.",
    topCities: ["boston", "new-york", "los-angeles", "austin", "atlanta"],
  }),
  makeLifestyleIndustry({
    slug: "wedding-planners",
    name: "Wedding Planners",
    pluralLower: "wedding planners",
    primaryServices: "full-service planning, partial planning, day-of coordination, destination weddings, micro weddings, elopements, vendor management",
    example: "wedding planner Charleston",
    externalProblem: "The Knot and WeddingWire dominate vendor-listing search results. Independent planners compete on niche and aesthetic.",
    internalProblem: "You book about 20 weddings a year and could book 35 with better discoverability. Couples increasingly Google planners by aesthetic (modern, rustic, luxury) and venue-type (vineyard, beach, downtown).",
    yourEdge: "Aesthetic plus city searches (modern wedding planner Atlanta, luxury wedding planner Miami) each rank separately.",
    sisterIndustries: ["florists", "bakeries", "bridal-shops", "event-planners", "photographers"],
    topCities: ["miami", "atlanta", "austin", "charleston", "los-angeles"],
  }),
  makeLifestyleIndustry({
    slug: "florists",
    name: "Florists",
    pluralLower: "florists",
    primaryServices: "weddings, events, sympathy, daily, subscriptions, corporate, custom installations",
    example: "florist Brooklyn",
    externalProblem: "1-800-Flowers, FTD, and big online florists dominate generic 'flower delivery [city]' searches.",
    internalProblem: "Local florists with strong design talent are buried under online order-and-deliver services. Your designs are featured in magazines but the website doesn't rank.",
    yourEdge: "Event-type (wedding, sympathy, corporate) and aesthetic (modern, romantic, tropical) searches each rank separately.",
    sisterIndustries: ["wedding-planners", "event-planners", "bakeries"],
    topCities: ["new-york", "los-angeles", "miami", "austin", "atlanta"],
  }),
  makeLifestyleIndustry({
    slug: "bakeries",
    name: "Bakeries",
    pluralLower: "bakeries",
    primaryServices: "wedding cakes, custom cakes, cupcakes, pastries, breads, gluten-free, vegan, coffee bar, retail, online ordering",
    example: "wedding cake Austin",
    externalProblem: "Whole Foods, big grocery chains, and Instacart dominate generic 'bakery near me' delivery searches.",
    internalProblem: "Your bakery has a loyal walk-in following but custom-order discovery is weak. Brides searching for wedding cakes don't find you because the site doesn't rank for 'wedding cake [city]'.",
    yourEdge: "Cake-type (wedding, birthday, custom) and dietary (gluten-free, vegan, kosher) searches each rank separately.",
    sisterIndustries: ["wedding-planners", "florists", "cafes"],
    topCities: ["austin", "miami", "los-angeles", "new-york", "atlanta"],
  }),
  makeLifestyleIndustry({
    slug: "boutiques",
    name: "Boutiques",
    pluralLower: "boutique stores",
    primaryServices: "women's clothing, men's, kids, accessories, plus-size, maternity, vintage, sustainable, online shop",
    example: "women's boutique Nashville",
    externalProblem: "Big retail chains and Amazon dominate generic 'clothing store [city]' searches. Boutiques compete on style plus neighborhood.",
    internalProblem: "Your in-store experience is excellent but online discovery is weak. Customers find boutiques via Instagram, but Instagram is rented audience and the algorithm changes.",
    yourEdge: "Style plus city (modern boutique Nashville, vintage clothing Austin) and category-specific (plus-size boutique, maternity boutique) searches each rank separately.",
    sisterIndustries: ["bridal-shops"],
    topCities: ["nashville", "austin", "charleston", "miami", "los-angeles"],
  }),
  makeLifestyleIndustry({
    slug: "event-planners",
    name: "Event Planners",
    pluralLower: "event planners",
    primaryServices: "corporate events, private parties, fundraisers, conferences, holiday parties, birthday milestones, anniversary",
    example: "corporate event planner Atlanta",
    externalProblem: "Generic event-planning sites and franchise platforms dominate brand searches.",
    internalProblem: "Your corporate clients book repeat business but new logo acquisition depends on referrals. Companies actively searching for event planners go to Google first.",
    yourEdge: "Event-type plus city searches (corporate event planner, holiday party planner, fundraiser planner) each rank separately.",
    sisterIndustries: ["wedding-planners", "florists", "bakeries"],
    topCities: ["atlanta", "dallas", "los-angeles", "miami", "chicago"],
  }),
  makeLifestyleIndustry({
    slug: "bridal-shops",
    name: "Bridal Shops",
    pluralLower: "bridal shops",
    primaryServices: "wedding gowns, bridesmaid dresses, mother-of-the-bride, accessories, alterations, plus-size, custom design, suit and tuxedo",
    example: "bridal shop Charlotte",
    externalProblem: "David's Bridal and big chain bridal stores dominate generic 'wedding dress [city]' searches.",
    internalProblem: "Independent bridal boutiques offer better fit, service, and selection but discovery is weak. Brides search by designer or style and most boutique sites don't have dedicated pages.",
    yourEdge: "Designer-specific (Hayley Paige, Pronovias, Vera Wang), aesthetic (modern, romantic, boho), and category (plus-size, mother-of-the-bride) pages each rank separately.",
    sisterIndustries: ["wedding-planners", "boutiques"],
    topCities: ["charlotte", "atlanta", "miami", "dallas", "nashville"],
  }),
  makeLifestyleIndustry({
    slug: "print-shops",
    name: "Print Shops",
    pluralLower: "print shops",
    primaryServices: "business cards, brochures, banners, signage, t-shirts, embroidery, vehicle wraps, large format, wedding stationery, event signage",
    example: "print shop Austin",
    externalProblem: "FedEx Office, Vistaprint, and Office Depot dominate generic 'printing services [city]' searches.",
    internalProblem: "Your shop produces high-quality custom work but online order channels favor speed and price. The clients who want custom design and quality go elsewhere because they can't find you.",
    yourEdge: "Specialty (vehicle wraps, custom apparel, wedding stationery) and large-format searches each rank separately.",
    sisterIndustries: ["event-planners", "wedding-planners"],
    topCities: ["austin", "los-angeles", "dallas", "atlanta", "charlotte"],
  }),
);
