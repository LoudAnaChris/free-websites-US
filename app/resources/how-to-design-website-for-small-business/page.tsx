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
  title: "How to Design a Website for a Small Business (US 2026 Step-by-Step)",
  description:
    "Step-by-step guide to designing a small business website that books work in 2026. Customer-first hierarchy, mobile-first, schema, CTA placement, conversion testing, and the mistakes to avoid.",
  alternates: {
    canonical: `${SITE.url}/resources/how-to-design-website-for-small-business`,
  },
};

const FAQS = [
  {
    q: "Should I design my small business website myself?",
    a: "If you have 40 to 60 hours and you enjoy the technical side, yes, a Wix or Squarespace site is achievable. If you don't, hire a freelancer for $2,000 to $6,000 or use a managed subscription that bundles design, hosting, and SEO. The mistake most owners make is starting a DIY build, getting 70% done, then leaving it half-finished for a year while leads go to competitors.",
  },
  {
    q: "What should be on a small business homepage?",
    a: "Six things, in this order: a clear headline (what you do, who you help, where), a single primary CTA, three trust signals (years in business, license, reviews), a list of services with links to dedicated pages, recent work or case studies, and a footer with phone, address, hours, and a contact form. Everything else is optional.",
  },
  {
    q: "How many colors should a small business website use?",
    a: "Three: a primary brand color for accents and CTAs, a neutral for backgrounds (off-white or very light gray), and a dark text color (near-black, not pure black). One accent color, used sparingly on calls-to-action, outperforms a rainbow palette every time. Save the second accent for hover states only.",
  },
  {
    q: "Should I use stock photos on my small business website?",
    a: "Sparingly, and never of fake people pretending to be your team. Stock photos of equipment, locations, or context shots are fine. Photos of staff, work in progress, completed jobs, and your shopfront should all be real. A Google review of your business with a real customer's first name beats any stock photo.",
  },
  {
    q: "How long should the design take?",
    a: "DIY: 4 to 12 weeks of evenings and weekends. Freelancer: 4 to 8 weeks calendar time. Managed subscription like ours: 5 working days from brief to live site. Faster isn't worse if the team has done it 200 times before. Slower isn't better if it's just procrastination.",
  },
  {
    q: "What's the most common design mistake small businesses make?",
    a: "Designing the site around the company instead of the customer. The home page leads with 'About us' and the company history. The customer doesn't care. The home page should lead with what the customer searched for: 'I need a plumber in Phoenix who can come today'. Design from the customer's question, not the owner's pride.",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Start with the customer's question, not your company history",
    body: "The single biggest design mistake is leading with 'About us' or company history. The visitor has a problem. Your homepage should answer their problem in the first scroll. 'Licensed plumbers serving Phoenix homeowners. Same-day emergency repair, upfront pricing, 5-year guarantee.' That's the headline. Photos of your truck, your license, and one button: 'Get a free quote'. Save the company story for the about page where it belongs.",
  },
  {
    n: 2,
    title: "Design mobile-first, then scale up to desktop",
    body: "70% of small business website traffic is mobile. Mobile-first means you design for the phone screen first, then expand the layout for tablet and desktop. Tap targets at least 44 pixels, single column body text, no horizontal scroll, no popups that block the screen, and a sticky CTA bar at the bottom of the screen. Test on a real phone, not just your laptop browser's mobile preview.",
  },
  {
    n: 3,
    title: "Build a clear page hierarchy with H1, H2, H3",
    body: "Each page has one H1 (the page title), several H2s (the main sections), and H3s under those (sub-sections). This structure helps both Google and the human visitor scan the page. The H1 includes your primary keyword. H2s answer related questions. Don't use H1 multiple times on a page. Don't skip from H1 straight to H4 because you like the font size. Use CSS for styling and keep the HTML structure clean.",
  },
  {
    n: 4,
    title: "Make services findable with dedicated pages",
    body: "Every service you sell needs its own page. Not a section on the homepage, a full page. 'Drain Cleaning Phoenix', 'Water Heater Replacement Phoenix', 'Sewer Line Repair Phoenix'. Each page targets a specific keyword combination, has 800 to 1,500 words of unique content, includes pricing or pricing range, lists what's included, has 5 to 8 FAQs, and ends with a clear CTA. Service pages are how you rank for buying intent. Bury them in a dropdown and you lose.",
  },
  {
    n: 5,
    title: "Layer trust signals throughout the site",
    body: "License numbers, insurance certificates, year established, number of jobs completed, real reviews with first names and cities, real photos of staff and work, BBB or trade body badges, and area-served map. Display them in the footer of every page, repeat the most important ones on service pages, and detail them on the about page. Trust signals work in layers. One big claim is suspicious. Six small specific signals reads as real.",
  },
  {
    n: 6,
    title: "Place CTAs every 600 words on long pages",
    body: "A small business website exists to generate leads. Every page should have at least one CTA above the fold and another every 600 words on long pages. On mobile, add a sticky CTA bar at the bottom of the screen with phone and 'Get quote'. Never put a service page online with the only CTA at the very bottom. Visitors don't scroll to the end. They make up their mind in the first 30 seconds.",
  },
  {
    n: 7,
    title: "Add schema markup so Google understands the site",
    body: "Schema.org structured data is JSON-LD code that tells Google what kind of business you are, where you're located, what services you offer, and what your reviews say. Without it, Google has to guess. With it, you qualify for rich results, AI search citations, and stronger local rank. Minimum: LocalBusiness, Organization, BreadcrumbList on every page, FAQPage on any page with a Q&A section, Service for each service page, and Person for the founder.",
  },
  {
    n: 8,
    title: "Test conversion before declaring it finished",
    body: "Design isn't done when the site looks good. It's done when it converts. Run a soft launch for 2 weeks with $200 of Google Ads driving traffic, watch the heat map (Hotjar or Microsoft Clarity is free), and check what visitors actually do. If 80% of visitors leave the homepage without scrolling, the headline is wrong. If they scroll but don't click CTA, the CTA copy or placement is wrong. Fix it, then declare it done.",
  },
];

