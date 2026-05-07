import { Reveal } from "./Reveal";

export function AnswerBox({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <section className="py-12" style={{ background: "white" }}>
      <div className="container-x max-w-4xl">
        <Reveal>
          <div
            className="rounded-[18px] p-7 sm:p-8"
            style={{
              background:
                "linear-gradient(135deg, var(--color-platinum) 0%, white 100%)",
              border: "1px solid var(--hair-strong)",
            }}
          >
            <div
              className="text-xs mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-indigo-deep)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Quick answer
            </div>
            <h2
              className="mb-4"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              {question}
            </h2>
            <div
              className="text-base sm:text-lg"
              style={{ color: "var(--color-ink-2)", lineHeight: 1.7 }}
            >
              {answer}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
