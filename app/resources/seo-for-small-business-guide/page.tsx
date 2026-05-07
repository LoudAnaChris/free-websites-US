import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO for Small Business: A US Owner's Plain-English Guide (2026)",
  description:
    "Plain-English SEO guide for US small business owners. The three pillars (technical, content, local), keyword research, on-page basics, GBP, content cadence, and when DIY beats hiring help.",
  alternates: {
    canonical: `${SITE.url}/resources/seo-for-small-business-guide`,
  },
};

const FAQS = [
  {
    q: "How long does small business SEO take to work?",
    a: "Three to six months for noticeable rank movement, six to twelve months for measurable lead volume. Anyone promising page-one in 30 days is selling you a fairy tale or paid ads disguised as SEO. Local SEO (Google Business Profile and Local Pack) moves faster, often within 30 to 60 days. Organic search rank for competitive keywords moves slower.",
  },
  {
    q: "Can I do SEO myself or do I need to hire someone?",
    a: "DIY is realistic if you can spend 4 to 6 hours per week, you enjoy the analytical side, and you'll keep going for 12 months. Most owners can't. The math is simple: if your time is worth $100/hour, that's $400 to $600 of your time per week, or $20,000 to $30,000 of opportunity cost per year. A managed plan at $247/month is cheaper.",
  },
  {
    q: "What's the difference between SEO and Google Ads?",
    a: "Google Ads is rented traffic. You pay $X per click, get traffic immediately, stop paying and traffic stops. SEO is owned. You invest in content and technical setup, traffic builds for 6 to 12 months, then continues for years even if you stop. Both work. Most US small businesses should run both: Ads for instant leads while SEO compounds.",
  },
  {
    q: "How much does SEO cost a small business per month?",
    a: "Three tiers in the US market. Cheap: $200 to $500/month for token monthly work, often outsourced overseas, rarely produces results. Mid-range: $1,000 to $3,000/month for a small agency, mixed results depending on the agency. High-end: $3,000 to $10,000/month for specialist agencies. Our managed plan bundles SEO with website, hosting, and content updates at $247/month for the 12-month plan.",
  },
  {
    q: "What is Local Pack and how do I rank in it?",
    a: "Local Pack is the map block of three businesses that appears at the top of Google for local searches like 'plumber near me'. To rank in it: complete Google Business Profile, primary category matches the search, NAP (name, address, phone) consistent between GBP and website, recent reviews, regular posts, and proximity to the searcher. Most local pack improvements happen within 30 to 60 days of a GBP cleanup.",
  },
  {
    q: "Do backlinks still matter for small business SEO?",
    a: "Yes, but less than they did. For local small businesses, citations (consistent NAP listings on Yelp, BBB, industry directories, Chamber of Commerce, etc) matter more than traditional link building. Aim for 30 to 60 high-quality citations in your first year. Avoid link-buying schemes; Google detects them and penalizes the site.",
  },
];

const PILLARS = [
  {
    n: 1,
    title: "Technical SEO: making the site crawlable and fast",
    body: "The foundation. If Google can't crawl your site, nothing else matters. Five technical essentials. First, mobile-first design that passes Core Web Vitals (load under 2.5 seconds, no layout shift). Second, schema.org structured data on every page (LocalBusiness, FAQPage, Service, BreadcrumbList). Third, clean URL structure (/services/water-heater-repair beats /p?id=27). Fourth, working sitemap.xml submitted to Google Search Console. Fifth, HTTPS via SSL certificate. Most managed website plans include all five by default. Most DIY Wix sites fail at least two.",
  },
  {
    n: 2,
    title: "Content SEO: writing for what customers actually search",
    body: "The growth engine. Three content types each do a different job. Service pages target buying intent: 'water heater replacement phoenix'. One page per service, 800 to 1,500 words, includes pricing, what's included, FAQs, and a CTA. City pages target geographic intent: 'plumber phoenix'. One page per service area, 1,000 to 1,500 words, unique to that city. Blog posts target research intent: 'how much does water heater replacement cost'. One useful 1,000-word post per month outperforms quiet sites within 12 months.",
  },
  {
    n: 3,
    title: "Local SEO: Google Business Profile and citations",
    body: "Where most US small business SEO actually happens. Google Business Profile is free and it's the single most important local SEO asset. Complete every field, pick the right primary category, keep NAP consistent with the website, get 30+ reviews in the first 90 days, post weekly. Then add citations: Yelp, BBB, Yellow Pages, Apple Maps, Bing Places, plus 10 to 20 industry-specific directories (HomeAdvisor for trades, Avvo for lawyers, etc). Consistent NAP across all of them is what builds local rank.",
  },
  {
    n: 4,
    title: "Authority and links: the long-term moat",
    body: "Links to your site from other reputable websites tell Google you're trustworthy. For US small businesses, the practical sources are: local newspaper mentions, Chamber of Commerce, supplier and partner sites, trade body memberships, podcast guest appearances, and the press section of suppliers you work with. Avoid paid links, link farms, and 'guest post' offers from random sites. Aim for 5 to 15 high-quality links in year one, then 1 to 2 per month after that.",
  },
];

