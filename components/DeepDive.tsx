import Link from "next/link";
import { Reveal } from "./Reveal";

export function DeepDive() {
  return (
    <section
      className="section"
      style={{ background: "var(--color-platinum)" }}
    >
      <div className="container-x">
        <Reveal className="max-w-3xl mb-12">
          <span className="eyebrow on-light">Deep dive</span>
          <h2 style={{ marginTop: 14 }}>
            How the 90-day lead guarantee actually works.
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3 max-w-6xl">
          <DeepCard
            title="What counts as a lead?"
            body="A unique inbound phone call of 60 seconds or longer, or a completed contact or quote form on your website. Tracked through call tracking and form analytics installed on day one."
          />
          <DeepCard
            title="What doesn&apos;t count?"
            body="Friends, family, existing customers, suppliers, sales calls, spam, or traffic from paid ads."
            alt
            delay={100}
          />
          <DeepCard
            title="What if there are no leads?"
            body="We keep working at no cost for up to 3 additional free months. If after that no leads have come, both parties walk away with no fees owed."
            delay={200}
          />
        </div>

        <Reveal delay={300} className="mt-10">
          <Link
            href="/agreement"
            className="btn-link"
            style={{ color: "var(--color-rose)" }}
          >
            Read the full agreement →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function DeepCard({
  title,
  body,
  alt,
  delay,
}: {
  title: string;
  body: string;
  alt?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="p-7 rounded-[16px]"
    >
      <div
        style={{
          background: alt ? "var(--color-navy)" : "white",
          color: alt ? "var(--color-platinum)" : "var(--color-ink)",
          border: alt ? "none" : "1px solid var(--hair-strong)",
          padding: 28,
          borderRadius: 16,
          height: "100%",
        }}
      >
        <h3
          dangerouslySetInnerHTML={{ __html: title }}
          style={{ color: alt ? "var(--color-platinum)" : "var(--color-ink)" }}
        />
        <p
          className="mt-3 text-[15.5px]"
          style={{
            color: alt ? "rgba(245,245,245,0.85)" : "var(--color-ink-2)",
            lineHeight: 1.65,
          }}
        >
          {body}
        </p>
      </div>
    </Reveal>
  );
}
