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
  title: "How Much Does a Small Business Website Cost? (Real US 2026 Numbers)",
  description:
    "Between $0 and $50,000+. Most US small businesses pay $1,500 to $15,000 upfront plus $50 to $500/month. Real costs by route: DIY, freelancer, agency, or bundled subscription.",
  alternates: {
    canonical: `${SITE.url}/resources/how-much-does-website-cost-small-business`,
  },
};

const FAQS = [
  {
    q: "Why is there such a wide range in website cost?",
    a: "Three reasons. One: the work itself ranges from a 6-page brochure site to a 50-page custom-coded site with bookings, integrations, and ongoing SEO. Two: who builds it (DIY vs freelancer vs agency) changes the rate by 10x. Three: ongoing costs (hosting, SEO, content, security, maintenance) are often hidden in the monthly fee or quoted separately.",
  },
  {
    q: "What's the cheapest way to get a small business website?",
    a: "DIY on Wix, Squarespace, GoDaddy, or WordPress.com runs $20 to $50 per month all-in. The hidden cost is your time: 20 to 60 hours to build it, plus ongoing hours for SEO, content, and updates. If your time is worth more than $30 per hour, DIY is rarely the cheapest path.",
  },
  {
    q: "Should I pay upfront or monthly for a website?",
    a: "It depends on cash flow and what's included. Upfront ($1,500 to $15,000) gives you ownership but rarely includes ongoing SEO, content, or maintenance. Monthly ($50 to $500) typically bundles those, but you keep paying as long as you want them. The math: a $5,000 upfront site plus $200/mo ongoing equals $9,800 over 2 years, vs $4,728 for a fully bundled $197/mo plan.",
  },
  {
    q: "Do I have to pay for hosting on top of a website build?",
    a: "Usually yes, with a freelancer or agency build. Hosting alone runs $10 to $50 per month for shared hosting, $30 to $100 for managed hosting, $200 plus for premium. Subscription plans bundle hosting in. Always ask whether hosting, domain renewal, SSL, and security are included before signing a flat-fee build.",
  },
  {
    q: "What's a fair price for a small business website in 2026?",
    a: "For a 6 to 12 page service business site with proper SEO, mobile design, and schema markup: $3,000 to $8,000 upfront from a freelancer or local agency, or $150 to $400 per month for a bundled subscription that includes hosting, SEO, and content updates. Anything under $1,000 is typically a template. Anything over $15,000 needs to justify the extra with custom features or strategy.",
  },
  {
    q: "Can a free website actually be any good?",
    a: "Free as in &ldquo;Wix free tier&rdquo; is limited and shows their branding, so no. Free as in &ldquo;build cost is zero, you pay only the monthly care plan&rdquo; can be excellent, because the monthly fee covers the build amortized over your tenure. That's the model we use: $0 to build, $247 per month bundled, 90-day qualified-lead guarantee.",
  },
];

