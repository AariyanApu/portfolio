import { Quicksand } from "next/font/google";

import localFont from "next/font/local";

export const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext"],
});

export const title = localFont({
  src: "./Kenfolg.otf",
  display: "swap",
  variable: "--font-title",
});
