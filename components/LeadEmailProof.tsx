import Image from "next/image";
import { Reveal } from "./Reveal";

export function LeadEmailProof({
  eyebrow = "What you actually receive",
  heading = "When a lead comes in, this is what hits your inbox.",
  caption = "Real qualified lead from a Loudachris build (BlueRevive Pool Restoration, Adelaide). Personal contact details redacted. Lead landed 8 days after the site went live. Same lead-delivery format on every Free Websites US build.",
}: {
  eyebrow?: string;
  heading?: string;
  caption?: string;
}) {
  return (
    <section
      className="section"
      style={{ background: "var(--color-platinum)" }}
    >
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[5fr_6fr] items-center max-w-6xl mx-auto">
          <Reveal>
            <span className="eyebrow on-light">{eyebrow}</span>
            <h2 className="mt-4">{heading}</h2>
            <p
              className="mt-5 text-lg"
              style={{
                color: "var(--color-ink-2)",
                lineHeight: 1.65,
              }}
            >
              No mystery, no portal logins. The site&apos;s contact form
              emails the lead straight to you in plain English. Every field a
              service business needs to call back the same day.
            </p>
            <ul
              className="mt-6 space-y-2.5 text-[15.5px]"
              style={{ color: "var(--color-ink-2)" }}
            >
              <li className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-rose)" }}
                />
                Name, email, phone in the first three lines
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-rose)" }}
                />
                Neighborhood or zip (so you know if it&apos;s in your service area)
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-rose)" }}
                />
                The exact service they want and the page they came from
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-rose)" }}
                />
                Their full message in their own words
              </li>
            </ul>
            <p
              className="mt-6 text-sm italic"
              style={{ color: "var(--color-ink-3)" }}
            >
              Reply directly from your inbox. Nothing to learn, no app to
              install.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure
              className="relative rounded-[18px] overflow-hidden"
              style={{
                boxShadow: "0 24px 60px -20px rgba(18,41,51,0.25)",
                border: "1px solid var(--hair-strong)",
                background: "white",
              }}
            >
              <Image
                src="/lead-email-example.png"
                alt="Real lead email from a BlueRevive Pool Restoration enquiry: name, email, phone (redacted), Medindie Gardens suburb, fibreglass pool, pool resurfacing service, message about a 9m by 5m pool with osmosis."
                width={1200}
                height={1080}
                className="w-full h-auto block"
                priority={false}
              />
              <figcaption
                className="px-5 py-4 text-xs"
                style={{
                  background: "var(--color-platinum)",
                  borderTop: "1px solid var(--hair)",
                  color: "var(--color-ink-3)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.55,
                }}
              >
                {caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
