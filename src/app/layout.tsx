import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

const quickSand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Aaru's World!",

  description: 'Aariyan Apu is a full-stack Web Developer From Bangladesh.',
  keywords: [
    'aariyan',
    'aaru',
    'আরিয়ান',
    'আরিয়ান অপু',
    'arian opu',
    'arian',
    'arian opu',
    'aaruni',
    'aariyan apu',
    'aariyan',
    'aariyan apu web developer',
    'aariyan apu web developer from bangladesh',
    'aariyan apu js developer',
    'aariyan apu next.js developer',
    'aariyan apu react developer',
    'aariyan apu react',
    'aariyan apu bangladeshwebdeveloper',
    'aariyan apu aariyan',
    'aariyan apu web dev from bd',
    'aariyan apu aaru',
    'web developer',
    'web developer from bangladesh',
    'js developer',
    'next.js developer',
    'react developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={quickSand.className}>{children}</body>
    </html>
  );
}
