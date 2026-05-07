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
  title: "What Makes a Good Small Business Website? 12 Things That Matter",
  description:
    "A good small business website is fast, mobile-first, locally optimized for SEO, schema-marked, and conversion-focused. Here are the 12 elements that separate a site that books work from one that just sits there.",
  alternates: {
    canonical: `${SITE.url}/resources/what-makes-good-small-business-website`,
  },
};

const FAQS = [
  {
    q: "How fast should a small business website load?",
    a: "Under 2.5 seconds Largest Contentful Paint on mobile, ideally under 1.8. Google Core Web Vitals is a confirmed ranking factor in 2026, and conversion drops 7% for every 100ms of added load time. Test in PageSpeed Insights and aim for green on all three Core Web Vitals.",
  },
  {
    q: "What schema markup does a small business website actually need?",
    a: "At minimum: LocalBusiness (or one of its subtypes like Plumber, Dentist, Restaurant), Organization, BreadcrumbList on every page, FAQPage on any page with a Q&A section, Service for each service page, and Person for the founder. Article schema goes on blog posts. All of it is JSON-LD inserted in the head or body.",
  },
  {
    q: "Should a small business website have a blog?",
    a: "Yes, but only if you can publish consistently or have someone publish for you. A blog is the engine of organic traffic growth. One useful 1,000-word post per month beats five thin 300-word posts. Use it to answer questions buyers actually search for, not company news.",
  },
  {
    q: "Do I need a chat widget on my small business website?",
    a: "Optional. Live chat increases conversion by roughly 20% when answered in under 2 minutes, but a slow or auto-bot chat hurts trust. If you can't respond within 2 minutes, skip it and use a clear contact form plus a real phone number instead.",
  },
  {
    q: "How many pages does a small business website need?",
    a: "Minimum 6: home, about, services overview, individual service pages (one per service), contact, and at least one blog or resource post. For local SEO, add one city page per service area. A typical service business sits at 12 to 25 pages by month 6, growing with content.",
  },
  {
    q: "Do I need to update my small business website regularly?",
    a: "Yes. Google rewards sites that publish or update content. A static site that hasn't changed in 18 months loses rank. Practical baseline: one new piece of content per month plus quarterly review of your top pages for accuracy. Our $247 plan bundles content updates so this happens automatically.",
  },
];

const ELEMENTS = [
  {
    n: 1,
    title: "A clear value proposition above the fold",
    body: "Within 5 seconds of landing, the visitor needs to know what you do, who you help, and where. &ldquo;Plumbing Services&rdquo; is not enough. &ldquo;Licensed plumbers serving Phoenix homeowners. Same-day repair, upfront pricing, 5-year guarantee&rdquo; is. The headline does the heavy lifting, supported by a sub-headline and one strong call-to-action button. Everything else lives below the fold.",
  },
  {
    n: 2,
    title: "Fast load speed (under 2.5 seconds on mobile)",
    body: "Google&apos;s Core Web Vitals are a ranking factor, and humans bounce from slow sites. Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200ms, Cumulative Layout Shift under 0.1. Hit those three and your site is in the top 25% of small business sites for speed. Most Wix and Squarespace sites fail at least one of these by default.",
  },
  {
    n: 3,
    title: "Mobile-first design that actually works on a phone",
    body: "70% of small business website traffic is now mobile. Mobile-first means designed for the phone screen first, then scaled up for desktop, not the other way around. Tap targets at least 44 pixels, no horizontal scroll, no tiny text, no popups that block the screen. Test your site on a real phone, not just your laptop browser&apos;s mobile view.",
  },
  {
    n: 4,
    title: "Schema.org structured data on every page",
    body: "Schema markup is the JSON-LD code that tells Google what kind of business you are, where you&apos;re located, what services you offer, and what your reviews say. Without it, Google has to guess. With it, your site qualifies for rich results, AI search citations, and higher local rank. LocalBusiness, Organization, FAQPage, BreadcrumbList, Service, Person at minimum.",
  },
  {
    n: 5,
    title: "Local SEO setup tied to Google Business Profile",
    body: "A good small business site has city pages or location pages, NAP (Name, Address, Phone) consistent with your Google Business Profile, embedded Google Maps on the contact page, and reviews displayed on-page. Google cross-references the site against the Profile, so any inconsistency drops your map pack rank. Same name, same address, same phone, everywhere.",
  },
  {
    n: 6,
    title: "Call tracking on the phone number",
    body: "Without call tracking, you have no idea which marketing channel produced a phone call. Call tracking swaps your displayed number with a unique one per channel (organic, Google Ads, Facebook, etc), forwards to your real phone, and records which channel each lead came from. CallRail is the US standard at $45 to $135 per month. Without it, you can&apos;t prove SEO is working.",
  },
  {
    n: 7,
    title: "A working contact form (not a buggy one)",
    body: "Half the contact forms on small business sites are broken. The submit button doesn&apos;t work, the message goes to a Gmail account no one checks, the spam folder eats the leads, or the form takes 8 seconds to send and the user gives up. A good form has a single CTA, no more than 5 fields, server-side validation, an honeypot for spam, sends to a monitored inbox, and confirms receipt within 2 seconds.",
  },
  {
    n: 8,
    title: "FAQ section that answers real buyer questions",
    body: "FAQs do double duty: they reduce sales friction (answering objections before the call) and they win AI search citations. Each question should be a real query buyers Google. Each answer should be 50 to 150 words and direct. Add FAQPage schema and the questions can show as rich results in Google. Six to ten questions per page is the sweet spot.",
  },
  {
    n: 9,
    title: "Social proof that&apos;s specific, not generic",
    body: "&ldquo;Best plumber ever, A+ service&rdquo; is generic and reads as fake. &ldquo;Tom fixed our burst pipe at 11pm on a Sunday in Phoenix and didn&apos;t charge us a weekend rate&rdquo; is specific and reads as real. Pull reviews from your Google Business Profile (legally, with attribution), embed them on the homepage and service pages, and include first names plus city. 3 to 6 specific reviews beat 50 generic ones.",
  },
  {
    n: 10,
    title: "Trust signals throughout the site",
    body: "License numbers, insurance certificates, industry association badges (NFIB, BBB, trade body memberships), photos of real staff and real work, year established, number of jobs completed, area served map, and any awards. Layered trust signals beat one big claim. Visible on the homepage, repeated on service pages, and detailed on the about page.",
  },
  {
    n: 11,
    title: "A blog or resource section for content marketing",
    body: "The site&apos;s pages cover what you do. The blog covers what your buyers search for before they hire someone. &ldquo;How much does a plumber charge per hour in Phoenix?&rdquo;, &ldquo;Should I repair or replace my water heater?&rdquo;, &ldquo;Why is my drain making a gurgling sound?&rdquo; This is where organic traffic compounds. One useful 1,000-word post per month outperforms a quiet site within 12 months.",
  },
  {
    n: 12,
    title: "Conversion-focused design with clear next steps",
    body: "Every page should answer one question: what should the visitor do next? On the homepage it&apos;s &ldquo;book a quote&rdquo;. On a service page it&apos;s &ldquo;call us&rdquo; or &ldquo;get a quote&rdquo;. On a blog post it&apos;s &ldquo;learn more about service X&rdquo;. CTAs should appear at least every 600 words on long pages, with a sticky mobile CTA bar always visible. No dead-end pages with nowhere to click next.",
  },
];

