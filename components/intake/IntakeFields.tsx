"use client";

import { ReactNode } from "react";

const inputBase = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid var(--hair-strong)",
  outline: "none",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  background: "white",
  transition: "border-color 0.15s",
};

const labelBase = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: 14.5,
  color: "var(--color-ink)",
  marginBottom: 6,
};

const helperBase = {
  fontSize: 13,
  color: "var(--color-ink-3)",
  marginTop: 4,
  marginBottom: 8,
  lineHeight: 1.5,
};

export function Field({
  label,
  helper,
  children,
}: {
  label: string;
  helper?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-5">
      <label style={labelBase}>{label}</label>
      {helper && <div style={helperBase}>{helper}</div>}
      {children}
    </div>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      style={inputBase}
    />
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      style={{ ...inputBase, resize: "vertical", lineHeight: 1.5 }}
    />
  );
}

export function RadioGroup<T extends string>({
  value,
  onChange,
  options,
  name,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  name: string;
}) {
  return (
    <div className="space-y-2.5">
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex items-start gap-3 p-3.5 rounded-[10px] cursor-pointer border transition-all ${selected ? "ring-1" : ""}`}
            style={{
              borderColor: selected ? "var(--color-rose)" : "var(--hair-strong)",
              background: selected ? "var(--rose-soft)" : "white",
            }}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected}
              onChange={() => onChange(opt.value)}
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
              className="text-[15px] leading-snug"
              style={{ color: "var(--color-ink)" }}
            >
              {opt.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export function CheckboxGroup({
  values,
  onToggle,
  options,
  columns = 1,
}: {
  values: string[];
  onToggle: (v: string) => void;
  options: string[];
  columns?: 1 | 2;
}) {
  return (
    <div
      className="grid gap-2.5"
      style={{ gridTemplateColumns: columns === 2 ? "1fr 1fr" : "1fr" }}
    >
      {options.map((opt) => {
        const checked = values.includes(opt);
        return (
          <label
            key={opt}
            className="flex items-start gap-3 p-3 rounded-[10px] cursor-pointer border transition-all"
            style={{
              borderColor: checked ? "var(--color-rose)" : "var(--hair-strong)",
              background: checked ? "var(--rose-soft)" : "white",
            }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(opt)}
              className="sr-only"
            />
            <div
              className="w-5 h-5 rounded-[5px] border-2 flex-shrink-0 mt-0.5 flex items-center justify-center"
              style={{
                borderColor: checked
                  ? "var(--color-rose)"
                  : "var(--hair-strong)",
                background: checked ? "var(--color-rose)" : "white",
              }}
            >
              {checked && (
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span
              className="text-[14.5px] leading-snug"
              style={{ color: "var(--color-ink)" }}
            >
              {opt}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export function SectionHeading({
  number,
  title,
  intro,
}: {
  number: number;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-7">
      <div
        className="text-xs mb-2"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-rose)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        Step {number} of 11
      </div>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>{title}</h2>
      {intro && (
        <p
          className="mt-3 text-[15px]"
          style={{
            color: "var(--color-ink-2)",
            lineHeight: 1.6,
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
