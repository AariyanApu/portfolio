import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import FooterCredit from "@/components/footer/FooterCredit";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "@/auth/AuthProvider";

const quickSand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

const APP_NAME = "Aariyan Apu - Full Stack Web Developer";
const APP_DEFAULT_TITLE = "Aariyan Apu - Full Stack Web Developer | Bangladesh";
const APP_TITLE_TEMPLATE = "%s | Aariyan Apu";
const APP_DESCRIPTION =
  "Aariyan Apu - Full Stack Web Developer from Bangladesh specializing in Next.js, React, TypeScript, and modern web technologies. Building engaging and accessible web solutions for seamless digital experiences.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: "https://aariyan.info",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aariyan Apu - Full Stack Web Developer Bangladesh",
      },
      {
        url: "/asset/about-me.jpg",
        width: 400,
        height: 400,
        alt: "Aariyan Apu Professional Photo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ["/twitter-image.png", "/asset/about-me.jpg"],
    creator: "@aariyanapu",
    site: "@aariyanapu",
  },
  metadataBase: new URL("https://aariyan.info"),
  alternates: {
    canonical: "https://aariyan.info",
    languages: {
      "en-US": "https://aariyan.info",
      "bn-BD": "https://aariyan.info",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  keywords: [
    "Aariyan Apu",
    "aariyan apu",
    "aariyan",
    "aaru",
    "arian apu",
    "arian opu",
    "ariyan apu",
    "ariyan opu",
    "arian",
    "aaruni",
    "aarian",
    "আরিয়ান অপু",
    "আরিয়ান",
    "full stack web developer bangladesh",
    "web developer bangladesh",
    "nextjs developer bangladesh",
    "react developer bangladesh",
    "typescript developer",
    "frontend developer",
    "backend developer",
    "web development",
    "portfolio website",
    "bangladeshi developer",
    "aariyan.info",
    "best web developer bangladesh",
    "top web developer dhaka",
    "react nextjs expert",
    "mern stack developer",
    "freelance developer bangladesh",
    "web development services",
  ],
  authors: [{ name: "Aariyan Apu", url: "https://aariyan.info" }],
  creator: "Aariyan Apu",
  publisher: "Aariyan Apu",
  category: "technology",
  classification: "portfolio",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/Person">
      <head>
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Bangladesh" />
        <meta name="ICBM" content="23.6850;90.3563" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="en" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${quickSand.className} mx-auto max-w-screen-2xl text-[#e6ebff]`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <AuthProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "@id": "https://aariyan.info/#person",
                  name: "Aariyan Apu",
                  alternateName: [
                    "Aaru",
                    "Arian Apu",
                    "Arian Opu",
                    "Ariyan Apu",
                    "Ariyan Opu",
                    "Aarian",
                    "Aaruni",
                    "Arian",
                    "Ariyan",
                  ],
                  description:
                    "Full Stack Web Developer from Bangladesh specializing in Next.js, React, TypeScript, and modern web technologies",
                  url: "https://aariyan.info",
                  image: {
                    "@type": "ImageObject",
                    url: "https://aariyan.info/asset/about-me.jpg",
                    width: 400,
                    height: 400,
                  },
                  jobTitle: "Full Stack Web Developer",
                  worksFor: {
                    "@type": "Organization",
                    name: "Freelance Full Stack Developer",
                  },
                  knowsAbout: [
                    "Web Development",
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "Tailwind CSS",
                    "Full Stack Development",
                    "MERN Stack",
                    "Frontend Development",
                    "Backend Development",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/aariyanapu/",
                    "https://web.facebook.com/aariyanapu",
                    "https://github.com/AariyanApu",
                    "https://twitter.com/aariyanapu",
                  ],
                  email: "aariyan.apu@gmail.com",
                  address: {
                    "@type": "Address",
                    addressCountry: "Bangladesh",
                  },
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Bangladesh",
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "@id": "https://aariyan.info/#website",
                  url: "https://aariyan.info",
                  name: "Aariyan Apu - Full Stack Web Developer",
                  description:
                    "Portfolio of Aariyan Apu - Full Stack Web Developer from Bangladesh",
                  inLanguage: "en-US",
                  isAccessibleForFree: true,
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://aariyan.info?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "ProfessionalService",
                  "@id": "https://aariyan.info/#service",
                  name: "Full Stack Web Development Services",
                  description:
                    "Professional web development services including frontend, backend, and full-stack solutions",
                  areaServed: "Worldwide",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Web Development Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Frontend Development",
                          description:
                            "React, Next.js, TypeScript frontend development",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Backend Development",
                          description: "Node.js, MongoDB, API development",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Full Stack Development",
                          description: "End-to-end web application development",
                        },
                      },
                    ],
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "@id": "https://aariyan.info/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Who is Aariyan Apu?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aariyan Apu is a full stack web developer from Bangladesh specializing in modern web technologies.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What technologies does Aariyan Apu work with?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aariyan Apu works with Next.js, React, TypeScript, Node.js, MongoDB, Tailwind CSS and other modern web technologies.",
                      },
                    },
                  ],
                },
              ]),
            }}
          />
          <NavBar />
          {children}
          <FooterCredit />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
