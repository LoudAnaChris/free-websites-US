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
  title:
    "Website vs Social Media: Which Should a US Small Business Prioritize?",
  description:
    "Direct answer: pick a website first. Social media is rented, the website is owned. The conversion math, the algorithm risk, search vs social intent, and the right balance for a US small business.",
  alternates: {
    canonical: `${SITE.url}/resources/website-vs-social-media-small-business`,
  },
};

const FAQS = [
  {
    q: "Can a small business survive on social media without a website?",
    a: "Short-term yes, long-term no. A Facebook page or Instagram account can generate leads in the first 6 to 12 months, especially in lifestyle niches. But you don't own the audience, the platform can change the algorithm overnight, and 56% of US consumers won't consider a business without a website. Three or four years in, the businesses with websites pull ahead and the social-only ones plateau or shrink.",
  },
  {
    q: "Is Facebook good enough as a small business website?",
    a: "No. Facebook pages don't rank in Google for service-plus-city searches. They can't display your services with proper structure, can't host long-form content, can't run schema markup, can't display dedicated service pages, and Facebook owns the audience, not you. A Facebook page is a useful supplement to a website. It's not a replacement.",
  },
  {
    q: "How much time should I spend on social media vs my website?",
    a: "Roughly 70/30 in favor of the website in year one (build it right, publish content, optimize for search), shifting to 50/50 once the website is producing organic leads. The mistake is spending 90% of marketing time on Instagram or TikTok while the website is broken or out of date. Social brings traffic. The website converts it. Both jobs need attention.",
  },
  {
    q: "Which social platform is best for a US small business?",
    a: "Depends on what you sell. Local service businesses (plumbers, electricians, HVAC): Facebook and Google Business Profile, in that order. Skip Instagram unless you have visual work. Visual businesses (hair salons, photographers, designers, restaurants): Instagram and TikTok. B2B services: LinkedIn. The wrong answer for everyone is 'all of them'. Pick one or two and do them well.",
  },
  {
    q: "Will Google still index my website if I rely on social media for traffic?",
    a: "Yes, but social signals don't directly affect Google ranking the way most people think. Google has stated repeatedly that social shares are not a ranking factor. What does matter is the indirect effect: more brand mentions, more search demand, and more direct traffic to your site. The website ranks based on its own content, links, and technical setup, not on Instagram engagement.",
  },
  {
    q: "What if I genuinely only have time for one?",
    a: "Pick the website. Build it once, set up Google Business Profile alongside it, and ignore social media entirely until the website is producing leads. The website plus GBP combination outperforms social-only setups for 80% of US small businesses by year two. Social media without a website is rented infrastructure on a foundation you don't own.",
  },
];

const COMPARISON_DIMENSIONS = [
  {
    dimension: "Ownership",
    website: "You own the domain, hosting, content, and customer relationship. If a hosting provider closes, you migrate. The asset transfers with you.",
    social: "You rent the page from Meta, Google, or TikTok. They own the audience. They can change the algorithm, suspend the account, or pivot the platform with no recourse.",
  },
  {
    dimension: "Traffic source",
    website: "Search intent. Customer typed 'plumber phoenix' into Google because they have a problem to solve right now. Conversion rate 3 to 8%.",
    social: "Discovery intent. Customer was scrolling. They weren't looking for you. You're interrupting their scroll. Conversion rate 0.5 to 1.5%.",
  },
  {
    dimension: "Lifespan of content",
    website: "A 2,000-word blog post can rank for 3 to 7 years. A service page, indefinitely. The asset compounds.",
    social: "A post lives 24 to 72 hours before the algorithm buries it. Then nothing. The asset is consumed.",
  },
  {
    dimension: "Cost over time",
    website: "Front-loaded. $0 to $7,000 to build, $200 to $3,000/year to maintain. Cost decreases per lead as organic traffic compounds.",
    social: "Always-on. To stay visible you must post constantly or pay for ads. Cost per lead stays flat or rises as algorithms tighten.",
  },
  {
    dimension: "Discoverability",
    website: "Anyone searching anywhere can find you, 24 hours a day. Search engines surface your content based on relevance, not advertising spend.",
    social: "Only existing followers see organic posts (and only 3 to 8% of them). Reaching new audiences requires paid promotion.",
  },
  {
    dimension: "Trust signal to buyers",
    website: "76% of US consumers check the website before contacting a business. 56% won't consider one without a site. Website is the trust default.",
    social: "Useful supplement, but a Facebook page alone reads as 'not real' or 'side hustle' to a meaningful percentage of US consumers.",
  },
];

const ROLES = [
  {
    title: "Website (foundation)",
    body: "Lives at the center. Owns the customer relationship. Ranks in search. Hosts service pages, blog content, schema markup, contact forms, and conversion funnels. Built once properly, maintained monthly. The single asset that survives platform changes.",
  },
  {
    title: "Google Business Profile (local visibility)",
    body: "Free, run by Google, drives Local Pack visibility. Sits alongside the website with consistent NAP. Posts weekly, photos monthly, reviews continuously. The complement to the website for any business with a physical service area.",
  },
  {
    title: "Facebook (community + reviews)",
    body: "Useful for local service businesses with an existing customer community. Reviews on Facebook count toward social proof. Posts reach a small percentage of followers without spend, but the page acts as a holding place where existing customers find you.",
  },
  {
    title: "Instagram or TikTok (visual brand)",
    body: "Worth running only if your work is visual: salons, photographers, designers, restaurants, decorators. Drives traffic to the website. Don't run it as a primary channel; run it as a feeder.",
  },
  {
    title: "LinkedIn (B2B services)",
    body: "Relevant for accountants, lawyers, consultants, and B2B service providers. Owner posts personal content, the company page acts as a credential. Drives traffic to the website, particularly for higher-ticket services.",
  },
];

