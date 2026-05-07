import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA({
  heading = "3 build slots left this month.",
  body = "Apply in 60 seconds. Written proposal in your inbox within 48 hours. No call needed.",
  ctaLabel = "Claim a build slot",
  ctaHref = "/#qualifier",
}: {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-navy) 0%, var(--color-navy-2) 100%)",
        color: "var(--color-platinum)",
        padding: "clamp(72px, 9vw, 130px) 0",
      }}
    >
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(227,87,171,0.18) 0%, rgba(227,87,171,0) 65%)",
          filter: "blur(50px)",
        }}
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 style={{ color: "var(--color-platinum)" }}>{heading}</h2>
          <p
            className="mt-5 text-lg"
            style={{ color: "rgba(245,245,245,0.85)" }}
          >
            {body}
          </p>
          <div className="mt-8">
            <Link href={ctaHref} className="btn btn-primary btn-lg">
              {ctaLabel} <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
