import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Free SEO Websites by Loudachris",
  description:
    "How Free SEO Websites (operated by Loudachris Digital Marketing) handles personal information for US small business clients. CCPA, CDPA, TDPSA, and other state privacy law compliant.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

const SECTIONS = [
  {
    h: "Who we are",
    body: [
      `${SITE.domain} ("Free SEO Websites") is operated by ${SITE.parentBrand}, a business based at ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.region} ${SITE.address.postcode}, Australia. We serve US small businesses async (email and Loom video, no calls).`,
      `Privacy contact: ${SITE.email}. Subject line "Privacy request" gets routed to the operator within one business day.`,
    ],
  },
  {
    h: "Plain-English summary",
    body: [
      "We collect what you give us in the qualifier and intake forms (name, email, business details). We use it to reply, build your site, and run your monthly service. We do not sell it, share it for advertising, or send it to third parties for marketing. We use Google Analytics 4 for anonymized site analytics, no advertising trackers. You can ask us to access, correct, or delete your data at any time.",
      "If you're in California, Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, or any other US state with a comprehensive privacy law, the rights specific to your state are listed below. We honor the strictest applicable standard regardless of where you reside.",
    ],
  },
  {
    h: "What information we collect",
    body: [
      "<strong>Application data:</strong> When you apply via our qualifier form, we collect your name, email, phone number (if provided), business name, business location (city, state), industry, staff size, plan preference, and any free-text notes you provide.",
      "<strong>Intake data:</strong> If you proceed past the application, our intake form collects additional information needed to build your site: services you offer, brand assets (if provided), customer testimonials (if provided), keyword and competitor input, and access details for any existing analytics or Google Business Profile accounts you grant us.",
      "<strong>Analytics data:</strong> We use Google Analytics 4 (GA4) with IP anonymization enabled. GA4 collects pages visited, time on page, traffic source, device type, and approximate country / state region. GA4 cookies are first-party. We do not use Facebook Pixel, TikTok Pixel, LinkedIn Insight Tag, Twitter / X conversion tracking, or any third-party advertising trackers on this site.",
      "<strong>Search Console data:</strong> Aggregated search query and ranking data via Google Search Console. This is not linked to individual users.",
      "<strong>Server logs:</strong> Vercel (our US-based host) logs IP addresses and request timestamps for security and abuse prevention. Logs are retained per Vercel's standard retention policy.",
    ],
  },
  {
    h: "Categories of personal information (CCPA reference)",
    body: [
      "Per the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), the categories we collect are:",
      "<ul><li><strong>Identifiers:</strong> name, email, phone, IP address</li><li><strong>Commercial information:</strong> services you've inquired about, plan you've chosen, payment status</li><li><strong>Internet activity:</strong> pages visited, time on site (anonymized via GA4)</li><li><strong>Geolocation:</strong> approximate (city / state) only — we do not collect precise GPS location</li><li><strong>Professional information:</strong> business name, industry, staff size, services offered (provided by you in application or intake)</li></ul>",
      "We do not collect: sensitive personal information (Social Security Number, driver's license, financial account numbers, biometric or health data), or personal information about minors under 16.",
    ],
  },
  {
    h: "How we use your information",
    body: [
      "<strong>To respond to your application:</strong> reply with a written agreement or polite decline; answer follow-up questions you send.",
      "<strong>To deliver the service:</strong> build your website, configure your Google Business Profile, set up tracking, perform monthly SEO work, send monthly reports.",
      "<strong>For transactional emails:</strong> intake confirmations, build progress updates, monthly reports, billing notices.",
      "<strong>For our own legitimate operations:</strong> anonymized analytics on the site, security monitoring, fraud prevention, debugging.",
      "<strong>To comply with law:</strong> tax records, dispute resolution, regulatory inquiries.",
      "<strong>We do NOT:</strong> sell your data; share your data with third parties for their marketing; use your data for cross-context behavioral advertising; profile you for automated decision-making with significant effects.",
    ],
  },
  {
    h: "Service providers we use",
    body: [
      "We share limited personal information with the following service providers to deliver the service. Each is bound by their own data processing terms.",
      "<ul><li><strong>Vercel (US):</strong> website hosting and serverless functions. Receives server logs and form submissions.</li><li><strong>Resend (US):</strong> transactional email delivery. Receives email content (your application data emailed to us; build / billing emails sent to you).</li><li><strong>Google Workspace (US):</strong> our internal email and document storage where applications and intake data are filed.</li><li><strong>Google Analytics 4 (US):</strong> anonymized site analytics.</li><li><strong>Google Search Console (US):</strong> aggregated search performance data.</li><li><strong>GitHub (US):</strong> source code repository for your site (does not contain personal information about your customers).</li><li><strong>Stripe (US, if applicable):</strong> payment processing for monthly Care Fees. Stripe is the data controller for payment information.</li></ul>",
      "All data processed by these providers is processed in the United States. The operator (Loudachris Digital Marketing) accesses this data from Adelaide, Australia. Your personal information may therefore be processed in Australia by the operator.",
    ],
  },
  {
    h: "Your rights — California (CCPA / CPRA)",
    body: [
      "If you are a California resident, you have the right to:",
      "<ul><li><strong>Right to know</strong> what categories of personal information we have collected about you, the sources, the purposes, and the categories of third parties we share with</li><li><strong>Right to access</strong> the specific pieces of personal information we hold about you</li><li><strong>Right to delete</strong> personal information we have collected from you (subject to legal exceptions, e.g. tax records)</li><li><strong>Right to correct</strong> inaccurate personal information</li><li><strong>Right to opt out of sale or sharing</strong> of personal information — we do not sell or share personal information for cross-context behavioral advertising, so this right is automatically honored</li><li><strong>Right to limit use of sensitive personal information</strong> — we do not collect sensitive personal information as defined by the CPRA</li><li><strong>Right to non-discrimination</strong> — we will not deny service, charge different prices, or provide a different level of service because you exercised a privacy right</li></ul>",
      "To exercise any right, email <a href=\"mailto:" + SITE.email + "\" style=\"color: var(--color-rose); font-weight: 700;\">" + SITE.email + "</a> with subject \"California privacy request.\" We respond within 45 days (extendable by 45 more days if reasonably necessary, with notice).",
      "California residents may designate an authorized agent to make a request on their behalf. We require written authorization signed by the consumer plus identity verification before responding to an agent request.",
    ],
  },
  {
    h: "Your rights — Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), and other comprehensive state privacy laws",
    body: [
      "If you reside in Virginia, Colorado, Connecticut, Utah, Texas (TDPSA), Oregon (OCPA), Montana (MCDPA), Tennessee (TIPA), Iowa (ICDPA), Indiana (INCDPA), Delaware (DPDPA), Maryland (MODPA), New Hampshire (NHPA), New Jersey (NJDPA), Minnesota (MCDPA), Rhode Island, or any other US state with a comprehensive consumer privacy law, you have substantially the same core rights as California residents:",
      "<ul><li><strong>Right to access</strong> personal data we have collected about you</li><li><strong>Right to correct</strong> inaccurate personal data</li><li><strong>Right to delete</strong> personal data (subject to legal exceptions)</li><li><strong>Right to data portability</strong> in a portable, machine-readable format</li><li><strong>Right to opt out</strong> of targeted advertising, sale of personal data, and certain forms of profiling — we do not engage in any of these activities, so opt-out is automatically honored</li><li><strong>Right to appeal</strong> a denial of any privacy request (where applicable to your state)</li></ul>",
      "To exercise any right, email <a href=\"mailto:" + SITE.email + "\" style=\"color: var(--color-rose); font-weight: 700;\">" + SITE.email + "</a> with the subject \"Privacy request - [your state]\". We respond within 45 days. If we deny a request and your state's law provides an appeal mechanism, we explain the appeal process in our response.",
    ],
  },
  {
    h: "How to make a privacy request",
    body: [
      "Email <a href=\"mailto:" + SITE.email + "\" style=\"color: var(--color-rose); font-weight: 700;\">" + SITE.email + "</a> with the subject line \"Privacy request\" and tell us:",
      "<ul><li>What right you're exercising (access, correction, deletion, etc.)</li><li>What state you reside in</li><li>The email address or phone number you used to apply, so we can locate your data</li></ul>",
      "We verify identity by confirming the request from the same email address used in your application or by other reasonable methods. We don't charge a fee unless your request is manifestly unfounded or excessive.",
    ],
  },
  {
    h: "Cookies and tracking",
    body: [
      "<strong>Strictly necessary cookies:</strong> session and security cookies needed for the site to function. Cannot be disabled.",
      "<strong>Analytics cookies:</strong> Google Analytics 4 first-party cookies for anonymized usage statistics. You can opt out via your browser settings or the Google Analytics opt-out browser add-on.",
      "<strong>Advertising cookies:</strong> we do not use any.",
      "We do not respond to Do Not Track (DNT) browser signals because there is no industry consensus on what DNT means. We do honor Global Privacy Control (GPC) signals as opt-out-of-sale signals where applicable under California, Colorado, and Connecticut law (we don't sell data, so the practical effect is the same).",
    ],
  },
  {
    h: "Data retention",
    body: [
      "<strong>Application / qualifier data:</strong> 7 years from submission (record-keeping for service-business operations and tax records).",
      "<strong>Intake data:</strong> retained for the duration of our service plus 7 years.",
      "<strong>Email correspondence:</strong> retained for 7 years.",
      "<strong>Analytics data (GA4):</strong> 14 months at user level (GA4 default), aggregated indefinitely.",
      "<strong>Server logs (Vercel):</strong> per Vercel's standard retention.",
      "After the retention period, data is deleted or anonymized. You can request earlier deletion at any time per the rights sections above.",
    ],
  },
  {
    h: "Children",
    body: [
      "This service is for businesses, not consumers. We do not knowingly collect personal information from children under 13 (COPPA) or from minors under 16 without parental consent. If you believe we have collected information from a child, contact us immediately and we will delete it.",
    ],
  },
  {
    h: "Data security",
    body: [
      "We use industry-standard security: TLS encryption in transit, encrypted storage, access controls limited to the operator and the named team members on our about page, two-factor authentication on all internal accounts. We have not had a data breach. If we ever experience a breach involving your personal information, we will notify you per the notification timelines required under your state's law (typically 72 hours to 60 days depending on jurisdiction).",
    ],
  },
  {
    h: "Cross-border data transfer",
    body: [
      "Data is stored in the United States via the providers listed above. The operator (Loudachris Digital Marketing) accesses this data from Adelaide, Australia, where it is processed for the purpose of delivering the service. Australia has comprehensive privacy laws (the Privacy Act 1988 and Australian Privacy Principles) that provide protections substantially similar to US state privacy laws. By providing your personal information, you consent to this cross-border processing.",
    ],
  },
  {
    h: "Complaints",
    body: [
      "If you have a complaint, contact us first at <a href=\"mailto:" + SITE.email + "\" style=\"color: var(--color-rose); font-weight: 700;\">" + SITE.email + "</a>. We aim to resolve complaints within 30 days.",
      "If we cannot resolve your complaint, you can also contact:",
      "<ul><li><strong>California:</strong> California Privacy Protection Agency (cppa.ca.gov) or California Attorney General (oag.ca.gov)</li><li><strong>Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Tennessee, Iowa, Indiana, Delaware, Maryland, New Hampshire, New Jersey, Minnesota, Rhode Island:</strong> your state Attorney General's office</li><li><strong>All US residents:</strong> Federal Trade Commission (ftc.gov)</li></ul>",
    ],
  },
  {
    h: "Updates to this policy",
    body: [
      "We may update this policy occasionally. The current version on this URL is the version that applies. Material changes (anything that broadens our use of your data or adds new categories of sharing) are communicated by email to active clients at least 30 days before they take effect.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Privacy", href: "/privacy" },
            ])
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy", href: "/privacy" },
        ]}
      />

      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle="How Free SEO Websites by Loudachris handles personal information for our US small-business clients. Compliant with CCPA, CDPA, CPA, CTDPA, UCPA, TDPSA, OCPA, and other comprehensive US state privacy laws."
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-3xl">
          <div className="space-y-10">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.h} delay={i * 40}>
                <h2 style={{ fontSize: "clamp(22px, 2.2vw, 28px)" }}>
                  {s.h}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((b, bi) => (
                    <p
                      key={bi}
                      className="text-[16px]"
                      style={{
                        color: "var(--color-ink-2)",
                        lineHeight: 1.7,
                      }}
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div
            className="mt-14 rounded-[14px] p-6 text-sm"
            style={{
              background: "var(--color-platinum)",
              border: "1px solid var(--hair-strong)",
              color: "var(--color-ink-2)",
              lineHeight: 1.65,
            }}
          >
            <strong>Last updated:</strong> 7 May 2026.
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