const KEYWORD_FORMULA = [
  {
    label: "Service + city",
    example: "water heater replacement phoenix",
    note: "The most valuable keyword type. High intent, lower competition, customer is ready to buy.",
  },
  {
    label: "Service + 'near me'",
    example: "plumber near me",
    note: "Pulls Local Pack and organic. Optimize the GBP and add 'near me' phrasing on the homepage.",
  },
  {
    label: "Service + 'cost' or 'price'",
    example: "how much does drain cleaning cost",
    note: "Research intent. Blog post with a transparent pricing range builds trust and ranks fast.",
  },
  {
    label: "Service + 'best' or 'top'",
    example: "best plumber in phoenix",
    note: "Comparison intent. Build a service-area page with reviews and credentials, not a list page.",
  },
  {
    label: "Problem + question",
    example: "why is my drain making a gurgling sound",
    note: "Top of funnel. Blog post that ends with 'when to call a plumber' and links to your service page.",
  },
  {
    label: "Service + emergency / 24-hour",
    example: "emergency plumber phoenix",
    note: "Highest urgency. Dedicated page if you offer emergency service, with phone above the fold.",
  },
];

export default function SEOGuidePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "SEO for small business: a plain-English guide",
      href: "/resources/seo-for-small-business-guide",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "SEO for Small Business: A US Owner's Plain-English Guide (2026)",
            author: {
              "@type": "Person",
              name: "Chris Lourenco",
              url: SITE.founder.linkedIn,
            },
            publisher: {
              "@type": "Organization",
              name: SITE.parentBrand,
              url: SITE.parentUrl,
            },
            datePublished: "2026-05-07",
            dateModified: "2026-05-07",
            url: `${SITE.url}/resources/seo-for-small-business-guide`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            SEO for small business: a plain-English{" "}
            <span className="rose-underline">guide.</span>
          </>
        }
        subtitle="No jargon, no fluff. The four pillars (technical, content, local, authority), how to research keywords, what to publish, when DIY is enough, and when it makes sense to hire help."
      />

      {/* AIO answer-first */}
      <section className="py-12" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <div
              className="rounded-[18px] p-7 sm:p-8"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-platinum) 0%, white 100%)",
                border: "1px solid var(--hair-strong)",
              }}
            >
              <div
                className="text-xs mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-indigo-deep)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Quick answer
              </div>
              <h2
                className="mb-4"
                style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
              >
                What is SEO for a small business?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Small business SEO is the practice of getting your website to
                rank on Google for the searches your customers type when
                looking for what you sell. The three things that matter most
                are: a website built around the right keywords, a Google
                Business Profile aligned with the website, and ongoing content
                that targets specific service plus city combinations. Done
                properly, it produces compounding leads for years.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars section */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">The four pillars</span>
            <h2 className="mt-4">SEO is four jobs, not one.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Most small business owners think SEO is one thing. It's four
              connected jobs. If you're missing any one of them, the others
              don't work. Get the foundation right, then layer up.
            </p>
          </Reveal>

          <div className="space-y-10">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 40}>
                <div className="grid gap-6 lg:grid-cols-[80px_1fr] items-start">
                  <div
                    className="text-3xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-rose)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.n.toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{p.title}</h3>
                    <p
                      className="mt-3 text-lg"
                      style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword research section */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">Keyword research</span>
            <h2 className="mt-4">The six keyword patterns to target.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              You don't need expensive tools to start. Free options: Google
              Keyword Planner, Google's autocomplete suggestions, the 'People
              Also Ask' box, and the 'Searches related to' at the bottom of the
              results page. Build your list around these six patterns.
            </p>
          </Reveal>

          <div className="space-y-6">
            {KEYWORD_FORMULA.map((k, i) => (
              <Reveal key={i} delay={i * 30}>
                <div
                  className="rounded-[14px] p-6"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair)",
                  }}
                >
                  <div className="flex flex-wrap gap-3 items-baseline mb-3">
                    <h3 style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}>
                      {k.label}
                    </h3>
                    <code
                      className="text-sm px-2 py-1 rounded"
                      style={{
                        background: "var(--color-platinum)",
                        color: "var(--color-rose)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {k.example}
                    </code>
                  </div>
                  <p
                    className="text-base"
                    style={{ color: "var(--color-ink-2)", lineHeight: 1.6 }}
                  >
                    {k.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* On-page basics section */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">On-page essentials</span>
            <h2 className="mt-4">What goes on every page that ranks.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>Title tag</strong> under 60 characters, primary keyword
                near the start, brand name at the end. Example: 'Water Heater
                Replacement Phoenix | ABC Plumbing'. Title tag is the single
                strongest on-page ranking signal.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>Meta description</strong> under 160 characters,
                rewrites the page benefit, includes a soft CTA. Doesn't
                directly affect ranking but does affect click-through rate.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>H1, H2, H3 structure</strong> with the primary keyword
                in H1, related variations in H2s, and supporting points in H3s.
                One H1 per page. Don't skip levels.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>Image alt text</strong> on every image, describing what
                the image actually shows. Avoid keyword stuffing. 'Newly
                installed Rheem 50-gallon water heater in Phoenix garage' is
                useful. 'water heater plumber phoenix' is spam.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>Internal links</strong> from each page to related
                pages, using descriptive anchor text. Service page to FAQ blog
                post. FAQ blog post to service page. Homepage to top three
                services. This is how Google understands site structure.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>Schema markup</strong> as JSON-LD. LocalBusiness,
                Service, FAQPage, BreadcrumbList. Without it, Google has to
                guess what your page is about. With it, you qualify for rich
                results and AI search citations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content cadence section */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Content cadence</span>
            <h2 className="mt-4">What to publish, how often.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>Year one minimum:</strong> 12 useful blog posts (one
                per month), 3 to 5 city pages if you serve multiple areas, all
                service pages live, and 30+ Google reviews. Sites that hit this
                outperform 80% of small business competitors within 12 months.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>Per piece quality bar:</strong> 1,000 to 1,500 words on
                blog posts, 800 to 1,500 on service pages, real photos not
                stock, 5 to 8 FAQs per page, internal links to 2 to 4 related
                pages. One useful 1,500-word post beats five thin 300-word
                posts.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                <strong>The dropoff problem:</strong> 70% of small business
                blogs go silent after month three. Sites that publish nothing
                for 12 months lose 30 to 60% of organic traffic. The single
                biggest factor in long-term SEO success is consistency, not
                quality. Both matter; consistency wins.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing tease */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow on-light">Our take</span>
            <h2 className="mt-4">
              For US small businesses, here&apos;s what we recommend.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              DIY SEO is realistic if you can spend 4 to 6 hours per week and
              you'll keep going for 12 months. Most owners can't. The
              opportunity cost on owner time alone is usually $20,000+ per year,
              and the work usually goes silent by month three. For most US
              small businesses under 15 staff, the practical answer is a
              managed plan that bundles the website, hosting, technical SEO,
              monthly content, and Google Business Profile management. Free
              SEO Websites by Loudachris: free 5-day build, $247/month bundled
              (12-month plan), and a 90-day qualified-lead guarantee.{" "}
              <Link
                href="/pricing"
                style={{ color: "var(--color-rose)", fontWeight: 700 }}
              >
                See pricing
              </Link>{" "}
              or{" "}
              <Link
                href="/how-it-works"
                style={{ color: "var(--color-rose)", fontWeight: 700 }}
              >
                how it works
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <FAQ faqs={FAQS} heading="Related questions." eyebrow="FAQ" />
      <FinalCTA />
    </>
  );
}
