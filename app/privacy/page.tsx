import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Free Websites US",
  description:
    "How Free Websites US (operated by Loudachris Digital Marketing) handles your personal information.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

const SECTIONS = [
  {
    h: "Who we are",
    body: [
      `${SITE.domain} ("Free Websites US") is operated by ${SITE.parentBrand}, a business based at ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.region} ${SITE.address.postcode}, Australia. We serve US small businesses async (email and Loom video, no calls).`,
      `Contact for privacy matters: ${SITE.email}.`,
    ],
  },
  {
    h: "What information we collect",
    body: [
      "When you apply via our qualifier form, we collect: your name, email, phone number (if provided), business name, business location, industry, staff size, plan preference, and any free-text notes you give us.",
      "When you visit the site, we use Google Analytics 4 to collect anonymized analytics data (pages visited, time on page, traffic source). IP addresses are anonymized. We use Google Search Console for search performance data — this only collects search query data, not personal data.",
      "We do NOT use third-party advertising trackers, retargeting pixels, or social media trackers on this site.",
    ],
  },
  {
    h: "How we use your information",
    body: [
      "Application data is used to: (a) reply to your application with a written agreement or polite decline; (b) build your website if you proceed; (c) send transactional emails about your build and ongoing care.",
      "We do NOT sell your data, share it with third parties for marketing, or use it for purposes outside our agreement with you.",
    ],
  },
  {
    h: "Where data is stored",
    body: [
      "Application data is stored in our email system (Google Workspace) and our CRM. Email transactions are processed via Resend (resend.com), a US-based email API provider with appropriate data processing safeguards.",
      "Website hosting and analytics use Vercel (US), Google Analytics (US), and Google Search Console (US).",
      "Operational systems for the Free Websites US arm are accessed by the operator (Loudachris) from Adelaide, Australia. Your personal information may therefore be processed in Australia by the operator.",
    ],
  },
  {
    h: "Your rights",
    body: [
      "Subject to applicable US state privacy laws (including CCPA / CPRA for California residents) and equivalent rights elsewhere, you have the right to:",
      "<ul><li>Request a copy of the personal information we hold about you</li><li>Request correction of inaccurate information</li><li>Request deletion of your information (subject to legal retention requirements)</li><li>Opt out of any continuing communications at any time</li></ul>",
      `To exercise any of these rights, email <a href="mailto:${SITE.email}" style="color: var(--color-rose); font-weight: 700;">${SITE.email}</a>. We respond within 30 days.`,
    ],
  },
  {
    h: "Cookies",
    body: [
      "We use Google Analytics 4 cookies for anonymized website analytics. These are first-party cookies under the GA4 / Google Tag Manager standard. You can disable analytics cookies via your browser settings.",
      "We do NOT use marketing or advertising cookies on this site.",
    ],
  },
  {
    h: "Data retention",
    body: [
      "Application data: retained for 7 years (record-keeping for service-business operations).",
      "Analytics data: GA4's default retention (14 months for user-level data).",
    ],
  },
  {
    h: "Complaints",
    body: [
      `If you have a complaint about how we handle your data, contact us first at <a href="mailto:${SITE.email}" style="color: var(--color-rose); font-weight: 700;">${SITE.email}</a>. We aim to resolve complaints within 30 days. California residents can also contact the California Privacy Protection Agency.`,
    ],
  },
  {
    h: "Updates to this policy",
    body: [
      "We may update this policy occasionally. The current version on this URL is always the version that applies. Material changes will be communicated by email to active clients.",
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
        subtitle="How Free Websites US (operated by Loudachris Digital Marketing) handles your personal information."
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
