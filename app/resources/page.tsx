import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Small Business Website & SEO Resources | Free SEO Websites",
  description:
    "Free guides on small business websites, SEO, pricing, website builders, and what makes a site convert. From the team behind Loudachris (80+ Google reviews).",
  alternates: { canonical: `${SITE.url}/resources` },
};

const ARTICLES = [
  {
    title: "Why a Small Business Needs a Website in 2026",
    blurb:
      "97% of consumers research businesses online before buying. Here&apos;s what happens to revenue, trust, and local search rank when you don&apos;t have a real site.",
    href: "/resources/why-website-important-small-business",
    readTime: "5 min read",
  },
  {
    title: "What Makes a Good Small Business Website?",
    blurb:
      "12 things that separate a site that converts from one that just sits there: speed, mobile, schema, local SEO, trust signals, and more.",
    href: "/resources/what-makes-good-small-business-website",
    readTime: "8 min read",
  },
  {
    title: "How Much Does a Small Business Website Cost?",
    blurb:
      "Real US 2026 numbers: DIY ($0-$50/mo), freelancer ($1.5-5k), agency ($3-50k), or bundled subscription. With a comparison table.",
    href: "/resources/how-much-does-website-cost-small-business",
    readTime: "8 min read",
  },
  {
    title: "Best Website Builder for Small Business",
    blurb:
      "Wix vs Squarespace vs WordPress vs Webflow vs managed Next.js. Honest pros and cons, with the SEO performance differences laid out.",
    href: "/resources/best-website-builder-small-business-comparison",
    readTime: "9 min read",
  },
  {
    title: "Is WordPress Good for a Small Business Website?",
    blurb:
      "Yes, but with caveats. The real difference between WordPress.com and WordPress.org, when WordPress wins, and when it loses.",
    href: "/resources/is-wordpress-good-for-small-business-website",
    readTime: "6 min read",
  },
  {
    title: "How to Design a Website for a Small Business",
    blurb:
      "Step-by-step: customer-first hierarchy, mobile-first design, schema markup, CTA placement, and the common mistakes that kill conversions.",
    href: "/resources/how-to-design-website-for-small-business",
    readTime: "7 min read",
  },
  {
    title: "How to Start a Website for a Small Business",
    blurb:
      "Five steps from domain selection to live site: platform comparison, content basics, analytics setup, GBP alignment, and going live.",
    href: "/resources/how-to-start-website-for-small-business",
    readTime: "7 min read",
  },
  {
    title: "SEO for Small Business: A Plain-English Guide",
    blurb:
      "What SEO actually is, the three pillars (technical, content, local), how to research keywords, GBP setup, content cadence, when DIY is enough.",
    href: "/resources/seo-for-small-business-guide",
    readTime: "9 min read",
  },
  {
    title: "Google Business Profile for Small Business",
    blurb:
      "How to rank in the Local Pack: complete profile, NAP consistency, primary category strategy, reviews, posts, photos, common mistakes.",
    href: "/resources/google-business-profile-small-business",
    readTime: "7 min read",
  },
  {
    title: "Website vs Social Media: Which Should a Small Business Prioritize?",
    blurb:
      "Both, but if you can only pick one, pick the website. Rented vs owned, the algorithm problem, search vs social intent, conversion comparison.",
    href: "/resources/website-vs-social-media-small-business",
    readTime: "6 min read",
  },
];

export default function ResourcesHubPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Plain-English answers for{" "}
            <span className="rose-underline">small business owners.</span>
          </>
        }
        subtitle="No fluff, no upsell pitches dressed as guides. Direct answers to the questions US small business owners actually ask before they hire someone to build a site."
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-6xl">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow on-light">Where to start</span>
            <h2 className="mt-4">
              Ten guides that cover 95% of what owners ask us.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Written by the team behind Loudachris Digital Marketing (80+
              five-star Google reviews). Every guide is updated for 2026 US
              pricing and search behavior. If you&apos;d rather skip the
              reading and have us do it,{" "}
              <Link
                href="/pricing"
                style={{ color: "var(--color-rose)", fontWeight: 700 }}
              >
                see pricing
              </Link>
              .
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.href} delay={i * 50}>
                <Link
                  href={a.href}
                  className="group block h-full rounded-[18px] p-6 transition-all"
                  style={{
                    background: "white",
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
                    Guide &middot; {a.readTime}
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(20px, 2vw, 22px)",
                      lineHeight: 1.25,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="mt-3 text-base"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: a.blurb }}
                  />
                  <span
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: "var(--color-rose)" }}
                  >
                    Read article{" "}
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow on-light">Why we publish these</span>
            <h2 className="mt-4">
              Most small business owners get sold to before they get informed.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              We&apos;d rather you read these ten guides, decide DIY is fine,
              and never become a customer than have you sign up confused.
              Educated owners make better decisions, complain less, and stay
              longer when they do hire us. That&apos;s the whole strategy.
            </p>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              If you decide a managed setup makes more sense than DIY, our
              offer is a free 5-day build and $247/month bundled (hosting,
              SEO, content) with a 90-day qualified-lead guarantee.{" "}
              <Link
                href="/how-it-works"
                style={{ color: "var(--color-rose)", fontWeight: 700 }}
              >
                See how it works
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
