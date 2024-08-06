import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import FooterCredit from "@/components/footer/FooterCredit";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "@/auth/AuthProvider";

const quickSand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

const APP_NAME = "Aaru's World!";
const APP_DEFAULT_TITLE = "Aariyan Apu";
const APP_TITLE_TEMPLATE = "%s - Aaru's World!";
const APP_DESCRIPTION =
  "Aariyan Apu is a full-stack Web Developer From Bangladesh.";

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
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  metadataBase: new URL("https://aariyan.info"),
  keywords: [
    "aariyan",
    "aaru",
    "আরিয়ান",
    "আরিয়ান অপু",
    "arian opu",
    "arian",
    "arian opu",
    "aaruni",
    "aariyan apu",
    "aariyan",
    "web developer from bangladesh",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.className} mx-auto max-w-screen-2xl text-[#e6ebff]`}
      >
        <AuthProvider>
          <NavBar />
          {children}
          <FooterCredit />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
