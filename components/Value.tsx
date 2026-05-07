import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const buildIncludes = [
  "Niche keyword research and competitor map",
  "Hand-built SEO website for your trade in your city or area",
  "Homepage, up to 8 service pages, about, contact, and blog framework",
  "Design and copy (we write it, you approve it)",
  "Mobile-first responsive design",
  "Schema markup so Google knows exactly what you do",
  "Google Business Profile alignment",
];

const careIncludes = [
  "US-based hosting with SSL, daily backups, security monitoring",
  "Phone call tracking on every call from your site",
  "Form tracking on every enquiry",
  "Monthly ranking work and on-page improvements",
  "Monthly content piece (one new service area page or FAQ)",
  "Monthly written report on traffic, calls, leads, rankings",
  "Minor edits and updates as needed",
];

export function Value() {
  return (
    <section
      className="section"
      style={{ background: "var(--color-platinum)" }}
    >
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow on-light">What you get</span>
          <h2 style={{ marginTop: 14 }}>
            Here&apos;s what&apos;s included. Built for $0 upfront.
          </h2>
          <p
            className="mt-5 text-lg"
            style={{ color: "var(--color-ink-2)" }}
          >
            Stated value of the build and first month of care: $2,700+
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          <ValueCard
            tag="The build · $0"
            title="The build (free)"
            items={buildIncludes}
          />
          <ValueCard
            tag="Hosting + Ranking Care · monthly"
            title="Hosting + Ranking Care"
            items={careIncludes}
            featured
          />
        </div>

        <div
          className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-full mx-auto"
          style={{
            background: "white",
            border: "1px solid var(--hair-strong)",
            display: "flex",
            justifyContent: "center",
            width: "fit-content",
            margin: "40px auto 0",
          }}
        >
          <span
            className="text-sm"
            style={{ color: "var(--color-ink-2)" }}
          >
            Stated value of build + first month
          </span>
          <strong
            className="text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-rose)",
            }}
          >
            $2,700+
          </strong>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  tag,
  title,
  items,
  featured,
}: {
  tag: string;
  title: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <Reveal
      className="relative p-8 rounded-[20px]"
      delay={featured ? 120 : 0}
    >
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{
          background: "white",
          border: featured
            ? "2px solid var(--color-rose)"
            : "1px solid var(--hair-strong)",
          boxShadow: featured
            ? "0 24px 60px -20px rgba(227,87,171,0.3)"
            : "0 16px 40px -16px rgba(18,41,51,0.1)",
          pointerEvents: "none",
        }}
      />
      <span
        className="relative inline-block px-3 py-1 rounded-full text-xs mb-5"
        style={{
          background: featured ? "var(--rose-soft)" : "var(--hair)",
          color: featured ? "var(--color-rose)" : "var(--color-ink-2)",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.08em",
          fontWeight: 600,
        }}
      >
        {tag}
      </span>
      <h3 className="relative mb-5">{title}</h3>
      <ul className="relative space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
            style={{ color: "var(--color-ink-2)", lineHeight: 1.55 }}
          >
            <span
              className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                background: featured
                  ? "var(--color-rose)"
                  : "var(--color-navy)",
                color: "white",
              }}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span className="text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
