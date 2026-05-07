import type { Industry } from "./industry-types";

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
        "Cheaper trades are outranking you on Google. Angi and Thumbtack take a cut on every lead. Your old site looks fine but the phone barely rings. We fix that with a free 5-day SEO build, $297/mo, and a 90-day lead guarantee.",
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
        "A free trade website built by Loudachris costs $0 upfront and $297/month (12-month plan) for hosting plus SEO bundled. We build the site in 5 working days. The 90-day lead guarantee means first qualified lead within 90 days, or we keep working at no cost. Most builds rank top 10 on Google for their primary trade + city keyword within 45 days.",
        "Think <em>plumber Houston</em>, <em>electrician Phoenix</em>, <em>contractor Dallas</em> — these are the searches that turn into calls. We build for those, not for awards.",
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
        body: "Trade SEO lives in service-area pages — plumber Brooklyn, plumber Queens, plumber Bronx. We build the structure for these and add one new area or service page every month.",
      },
    ],
    caseStudyVideoId: "AAelWSuGzAE",
    faq: [
      {
        q: "How much does a trade website cost in the US?",
        a: "Most agencies charge trades $3,000-$10,000 upfront for a website plus $500-$1,500/mo for SEO. We charge $0 upfront and $297/mo bundled (12-month plan). Hosting, SEO, call tracking, and monthly content are all included. Your first invoice only triggers after the site is live and tracking is verified.",
      },
      {
        q: "Why do most trade websites fail to rank on Google?",
        a: "Three reasons. One: cheap drag-and-drop builders skip schema markup, fast hosting, and proper page structure. Two: there's no ongoing SEO work — content stays static, no new service-area pages, no Google Business Profile alignment. Three: they don't track which searches drive calls, so the site can't be improved over time. We fix all three.",
      },
      {
        q: "How long does it take to build a trade website?",
        a: "5 working days from when you submit the intake form. Day 1: keyword research. Day 2: design. Day 3: build. Day 4: copy and on-page SEO. Day 5: launch and tracking setup. If we miss the deadline, your build is free for life.",
      },
      {
        q: "Will my website show up on Google for my city?",
        a: "Most of our trade builds rank top 10 for the city + service keyword within 45-60 days. The 90-day qualified-lead guarantee is in writing — first lead within 90 days, or we keep working at no cost.",
      },
      {
        q: "Do you work with plumbers, electricians, contractors, AND HVAC?",
        a: "Yes. Trade-specific pages live at /industries/plumbers, /industries/electricians, /industries/contractors, /industries/hvac. Same offer, same 5-day build, same $297/mo. Each industry page covers trade-specific copy, keyword research, and case study fit.",
      },
    ],
    success: {
      eyebrow: "What 90 days looks like",
      heading: "By the time the guarantee expires, you've stopped paying for leads.",
      paragraphs: [
        "<strong>Day 1:</strong> Site live. Tracking installed. You can see which page got loaded, which keyword drove it, which call was answered.",
        "<strong>Day 30:</strong> First qualified lead from Google. Your name's in the inbox, not Angi's portal. You keep 100% of the job.",
        "<strong>Day 60:</strong> Multiple leads per week. The phone rings on a Tuesday morning and it's <em>emergency plumber Dallas</em> not <em>my mom's friend</em>.",
        "<strong>Day 90:</strong> The guarantee's been honored. You're paying $297/mo and getting more leads than you got from $1,500/mo in ads. The math flips.",
      ],
    },
    sisterIndustries: ["plumbers", "electricians", "contractors", "hvac", "landscapers"],
    topCities: ["new-york", "los-angeles", "houston", "phoenix", "dallas"],
    meta: {
      title: "Free Trade Website + SEO | Plumbers, Electricians, Contractors | $297/mo",
      description:
        "Free websites built for US trades in 5 working days. SEO and hosting bundled for $297/mo. 90-day qualified-lead guarantee. Plumbing, electrical, contractor case studies inside.",
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
      titleLead: "Water heaters, blocked drains, emergencies —",
      titleAccent: "the calls you should be getting.",
      subtitle:
        "Right now those calls are going to a plumber whose website ranks higher than yours. We fix that with a free 5-day SEO build, $297/mo, and a 90-day lead guarantee. Built around the searches plumbers get hired from.",
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
        "<strong>Your old website doesn't know what plumbers get hired for.</strong> No emergency page. No water heater repair page. No neighborhood pages. Google can't tell what you do or where you do it. Customers searching <em>emergency plumber Brooklyn</em> at 11pm aren't finding you — they're finding the plumber two neighborhoods over.",
        "<strong>You've got no idea what's working.</strong> Last week's three calls — were they Google? Word of mouth? The Yellow Pages ad you're still paying for? Without call tracking, you're guessing. And the agency that took your $1,500/mo never showed you a single keyword report.",
      ],
    },
    answerBox: {
      question: "How does a free plumber website actually work?",
      paragraphs: [
        "We build the site in 5 working days for $0 upfront. After launch, you pay $297/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in) for hosting, SEO, call tracking, monthly ranking work, and one new content piece every month. The 90-day lead guarantee means first qualified plumbing lead within 90 days, or we keep working at no cost.",
        "The site is built around the searches plumbers get hired from — <em>emergency plumber [city]</em>, <em>water heater repair [neighborhood]</em>, <em>drain cleaning [zip]</em> — not generic templates that look nice but rank nowhere.",
      ],
    },
    whatYouGet: [
      {
        icon: "Droplet",
        title: "Service-specific pages",
        body: "Water heater, drain cleaning, gas, emergency — each gets its own page targeting the specific searches plumbers get hired from.",
      },
      {
        icon: "MapPin",
        title: "Neighborhood-level SEO",
        body: "If you service Manhattan, Brooklyn, Queens, Bronx — each gets a service-area page over time. Monthly content adds one new area per month.",
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
        a: "Most agencies charge plumbers $3,000-$8,000 upfront plus $500-$1,500/mo for SEO. Free Websites US by Loudachris charges $0 upfront and $297/mo (12-month plan) bundled — hosting, SEO, call tracking, monthly content. First payment only after the site is live and tracking confirmed.",
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
        a: "Angi and Thumbtack are paid lead networks where you pay per lead and compete with 5+ other plumbers. We build YOU a website that ranks for plumber searches in your city — the leads come direct to your phone, no commission, no race-to-the-bottom on price.",
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
        "<strong>Month 1:</strong> First qualified lead from Google. Often a water heater emergency at 7pm — the job that pays the rent for the week.",
        "<strong>Month 2:</strong> Multiple weekly leads. You can stop the Angi subscription. The Google Ads agency that was costing $1,500/mo? Gone.",
        "<strong>Month 3:</strong> The 90-day guarantee's done. You're getting more direct inquiries than you ever did from paid channels. And the site keeps compounding because we add a new neighborhood or service page every month.",
      ],
    },
    sisterIndustries: ["electricians", "trades", "contractors"],
    topCities: ["new-york", "houston", "phoenix", "dallas", "chicago"],
    meta: {
      title: "Free Plumber Website + SEO | Adam Plumbing Case Study | $297/mo",
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
      titleLead: `${services} —`,
      titleAccent: `the searches you should rank for.`,
      subtitle: `Right now those searches are going to a ${Name.toLowerCase().replace(/s$/, "")} whose website ranks higher than yours. We fix that with a free 5-day SEO build, $297/mo, and a 90-day lead guarantee.`,
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
        `<strong>${opts.bigPlayer}.</strong> They've got the marketing budget you don't, and they take the obvious top searches. The only way to win is to rank for the searches they're not chasing — the specific service + neighborhood combinations that convert.`,
        `<strong>Your old site doesn't have the page structure to rank.</strong> Templates skip schema markup, separate service pages, and neighborhood coverage. Google sees a generic homepage and can't connect you to <em>${opts.example}</em> — the search that pays.`,
        `<strong>You've got no idea what's working.</strong> No call tracking. No keyword report. The leads come in from <em>somewhere</em> but you can't double down on what works because you can't see it.`,
      ],
    },
    answerBox: {
      question: `How does a free ${Name.toLowerCase().replace(/s$/, "")} website actually work?`,
      paragraphs: [
        `We build the site in 5 working days for $0 upfront. After launch, $297/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in). Hosting, SEO, call tracking, monthly ranking work, and one new content piece every month are bundled. The 90-day lead guarantee means first qualified ${Name.toLowerCase().replace(/s$/, "")} lead within 90 days, or we keep working at no cost.`,
        `The site is built around the searches ${lower} get hired from — not generic templates. ${opts.yourEdge}`,
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
        a: `Most agencies charge ${lower} $3,000-$8,000 upfront plus $500-$1,500/mo for SEO. We charge $0 upfront and $297/mo (12-month plan) bundled — hosting, SEO, call tracking, and monthly content all included. First payment only after the site is live and tracking is verified.`,
      },
      {
        q: `Will my ${Name.toLowerCase().replace(/s$/, "")} website rank on Google?`,
        a: `Most of our trade builds rank top 10 for the city + service keyword (e.g. <em>${opts.example}</em>) within 45-60 days of launch. The 90-day qualified-lead guarantee is in writing — first qualified lead in 90 days, or we work for free until you do.`,
      },
      {
        q: `What pages do you build for ${lower}?`,
        a: `Service pages for ${services}, plus neighborhood pages for each area you cover. Schema markup as a LocalBusiness. Google Business Profile alignment. We add one new page per month as part of monthly content.`,
      },
      {
        q: `What's the difference between this and Angi?`,
        a: `Angi takes a commission on every lead and forces you to compete with 4-5 other ${lower} on every job. Our build sends leads direct to your phone — no commission, no race-to-the-bottom on price. The math is dramatically better once you have direct organic leads.`,
      },
      {
        q: `Can I cancel?`,
        a: `Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, and the code. No exit fees.`,
      },
    ],
    sisterIndustries: opts.sisterIndustries || ["trades"],
    topCities: opts.topCities || ["new-york", "los-angeles", "chicago", "houston", "phoenix"],
    meta: {
      title: `Free ${Name} Website + SEO | $297/mo, 5-Day Build | US`,
      description: `Free SEO website for US ${lower}. ${services}. 5-day build. 90-day qualified-lead guarantee. $297/mo bundled.`,
    },
  };
}

