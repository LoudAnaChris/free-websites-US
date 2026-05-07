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
  title: "How to Start a Website for a Small Business (US Practical Guide)",
  description:
    "Step-by-step practical guide to starting a small business website in the US. Domain, platform choice, content, analytics, GBP, going live. DIY vs freelancer vs managed compared.",
  alternates: {
    canonical: `${SITE.url}/resources/how-to-start-website-for-small-business`,
  },
};

const FAQS = [
  {
    q: "Do I really need a website to start a small business?",
    a: "Yes. 76% of US consumers check a business's website before contacting it, and 56% won't consider one without a site. A Facebook page or a Google Business Profile is not a substitute. Both are rented platforms; the website is the only digital asset you actually own. Start with the website, then layer social and GBP on top.",
  },
  {
    q: "How much does it cost to start a small business website?",
    a: "Three price points. DIY on Wix or Squarespace: $200 to $400 in the first year if you do everything yourself. Freelancer build: $2,500 to $7,000 upfront plus ongoing hosting and content. Managed subscription with bundled SEO: $247 to $497 per month with no upfront. The cheapest option upfront is rarely the cheapest by year two once leads are factored in.",
  },
  {
    q: "Can I start a website for free?",
    a: "Sort of. Wix, Weebly, and WordPress.com offer free tiers, but all three put their branding on your site, restrict the domain, limit storage, and can't run e-commerce or proper analytics. For a hobby site fine, for a business that needs to be taken seriously no. Our managed plan is free upfront ($0 to start) with a $247/month subscription, which is closer to what 'free' actually means for a real business.",
  },
  {
    q: "What domain extension should I use?",
    a: "For a US small business, .com first. If .com is taken, try .net, .co, or a geo-specific variant like yourbusinesscityname.com. Avoid .biz, .info, and exotic extensions. Customers default to typing .com, and any other extension means losing typed traffic to whoever owns the .com.",
  },
  {
    q: "How long does it take to start a website?",
    a: "Managed subscription: 5 working days from brief to live site. Freelancer build: 4 to 8 weeks. DIY on Wix or Squarespace: 4 to 12 weeks of evenings and weekends, often abandoned at 70% complete. The biggest variable isn't the technology, it's the content. Have your services list, photos, and reviews collected before you start.",
  },
  {
    q: "What do I do after the website is live?",
    a: "Three things, in order: submit the site to Google Search Console and Bing Webmaster Tools, claim or align your Google Business Profile with the site, and add one new piece of content per month. Sites that publish nothing for 6 months stop ranking. Sites that publish one useful 1,000-word article per month outperform 80% of competitors within a year.",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Pick a domain that includes a keyword if you can",
    body: "Domain choice has minor SEO impact but major branding impact. Three rules. First, .com first if available. Second, keep it short, easy to spell, easy to say over the phone. Third, if your business name is generic, add a city or service word: 'Phoenix Plumbing Co' beats 'Plumbing Co'. Avoid hyphens, numbers, and creative spellings. Cost: $12 to $20 per year on Namecheap, GoDaddy, or Cloudflare. If you go with our managed plan, the domain is included.",
  },
  {
    n: 2,
    title: "Choose a platform: DIY, freelancer, or managed",
    body: "Three paths. DIY (Wix, Squarespace, Shopify): cheap upfront, you do everything, content is your job, SEO is mostly limited. Freelancer build: $2,500 to $7,000 upfront, you brief them, they build it, then it's your responsibility from launch onwards. Managed subscription: a flat monthly fee bundles design, hosting, SEO, and ongoing content. The right choice depends on your time and your skill. If your time is worth $100/hour and you'd spend 60 hours on DIY, that's a $6,000 hidden cost.",
  },
  {
    n: 3,
    title: "Write content focused on what customers actually search",
    body: "The biggest mistake is writing about your company. Customers don't search 'About ABC Plumbing'. They search 'emergency plumber phoenix', 'water heater replacement cost', 'how much does drain cleaning cost'. Build pages around those queries. One page per service. One page per service area. One blog post per buyer question. Write in plain language. Use the customer's words, not industry jargon.",
  },
  {
    n: 4,
    title: "Install analytics and call tracking on day one",
    body: "If you can't measure it, you can't improve it. Three tools, free or near-free. Google Analytics 4 (free) for traffic and behavior. Google Search Console (free) for keyword rankings and crawl errors. CallRail or similar ($45 to $135/month) for call tracking by source. Without call tracking, you'll never know which marketing channel produced the lead. Set them up before you go live, not after.",
  },
  {
    n: 5,
    title: "Align your Google Business Profile with the website",
    body: "Your GBP is the single most important local SEO asset. Free, run by Google, and it controls whether you appear in the Local Pack (the map results). Three rules. First, name, address, phone on the GBP must exactly match the website footer. Second, primary category should match the main service. Third, link the website URL on the GBP. Inconsistent NAP between site and GBP drops local rank within weeks.",
  },
  {
    n: 6,
    title: "Submit to Google Search Console and Bing Webmaster Tools",
    body: "Both are free. Both speed up indexing. After launch, verify the site (DNS or HTML file), submit your sitemap.xml, and use 'Request Indexing' on your top 5 to 10 pages. Google can take 2 weeks to fully index a new site, sometimes longer. Bing is faster (5-day average). Without submission, you wait. With submission, you accelerate it.",
  },
  {
    n: 7,
    title: "Plan the post-launch content cadence before you launch",
    body: "Sites that publish nothing after launch stop ranking. The minimum cadence is one new piece of content per month, ideally 1,000 to 1,500 words, answering a real buyer question. The compound effect is real: 12 useful posts in year one usually delivers more organic traffic than the entire homepage. Plan the first 6 topics before launch. Schedule them. Otherwise, post-launch energy drops and the blog goes silent.",
  },
];

