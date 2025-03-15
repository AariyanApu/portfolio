import type { Metadata } from "next";
import "./globals.css";
import { quickSand, title } from "@/fonts/fonts";

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
      <body className={`${quickSand.variable} ${title.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
