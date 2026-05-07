export type CaseStudy = {
  slug: string;
  business: string;
  city: string;
  industry: string;
  industryHref: string;
  liveSite: string;
  buildType: "free-subscription" | "full-service";
  videoId?: string;
  screenshot?: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  story: string[];
  meta: { title: string; description: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bathroom-renovations-adelaide",
    business: "Adelaide's Bathroom Network",
    city: "Adelaide",
    industry: "Bathroom Renovations",
    industryHref: "/industries/builders",
    liveSite: "https://bathroomrenovationsadelaide.com.au",
    buildType: "free-subscription",
    screenshot: "/case-study-bathroom-renovations-adelaide.jpg",
    outcome: "Ranking inside 8 weeks live",
    metrics: [
      { label: "Time to ranking", value: "Inside 8 weeks" },
      { label: "Build time", value: "5 working days" },
      { label: "Plan", value: "$247/mo" },
    ],
    story: [
      "Adelaide&apos;s Bathroom Network came to us positioned for the high end of the bathroom renovation market — &ldquo;quiet-luxury&rdquo; finishes that raise the market value of an Adelaide home, not the budget end.",
      "We built bathroomrenovationsadelaide.com.au around that positioning. Editorial dark-green design language, a hero before/after slider showing a stripped-back bathroom turning into a finished one, service-tier pages (full renovations, ensuites, small bathrooms, accessibility), suburb coverage across Greater Adelaide, a Cost page that&apos;s honest about pricing tiers, and a clear three-quotes workflow.",
      "Ranking inside 8 weeks. The keyword-driven domain (bathroomrenovationsadelaide.com.au) does the SEO heavy lifting; the Adelaide&apos;s Bathroom Network brand earns the trust on click-through.",
    ],
    meta: {
      title:
        "Adelaide's Bathroom Network | Free Website Case Study | Loudachris",
      description:
        "Free SEO website for Adelaide's Bathroom Network — quiet-luxury bathroom renovations across Greater Adelaide. Ranking inside 8 weeks of launch.",
    },
  },
  {
    slug: "pool-resurfacing-adelaide",
    business: "BlueRevive Pool Restoration",
    city: "Adelaide",
    industry: "Builders",
    industryHref: "/industries/builders",
    liveSite: "https://poolresurfacingadelaide.com.au",
    buildType: "free-subscription",
    screenshot: "/case-study-pool-resurfacing-adelaide.jpg",
    outcome: "First lead in 8 days from launch",
    metrics: [
      { label: "Time to first lead", value: "8 days" },
      { label: "Build time", value: "5 working days" },
      { label: "Backed by", value: "30 years on the tools" },
    ],
    story: [
      "BlueRevive is Adelaide&apos;s only specialist pool resurfacing team, backed by Marty (30 years on the tools, 16 apprentices trained). The brief was simple: stop showing up only on word-of-mouth, start owning &ldquo;pool resurfacing Adelaide&rdquo; on Google.",
      "We built poolresurfacingadelaide.com.au with a hero before/after slider that lets prospects drag between &ldquo;the broken pool I&apos;ve got&rdquo; and &ldquo;the pool I want&rdquo;. Service pages cover fibreglass, concrete, pebble, and the osmosis repair work most pool techs don&apos;t handle. Schema markup, suburb coverage across Greater Adelaide, and call tracking on every enquiry.",
      "First qualified lead landed in the inbox 8 days after launch. A 9m × 5m fibreglass pool in Medindie Gardens with osmosis damage — the exact kind of work BlueRevive does best.",
    ],
    meta: {
      title:
        "BlueRevive Pool Restoration Adelaide | Free Website Case Study | Loudachris",
      description:
        "Free SEO website for an Adelaide pool resurfacing specialist. First qualified lead landed 8 days after launch.",
    },
  },
  {
    slug: "sydney-underpinning",
    business: "Underpinning Sydney",
    city: "Sydney",
    industry: "Underpinning Specialists",
    industryHref: "/industries/builders",
    liveSite: "https://sydney-underpinning.com.au",
    buildType: "free-subscription",
    screenshot: "/case-study-sydney-underpinning.jpg",
    outcome: "Top 3 for &ldquo;underpinning Sydney&rdquo;",
    metrics: [
      { label: "Top 3 rank", value: "Underpinning Sydney" },
      { label: "Build time", value: "5 working days" },
      { label: "Service area", value: "Greater Sydney" },
    ],
    story: [
      "Underpinning is a specialist build niche — high-value jobs, structural relevance, but the SERP is dominated by either national builders or directories.",
      "We built sydney-underpinning.com.au with hero photography that conveys what the work actually looks like (steel piers, sandstone footings, real Sydney sites), trust badges (&ldquo;Preservation Specialists across Sydney&rdquo;, &ldquo;Fast & Affordable&rdquo;), technical service pages (residential underpinning, commercial, screw piling, resin injection), and a clear quote workflow.",
      "Reached top 3 for &ldquo;underpinning Sydney&rdquo; with the page architecture and engineering-credible content.",
    ],
    meta: {
      title:
        "Underpinning Sydney | Free Website Case Study | Loudachris",
      description:
        "Free SEO website for a Sydney underpinning specialist. Top 3 ranking for &ldquo;underpinning Sydney&rdquo;. Hero photography from real Sydney sites.",
    },
  },
  {
    slug: "adam-plumbing-adelaide",
    business: "Adam Plumbing and Gas",
    city: "Adelaide",
    industry: "Plumbers",
    industryHref: "/industries/plumbers",
    liveSite: "https://adamplumbingandgas.com.au",
    buildType: "full-service",
    videoId: "AAelWSuGzAE",
    outcome: "13 to 41 jobs/month in 4 months",
    metrics: [
      { label: "Jobs per month", value: "13 → 41" },
      { label: "Time to result", value: "4 months" },
      { label: "Years of failed agencies before", value: "10" },
    ],
    story: [
      "Adam Nettleton runs Adam Plumbing and Gas in Adelaide. Before working with Loudachris, he had spent 10 years on different SEO agencies that promised the world and produced nothing.",
      "Loudachris took over the SEO work. Within four months, Adam went from 13 jobs a month to 41. The lead pipeline grew faster than his ability to staff against it (a good problem).",
      "Adam was on the Loudachris full-service plan ($1,500+/mo SEO management plus the original site build) — not the free-website subscription. The same SEO approach and team builds free-websites.com.au sites at the $247-$497/mo price point.",
    ],
    meta: {
      title:
        "Adam Plumbing & Gas Adelaide | Free Website Case Study | Loudachris",
      description:
        "Adam Nettleton went from 13 to 41 plumbing jobs/month in 4 months working with Loudachris. Watch the testimonial video.",
    },
  },
  {
    slug: "mark-l-hair-melbourne",
    business: "Mark L Hair",
    city: "Melbourne",
    industry: "Hair Salons",
    industryHref: "/industries/hair-salons",
    liveSite: "https://markhair.art",
    buildType: "full-service",
    videoId: "C0lg6FVXc68",
    outcome: "Bought his own salon 5 months in",
    metrics: [
      { label: "Time to own salon", value: "5 months" },
      { label: "Strategy", value: "Google Maps SEO" },
      { label: "Replaced", value: "Instagram ad spend" },
    ],
    story: [
      "Mark Laird is a Melbourne hair color specialist. Before working with Loudachris, he was renting a chair and burning money on Instagram ads.",
      "Chris told Mark to stop the ads and invest in Google Maps SEO instead. Five months later, Mark had enough recurring color clients to buy his own salon two streets from where he was renting.",
      "Mark was on the Loudachris full-service plan, not the free-website subscription. The Google Maps SEO and content strategy that worked for Mark is the same approach we use on free-website builds.",
    ],
    meta: {
      title: "Mark L Hair Melbourne | Free Website Case Study | Loudachris",
      description:
        "Mark Laird bought his own salon 5 months after working with Loudachris on Google Maps SEO. Watch the testimonial video.",
    },
  },
  {
    slug: "fine-automotive-adelaide",
    business: "Fine Automotive Detailing",
    city: "Adelaide",
    industry: "Mechanics",
    industryHref: "/industries/trades",
    liveSite: "https://fineautomotivedetailing.com.au",
    buildType: "full-service",
    videoId: "hSumHgExvcs",
    outcome: "Bought his own workshop in 3 months",
    metrics: [
      { label: "Time to own workshop", value: "3 months" },
      { label: "Visibility growth", value: "Page 1 across primary KWs" },
      { label: "Move", value: "Broadview → Mylands" },
    ],
    story: [
      "Ali Haque runs Fine Automotive Detailing in Adelaide. He was renting a workshop in Broadview when Chris started.",
      "Within three months, the visibility from Loudachris's SEO work meant Ali was getting enough work to justify his own building. He moved into his own workshop in Mylands.",
      "Ali was on the Loudachris full-service plan, not the free-website subscription. The same approach and team builds free-website.com.au sites at the $247-$497/mo price point.",
    ],
    meta: {
      title:
        "Fine Automotive Detailing Adelaide | Free Website Case Study | Loudachris",
      description:
        "Ali Haque bought his own workshop in 3 months after Loudachris took over his SEO. Watch the testimonial video.",
    },
  },
];
