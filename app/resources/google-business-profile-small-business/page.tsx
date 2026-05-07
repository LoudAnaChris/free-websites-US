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
    "Google Business Profile for Small Business: How to Rank in the Local Pack",
  description:
    "Step-by-step guide to setting up and optimizing Google Business Profile to rank in the Local Pack. Primary category, NAP consistency, reviews, posts, photos, and the common mistakes.",
  alternates: {
    canonical: `${SITE.url}/resources/google-business-profile-small-business`,
  },
};

const FAQS = [
  {
    q: "Is Google Business Profile free?",
    a: "Yes, completely. Google Business Profile (formerly Google My Business) is a free service from Google. There are no premium tiers and no paid features. Anyone offering to 'enrol' or 'register' your GBP for a fee is a scam. Set it up yourself at google.com/business or have your website provider configure it as part of a managed plan.",
  },
  {
    q: "How long does it take to rank in the Local Pack?",
    a: "30 to 90 days for most US small businesses, assuming the GBP is properly set up and the website is aligned. Brand-new businesses with no reviews can take longer. The biggest accelerators are: completing every profile field, getting 20 to 30 real reviews in the first 60 days, and posting weekly.",
  },
  {
    q: "Should I use my home address on Google Business Profile?",
    a: "Only if customers come to your home (in-home services like therapy or tutoring). For most service businesses (plumbers, electricians, HVAC, etc), you should use a service-area business setup. List your service area cities, hide the physical address, and use your home or office only as the registered location. Google penalizes service businesses that show home addresses.",
  },
  {
    q: "Can I have multiple Google Business Profiles for one business?",
    a: "Only if you have multiple physical locations. One profile per real address. Don't create fake locations, virtual offices, or multiple profiles for the same business in different cities. Google detects this and suspends the profile, often without warning. For service-area businesses, one profile with a service area covers multiple cities.",
  },
  {
    q: "What should I post on Google Business Profile?",
    a: "Three post types work for small businesses. First, offers and promotions ('20% off drain cleaning this month'). Second, recent jobs or completed work with photos ('Just installed a Rheem water heater in Phoenix'). Third, helpful tips related to your service. One post per week is the cadence Google rewards. Skip product launches and corporate news; nobody clicks those.",
  },
  {
    q: "How do I get more reviews on Google Business Profile?",
    a: "Ask, every time, after the job is done. The single highest-converting moment is right after the customer says they're happy. Send a text with the direct review link from your GBP dashboard (the short link, not the long one). Don't offer incentives or discounts for reviews; Google's terms ban that and they detect it. Aim for 20 to 30 reviews in the first 60 days, then 2 to 5 per month.",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Claim or create the profile at google.com/business",
    body: "If you've been around a few years, your business probably already exists in Google's index. Search for your business name. If a profile shows up, click 'Own this business?' and verify ownership (postcard to the address, phone call, or video selfie of the location). If no profile exists, create one. Verification takes 5 to 14 days. Don't skip verification: an unverified profile can't post, can't respond to reviews, and won't rank in the Local Pack.",
  },
  {
    n: 2,
    title: "Pick the right primary category (this is the single biggest decision)",
    body: "Google ranks profiles partly based on the primary category. 'Plumber' ranks differently from 'Heating Contractor' even though many businesses do both. Choose the one that matches your highest-volume service. You can add up to nine secondary categories, but the primary is what Google uses most heavily. If you switch primary categories, expect 30 to 60 days of rank fluctuation. Pick once and stick with it.",
  },
  {
    n: 3,
    title: "Set up NAP consistency between profile and website",
    body: "NAP is Name, Address, Phone. The exact same string must appear on the GBP and on the website footer. 'ABC Plumbing & Gas' on GBP and 'ABC Plumbing and Gas' on the site is enough to drop your rank. 1234 Main St on one and 1234 Main Street on the other does the same. Cross-check character by character. Then check Yelp, BBB, and any other directories. Inconsistent NAP across the web is the most common reason small businesses don't rank locally.",
  },
  {
    n: 4,
    title: "Complete every profile field, including the optional ones",
    body: "Google rewards completeness. Hours of operation, special holiday hours, products and services list, attributes (women-owned, veteran-owned, family-owned, etc), service area cities, opening date of the business, the description (750 character limit, use it), and at least 10 photos. A 100% complete profile outranks a 70% complete one all else equal.",
  },
  {
    n: 5,
    title: "Get reviews early, ask consistently, respond to all of them",
    body: "Reviews are the single biggest local ranking factor after category. Aim for 20 to 30 reviews in the first 60 days. The fastest path is to text the direct review link to every customer the day the job finishes. Respond to every review (5-star and 1-star) within 48 hours. Negative reviews are not the end of the world; how you respond is what future customers read. A measured, professional response to a bad review often wins more business than the bad review costs.",
  },
  {
    n: 6,
    title: "Post weekly, with photos and a clear CTA",
    body: "Three post types work. Offers and promotions, recent completed work with photos, and helpful tips related to your service. One post per week is the minimum. Each post needs a photo, 80 to 120 words of text, and a CTA button (Call now, Get quote, Visit website). Posts expire after 7 days, so this is genuinely a weekly habit, not a one-time setup.",
  },
  {
    n: 7,
    title: "Add photos, real ones, regularly",
    body: "Profiles with 100+ photos get 520% more calls than those with 10. Add real photos: your shopfront or vehicle, completed jobs (before and after if you can), staff at work, equipment, and the team. Avoid stock photos. Google can detect them and they reduce ranking signal. Geotag photos using a free EXIF tool before upload. Add 5 to 10 new photos per month.",
  },
  {
    n: 8,
    title: "Monitor and answer the Q&A section",
    body: "The Q&A section lets anyone ask a question on your profile. Most owners ignore this. Don't. Pre-seed the section by adding 5 to 10 common questions yourself (then answer them yourself, which is allowed). Watch for new questions and answer within 24 hours. Unanswered questions reduce trust and can let competitors plant misleading questions on your profile.",
  },
];

