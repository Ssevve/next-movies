import '@/app/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ThemeProvider from '@/providers/ThemeProvider';
const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description: 'Movies App build with NextJS and TMDB API',
  title: 'Next Movies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body
        id="root"
        className="flex min-h-screen w-full flex-col justify-between overflow-x-hidden"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
