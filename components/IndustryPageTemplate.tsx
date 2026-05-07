import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  MapPin,
  Phone,
  Search,
  Droplet,
  Zap,
  Hammer,
  Building2,
  Heart,
  Users,
  FileCheck,
  Scale,
  Calculator,
  Camera,
  Utensils,
  Dumbbell,
  Sparkles,
  Scissors,
  Brush,
  Truck,
  Car,
  PawPrint,
  Lock,
  Shield,
  Leaf,
  TreePine,
  Bug,
  HardHat,
  Briefcase,
  GraduationCap,
  Plane,
  Coffee,
  Smile,
  Home,
  type LucideIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IndustryHero } from "@/components/IndustryHero";
import { AnswerBox } from "@/components/AnswerBox";
import { IndustryCaseStudyEmbed } from "@/components/IndustryCaseStudyEmbed";
import { Reveal } from "@/components/Reveal";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  videoSchemas,
} from "@/lib/schema";
import { SITE } from "@/lib/site";
import type { Industry } from "@/lib/industry-types";
import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench,
  MapPin,
  Phone,
  Search,
  Droplet,
  Zap,
  Hammer,
  Building2,
  Heart,
  Users,
  FileCheck,
  Scale,
  Calculator,
  Camera,
  Utensils,
  Dumbbell,
  Sparkles,
  Scissors,
  Brush,
  Truck,
  Car,
  PawPrint,
  Lock,
  Shield,
  Leaf,
  TreePine,
  Bug,
  HardHat,
  Briefcase,
  GraduationCap,
  Plane,
  Coffee,
  Smile,
  Home,
};

