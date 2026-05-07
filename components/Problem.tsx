import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] items-start max-w-6xl mx-auto">
          <Reveal>
            <span className="eyebrow on-light">The status quo</span>
            <h2 className="mt-4">You&apos;ve been here before.</h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={80}>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Maybe it was the{" "}
                <span className="strike">$5,000 website</span> that looked
                nice and ranked nowhere. Maybe it was the agency charging{" "}
                <span className="strike">$1,500 a month</span> for SEO that
                never seemed to land a single lead. Maybe it was the{" "}
                <span className="strike">locked-in 12-month contract</span> you
                couldn&apos;t get out of.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p
                className="text-lg"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
              >
                Most small business owners deserve a better deal than this. A
                website built for search from day one, designed for the actual
                jobs your customers are typing into Google.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="text-lg font-semibold"
                style={{ color: "var(--color-ink)", lineHeight: 1.7 }}
              >
                A website that pays for itself with one extra job, not one that
                sits there as another monthly bill.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
