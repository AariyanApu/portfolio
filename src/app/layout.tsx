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
  title: "Aariyan Apu - Portfolio",
  description:
    "Aariyan Apu - Full Stack Web Developer from Bangladesh specializing in Next.js, React, TypeScript, and modern web technologies. Building engaging and accessible web solutions for seamless digital experiences.",
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
