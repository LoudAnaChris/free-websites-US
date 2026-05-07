import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Clock, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Intake submitted — your build clock has started | Loudachris",
  description:
    "Your intake form is in and your 5-working-day build clock has started. Thank you for choosing Loudachris.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function IntakeThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
        padding: "clamp(60px, 8vw, 120px) 0",
        minHeight: "70vh",
      }}
    >
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(227,87,171,0.18) 0%, rgba(227,87,171,0) 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden
      />

      <div className="container-x relative max-w-2xl text-center">
        <div
          className="w-20 h-20 rounded-full mx-auto mb-7 flex items-center justify-center"
          style={{
            background: "var(--color-rose)",
            boxShadow: "0 16px 36px -12px rgba(227,87,171,0.45)",
          }}
        >
          <CheckCircle2 size={42} strokeWidth={2.2} color="white" />
        </div>

        <span className="eyebrow on-light">Build clock started</span>
        <h1 className="mt-4">
          Your free SEO website is{" "}
          <span className="rose-underline">in motion.</span>
        </h1>
        <p
          className="mt-5 text-lg sm:text-xl"
          style={{
            color: "var(--color-ink-2)",
            lineHeight: 1.55,
          }}
        >
          Your intake is in. The 5-working-day build clock has started, and a
          confirmation has been sent to your inbox.
        </p>

        {ref && (
          <div
            className="mt-7 inline-block px-5 py-3 rounded-full"
            style={{
              background: "white",
              border: "1px solid var(--hair-strong)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.06em",
              color: "var(--color-ink-2)",
            }}
          >
            Reference:{" "}
            <strong style={{ color: "var(--color-rose)" }}>{ref}</strong>
          </div>
        )}

        <div
          className="mt-10 p-7 rounded-[18px] text-left"
          style={{
            background: "white",
            border: "1px solid var(--hair-strong)",
            boxShadow: "0 16px 40px -16px rgba(18,41,51,0.1)",
          }}
        >
          <h2
            className="mb-5 text-center"
            style={{ fontSize: 20 }}
          >
            What happens next
          </h2>
          <div className="space-y-5">
            {[
              {
                Icon: Mail,
                title: "By end of next business day",
                body: "Chris confirms receipt and the exact start date of your 5-day build clock.",
              },
              {
                Icon: Clock,
                title: "Days 2-3",
                body: "You receive a Loom video walkthrough of your first preview.",
              },
              {
                Icon: ArrowRight,
                title: "Days 3-4",
                body: "You give written feedback (one round, up to 5 changes).",
              },
              {
                Icon: CheckCircle2,
                title: "Day 5",
                body: "Final review, launch, and tracking confirmed. First invoice issued only after the site is live.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: "var(--rose-soft)",
                    color: "var(--color-rose)",
                  }}
                >
                  <item.Icon size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <div
                    className="font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-ink)",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-[15px]"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.55,
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className="mt-8 text-sm"
          style={{ color: "var(--color-ink-3)" }}
        >
          Any questions, reply to the confirmation email or contact{" "}
          <a
            href={`mailto:${SITE.email}`}
            style={{
              color: "var(--color-rose)",
              fontWeight: 700,
            }}
          >
            {SITE.email}
          </a>
          .
        </p>

        <div className="mt-8">
          <Link href="/" className="btn-link">
            Back to homepage →
          </Link>
        </div>
      </div>
    </section>
  );
}
