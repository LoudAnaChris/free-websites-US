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
  title: "Why a Small Business Needs a Website in 2026 (And What Happens If You Don't)",
  description:
    "97% of US consumers research online before buying. A real website builds trust, captures Google traffic, sells 24/7, and is now the baseline for any small business that wants to compete.",
  alternates: {
    canonical: `${SITE.url}/resources/why-website-important-small-business`,
  },
};

const FAQS = [
  {
    q: "Is a Facebook page enough instead of a website?",
    a: "No. A Facebook page does not rank in Google search results, does not let you control your branding, and locks your customer relationships behind a platform you don't own. Use Facebook for community and reach, but you need a real domain you control as your hub.",
  },
  {
    q: "Is a Google Business Profile enough instead of a website?",
    a: "It is essential, but not enough on its own. Google Business Profile drives map pack visibility, but Google strongly favors businesses whose Profile is connected to a real website. Without one, your local rank caps out and you can't capture searchers who skip the map.",
  },
  {
    q: "How quickly will a new website pay for itself?",
    a: "For most service businesses charging $200 or more per job, a single qualified lead per month covers a $247 monthly fee. Most of our clients see their first lead within 30 to 60 days of launch, with the 90-day guarantee as a backstop.",
  },
  {
    q: "What if I'm a one-person business and only get work by referral?",
    a: "Even referrals Google your name before they call. 78% of US consumers research a referred business online before reaching out. No website, or a bad one, leaks 1 in 3 referrals quietly. A simple, fast, trustworthy site keeps your referral conversion rate high.",
  },
  {
    q: "Do I need a website if I rank in the Google map pack?",
    a: "Yes. The map pack only shows three results. The other 60% of clicks go to organic listings below the map, and Google increasingly cross-references your website content to rank your map listing. No website means lower local rank ceiling and lost organic traffic.",
  },
  {
    q: "How long does it take to build a small business website?",
    a: "DIY on a builder takes 20 to 60 hours over weeks. A freelancer typically takes 4 to 8 weeks. Our managed build takes 5 working days from signed agreement to live site, with a free-for-life clause if we miss that deadline.",
  },
];