const COMPARISON = [
  {
    label: "DIY (Wix / Squarespace)",
    cost: "$200 to $400 year one",
    timeline: "4 to 12 weeks (your evenings)",
    best: "Hobby sites, side hustles, very technical owners",
    risk: "Often abandoned at 70% done; weak SEO; you handle everything forever",
  },
  {
    label: "Freelancer build",
    cost: "$2,500 to $7,000 upfront, plus $50-150/mo hosting",
    timeline: "4 to 8 weeks",
    best: "Owners with budget but no time, who want a one-off build",
    risk: "After launch you're on your own; SEO and content is your job",
  },
  {
    label: "Managed subscription (us)",
    cost: "$0 upfront, $247/month bundled (12-month plan)",
    timeline: "5 working days",
    best: "US small businesses under 15 staff who want results, not a project",
    risk: "Lower; we handle hosting, SEO, content, and updates with a 90-day qualified-lead guarantee",
  },
];

export default function HowToStartWebsitePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "How to start a website for a small business",
      href: "/resources/how-to-start-website-for-small-business",
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
              "How to Start a Website for a Small Business (US Practical Guide)",
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
            url: `${SITE.url}/resources/how-to-start-website-for-small-business`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            How to start a website for a small{" "}
            <span className="rose-underline">business.</span>
          </>
        }
        subtitle="Seven practical steps from blank page to live site. Domain choice, platform comparison, content, analytics, Google Business Profile alignment, and the post-launch cadence that separates sites that grow from sites that go quiet."
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
                How do I start a website for a small business?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Five steps: pick a domain that includes a keyword, choose a
                platform (DIY builder, freelancer, or managed subscription),
                write content focused on what customers search for, install
                analytics and call tracking, and submit to Google Search
                Console. Most US small businesses can be live in 5 to 10 days
                if they go with a managed subscription, or 4 to 12 weeks if
                they DIY.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body: 7 steps */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">The 7 steps</span>
            <h2 className="mt-4">From blank page to live site.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Each step takes between 30 minutes and two days depending on
              path. Done in order, the whole sequence is 5 working days for a
              managed build or 4 to 12 weeks for a serious DIY effort.
            </p>
          </Reveal>

          <div className="space-y-10">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 40}>
                <div className="grid gap-6 lg:grid-cols-[80px_1fr] items-start">
                  <div
                    className="text-3xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-rose)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.n.toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p
                      className="mt-3 text-lg"
                      style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison section */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">DIY vs freelancer vs managed</span>
            <h2 className="mt-4">Three paths, compared honestly.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              The right path depends on your time, budget, and risk tolerance.
              The cheapest option upfront is not always the cheapest long-term
              once leads (or the lack of them) are factored in.
            </p>
          </Reveal>

          <div className="space-y-6">
            {COMPARISON.map((c, i) => (
              <Reveal key={i} delay={i * 50}>
                <div
                  className="rounded-[16px] p-6 sm:p-7"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair-strong)",
                  }}
                >
                  <h3>{c.label}</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-indigo-deep)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Cost
                      </div>
                      <p
                        style={{
                          color: "var(--color-ink-2)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.cost}
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-indigo-deep)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Timeline
                      </div>
                      <p
                        style={{
                          color: "var(--color-ink-2)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.timeline}
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-indigo-deep)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Best for
                      </div>
                      <p
                        style={{
                          color: "var(--color-ink-2)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.best}
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-indigo-deep)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Risk
                      </div>
                      <p
                        style={{
                          color: "var(--color-ink-2)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.risk}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
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
              Starting the site yourself is realistic if you have 40 to 60
              hours and enjoy the technical side. For most US small businesses
              under 15 staff who want results in 90 days, the practical answer
              is a managed subscription that bundles design, hosting, SEO, and
              ongoing content. Free SEO Websites by Loudachris: free 5-day
              build, $0 upfront, $247/month bundled, and a 90-day
              qualified-lead guarantee.{" "}
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