const MISTAKES = [
  "Using a fake or virtual office address. Google's algorithm detects this and suspends the profile.",
  "Keyword-stuffing the business name ('ABC Plumbing Phoenix Best 24-Hour Emergency'). Direct violation of Google's terms.",
  "Inconsistent NAP between GBP, website, Yelp, BBB. Single biggest local ranking killer.",
  "Letting the profile go quiet for 3+ months. Posting cadence affects rank.",
  "Buying fake reviews. Google detects them, removes them, and can suspend the profile.",
  "Ignoring the Q&A section. Lets competitors or random people plant misinformation on your profile.",
  "Using stock photos instead of real ones. Reduces engagement and is detectable.",
  "Choosing the wrong primary category to avoid competition. You won't rank because the customer isn't searching that category.",
];

export default function GBPGuidePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "Google Business Profile for small business",
      href: "/resources/google-business-profile-small-business",
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
              "Google Business Profile for Small Business: How to Rank in the Local Pack",
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
            url: `${SITE.url}/resources/google-business-profile-small-business`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            Google Business Profile for small{" "}
            <span className="rose-underline">business.</span>
          </>
        }
        subtitle="Eight steps to rank in the Local Pack. Primary category, NAP consistency, reviews, posts, Q&A, photos, plus the eight mistakes that suspend profiles or kill rank. Most improvements show within 30 to 60 days."
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
                What is Google Business Profile and how do I rank in the Local Pack?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Google Business Profile (formerly Google My Business) is free
                and it's the single most important local SEO asset for a US
                small business. To rank in the Local Pack (the map results),
                you need: a complete profile, accurate NAP (name, address,
                phone) consistent with your website, the right primary
                category, recent reviews, regular posts, and photos. Most
                small businesses see local pack improvements within 30 days of
                fixing GBP.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">The 8-step setup</span>
            <h2 className="mt-4">
              Set up the profile in this order, then optimize.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Steps 1 to 4 are foundation. Skip any of them and the rest
              doesn't work. Steps 5 to 8 are the ongoing weekly habit that
              moves the needle.
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

      {/* GBP vs website */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">GBP vs website</span>
            <h2 className="mt-4">
              You need both. Here&apos;s why.
            </h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Google Business Profile drives the Local Pack (the three
                businesses with map markers above the organic results). The
                website drives organic search rank for service plus city
                queries below the Local Pack, plus the entire research-intent
                blog traffic, plus the conversion experience once a customer
                clicks through.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A GBP without a website ranks in the Local Pack but converts
                worse, because every customer who clicks through hits a
                Google-hosted page instead of one you control. A website
                without a GBP can rank organically but loses the Local Pack
                impressions, which are typically 40% to 60% of total local
                search traffic.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Aligned, they reinforce each other. Google cross-references the
                GBP against the website on NAP, services, hours, photos, and
                reviews. Consistency between the two builds trust signal.
                Inconsistency drops both rankings.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Avoid these</span>
            <h2 className="mt-4">Eight mistakes that get profiles suspended.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Some of these are minor. Some get the profile suspended without
              warning. We see all eight regularly in audits.
            </p>
          </Reveal>

          <div className="space-y-4">
            {MISTAKES.map((m, i) => (
              <Reveal key={i} delay={i * 30}>
                <div
                  className="rounded-[14px] p-5 flex gap-4 items-start"
                  style={{
                    background: "var(--color-platinum)",
                    border: "1px solid var(--hair)",
                  }}
                >
                  <div
                    style={{
                      color: "var(--color-rose)",
                      fontWeight: 800,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <p
                    className="text-base sm:text-lg"
                    style={{ color: "var(--color-ink-2)", lineHeight: 1.6 }}
                  >
                    {m}
                  </p>
                </div>
              </Reveal>
            ))}
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
              GBP is a weekly habit, not a one-time setup. Owners who keep up
              with posting, photo uploads, review responses, and Q&A
              monitoring outrank competitors who set it up and forget it. The
              practical reality is that most owners can sustain that for 60
              days, then drop off. For most US small businesses under 15
              staff, the answer is a managed plan that includes weekly GBP
              maintenance alongside the website. Free SEO Websites by
              Loudachris: free 5-day build, $247/month bundled including
              monthly GBP optimization, and a 90-day qualified-lead guarantee.{" "}
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
