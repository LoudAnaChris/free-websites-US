import { Reveal } from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Apply",
    body: "Tell us about your business and which plan you want. 60 seconds.",
  },
  {
    n: "2",
    title: "Agreement",
    body: "Written agreement in your inbox within 24 hours. One e-sign. No call.",
  },
  {
    n: "3",
    title: "Intake",
    body: "Fill in the intake form. The 5-day build clock starts.",
  },
  {
    n: "4",
    title: "Approve",
    body: "Review your site via Loom. Two written feedback rounds maximum.",
  },
  {
    n: "5",
    title: "Live",
    body: "Site goes live. Tracking confirmed. First invoice issued only then.",
  },
];

export function HowItWorks({ withId = true }: { withId?: boolean }) {
  return (
    <section
      id={withId ? "how-it-works" : undefined}
      className="section"
      style={{ background: "white" }}
    >
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="eyebrow on-light">The path</span>
          <h2 style={{ marginTop: 14 }}>
            From form to first lead, here&apos;s the path.
          </h2>
          <p
            className="mt-5 text-lg"
            style={{ color: "var(--color-ink-2)" }}
          >
            Five steps. No calls in any of them. Every handover happens by
            email or Loom video.
          </p>
        </Reveal>

        <div className="relative grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
          <div
            className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, var(--hair-strong) 0 6px, transparent 6px 12px)",
            }}
            aria-hidden
          />
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 80}
              className="relative text-center px-2"
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center font-extrabold text-xl"
                style={{
                  background: "white",
                  border: "2px solid var(--color-rose)",
                  color: "var(--color-rose)",
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 8px 20px -8px rgba(227,87,171,0.4)",
                }}
              >
                {s.n}
              </div>
              <h3 className="mb-2">{s.title}</h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-ink-2)", lineHeight: 1.6 }}
              >
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