INDUSTRIES.push(
  makeTradeIndustry({
    slug: "electricians",
    name: "Electricians",
    pluralLower: "electricians",
    primaryServices: "residential, commercial, emergency, panel upgrades, EV chargers, lighting, generators",
    example: "electrician Houston",
    bigPlayer: "Big-name electrical companies dominate page 1 of Google in most major metros",
    yourEdge: "Service-specific searches (panel upgrade, EV charger install, generator install) and neighborhood searches each rank separately. We build pages for each.",
    sisterIndustries: ["plumbers", "trades", "contractors"],
    topCities: ["los-angeles", "houston", "phoenix", "dallas", "chicago"],
  }),
  makeTradeIndustry({
    slug: "contractors",
    name: "Contractors",
    pluralLower: "contractors",
    primaryServices: "renovations, additions, roofing, deck building, kitchens, bathrooms",
    example: "contractor Dallas",
    bigPlayer: "Big national franchises and design-build firms own brand searches",
    yourEdge: "Specific build-type searches (kitchen remodel, deck build, bathroom renovation) plus neighborhood-specific pages each rank separately. We build pages for each.",
    sisterIndustries: ["roofers", "trades", "painters"],
    topCities: ["new-york", "houston", "dallas", "phoenix", "chicago"],
  }),
  makeTradeIndustry({
    slug: "hvac",
    name: "HVAC",
    pluralLower: "HVAC contractors",
    primaryServices: "AC install, AC repair, heating, furnace, heat pump, duct cleaning, emergency",
    example: "HVAC Phoenix",
    bigPlayer: "Major HVAC chains (One Hour, ARS, Service Experts) dominate brand searches",
    yourEdge: "Emergency, install, repair, and equipment-specific searches each rank separately. Hot-state markets (TX, AZ, FL) reward rapid neighborhood coverage.",
    sisterIndustries: ["plumbers", "electricians", "trades"],
    topCities: ["phoenix", "houston", "dallas", "jacksonville", "san-antonio"],
  }),
  makeTradeIndustry({
    slug: "roofers",
    name: "Roofers",
    pluralLower: "roofers",
    primaryServices: "roof replacement, repair, leak detection, metal roofing, shingle, storm damage, inspections",
    example: "roofer Houston",
    bigPlayer: "Big-name roofing companies and storm-chaser franchises dominate generic searches",
    yourEdge: "Storm damage, insurance claims, specific roof types (metal, shingle, tile) each rank separately. We build pages for each plus neighborhood coverage.",
    sisterIndustries: ["contractors", "trades"],
    topCities: ["houston", "dallas", "phoenix", "jacksonville", "charlotte"],
  }),
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
  makeTradeIndustry({
    slug: "landscapers",
    name: "Landscapers",
    pluralLower: "landscapers",
    primaryServices: "design, installation, irrigation, hardscaping, sod, mulch, maintenance, tree service",
    example: "landscaper Phoenix",
    bigPlayer: "TruGreen and big franchise lawn services dominate generic searches",
    yourEdge: "Design vs maintenance, hardscaping vs softscaping, and seasonal services each rank separately. We build pages for each.",
    sisterIndustries: ["contractors", "trades"],
    topCities: ["phoenix", "los-angeles", "houston", "dallas", "charlotte"],
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
      subtitle: `${opts.name} who rank on Google get chosen. Those who don't get the leftover inquiries. We build the SEO website that puts your firm on page 1 with a free 5-day build, $297/mo, and a 90-day lead guarantee.`,
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
        `We build the site in 5 working days for $0 upfront. After launch, $297/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in). Hosting, SEO, form analytics, monthly ranking work, and one new content piece every month are bundled. The 90-day lead guarantee means first qualified ${opts.name.toLowerCase().replace(/s$/, "")} inquiry within 90 days, or we keep working at no cost.`,
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
        `<strong>Month 1:</strong> First Google inquiry. Often a higher-quality lead than you'd expect — they've read your content and pre-qualified themselves.`,
        `<strong>Month 2:</strong> Multiple weekly inquiries. The site does what referrals can't: bring in new clients you don't know yet.`,
        `<strong>Month 3:</strong> Guarantee honored. Pipeline is no longer dependent on the size of your network.`,
      ],
    },
    complianceNote: opts.complianceNote,
    faq: [
      {
        q: `How much does a ${opts.name.toLowerCase().replace(/s$/, "")} website cost?`,
        a: `Most agencies charge ${opts.pluralLower} $5,000-$15,000 upfront for a website plus $1,000-$2,500/mo for SEO. We charge $0 upfront and $297/mo (12-month plan) bundled — hosting, SEO, content, all included.`,
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
        a: `Yes. We write the first draft based on your brief, you give feedback in writing or via Loom video, we revise. Two written feedback rounds. The final tone is yours — we just give you a ranking-ready structure for it.`,
      },
      {
        q: `Can I cancel?`,
        a: `Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, and the code. No exit fees.`,
      },
    ],
    sisterIndustries: opts.sisterIndustries || [],
    topCities: opts.topCities || ["new-york", "los-angeles", "chicago", "houston", "phoenix"],
    meta: {
      title: `Free ${opts.name} Website + SEO | $297/mo, 5-Day Build | US`,
      description: `Free SEO website for US ${opts.pluralLower}. ${opts.primaryServices}. 5-day build. 90-day qualified-lead guarantee. $297/mo bundled.`,
    },
  };
}

