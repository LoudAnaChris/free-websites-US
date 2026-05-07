"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { SITE } from "@/lib/site";

export function IndustryCaseStudyEmbed({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);
  const v = SITE.videos.find((x) => x.id === videoId);
  if (!v) return null;

  return (
    <div
      className="relative overflow-hidden rounded-[16px] cursor-pointer group max-w-3xl mx-auto"
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
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,41,51,0.05) 0%, rgba(18,41,51,0.55) 100%)",
              }}
            >
              <button
                aria-label={`Play ${v.name} testimonial`}
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{
                  background: "var(--color-rose)",
                  boxShadow: "0 12px 28px -8px rgba(227,87,171,0.6)",
                }}
              >
                <Play size={32} fill="white" stroke="white" strokeWidth={1} />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="p-5" style={{ color: "var(--color-platinum)" }}>
        <div className="font-extrabold" style={{ fontFamily: "var(--font-display)" }}>
          {v.name} · {v.business}
        </div>
        <div className="text-sm opacity-85 mt-1">
          &ldquo;{v.outcome}.&rdquo;
        </div>
      </div>
    </div>
  );
}
