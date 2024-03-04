import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import FooterCredit from '@/components/FooterCredit';
import AuthProvider from '@/utils/AuthProvider';

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
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
        <link
          rel='apple-touch-icon'
          href='/apple-icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body
        className={`${quickSand.className} mx-auto max-w-screen-2xl text-[#e6ebff]`}
      >
        <AuthProvider>
          <NavBar />
          {children}
          <FooterCredit />
        </AuthProvider>
      </body>
    </html>
  );
}