export function IndustryPageTemplate({ industry }: { industry: Industry }) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    ...(industry.parentIndustry
      ? [
          {
            name:
              INDUSTRIES.find((i) => i.slug === industry.parentIndustry)?.name ||
              "",
            href: `/industries/${industry.parentIndustry}`,
          },
        ]
      : []),
    {
      name: industry.name,
      href: `/industries/${industry.slug}`,
    },
  ];

  const sisterIndustryData = (industry.sisterIndustries || [])
    .map((slug) => INDUSTRIES.find((i) => i.slug === slug))
    .filter(Boolean) as Industry[];

  const topCityData = (industry.topCities || [])
    .map((slug) => LOCATIONS.find((l) => l.slug === slug))
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Free SEO Website for US ${industry.pluralLowercase}`,
              description: `5-day build, $247/month bundled. 90-day qualified-lead guarantee.`,
              url: `${SITE.url}/industries/${industry.slug}`,
              serviceType: `${industry.name} Website Design and SEO`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(industry.faq)),
        }}
      />
      {industry.caseStudyVideoId &&
        videoSchemas()
          .filter((v) =>
            (v as { contentUrl: string }).contentUrl?.includes(
              industry.caseStudyVideoId!
            )
          )
          .map((vs, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(vs) }}
            />
          ))}

      <Breadcrumbs items={breadcrumbs} />

      <IndustryHero
        eyebrow={industry.hero.eyebrow}
        title={
          <>
            {industry.hero.titleLead}{" "}
            <span className="rose-underline">{industry.hero.titleAccent}</span>
          </>
        }
        subtitle={industry.hero.subtitle}
        bullets={industry.hero.bullets}
      />

      <AnswerBox
        question={industry.answerBox.question}
        answer={
          <>
            {industry.answerBox.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i > 0 ? "mt-3" : ""}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </>
        }
      />

      {industry.problem && (
        <section className="section" style={{ background: "white" }}>
          <div className="container-x max-w-4xl">
            <Reveal>
              <span className="eyebrow on-light">{industry.problem.eyebrow}</span>
              <h2 className="mt-4">{industry.problem.heading}</h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              {industry.problem.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p
                    className="text-lg"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.7,
                    }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className="section"
        style={{ background: "var(--color-platinum)" }}
      >
        <div className="container-x max-w-5xl">
          <Reveal className="mb-10">
            <span className="eyebrow on-light">What you get</span>
            <h2 className="mt-4">
              Built around how Americans find {industry.pluralLowercase}.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {industry.whatYouGet.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || Wrench;
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div
                    className="p-6 rounded-[16px] h-full"
                    style={{
                      background: "white",
                      border: "1px solid var(--hair-strong)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center"
                      style={{
                        background: "var(--rose-soft)",
                        color: "var(--color-rose)",
                      }}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <h3 className="mb-3">{item.title}</h3>
                    <p
                      className="text-[15px]"
                      style={{
                        color: "var(--color-ink-2)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {industry.caseStudyVideoId && (
        <section
          className="section"
          style={{ background: "white" }}
        >
          <div className="container-x max-w-5xl">
            <Reveal className="mb-10">
              <span className="eyebrow on-light">Case study</span>
              <h2 className="mt-4">
                Watch a real {industry.name.toLowerCase().replace(/s$/, "")} tell
                the story.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <IndustryCaseStudyEmbed videoId={industry.caseStudyVideoId} />
            </Reveal>
            {industry.caseStudySlug && (
              <Reveal delay={200} className="mt-8 text-center">
                <Link
                  href={`/case-studies/${industry.caseStudySlug}`}
                  className="btn btn-ghost"
                >
                  Read the full case study →
                </Link>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {industry.complianceNote && (
        <section
          className="section"
          style={{ background: "var(--color-platinum)" }}
        >
          <div className="container-x max-w-4xl">
            <Reveal>
              <span className="eyebrow on-light">
                {industry.complianceNote.eyebrow}
              </span>
              <h2 className="mt-4">{industry.complianceNote.heading}</h2>
              {industry.complianceNote.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-5 text-lg"
                  style={{
                    color: "var(--color-ink-2)",
                    lineHeight: 1.7,
                  }}
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <Pricing withId={false} />

      {industry.success && (
        <section
          className="section"
          style={{
            background:
              "linear-gradient(180deg, var(--color-platinum) 0%, white 100%)",
          }}
        >
          <div className="container-x max-w-4xl">
            <Reveal>
              <span className="eyebrow on-light">{industry.success.eyebrow}</span>
              <h2 className="mt-4">{industry.success.heading}</h2>
              <div className="mt-7 space-y-5">
                {industry.success.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg"
                    style={{
                      color: "var(--color-ink-2)",
                      lineHeight: 1.7,
                    }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {(sisterIndustryData.length > 0 || topCityData.length > 0) && (
        <section
          className="section"
          style={{ background: "white" }}
        >
          <div className="container-x max-w-5xl">
            {sisterIndustryData.length > 0 && (
              <div className="mb-10">
                <Reveal className="mb-7 text-center">
                  <span className="eyebrow on-light">Related industries</span>
                  <h2 className="mt-4">Other {industry.category === "trades" ? "trades" : "industries"} we build for.</h2>
                </Reveal>
                <div className="flex flex-wrap justify-center gap-3">
                  {sisterIndustryData.map((sister) => (
                    <Link
                      key={sister.slug}
                      href={`/industries/${sister.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      style={{
                        background: "var(--color-platinum)",
                        border: "1px solid var(--hair-strong)",
                        color: "var(--color-ink)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {sister.name}{" "}
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {topCityData.length > 0 && (
              <div>
                <Reveal className="mb-7 text-center">
                  <span className="eyebrow on-light">Servicing these cities</span>
                  <h2 className="mt-4">
                    {industry.name} websites in your city.
                  </h2>
                </Reveal>
                <div className="flex flex-wrap justify-center gap-3">
                  {topCityData.map((city) => (
                    <Link
                      key={city!.slug}
                      href={`/locations/${city!.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      style={{
                        background: "white",
                        border: "1px solid var(--hair-strong)",
                        color: "var(--color-ink)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      <MapPin size={14} /> {city!.city}{" "}
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <FAQ
        faqs={industry.faq}
        heading={`${industry.name} website FAQs.`}
        eyebrow={`${industry.name} FAQ`}
      />

      <FinalCTA
        heading={`Free ${industry.name.toLowerCase()} website. 5 working days. 90-day lead guarantee.`}
        body="Apply in 60 seconds. Written agreement in your inbox within 24 hours."
      />
    </>
  );
}
