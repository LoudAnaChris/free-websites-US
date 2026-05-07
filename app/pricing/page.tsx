import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affordable Monthly SEO Packages from $297/mo USA | No Upfront",
  description:
    "Compare US small business SEO packages: $297/mo (12-month), $397/mo (6-month), $497/mo (no minimum). Free website build included. Beats $2,999 upfront agencies and template-only competitors. Affordable seo packages for small business, monthly seo packages, website design and seo packages bundled.",
  alternates: { canonical: `${SITE.url}/pricing` },
};

const FAQS = [
  {
    q: "How much does a small business website cost in the US?",
    a: "Most US agencies charge $3,000-$10,000 upfront for a small business website, plus $500-$2,000/mo for hosting and SEO. We charge $0 upfront and $297-$497/mo for hosting plus SEO bundled. Same team that builds Loudachris's $3,000+ custom sites.",
  },
  {
    q: "What's the cheapest plan?",
    a: "$297/month with a 12-month minimum. Total over the minimum term: $3,564 across the year. That's it. No upfront. No setup fee. No surprise hikes (price locked 24 months).",
  },
  {
    q: "What if I need flexibility?",
    a: "$497/mo no lock-in plan. Cancel any time with 30 days notice. We charge a premium for flexibility because most clients commit and stay.",
  },
  {
    q: "When do I pay first?",
    a: "After your site goes live AND tracking is verified (call tracking, form analytics, Search Console). Not before. If we don't deliver in 5 working days, your build is free for life.",
  },
  {
    q: "Are prices locked?",
    a: "Yes. Your monthly fee is locked for 24 months on the 12-month plan. No surprise hikes. After 24 months, any rate adjustment is communicated 60 days in advance with the option to cancel.",
  },
  {
    q: "What does the monthly fee actually include?",
    a: "US-based hosting, SSL, daily backups, security monitoring, call tracking, form tracking, monthly ranking work, monthly content piece, monthly written report, and minor edits/updates. Everything you need to keep ranking and converting.",
  },
  {
    q: "Do prices include sales tax?",
    a: "All prices on this page are in US dollars. Any applicable state or local sales tax in your jurisdiction is your responsibility and added at invoicing as required.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. After your minimum term, give 30 days written notice and you walk away. You keep the site, the domain, the code. No exit fees. No held-hostage assets.",
  },
  {
    q: "What if I want to upgrade later?",
    a: "Upgrade to Loudachris's full-service plan ($3,000+ custom build, $1,500+/mo SEO + Ads management) any time. Discount applied for existing free-websites clients.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Pricing", href: "/pricing" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Free Website Build with Monthly Care Plan",
              description:
                "Free 5-day SEO website build for US small businesses. Hosting plus SEO from $297/month.",
              url: `${SITE.url}/pricing`,
              serviceType: "Website Design and SEO",
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />

      <PageHeader
        eyebrow="Real pricing"
        title={
          <>
            What a small business website actually costs in the{" "}
            <span className="rose-underline">US.</span>
          </>
        }
        subtitle="Three plans. All start at $0 build. First payment only after your site is live and tracking is verified. Same team. Same standards. Different price point."
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal>
            <p
              className="text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              The honest answer to{" "}
              <em>&ldquo;how much does a small business website cost in the US?&rdquo;</em>{" "}
              is somewhere between $1,000 and $50,000, plus ongoing
              hosting/SEO/maintenance fees. The wide range exists because most
              agencies charge for the build (design, copy, dev) AND for
              ongoing care (hosting, SEO, monitoring, content) AND have
              different ideas of what those mean.
            </p>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              We bundle everything (build + hosting + SEO + monitoring +
              monthly content) into one monthly fee, and we eat the upfront
              build cost so you don&apos;t pay until the site is live. That
              changes the maths from &ldquo;$5,000 risk&rdquo; to &ldquo;$297
              when it&apos;s working.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <Pricing withId={false} />

      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="text-center mb-10">
            <span className="eyebrow on-light">Vs agency quotes</span>
            <h2 className="mt-4">
              How this compares to a typical US agency.
            </h2>
          </Reveal>

          <div
            className="rounded-[20px] overflow-hidden"
            style={{
              background: "white",
              border: "1px solid var(--hair-strong)",
            }}
          >
            <div
              className="grid grid-cols-3 gap-px"
              style={{ background: "var(--hair)" }}
            >
              {["", "Typical US agency", "Free Websites US"].map(
                (h, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 text-sm font-bold"
                    style={{
                      background: i === 2 ? "var(--rose-soft)" : "white",
                      color:
                        i === 2 ? "var(--color-rose)" : "var(--color-ink)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {h || "."}
                  </div>
                )
              )}
              {[
                ["Upfront build cost", "$3,000 - $10,000", "$0"],
                ["Time to live site", "6 - 12 weeks", "5 working days"],
                ["Hosting", "Sometimes included", "Always included"],
                [
                  "SEO",
                  "$500 - $2,000/mo extra",
                  "Included in monthly fee",
                ],
                [
                  "Lead guarantee",
                  "Almost never",
                  "90 days, in writing",
                ],
                ["Lock-in", "12-24 months", "Optional 6 or 12 months"],
                [
                  "Total Year 1 cost",
                  "$10,000 - $30,000",
                  "$3,564 (12-mo plan)",
                ],
              ].map((row, ri) => (
                <div key={ri} style={{ display: "contents" }}>
                  {row.map((cell, ci) => (
                    <div
                      key={`${ri}-${ci}`}
                      className="p-5 sm:p-6 text-sm"
                      style={{
                        background:
                          ci === 2 ? "rgba(227,87,171,0.04)" : "white",
                        color:
                          ci === 0
                            ? "var(--color-ink-2)"
                            : "var(--color-ink)",
                        fontWeight: ci === 0 ? 600 : 400,
                      }}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={120} className="mt-7">
            <p
              className="text-sm text-center"
              style={{ color: "var(--color-ink-3)" }}
            >
              Comparison based on quotes Loudachris has reviewed for clients
              moving from previous agencies. Your mileage may vary by agency.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQ
        faqs={FAQS}
        heading="Pricing questions, answered."
        eyebrow="Pricing FAQ"
      />
      <FinalCTA />
    </>
  );
}
