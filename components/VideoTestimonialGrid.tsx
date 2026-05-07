"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { SITE } from "@/lib/site";

type Video = (typeof SITE.videos)[number];

function VideoCard({ v }: { v: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-[14px] group cursor-pointer"
      style={{
        background: "var(--color-navy)",
        boxShadow: "0 16px 36px -12px rgba(18,41,51,0.35)",
      }}
      onClick={() => setPlaying(true)}
    >
      <div className="aspect-video relative">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={`${v.name} - ${v.business} ${v.city}`}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
              alt={`${v.name} testimonial - ${v.business} ${v.city}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 flex items-center justify-center transition-colors"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,41,51,0.05) 0%, rgba(18,41,51,0.55) 100%)",
              }}
            >
              <button
                aria-label={`Play testimonial from ${v.name}`}
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{
                  background: "var(--color-rose)",
                  boxShadow: "0 12px 28px -8px rgba(227,87,171,0.6)",
                }}
              >
                <Play size={26} fill="white" stroke="white" strokeWidth={1} />
              </button>
            </div>
          </>
        )}
      </div>
      <div
        className="p-5"
        style={{
          background: "var(--color-navy)",
          color: "var(--color-platinum)",
        }}
      >
        <div
          className="text-xs uppercase tracking-[0.16em] mb-2"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-indigo)",
          }}
        >
          {v.city} · Free build case study
        </div>
        <div className="font-extrabold text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          {v.name}
        </div>
        <div className="text-sm opacity-80 mt-1">{v.business}</div>
        <div className="text-sm mt-3 leading-relaxed opacity-95">
          &ldquo;{v.outcome}.&rdquo;
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonialGrid({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {SITE.videos.map((v) => (
        <VideoCard key={v.id} v={v} />
      ))}
    </div>
  );
}