export default function CostPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "How much does a small business website cost",
      href: "/resources/how-much-does-website-cost-small-business",
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
              "How Much Does a Small Business Website Cost? (Real US 2026 Numbers)",
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
            url: `${SITE.url}/resources/how-much-does-website-cost-small-business`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            How much does a small business{" "}
            <span className="rose-underline">website cost?</span>
          </>
        }
        subtitle="Real US 2026 numbers, by route. DIY, freelancer, local agency, full agency, and bundled subscription. With a comparison table and the math on which one wins by year 2."
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
                How much does a website cost for a small business?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Between $0 and $50,000+ depending on who builds it and
                what&apos;s included. Most US small businesses pay $1,500 to
                $15,000 upfront plus $50 to $500 per month, but the real
                answer depends on whether you bundle SEO, hosting, and
                content into the monthly fee or pay them separately. DIY runs
                $20 to $50 per month all-in but takes 20 to 60 hours of your
                time. A freelancer charges $1,500 to $5,000 upfront. A local
                agency: $3,000 to $10,000. A full-service agency: $10,000 to
                $50,000. Bundled subscription plans like ours run $0 upfront
                plus $247 to $497 per month.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 1: DIY */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Route 1</span>
            <h2 className="mt-4">DIY on a website builder.</h2>
            <p
              className="mt-3 text-base"
              style={{
                color: "var(--color-ink-3)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              $20 to $50/month all-in. Plus 20-60 hours of your time.
            </p>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Wix, Squarespace, GoDaddy, and WordPress.com are the
                mainstream DIY builders. All four run $20 to $50 per month
                including hosting, domain (after the first year), and SSL.
                Wix Business is $32, Squarespace Business is $33, GoDaddy
                Premium is $20, WordPress.com Business is $40 per month.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The real cost is your time. Most owners spend 20 to 60 hours
                building a 6-page site for the first time, plus another 5 to
                10 hours per month on content, updates, and trying to figure
                out SEO. At a notional $50 per hour for your time, that&apos;s
                $1,000 to $3,000 of opportunity cost in build time alone, on
                top of the platform fee.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The other catch: DIY builders are weak on local SEO out of
                the box. Schema markup is limited. Page speed is mediocre
                (most Wix sites fail Core Web Vitals). And the SEO settings
                are buried behind upsells. DIY works for an absolute starter
                site, but most owners outgrow the SEO ceiling within 12
                months.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 2: Freelancer */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Route 2</span>
            <h2 className="mt-4">Freelancer build.</h2>
            <p
              className="mt-3 text-base"
              style={{
                color: "var(--color-ink-3)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              $1,500 to $5,000 upfront. Hosting and SEO usually extra.
            </p>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A freelancer (found on Upwork, Fiverr Pro, local referrals, or
                LinkedIn) typically charges $1,500 to $5,000 for a 6 to 12
                page small business website. Lower end is a template-based
                build on WordPress or Webflow. Higher end is a custom design
                on a more capable stack.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                What&apos;s included varies wildly. Always ask: Is hosting
                included? For how long? Is SSL set up? Is the domain in your
                account or theirs? Is SEO setup (schema, meta titles, sitemap,
                Search Console verification) part of the price? Is there any
                ongoing maintenance, security patching, or content updates?
                Most freelancer quotes do not include any of those. You
                either learn them yourself or pay another $50 to $200 per
                month to keep things working.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The bigger risk: freelancers vanish. Roughly 30% of owners
                end up needing a second freelancer to fix the first one&apos;s
                site within 18 months. Vet aggressively. Check 3 live sites
                they&apos;ve built. Confirm response time guarantees in
                writing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3: Local agency */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Route 3</span>
            <h2 className="mt-4">Local agency build.</h2>
            <p
              className="mt-3 text-base"
              style={{
                color: "var(--color-ink-3)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              $3,000 to $10,000 upfront. Often plus $200-$800/mo retainer.
            </p>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A local digital agency (a 3 to 15 person shop in your city
                or region) typically charges $3,000 to $10,000 upfront for a
                small business site. Most will then quote $200 to $800 per
                month for SEO, hosting, and ongoing maintenance. Total
                first-year cost: $5,400 to $19,600.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The upside: a real strategy session, custom design (not a
                template), proper SEO setup, account management, and a
                physical address you can visit if things go wrong. The
                downside: the upfront capital outlay, sales calls (sometimes
                multiple), and the timeline (8 to 16 weeks is normal).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4: Full agency */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Route 4</span>
            <h2 className="mt-4">Full-service agency.</h2>
            <p
              className="mt-3 text-base"
              style={{
                color: "var(--color-ink-3)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              $10,000 to $50,000+ upfront. Plus $1,000-$5,000/mo retainer.
            </p>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A full-service marketing agency (15+ people, dedicated SEO,
                content, design, and ads teams) charges $10,000 to $50,000
                for a custom website, plus $1,000 to $5,000 per month for
                ongoing SEO and content. This is overkill for most small
                businesses, but appropriate if you have a marketing budget of
                $50,000+ per year, multiple locations, or complex
                requirements (e-commerce with 500+ SKUs, multi-language,
                custom integrations, regulated industry).
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                For a single-location service business under 15 staff, this
                tier is rarely the right answer. The agency&apos;s overhead
                gets passed to you, and most of the deliverables are things
                a smaller shop can do for a third of the price.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5: Subscription */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Route 5</span>
            <h2 className="mt-4">Bundled subscription model.</h2>
            <p
              className="mt-3 text-base"
              style={{
                color: "var(--color-ink-3)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              $0 upfront. $150 to $500/mo all-in.
            </p>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The newest model: free build, monthly fee covers everything.
                Hosting, SEO, content updates, security, maintenance,
                analytics, sometimes content writing and even a
                qualified-lead guarantee. Pricing typically runs $150 to $500
                per month depending on what&apos;s included and the
                commitment length.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The math vs upfront: a $5,000 upfront freelancer build plus
                $200/month for SEO and hosting equals $9,800 over 2 years. A
                $247/month bundled subscription equals $5,928 over 2 years
                with the build included. The subscription wins on year-2
                math by roughly 40%, and the cash-flow profile is much
                friendlier for new businesses.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The tradeoff: you keep paying as long as you want the SEO
                and content work to continue. If you&apos;re fine with a
                static site that doesn&apos;t change, an upfront one-time
                build might be cheaper after year 3. If you want continuous
                SEO and content (which is what actually drives lead growth),
                subscription wins.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-5xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Side by side</span>
            <h2 className="mt-4">2-year total cost compared.</h2>
            <p
              className="mt-5 text-base"
              style={{ color: "var(--color-ink-3)" }}
            >
              All routes include hosting, SEO, and basic maintenance.
              Assumes a 6 to 12 page service business site for a single
              location.
            </p>
          </Reveal>
          <Reveal>
            <div
              className="overflow-x-auto rounded-[14px]"
              style={{
                background: "white",
                border: "1px solid var(--hair-strong)",
              }}
            >
              <table className="w-full text-left">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--hair-strong)" }}>
                    <th
                      className="px-4 py-3 text-sm"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-indigo-deep)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Route
                    </th>
                    <th
                      className="px-4 py-3 text-sm"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-indigo-deep)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Upfront
                    </th>
                    <th
                      className="px-4 py-3 text-sm"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-indigo-deep)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Monthly
                    </th>
                    <th
                      className="px-4 py-3 text-sm"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-indigo-deep)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Year 2 total
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--color-ink-2)" }}>
                  <tr style={{ borderBottom: "1px solid var(--hair)" }}>
                    <td className="px-4 py-3 font-semibold">DIY (Wix, Squarespace)</td>
                    <td className="px-4 py-3">$0</td>
                    <td className="px-4 py-3">$30</td>
                    <td className="px-4 py-3">$720 + 60+ hours of your time</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--hair)" }}>
                    <td className="px-4 py-3 font-semibold">Freelancer + DIY upkeep</td>
                    <td className="px-4 py-3">$3,000</td>
                    <td className="px-4 py-3">$50 (hosting only)</td>
                    <td className="px-4 py-3">$4,200 (SEO not included)</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--hair)" }}>
                    <td className="px-4 py-3 font-semibold">Local agency build + retainer</td>
                    <td className="px-4 py-3">$6,000</td>
                    <td className="px-4 py-3">$400</td>
                    <td className="px-4 py-3">$15,600</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--hair)" }}>
                    <td className="px-4 py-3 font-semibold">Full agency</td>
                    <td className="px-4 py-3">$20,000</td>
                    <td className="px-4 py-3">$2,500</td>
                    <td className="px-4 py-3">$80,000</td>
                  </tr>
                  <tr style={{ background: "var(--color-platinum)" }}>
                    <td
                      className="px-4 py-3 font-semibold"
                      style={{ color: "var(--color-rose)" }}
                    >
                      Free build + $247 bundled
                    </td>
                    <td className="px-4 py-3">$0</td>
                    <td className="px-4 py-3">$247</td>
                    <td
                      className="px-4 py-3 font-bold"
                      style={{ color: "var(--color-rose)" }}
                    >
                      $5,928 (everything included)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
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
              For most US small businesses under 15 staff, the answer is a
              Next.js plus headless CMS setup with bundled SEO and hosting.
              We deliver this as Free SEO Websites by Loudachris: free 5-day
              build, $247/month bundled (hosting plus SEO plus content
              updates), and a 90-day qualified-lead guarantee. If you
              don&apos;t see a qualified lead in 90 days, we work for free
              until you do.{" "}
              <Link
                href="/pricing"
                style={{ color: "var(--color-rose)", fontWeight: 700 }}
              >
                See pricing
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
