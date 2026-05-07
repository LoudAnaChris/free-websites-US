"use client";

import { useEffect, useMemo, useState } from "react";

function nextSundayMidnight() {
  const now = new Date();
  const d = new Date(now);
  const day = d.getDay();
  const daysToSun = (7 - day) % 7 || 7;
  d.setDate(d.getDate() + daysToSun);
  d.setHours(23, 59, 59, 0);
  return d;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function AnnouncementBar({ slotsLeft = 3 }: { slotsLeft?: number }) {
  const target = useMemo(nextSundayMidnight, []);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = now === null ? 0 : Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);

  return (
    <div
      className="bg-rose text-white text-sm font-semibold tracking-tight flex items-center justify-center gap-4 px-5 py-2 cursor-pointer hover:bg-rose-deep transition-colors text-center"
      style={{ fontFamily: "var(--font-display)" }}
      onClick={() =>
        document
          .getElementById("qualifier")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          document
            .getElementById("qualifier")
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <span className="hidden sm:inline">
        <strong className="font-extrabold">{slotsLeft} free website slots</strong>{" "}
        open this month. Doors close Sunday at midnight.
      </span>
      <span className="sm:hidden">
        <strong className="font-extrabold">{slotsLeft} slots</strong> · Sunday close
      </span>
      {now !== null && (
        <span
          className="inline-flex gap-1 bg-white/20 px-2.5 py-0.5 rounded-full text-xs"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
        >
          {pad(days)}d : {pad(hours)}h : {pad(minutes)}m
        </span>
      )}
    </div>
  );
}
