import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Mulish, Inter, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StickyApply } from "@/components/StickyApply";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#122933",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Free SEO Websites for US Small Businesses | $247/mo, No Upfront",
    template: "%s | Free SEO Websites by Loudachris",
  },
  description:
    "A free SEO website for your US small business in 5 working days. $247/mo includes hosting, SEO, and ongoing optimization. 90-day qualified-lead guarantee or your money back. Compare to $2,999 upfront fees elsewhere.",
  keywords: [
    "small business web design",
    "web design services for small business",
    "affordable seo packages",
    "monthly seo packages",
    "local seo for small business",
    "seo services for small business",
    "website designer near me",
    "free SEO website",
    "small business seo packages",
    "affordable seo services",
  ],
  authors: [{ name: SITE.founder.name, url: SITE.founder.linkedIn }],
  creator: SITE.founder.name,
  publisher: SITE.parentBrand,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.fullName,
    title: "Free SEO Websites for US Small Businesses",
    description:
      "Free 5-day build. $247/mo for hosting + SEO. 90-day qualified-lead guarantee. Beats $2,999 upfront agency fees.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free SEO Websites by Loudachris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Websites for US Small Businesses",
    description: "$247/mo. No upfront. 90-day qualified-lead guarantee.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      className={`${mulish.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyApply />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.ga4}', { anonymize_ip: true });
          `}
        </Script>
      </body>
    </html>
  );
}