export default function WebsiteVsSocialPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "Website vs social media for small business",
      href: "/resources/website-vs-social-media-small-business",
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
              "Website vs Social Media: Which Should a US Small Business Prioritize?",
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
            url: `${SITE.url}/resources/website-vs-social-media-small-business`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            Website vs social media for small{" "}
            <span className="rose-underline">business.</span>
          </>
        }
        subtitle="Direct answer up front: pick the website. Then layer social on top. The conversion math, the algorithm risk, search intent vs scroll intent, and what a sensible US small business mix actually looks like."
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
                Website or social media: which should a small business prioritize?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Both, but if you can only pick one, pick the website. Social
                media is rented; the platform owns your audience. A website is
                owned; you control the relationship with the customer. The
                right answer for most US small businesses is: website as the
                foundation, social as one of several traffic sources that point
                to it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Owned vs rented */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">The fundamental difference</span>
            <h2 className="mt-4">Owned vs rented infrastructure.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A website is owned. You own the domain, you control the
                hosting, you keep the content, and the customer relationship is
                yours. If your hosting provider closes tomorrow, you migrate
                everything in a weekend and the URLs stay the same. The asset
                transfers with you.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Social media is rented. You're a tenant on someone else's
                platform. Meta owns Facebook and Instagram. TikTok is owned by
                ByteDance. Google owns YouTube. They control the algorithm,
                they decide who sees your posts, they can change the rules
                overnight, and they can suspend the account with no recourse.
                Every algorithm shift since 2014 has reduced organic reach for
                small business pages.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The 2018 Facebook newsfeed change reduced organic page reach
                from roughly 16% to under 5%. The 2023 Instagram algorithm
                update similarly suppressed business posts in favor of friends
                and family content. None of these changes were announced in
                advance to the businesses they affected.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Build the foundation on owned infrastructure. Use rented
                infrastructure as one of several feeders into it.
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
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">Side-by-side comparison</span>
            <h2 className="mt-4">Six dimensions that matter to a small business.</h2>
          </Reveal>

          <div className="space-y-6">
            {COMPARISON_DIMENSIONS.map((c, i) => (
              <Reveal key={i} delay={i * 40}>
                <div
                  className="rounded-[16px] p-6 sm:p-7"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair-strong)",
                  }}
                >
                  <h3 className="mb-4">{c.dimension}</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <div
                        className="text-xs mb-2"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-rose)",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        Website
                      </div>
                      <p
                        className="text-base"
                        style={{
                          color: "var(--color-ink-2)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.website}
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-xs mb-2"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-indigo-deep)",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        Social media
                      </div>
                      <p
                        className="text-base"
                        style={{
                          color: "var(--color-ink-2)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.social}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Search intent vs scroll intent */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Why the math is different</span>
            <h2 className="mt-4">Search intent converts. Scroll intent doesn&apos;t.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Someone who Googles 'emergency plumber phoenix' has a burst
                pipe. They are minutes away from spending money. The
                conversion rate from search traffic to phone call sits between
                3% and 8% for service businesses, sometimes higher for urgent
                categories.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Someone scrolling Instagram who sees your post wasn't looking
                for you. They might save the post. They might tag a friend.
                They probably scroll past. The conversion rate from social
                traffic to phone call sits between 0.5% and 1.5% in most
                service business categories.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A modest amount of search traffic outperforms a much larger
                volume of social traffic on lead generation. 1,000 monthly
                website visitors from search produces roughly 30 to 80 leads.
                10,000 monthly Instagram followers produces roughly 50 to 150
                leads, and that's only when the algorithm is being kind. The
                math is asymmetric.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The right balance */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">The right balance</span>
            <h2 className="mt-4">What each channel actually does.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Each platform has a role. The mistake is treating them as
              interchangeable. Run the website as the foundation, layer the
              right two or three social channels for your category. Skip the
              rest.
            </p>
          </Reveal>

          <div className="space-y-6">
            {ROLES.map((r, i) => (
              <Reveal key={i} delay={i * 40}>
                <div
                  className="rounded-[14px] p-6"
                  style={{
                    background: "white",
                    border: "1px solid var(--hair)",
                  }}
                >
                  <h3>{r.title}</h3>
                  <p
                    className="mt-3 text-base"
                    style={{ color: "var(--color-ink-2)", lineHeight: 1.6 }}
                  >
                    {r.body}
                  </p>
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
              Build the website first, properly. Set up Google Business
              Profile alongside it. Then add one or two social platforms that
              fit your category and run them as feeders into the website.
              Don't run all five. Don't run none. For most US small businesses
              under 15 staff, the practical answer is a managed website plan
              that bundles the website, hosting, technical SEO, and ongoing
              content updates, then handle social yourself or outsource it
              separately. Free SEO Websites by Loudachris: free 5-day build,
              $247/month bundled, $0 upfront, and a 90-day qualified-lead
              guarantee.{" "}
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
