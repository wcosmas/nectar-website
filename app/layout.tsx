import type { Metadata } from "next";
import { Instrument_Sans, Bodoni_Moda, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

// Carries the whole system: display, UI, body, figures.
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans-brand",
  display: "swap",
});

// The letterhead Didone. Used only for the wordmark and for a single
// emphasised word inside a headline — never for a whole heading.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://www.nectartechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nectar Technologies — Systems of record for African institutions",
    template: "%s · Nectar Technologies",
  },
  description:
    "Nectar Technologies builds and operates enterprise systems, research platforms and applied AI for institutions across Africa. Founded 2019 in Kampala, Uganda.",
  keywords: [
    "Nectar Technologies",
    "software development Uganda",
    "enterprise systems Africa",
    "HRMS Uganda",
    "applied AI research",
    "technology consulting Kampala",
  ],
  authors: [{ name: "Nectar Technologies" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nectar Technologies",
    title: "Nectar Technologies — Systems of record for African institutions",
    description:
      "Enterprise systems, research platforms and applied AI for institutions across Africa. Built and operated from Kampala since 2019.",
    locale: "en_UG",
  },
  twitter: {
    card: "summary",
    title: "Nectar Technologies",
    description:
      "Enterprise systems, research platforms and applied AI for institutions across Africa.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${bodoni.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
