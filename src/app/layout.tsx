import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/layout/navbar";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { SwRegister } from "@/components/sw-register";
import {
  personJsonLd,
  photoJsonLd,
  SITE_DESCRIPTION,
  SITE_TITLE,
  sameAsUrls,
  websiteJsonLd,
} from "@/lib/seo";
import { nameVariants, profile, SITE_NAME, SITE_URL } from "@/utils/constants";
import "./globals.css";

const kenfolg = localFont({
  src: "../utils/Kenfolg.otf",
  variable: "--font-kenfolg",
});

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

// Paste tokens into Vercel → Settings → Environment Variables, then redeploy.
const verification: NonNullable<Metadata["verification"]> = {};
if (process.env.GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.GOOGLE_SITE_VERIFICATION;
}
if (process.env.BING_SITE_VERIFICATION) {
  verification.other = { "msvalidate.01": process.env.BING_SITE_VERIFICATION };
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    ...nameVariants,
    "Aariyan Apu portfolio",
    "Aariyan Apu developer",
    "Aariyan Apu Bangladesh",
    "Aariyan Apu Barishal",
    "aariyan.info",
    "web developer Bangladesh",
    "web developer Barishal",
    "web developer Barisal",
    "full stack developer Bangladesh",
    "freelance web developer Bangladesh",
    "Next.js developer Bangladesh",
    "React developer Bangladesh",
    "TypeScript developer Bangladesh",
    "React Native developer Bangladesh",
    "e-commerce developer Bangladesh",
    "Mellow Bangla app developer",
    "First Aid Surgical website developer",
    "NonstopGG developer",
    "GBDC blood donation platform developer",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification,
  openGraph: {
    type: "profile",
    firstName: profile.givenName,
    lastName: profile.familyName,
    username: "aariyanapu",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aariyanapu",
    site: "@aariyanapu",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "Aariyan Apu — Blog RSS" },
      ],
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/android-chrome-192x192.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },
};

const identityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd(), photoJsonLd(), websiteJsonLd()],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${quickSand.variable} ${kenfolg.variable} antialiased`}>
        {/* Person + WebSite graph on every page so any URL identifies the owner. */}
        <JsonLd data={identityJsonLd} />
        {/* rel="me" links tie this domain to the same identity on other sites. */}
        {sameAsUrls.map((url) => (
          <link key={url} rel="me" href={url} />
        ))}
        <SwRegister />
        <MouseSpotlight />
        <Navbar />
        {children}
        <script
          defer
          src="https://umami.aariyan.info/script.js"
          data-website-id="b0c50aeb-d4d5-45dc-903c-f37d5e0822cc"
        ></script>
      </body>
    </html>
  );
}