const MISTAKES = [
  "Carousel sliders on the homepage. They reduce conversion. Visitors don't wait for slide 3.",
  "Auto-playing video with sound. Universally hated. Mute by default or skip the video.",
  "Stock photos of fake teams. Real photos of real staff every time.",
  "More than one CTA per section. One ask per section. Layered CTAs confuse visitors.",
  "Tiny fonts under 16 pixels. Body text should be 16 to 18 pixels minimum on mobile.",
  "Popups that block the screen on first visit. Use sticky bars or exit-intent only.",
  "Generic 'Submit' button text. Use specific text: 'Get my free quote' or 'Send my message'.",
  "No phone number above the fold for service businesses. 30% of leads still come by phone.",
];

export default function HowToDesignWebsitePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "How to design a website for a small business",
      href: "/resources/how-to-design-website-for-small-business",
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
              "How to Design a Website for a Small Business (US 2026 Step-by-Step)",
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
            url: `${SITE.url}/resources/how-to-design-website-for-small-business`,
          }),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <PageHeader
        eyebrow="Small business SEO resources"
        title={
          <>
            How to design a website for a small{" "}
            <span className="rose-underline">business.</span>
          </>
        }
        subtitle="Eight steps that turn a blank canvas into a site that books work. Customer-first hierarchy, mobile-first design, schema, CTA placement, and the eight common mistakes to avoid."
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
                How do you design a website for a small business?
              </h2>
              <p
                className="text-base sm:text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Start with the customer's question, build a single homepage
                that answers it in the first scroll, then create dedicated
                service pages for each thing you sell. Mobile-first, clear
                H1/H2/H3 hierarchy, schema markup, fast loading, layered trust
                signals, and a clear CTA every 600 words. Add call tracking
                from day one so you can prove what's working.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body: 8 steps */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-4xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">The 8-step process</span>
            <h2 className="mt-4">Design in this order, not in another.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Order matters. Most failed small business sites started with
              picking a template, then trying to retrofit content into it. That
              flow inverts the priority. The customer's question comes first.
              The template is the last thing you choose.
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

      {/* Mistakes section */}
      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <span className="eyebrow on-light">Avoid these</span>
            <h2 className="mt-4">Eight design mistakes that kill conversion.</h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              Spotted in 80%+ of small business sites we audit. None of these
              require expensive fixes. Most are 30-minute corrections that
              double the conversion rate.
            </p>
          </Reveal>

          <div className="space-y-4">
            {MISTAKES.map((m, i) => (
              <Reveal key={i} delay={i * 30}>
                <div
                  className="rounded-[14px] p-5 flex gap-4 items-start"
                  style={{
                    background: "white",
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
              Designing the site yourself is realistic if you have 40 to 60
              hours and enjoy the technical side. Most owners don't, and the
              ones who try usually leave it half-finished for a year. For most
              US small businesses under 15 staff, the practical answer is a
              Next.js plus headless CMS setup with bundled SEO, hosting, and
              monthly content updates. We deliver this as Free SEO Websites by
              Loudachris: free 5-day build, $247/month bundled, $0 upfront, and
              a 90-day qualified-lead guarantee. Every site ships with the
              eight steps above already done on day one.{" "}
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
