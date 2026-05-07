import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IntakeForm } from "@/components/intake/IntakeForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free SEO Website Intake Form | Loudachris",
  description:
    "Intake form for Free Websites by Loudachris clients. Submitting starts your 5-working-day build clock.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: `${SITE.url}/intake` },
};

export default function IntakePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Intake", href: "/intake" },
        ]}
      />

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
          padding: "clamp(40px, 5vw, 64px) 0 clamp(24px, 3vw, 40px)",
        }}
      >
        <div className="container-x max-w-3xl">
          <span className="eyebrow on-light">Client intake</span>
          <h1 className="mt-4">
            Your <span className="rose-underline">free SEO website</span>{" "}
            intake form.
          </h1>
          <p
            className="mt-5 text-lg"
            style={{
              color: "var(--color-ink-2)",
              lineHeight: 1.6,
            }}
          >
            Thanks for choosing Loudachris. This form gives us everything we
            need to design, write, and launch your site within 5 working days.
          </p>

          <div
            className="mt-7 p-5 rounded-[14px]"
            style={{
              background: "white",
              border: "1px solid var(--hair-strong)",
            }}
          >
            <p
              className="text-sm font-semibold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-rose)",
              }}
            >
              A few notes before you start:
            </p>
            <ul
              className="space-y-2 text-[15px]"
              style={{
                color: "var(--color-ink-2)",
                lineHeight: 1.6,
              }}
            >
              <li className="flex items-start gap-2.5">
                <span style={{ color: "var(--color-rose)" }}>•</span>
                <span>
                  <strong>Take your time.</strong> The clearer you are, the
                  better your site will be. Your draft auto-saves to this
                  browser as you type, so you can come back anytime.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span style={{ color: "var(--color-rose)" }}>•</span>
                <span>
                  <strong>If you don&apos;t know an answer, write &ldquo;You
                  decide&rdquo;.</strong> We&apos;ll choose what&apos;s right
                  for your industry.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span style={{ color: "var(--color-rose)" }}>•</span>
                <span>
                  <strong>If a question doesn&apos;t apply, write
                  &ldquo;N/A&rdquo;.</strong>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span style={{ color: "var(--color-rose)" }}>•</span>
                <span>
                  <strong>Your 5-working-day build clock starts the moment
                  you submit this form.</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <IntakeForm />
    </>
  );
}
