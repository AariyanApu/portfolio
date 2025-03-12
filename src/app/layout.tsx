import type { Metadata } from "next";
import { Quicksand, Geist_Mono } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaru's World!",
  description: "Aariyan Apu is a full-stack Web Developer From Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
