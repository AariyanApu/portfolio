import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { SwRegister } from "@/components/sw-register";
import "./globals.css";

const kenfolg = localFont({
  src: "../utils/Kenfolg.otf",
  variable: "--font-kenfolg",
});

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aariyan.info"),
  title: {
    default: "Aariyan Apu — Full Stack Developer from Bangladesh",
    template: "%s — Aariyan Apu",
  },
  description:
    "Aariyan Apu — Full Stack Web Developer from Bangladesh specializing in Next.js, React, TypeScript, and modern web technologies. Building engaging and accessible web solutions for seamless digital experiences.",
  keywords: [
    "Aariyan Apu",
    "Aariyan Opu",
    "Ariyan Apu",
    "Ariyan Opu",
    "Arian Opu",
    "Aariyanapu",
    "আরিয়ান অপু",
    "web developer Bangladesh",
    "web developer Barishal",
    "web developer Barisal",
    "full stack developer Bangladesh",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
  ],
  authors: [{ name: "Aariyan Apu", url: "https://aariyan.info" }],
  creator: "Aariyan Apu",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aariyan Apu",
    title: "Aariyan Apu — Full Stack Developer from Bangladesh",
    description:
      "Full Stack Web Developer from Bangladesh specializing in Next.js, React, TypeScript, and modern web technologies.",
    url: "https://aariyan.info",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Aariyan Apu — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aariyanapu",
    site: "@aariyanapu",
  },
  alternates: {
    canonical: "https://aariyan.info",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aariyan Apu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${quickSand.variable} ${kenfolg.variable} antialiased`}>
        <SwRegister />
        <MouseSpotlight />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
