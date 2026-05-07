import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, Eye, Rocket, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadEmailProof } from "@/components/LeadEmailProof";
import { breadcrumbSchema, howToSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Local SEO for Small Business Works | Free Website + $247/mo",
  description:
    "Local SEO services for small business: 5-day async build, 90-day qualified-lead guarantee, monthly SEO bundled. Affordable SEO packages from $247/mo. Here's exactly how Loudachris delivers your free US small business website.",
  alternates: { canonical: `${SITE.url}/how-it-works` },
};

const STEPS = [
  {
    n: 1,
    Icon: FileText,
    title: "Apply",
    body: "Tell us about your business and which plan you want. 60 seconds via the qualifier on the homepage. Honest answers about your industry, staff size, and target city.",
    note: "We email back within 24 hours with a yes (with agreement attached) or a polite decline.",
  },
  {
    n: 2,
    Icon: Mail,
    title: "Agreement",
    body: "Written agreement in your inbox within 24 hours. One e-sign. No call. The agreement specifies the 90-day guarantee, 5-day build SLA, your chosen plan ($247, $397, or $497/mo), and the cancellation terms.",
    note: "Read it. Sign it. Or push back on a clause and we'll discuss in writing.",
  },
  {
    n: 3,
    Icon: Clock,
    title: "Intake (the 5-day clock starts)",
    body: "Once the agreement is signed, you receive an intake form. Your business details, services, locations, target keywords, brand assets if you have them. The 5-day build clock starts the moment you submit it.",
    note: "Most businesses fill the intake in 30-60 minutes. Take your time.",
  },
  {
    n: 4,
    Icon: Eye,
    title: "Approve (two written feedback rounds)",
    body: "On day 3-4, you get a Loom video walkthrough of the site. Reply with feedback in writing or by Loom. We make changes within 48 hours. One more review round if you need it.",
    note: "If you still hate it after both rounds, we walk away with no fees owed.",
  },
  {
    n: 5,
    Icon: Rocket,
    title: "Live",
    body: "Site goes live on day 5. Tracking confirmed (call tracking, form analytics, Search Console). First invoice issued only after launch and tracking is verified.",
    note: "From day 5, the 90-day lead guarantee clock starts.",
  },
];

const FAQS = [
  {
    q: "How can a website be free?",
    a: "Because the cost of acquiring a customer for a recurring care plan is high if we use ads. Building you a high-quality SEO website for free costs us roughly the same as one month of ads, and gives you a much better deal. We win when you stay because the site keeps working.",
  },
  {
    q: "Why no calls?",
    a: "Calls are how agencies justify high prices. Sales calls take an hour, persuasion takes another, and that cost gets passed on. We deliberately don't do calls for the standard offer. Everything happens by email or Loom video. This is what keeps our build cost low and your build free.",
  },
  {
    q: "What does the 5-day build clock actually mean?",
    a: "From the moment you submit the intake form, you have a live website in 5 working days, or your build is free for life. We work in async sprints: keyword research and architecture day 1, design day 2, build day 3, content day 4, launch day 5.",
  },
  {
    q: "What happens if you don't deliver in 5 days?",
    a: "Your build is free for life. You keep the site. You don't pay the monthly care fee. Written into the agreement.",
  },
  {
    q: "Can I see the agreement before applying?",
    a: "The full agreement page is at /agreement. The exact terms (90-day guarantee mechanics, what counts as a lead, exclusions, cancellation rules) are public.",
  },
  {
    q: "What if my business is in a regulated industry?",
    a: "We don't take on state-licensed medical (physicians, dentists, physical therapists, psychologists, chiropractors, podiatrists), financial advice (SEC-registered advisors, FINRA brokers, mortgage advice), or high-stakes legal litigation (personal injury, family, criminal, class actions). Trades, accountants, small business law, real estate, restaurants, and most other small businesses are fine.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "How it works", href: "/how-it-works" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema(
              STEPS.map((s) => ({ name: s.title, text: s.body }))
            )
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
              name: "5-Day SEO Website Build",
              description: "Free build in 5 working days. Hosting plus SEO from $247/month.",
              url: `${SITE.url}/how-it-works`,
              serviceType: "Website Design and SEO",
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "How it works", href: "/how-it-works" },
        ]}
      />

      <PageHeader
        eyebrow="The path"
        title={
          <>
            How a free website with{" "}
            <span className="rose-underline">Loudachris</span> works.
          </>
        }
        subtitle="A 5-day async build, $247-$497/month for hosting and SEO, and a 90-day qualified-lead guarantee. Five steps. No calls in any of them."
        ctaLabel="See if I qualify"
        ctaHref="/#qualifier"
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-5xl">
          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div
                  className="grid gap-7 lg:grid-cols-[100px_1fr] items-start"
                >
                  <div className="flex lg:flex-col items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "white",
                        border: "2px solid var(--color-rose)",
                        color: "var(--color-rose)",
                      }}
                    >
                      <s.Icon size={26} strokeWidth={2} />
                    </div>
                    <div
                      className="text-3xl font-extrabold lg:text-center"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-rose)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      0{s.n}
                    </div>
                  </div>
                  <div>
                    <h3>{s.title}</h3>
                    <p
                      className="mt-3 text-lg"
                      style={{
                        color: "var(--color-ink-2)",
                        lineHeight: 1.65,
                      }}
                    >
                      {s.body}
                    </p>
                    <p
                      className="mt-3 text-sm italic"
                      style={{ color: "var(--color-ink-3)" }}
                    >
                      {s.note}
                    </p>
                  </div>
                </div>
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
            <span className="eyebrow on-light">From the team behind Loudachris</span>
            <h2 className="mt-4">
              Built by the same team that earned 80+ five-star Google reviews.
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.65 }}
            >
              freeseowebsites.com is the US small-business arm of{" "}
              <a
                href={SITE.parentUrl}
                rel=""
                style={{ color: "var(--color-rose)", fontWeight: 700 }}
              >
                Loudachris Digital Marketing
              </a>
              . Loudachris has been managing SEO, Google Ads, and websites for
              Australian small businesses since 2019. ABN {SITE.abn}. 80+
              five-star Google reviews. The full-service Loudachris build is
              $3,000 plus $1,500/mo. The free-website offer is the same team,
              same standards, different price point.
            </p>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.65 }}
            >
              If you&apos;re a business with a marketing budget who needs custom
              design, custom SEO strategy, or paid ads, you&apos;ll get more
              value from{" "}
              <a
                href={SITE.parentUrl}
                rel=""
                style={{ color: "var(--color-rose)", fontWeight: 700 }}
              >
                loudachris.com.au
              </a>
              . If you&apos;re a small business under 15 staff who needs an
              SEO-ready site live in 5 days for under $500/mo, you&apos;re in
              the right place.
            </p>
          </Reveal>
        </div>
      </section>

      <LeadEmailProof />

      <Pricing withId={false} />
      <FAQ faqs={FAQS} heading="What people ask before applying." eyebrow="FAQ" />
      <FinalCTA />
    </>
  );
}