export default function WhyWebsiteImportantPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "Why a small business needs a website",
      href: "/resources/why-website-important-small-business",
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
              "Why a Small Business Needs a Website in 2026 (And What Happens If You Don't)",
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
            url: `${SITE.url}/resources/why-website-important-small-business`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            Why a small business needs a{" "}
            <span className="rose-underline">website in 2026.</span>
          </>
        }
        subtitle="97% of US consumers research a business online before they buy. No website means you are invisible to that 97% and unprovable to the 3% who already know your name."
      />

      {/* AIO answer-first section */}
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
              <h2 className="mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}>
                Why is a website important for a small business?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A website is important for a small business because 97% of US
                consumers research a business online before they buy. Without a
                site, you lose three things at once: visibility in Google
                search, the ability to build trust before the first
                conversation, and a place to sell or book 24 hours a day. A
                Facebook page or a Google Business Profile is not a
                replacement, because both rely on platforms you don&apos;t own
                and neither ranks across the full search results page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 1: Visibility */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Reason 1</span>
            <h2 className="mt-4">No website means you are invisible.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                In 2026, 93% of US online experiences begin on a search engine.
                When someone searches &ldquo;plumber near me&rdquo; or &ldquo;tax
                accountant Austin&rdquo;, Google returns three kinds of results:
                paid ads, the local map pack, and organic listings below the map.
                A small business without a website typically appears only in the
                map pack, and only when its Google Business Profile is well
                optimized. That cuts you out of roughly 60% of the clicks on the
                page.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The deeper problem: Google&apos;s ranking algorithm cross-checks
                a business&apos;s map listing against its website. Businesses
                with a real, content-rich website rank higher in the map pack
                than businesses that rely on the Profile alone. So &ldquo;just
                have a Google Business Profile&rdquo; quietly hits a ceiling
                while a competitor with a 20-page website overtakes you.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Then there is the answer engine layer. ChatGPT, Perplexity,
                Google AI Overviews, and Bing Copilot now answer roughly 30% of
                small-business searches without sending the user to any link.
                These AI engines pull their answers from indexable websites with
                clear schema markup. No website means the AI can&apos;t cite
                you, and you don&apos;t exist in this new search layer at all.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 2: Trust */}
      <section className="section" style={{ background: "var(--color-platinum)" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Reason 2</span>
            <h2 className="mt-4">A website is how trust gets built before the first call.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                75% of consumers admit they judge a business&apos;s credibility
                based on its website. That number is even higher for service
                businesses where the homeowner or buyer hasn&apos;t met you yet.
                The first impression happens before the phone rings, and the
                website is doing the talking.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Trust signals that buyers actively scan for: a real domain (not
                a builder subdomain), a clear local address or service area,
                photos of real work or staff, customer reviews displayed on the
                page, a legitimate phone number, transparent pricing or at least
                a service list, and an SSL padlock in the browser bar. Each
                missing signal is a small reason for the visitor to bounce and
                check the next competitor.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Even referrals run this check. 78% of US consumers research a
                referred business online before reaching out. A friend says
                &ldquo;use my plumber&rdquo;, the homeowner Googles you, finds
                no website or a broken-looking site, and quietly moves on. You
                never know the referral existed. We see this leak roughly 1 in 3
                inbound referrals for businesses without a real site.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3: 24/7 sales */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Reason 3</span>
            <h2 className="mt-4">A website sells while you sleep.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Roughly 40% of small business contact form submissions come in
                outside business hours. That&apos;s evenings, weekends, and
                early mornings when no one is answering the office phone. A site
                that has a working contact form, an instant booking widget like
                Calendly or TidyCal, or even a simple &ldquo;text us&rdquo;
                button, captures that intent. No website means those leads quote
                a competitor instead.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                For e-commerce or product businesses, the math is brutal. Every
                hour without a transactable website is revenue handed to Amazon,
                Etsy, or a local competitor. For service businesses, the
                equivalent is the lead that books with whoever shows up first in
                their search.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4: Competitor advantage */}
      <section className="section" style={{ background: "var(--color-platinum)" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Reason 4</span>
            <h2 className="mt-4">Your competitors already have one.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                In 2026, roughly 71% of US small businesses have a website. In
                trade-heavy industries (plumbing, HVAC, electrical, roofing)
                that number is closer to 85%. In professional services
                (accounting, law, real estate) it&apos;s 92%. If you don&apos;t
                have one, your competitor isn&apos;t just slightly ahead.
                They&apos;re ranking, capturing reviews on a real domain,
                running ads to a converting page, and being cited by AI search
                tools. You&apos;re effectively starting from negative.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Worse: every month without a site is a month of compounding gap.
                SEO is a slow-build asset. Domain authority, backlinks, indexed
                pages, and reviews accumulate over time. The competitor who
                started a year ago has a year of compounding head start, and
                that gap widens every quarter.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5: SEO foundation */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Reason 5</span>
            <h2 className="mt-4">A website is the only place SEO can actually live.</h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Local SEO has two halves: your Google Business Profile (the map
                pack) and your website (organic results below the map). The two
                feed each other. Google looks at your website&apos;s content,
                schema markup, and local references to verify what your Profile
                claims. Without a site, half the SEO machine is missing.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                The website is where you put location pages (one per city you
                serve), service pages (one per service you offer), schema markup
                that tells Google what you do, FAQ content that answers buyer
                questions, and review embeds that display social proof. None of
                that lives on a Facebook page or a Yelp listing. Without a
                website, you can&apos;t run real local SEO at all.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing tease */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
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
              Next.js plus headless CMS setup with bundled SEO and hosting. We
              deliver this as Free SEO Websites by Loudachris: free 5-day
              build, $247/month bundled (hosting plus SEO plus content), and a
              90-day qualified-lead guarantee. If you don&apos;t see a lead in
              90 days, we work for free until you do.{" "}
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