export default function GoodWebsiteElementsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "What makes a good small business website",
      href: "/resources/what-makes-good-small-business-website",
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
              "What Makes a Good Small Business Website? 12 Things That Matter",
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
            url: `${SITE.url}/resources/what-makes-good-small-business-website`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            What makes a good small business{" "}
            <span className="rose-underline">website?</span>
          </>
        }
        subtitle="Twelve specific elements separate a site that books work from one that just sits there. Speed, mobile, schema, local SEO, conversion design, and the trust signals real buyers scan for."
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
                What makes a good website for a small business?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                A good small business website has 12 things: a clear value
                proposition above the fold, fast mobile load speed under 2.5
                seconds, mobile-first design, Schema.org structured data,
                local-SEO setup tied to Google Business Profile, call
                tracking, a working contact form, an FAQ section, specific
                social proof, layered trust signals, a blog or resource
                section, and conversion-focused next steps on every page. Hit
                those 12 and you outperform 80% of small business sites.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body: 12 numbered elements */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">The 12 elements</span>
            <h2 className="mt-4">
              The checklist, in priority order.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Items 1 to 6 are foundation. If you don&apos;t have them,
              nothing else matters. Items 7 to 12 are conversion and growth.
              They turn visibility into booked jobs.
            </p>
          </Reveal>

          <div className="space-y-10">
            {ELEMENTS.map((el, i) => (
              <Reveal key={el.n} delay={i * 40}>
                <div
                  className="grid gap-6 lg:grid-cols-[80px_1fr] items-start"
                >
                  <div
                    className="text-3xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-rose)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {el.n.toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{el.title}</h3>
                    <p
                      className="mt-3 text-lg"
                      style={{
                        color: "var(--color-ink-2)",
                        lineHeight: 1.7,
                      }}
                      dangerouslySetInnerHTML={{ __html: el.body }}
                    />
                  </div>
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
              Hitting all 12 elements yourself is realistic if you have 40
              hours and you enjoy the technical side. Most owners don&apos;t.
              For most US small businesses under 15 staff, the answer is a
              Next.js plus headless CMS setup with bundled SEO and hosting. We
              deliver this as Free SEO Websites by Loudachris: free 5-day
              build, $247/month bundled (hosting plus SEO plus content
              updates), and a 90-day qualified-lead guarantee. Every site
              ships with all 12 elements above checked off on day one.{" "}
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