INDUSTRIES.push(
  makeProfessionalIndustry({
    slug: "lawyers",
    name: "Lawyers",
    pluralLower: "lawyers",
    primaryServices: "business law, contracts, employment, real estate, estate planning, dispute resolution",
    example: "business lawyer Chicago",
    externalProblem: "The big-name firms own page 1 for generic searches. You can't outspend them, and Google AdWords for lawyers costs $50+ per click in major US metros.",
    internalProblem: "You're winning work through referrals and reputation, but referrals plateau. New clients via Google could double your pipeline — but the firm's website was built years ago and hasn't ranked since.",
    yourEdge: "We position you as a small firm with a clear specialty. Most legal SEO is generic; we go specific.",
    complianceNote: {
      eyebrow: "Scope note",
      heading: "Who this is built for.",
      paragraphs: [
        "We build for small firms with focused practice areas (business law, contracts, employment, real estate, estate planning, dispute resolution). We do NOT take on personal injury, mass tort, criminal defense, or class actions. Those have specific advertising regulations under state bar rules that go beyond standard marketing infrastructure.",
        "Your firm owns all claims about specific case outcomes, fee arrangements, and legal services. We provide marketing infrastructure; you provide legal substance and ensure compliance with your state bar's advertising rules.",
      ],
    },
    sisterIndustries: ["accountants"],
    topCities: ["new-york", "chicago", "los-angeles", "houston", "dallas"],
  }),
  makeProfessionalIndustry({
    slug: "accountants",
    name: "Accountants",
    pluralLower: "accountants",
    primaryServices: "tax prep, bookkeeping, business advisory, payroll, year-end, IRS representation",
    example: "small business accountant Houston",
    externalProblem: "Big chains (H&R Block, Jackson Hewitt) own brand searches. Generic 'accountant [city]' is dominated by long-established firms.",
    internalProblem: "Your existing clients are loyal but aging. New clients via Google could refresh the book — but the firm's site doesn't rank for anything specific. Tax time gets you panic-Googlers; the rest of the year is dry.",
    yourEdge: "Specific service searches (small business tax, CPA, S-corp, sole proprietor, LLC tax) each rank separately. Most accountant sites lump everything onto one page; we build dedicated pages for each.",
    sisterIndustries: ["lawyers"],
    topCities: ["new-york", "chicago", "houston", "dallas", "los-angeles"],
  }),
  makeProfessionalIndustry({
    slug: "real-estate-agents",
    name: "Real Estate Agents",
    pluralLower: "real estate agents",
    primaryServices: "residential sales, listings, buyer representation, first-time home buyers, investment, relocation",
    example: "realtor Austin",
    externalProblem: "The big franchise agencies (Coldwell Banker, RE/MAX, Keller Williams, Compass) dominate brand searches.",
    internalProblem: "Sellers and buyers choose agents based on neighborhood expertise and recent sales. Without a website that ranks for <em>real estate agent [your neighborhood]</em>, you're invisible to clients who haven't heard of you.",
    yourEdge: "Neighborhood-specific pages, recent sales pages, and buyer guides each rank separately. We build pages for each neighborhood you sell in.",
    complianceNote: {
      eyebrow: "Compliance note",
      heading: "Real estate marketing compliance.",
      paragraphs: [
        "Real estate marketing is regulated by state real estate commissions and the National Association of REALTORS. We position your business as marketing infrastructure that you control. Specific claims about property values, market predictions, or sale outcomes are your responsibility to verify and approve. Disclosures (license number, brokerage affiliation) appear on every page per your state's requirements.",
      ],
    },
    sisterIndustries: ["lawyers"],
    topCities: ["austin", "dallas", "charlotte", "san-diego", "jacksonville"],
  }),
  makeProfessionalIndustry({
    slug: "photographers",
    name: "Photographers",
    pluralLower: "photographers",
    primaryServices: "wedding, family, newborn, real estate, commercial product, headshots",
    example: "wedding photographer New York",
    externalProblem: "Photographer SERPs are crowded. Instagram has eaten a lot of the discovery work, but the searches that remain are high-intent.",
    internalProblem: "You've got a folder full of stunning work and a website that's a generic gallery. Couples planning weddings, parents booking newborn shoots, agents needing real estate work — they all search differently. Your one-size-fits-all site captures none of them.",
    yourEdge: "Each photography niche (wedding, newborn, real estate, headshots, product) has its own search volume. We build dedicated pages for each, with the right portfolio examples and pricing transparency.",
    sisterIndustries: [],
    topCities: ["new-york", "los-angeles", "chicago", "austin", "dallas"],
  })
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
      subtitle: `${opts.name} who rank locally book out. Those who don't depend on Instagram and walk-ins. We build the SEO website that gets you found with a free 5-day build, $297/mo, and a 90-day lead guarantee.`,
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
        `<strong>You're paying for marketing channels that aren't yours.</strong> Instagram changes the algorithm and your reach drops. Facebook ads stop working. Walk-ins are slow. A website you own and rank — once it's built — keeps working.`,
      ],
    },
    answerBox: {
      question: `How does a free ${opts.name.toLowerCase().replace(/s$/, "")} website actually work?`,
      paragraphs: [
        `$0 upfront. Site live in 5 working days. After launch, $297/mo (12-month plan), $397/mo (6-month), or $497/mo (no lock-in) for hosting, SEO, tracking, monthly ranking work, and one new content piece every month. 90-day qualified-lead guarantee in writing.`,
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
        a: `Most agencies charge ${opts.pluralLower} $3,000-$8,000 upfront plus $500-$1,500/mo for SEO. We charge $0 upfront and $297/mo (12-month plan) bundled.`,
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
        a: `Most of our lifestyle clients keep their social presence. We build the website to complement it — when someone hears about you on Instagram and Googles your business name, they land on a site that converts.`,
      },
      {
        q: `Can I cancel?`,
        a: `Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, and the code.`,
      },
    ],
    sisterIndustries: opts.sisterIndustries || [],
    topCities: opts.topCities || ["new-york", "los-angeles", "chicago", "houston", "phoenix"],
    meta: {
      title: `Free ${opts.name} Website + SEO | $297/mo, 5-Day Build | US`,
      description: `Free SEO website for US ${opts.pluralLower}. ${opts.primaryServices}. 5-day build. 90-day qualified-lead guarantee. $297/mo bundled.`,
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
    internalProblem: "Your chairs are full but your books only go 3-4 weeks out. New clients come from Instagram and word of mouth — both unpredictable. A steady search-driven pipeline could let you book 8 weeks out.",
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
    internalProblem: "Your clients love you but you're capped at 25-30 hours of contact time per week. Online coaching could break that cap — but only if your website ranks for the searches.",
    yourEdge: "1:1, group, online, and specialty searches (strength, weight loss, postnatal, prehab) each rank separately. We build pages for each.",
    sisterIndustries: ["hair-salons"],
    topCities: ["los-angeles", "new-york", "austin", "san-diego", "chicago"],
  }),
  makeLifestyleIndustry({
    slug: "restaurants",
    name: "Restaurants",
    pluralLower: "restaurants",
    primaryServices: "dine-in, takeout, delivery, catering, private events, gift cards",
    example: "best Italian Brooklyn",
    externalProblem: "Big chains and aggregators (OpenTable, Yelp, Resy) dominate generic 'restaurant [city]' searches.",
    internalProblem: "Walk-ins are slowing. The neighborhood foot traffic isn't what it was. New customers increasingly find restaurants via search. If you're not in the top 3 for your cuisine in your neighborhood, you don't exist.",
    yourEdge: "Cuisine + neighborhood searches (best Italian Brooklyn, Thai Austin) each rank separately. We build pages for menus, private events, catering, and gift cards.",
    sisterIndustries: [],
    topCities: ["new-york", "los-angeles", "chicago", "austin", "san-diego"],
  })
);
