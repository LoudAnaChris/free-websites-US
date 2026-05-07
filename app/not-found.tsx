import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
        minHeight: "60vh",
        padding: "80px 0",
      }}
    >
      <div className="container-x text-center max-w-xl">
        <div
          className="text-[120px] sm:text-[160px] font-extrabold leading-none mb-4"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-rose)",
            letterSpacing: "-0.05em",
          }}
        >
          404
        </div>
        <h1>Page not found.</h1>
        <p
          className="mt-5 text-lg"
          style={{
            color: "var(--color-ink-2)",
            lineHeight: 1.6,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist on
          Free Websites US. Try the homepage or check the case studies.
        </p>
        <div className="mt-7 flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="btn btn-primary">
            <Home size={16} /> Go home
          </Link>
          <Link href="/case-studies" className="btn btn-ghost">
            <ArrowLeft size={16} /> See case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
