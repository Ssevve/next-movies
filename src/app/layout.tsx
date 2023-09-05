import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import ThemeProvider from '@/providers/ThemeProvider';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  description: 'Movies App build with NextJS',
  title: 'Next Movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full w-full`}
      suppressHydrationWarning
    >
      <body className="h-full w-full overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container h-full w-full p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
