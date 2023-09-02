'use client';

import Link from 'next/link';

import ThemeToggler from '@/components/ThemeToggler';
import useIsMobile from '@/hooks/useIsMobile';

import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <header className="flex items-center justify-between p-4 shadow">
      {isMobile && <MobileMenu />}
      <Link href="/">
        <Logo />
      </Link>
      {!isMobile && <DesktopNav />}
      <ThemeToggler />
    </header>
  );
}
