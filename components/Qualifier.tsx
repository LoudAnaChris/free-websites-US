"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

type FormState = {
  industry: string;
  staff: string;
  city: string;
  hasWebsite: string;
  goal: string;
  plan: string;
  business: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  company_url: string;
};

const INITIAL: FormState = {
  industry: "",
  staff: "",
  city: "",
  hasWebsite: "",
  goal: "",
  plan: "",
  business: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
  company_url: "",
};

const STEPS = [
  { key: "industry", label: "Industry" },
  { key: "staff", label: "Staff" },
  { key: "city", label: "City" },
  { key: "goal", label: "Goal" },
  { key: "plan", label: "Plan" },
  { key: "details", label: "Details" },
] as const;

export function Qualifier() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      data.append("source", "qualifier");
      const r = await fetch("/api/lead", { method: "POST", body: data });
      if (!r.ok) {
        const text = await r.text();
        throw new Error(text || "Submission failed");
      }
      setDone(true);
    } catch (e) {
      setError(
        "We couldn't send your application. Please email chris@loudachris.com.au directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <section
        id="qualifier"
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-2xl">
          <div
            className="rounded-[22px] p-10 text-center"
            style={{
              background: "white",
              border: "1px solid var(--hair)",
              boxShadow: "0 16px 40px -12px rgba(18,41,51,0.15)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: "var(--rose-soft)" }}
            >
              <Check size={32} color="var(--color-rose)" strokeWidth={3} />
            </div>
            <h3 style={{ marginBottom: 12 }}>Application received.</h3>
            <p
              style={{ color: "var(--color-ink-2)", maxWidth: 480, margin: "0 auto" }}
            >
              Chris will review and reply with a written agreement (or a polite
              decline) within 24 hours. No call. Check your inbox for{" "}
              <strong>chris@loudachris.com.au</strong>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <section
      id="qualifier"
      className="section"
      style={{ background: "var(--color-platinum)" }}
    >
      <div className="container-x">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="eyebrow on-light">Apply</span>
          <h2 style={{ marginTop: 14 }}>
            See if you qualify. <span className="rose-underline">60 seconds.</span>
          </h2>
          <p
            style={{
              color: "var(--color-ink-2)",
              margin: "16px auto 0",
              maxWidth: 540,
            }}
          >
            No call, no commitment. We&apos;ll email back within 24 hours with a
            written agreement or a polite decline.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (step < STEPS.length - 1) setStep(step + 1);
            else submit();
          }}
          className="max-w-2xl mx-auto rounded-[22px] p-7 sm:p-10"
          style={{
            background: "white",
            border: "1px solid var(--hair)",
            boxShadow: "0 16px 40px -12px rgba(18,41,51,0.12)",
          }}
        >
          {/* Honeypot */}
          <label
            htmlFor="company_url"
            className="absolute"
            style={{
              opacity: 0,
              position: "absolute",
              left: "-9999px",
              height: 0,
              width: 0,
              overflow: "hidden",
            }}
          >
            Leave blank
            <input
              id="company_url"
              name="company_url"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company_url}
              onChange={(e) => update("company_url", e.target.value)}
            />
          </label>

          <div className="mb-6">
            <div
              className="h-1 rounded-full"
              style={{ background: "var(--hair)" }}
            >
              <div
                className="h-1 rounded-full transition-all"
                style={{
                  width: `${progress}%`,
                  background: "var(--color-rose)",
                }}
              />
            </div>
            <div
              className="mt-2 text-xs"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-ink-3)",
                letterSpacing: "0.08em",
              }}
            >
              STEP {step + 1} OF {STEPS.length} ·{" "}
              {STEPS[step].label.toUpperCase()}
            </div>
          </div>

          {step === 0 && (
            <RadioStep
              question="What does your business do?"
              value={form.industry}
              onChange={(v) => update("industry", v)}
              options={[
                "Trades (plumber, electrician, contractor, HVAC, etc.)",
                "Professional services (lawyer, accountant, consultant)",
                "Real estate or mortgage broker",
                "Hospitality, beauty, fitness, retail",
                "Health and wellness (non-medical, non-licensed)",
                "Something else",
              ]}
            />
          )}

          {step === 1 && (
            <RadioStep
              question="How many staff?"
              value={form.staff}
              onChange={(v) => update("staff", v)}
              options={[
                "Just me (1)",
                "2-5 people",
                "6-10 people",
                "11-15 people",
                "More than 15",
              ]}
              note={
                form.staff === "More than 15"
                  ? "Heads up: we focus on businesses under 15 staff. We'll still review, but you may be a better fit for our full-service agency."
                  : undefined
              }
            />
          )}

          {step === 2 && (
            <TextStep
              question="What city or area do you serve?"
              placeholder="New York, Los Angeles, Chicago, Houston, Phoenix, etc."
              value={form.city}
              onChange={(v) => update("city", v)}
            />
          )}

          {step === 3 && (
            <RadioStep
              question="What do you want from a website?"
              value={form.goal}
              onChange={(v) => update("goal", v)}
              options={[
                "Phone calls and quote requests from local searches",
                "Replace a website that doesn't rank or convert",
                "Look more legit so customers trust me",
                "First website ever for my business",
                "Not sure yet",
              ]}
            />
          )}

          {step === 4 && (
            <RadioStep
              question="Which plan suits you best?"
              value={form.plan}
              onChange={(v) => update("plan", v)}
              options={[
                "12-month best value · $247/mo",
                "6-month flexible · $397/mo",
                "No lock-in · $497/mo",
                "Tell me which is best for me",
              ]}
            />
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h3 style={{ marginBottom: 4 }}>Just a few details.</h3>
              <p style={{ color: "var(--color-ink-2)", marginBottom: 16 }}>
                We use these to send the written agreement.
              </p>
              <Field
                label="Business name"
                name="business"
                required
                value={form.business}
                onChange={(v) => update("business", v)}
              />
              <Field
                label="Your name"
                name="name"
                required
                value={form.name}
                onChange={(v) => update("name", v)}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(v) => update("email", v)}
              />
              <Field
                label="Phone (optional)"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(v) => update("phone", v)}
              />
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-ink)",
                  }}
                >
                  Anything else we should know? (optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="w-full px-4 py-3 rounded-[10px] border outline-none transition-colors focus:border-[color:var(--color-rose)]"
                  style={{
                    borderColor: "var(--hair-strong)",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    background: "white",
                  }}
                />
              </div>
            </div>
          )}

          {error && (
            <div
              className="mt-5 p-4 rounded-lg text-sm"
              style={{
                background: "rgba(220,38,38,0.06)",
                color: "#b91c1c",
                border: "1px solid rgba(220,38,38,0.2)",
              }}
            >
              {error}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 mt-8">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn btn-ghost btn-sm"
              >
                <ArrowLeft size={14} strokeWidth={2.5} /> Back
              </button>
            ) : (
              <span />
            )}
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary"
            >
              {submitting
                ? "Sending..."
                : step === STEPS.length - 1
                ? "Send application"
                : "Continue"}{" "}
              {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function RadioStep({
  question,
  value,
  onChange,
  options,
  note,
}: {
  question: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  note?: string;
}) {
  return (
    <div>
      <h3 style={{ marginBottom: 20 }}>{question}</h3>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <label
              key={opt}
              className={`flex items-start gap-3 p-4 rounded-[12px] cursor-pointer border transition-all ${
                selected ? "ring-1" : ""
              }`}
              style={{
                borderColor: selected
                  ? "var(--color-rose)"
                  : "var(--hair-strong)",
                background: selected ? "var(--rose-soft)" : "white",
              }}
            >
              <input
                type="radio"
                name="step-option"
                value={opt}
                checked={selected}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              <div
                className="w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center"
                style={{
                  borderColor: selected
                    ? "var(--color-rose)"
                    : "var(--hair-strong)",
                }}
              >
                {selected && (
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "var(--color-rose)" }}
                  />
                )}
              </div>
              <span
                className="text-sm sm:text-base leading-snug"
                style={{ color: "var(--color-ink)" }}
              >
                {opt}
              </span>
            </label>
          );
        })}
      </div>
      {note && (
        <p
          className="mt-4 text-sm p-3 rounded-lg"
          style={{
            background: "var(--indigo-soft)",
            color: "var(--color-indigo-deep)",
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function TextStep({
  question,
  placeholder,
  value,
  onChange,
}: {
  question: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h3 style={{ marginBottom: 20 }}>{question}</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus
        required
        className="w-full px-4 py-3.5 rounded-[10px] border outline-none transition-colors focus:border-[color:var(--color-rose)]"
        style={{
          borderColor: "var(--hair-strong)",
          fontFamily: "var(--font-body)",
          fontSize: 17,
          background: "white",
        }}
      />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold mb-2"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-ink)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--color-rose)" }} aria-hidden>
            {" *"}
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "on"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-[10px] border outline-none transition-colors focus:border-[color:var(--color-rose)]"
        style={{
          borderColor: "var(--hair-strong)",
          fontFamily: "var(--font-body)",
          fontSize: 15,
          background: "white",
        }}
      />
    </div>
  );
}
