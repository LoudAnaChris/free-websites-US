import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Guarantees } from "@/components/Guarantees";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Value } from "@/components/Value";
import { Proof } from "@/components/Proof";
import { Pricing } from "@/components/Pricing";
import { DeepDive } from "@/components/DeepDive";
import { Qualifier } from "@/components/Qualifier";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { HOMEPAGE_FAQS } from "@/lib/faqs";
import {
  serviceSchema,
  videoSchemas,
  faqSchema,
  aggregateRatingSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free SEO Websites for US Small Businesses | $297/mo, No Upfront",
  description:
    "Small business web design + SEO bundled. Free 5-day build for US small businesses. $297/mo includes hosting, ranking work, and content. 90-day qualified-lead guarantee. Beats $2,999 upfront agency fees.",
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Free SEO Website Build",
              description:
                "Free website build in 5 working days. Hosting plus SEO from $297/month. 90-day qualified-lead guarantee.",
              url: SITE.url,
              serviceType: "Website Design and SEO",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema()),
        }}
      />
      {videoSchemas().map((vs, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vs) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(HOMEPAGE_FAQS)),
        }}
      />

      <Hero />
      <Guarantees />
      <Problem />
      <HowItWorks />
      <Value />
      <Proof />
      <Pricing />
      <DeepDive />
      <Qualifier />
      <FAQ faqs={HOMEPAGE_FAQS} />
      <FinalCTA />
    </>
  );
}
