import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Agreement | Free SEO Websites by Loudachris",
  description:
    "The exact terms of the Free SEO Websites offer. 5-day build SLA, 90-day qualified-lead guarantee mechanics, what counts as a lead, exclusions, cancellation rules. All public.",
  alternates: { canonical: `${SITE.url}/agreement` },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    h: "1. The offer",
    body: [
      "Free SEO Websites (operated by Loudachris Digital Marketing  - 'we', 'us') will design, build, and launch a website ('Site') for the Client at no upfront charge. The Client pays a recurring monthly fee ('Care Fee') for hosting, security, ranking work, monthly content, monitoring, and minor edits.",
      "Three Care Fee plans:",
      "<ul><li><strong>$247/month</strong> USD, 12-month minimum term, price locked 24 months.</li><li><strong>$397/month</strong> USD, 6-month minimum term.</li><li><strong>$497/month</strong> USD, no minimum term, cancel any time with 30 days notice.</li></ul>",
      "All prices are in US dollars and exclusive of any applicable state or local sales taxes that may apply to the Client's jurisdiction.",
    ],
  },
  {
    h: "2. The 5-day build SLA",
    body: [
      "From the moment the Client submits the Intake Form, we deliver the Site live in 5 working days. If we miss this deadline through our fault, the Client's Care Fee is waived for life  - the Client keeps the site, the domain, and the code, with no future Care Fee owed.",
      "Working days exclude US federal public holidays and weekends. The Client's responsiveness affects this  - we deliver our part in 5 days, but if the Client takes 3 days to respond to a feedback request, the timeline extends accordingly.",
    ],
  },
  {
    h: "3. The 90-day qualified-lead guarantee",
    body: [
      "We guarantee at least one qualified lead via the Site within 90 days of going live. A qualified lead is defined as: (a) an inbound phone call of 60 seconds or longer that arrived from a search engine, OR (b) a completed contact / quote form submission from a real prospect.",
      "Excluded from the lead count: friends, family, existing customers, suppliers, sales calls, spam form submissions, traffic from paid ads.",
      "If the Site has not produced at least one qualified lead in 90 days, we continue working at no additional cost for up to 3 further months. If after that period no qualified lead has arrived, both parties walk away with no fees owed and the Client retains all assets.",
      "Lead tracking is via the call tracking and form analytics installed on the Site at launch.",
    ],
  },
  {
    h: "4. Asset ownership and transfer",
    body: [
      "The Client owns the domain, the website code, the content, and any custom assets (logo, photos) provided to us, from day one. If the Client cancels after the minimum term, all assets transfer to a Client-controlled hosting provider on cancellation. Migration support is included in the final Care Fee.",
      "We do not retain ownership of any Client assets, content, or domain.",
    ],
  },
  {
    h: "5. Care Fee scope",
    body: [
      "The monthly Care Fee covers, on a recurring basis:",
      "<ul><li>US-based hosting with SSL, daily backups, security monitoring, uptime monitoring</li><li>Phone call tracking on every inbound call</li><li>Web form analytics on every inquiry</li><li>Monthly ranking work (search engine positioning)</li><li>One new content piece per month (a service area page, FAQ, or article)</li><li>On-page SEO improvements as needed</li><li>Monthly written report covering traffic, calls, leads, rankings</li><li>Minor edits and updates as requested</li></ul>",
      "Out of scope: complete redesigns, e-commerce setup, paid advertising management, third-party integrations beyond standard analytics, custom development beyond minor edits.",
    ],
  },
  {
    h: "6. Eligibility and exclusions",
    body: [
      "The offer is open to US small businesses with under 15 staff. We reserve the right to decline applications at our discretion.",
      "Specific exclusions:",
      "<ul><li><strong>State-licensed medical and clinical health</strong>: physicians, dentists, physical therapists, psychologists, chiropractors, podiatrists, optometrists, and other state-licensed clinical practitioners (subject to specific advertising rules under state medical or dental boards).</li><li><strong>Financial advice and lending</strong>: SEC-registered investment advisors, FINRA-registered brokers, mortgage brokers giving rate advice, insurance brokers giving advice on regulated products.</li><li><strong>Litigation legal services</strong>: family law, criminal defense, personal injury, mass tort, class actions. Small commercial law firms (business law, contracts, real estate, estate planning) may be eligible.</li><li><strong>Adult, gambling, cannabis, firearms, or controlled substance industries</strong>.</li></ul>",
      `If unsure about eligibility, email <a href="mailto:${SITE.email}">${SITE.email}</a>.`,
    ],
  },
  {
    h: "7. Cancellation",
    body: [
      "On the $247/mo plan: 12-month minimum, then 30 days written notice to cancel.",
      "On the $397/mo plan: 6-month minimum, then 30 days written notice.",
      "On the $497/mo plan: no minimum, 30 days written notice.",
      "No exit fees. No retention of assets. Final Care Fee invoiced on the cancellation date covers the 30-day notice period.",
    ],
  },
  {
    h: "8. Price lock",
    body: [
      "The Care Fee is locked for 24 months from the launch date on the $247/mo and $397/mo plans. After 24 months, any Care Fee adjustment is communicated 60 days in advance. The Client may cancel within that 60-day period without penalty.",
    ],
  },
  {
    h: "9. Service provider",
    body: [
      `Service is provided by ${SITE.parentBrand} via the domain ${SITE.domain}. Operating address: ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.region} ${SITE.address.postcode}, Australia. The service is delivered remotely (async) to US small businesses. Contact: ${SITE.email}.`,
    ],
  },
  {
    h: "10. Governing law and consumer protection",
    body: [
      "This agreement is governed by the laws of South Australia, where the operator is located. The parties consent to the non-exclusive jurisdiction of the courts of South Australia. The Client retains all consumer protection rights available to them under applicable US federal and state law (including the Federal Trade Commission Act, state consumer protection statutes, and any state's specific small-business protections), and nothing in this agreement is intended to limit or override those rights.",
      "If any clause is unenforceable, the rest of the agreement remains in force.",
    ],
  },
  {
    h: "11. Privacy",
    body: [
      `We handle Client data in accordance with our <a href="/privacy" style="color: var(--color-rose); font-weight: 700;">Privacy Policy</a>. Where the Client is a California resident, applicable rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) apply.`,
    ],
  },
];

export default function AgreementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Agreement", href: "/agreement" },
            ])
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Agreement", href: "/agreement" },
        ]}
      />

      <PageHeader
        eyebrow="Service agreement"
        title="The full agreement, in plain English."
        subtitle="The exact terms before you apply. The agreement we send (after you submit the qualifier) repeats every clause word-for-word."
      />

      <section className="section" style={{ background: "white" }}>
        <div className="container-x max-w-3xl">
          <div className="space-y-12">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.h} delay={i * 40}>
                <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}>
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
            <strong>Last updated:</strong> 7 May 2026. The current
            agreement on this URL governs new applications. Existing
            Clients are governed by the version of this agreement they
            originally signed.
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
