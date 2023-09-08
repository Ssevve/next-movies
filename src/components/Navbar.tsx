'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import DesktopNav from '@/components/DesktopNav';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';
import ThemeToggler from '@/components/ThemeToggler';

import { Button } from './ui/Button';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="border-b shadow">
      <div className="container flex items-center justify-between p-4">
        <Button
          onClick={() => setShowMobileMenu((prev) => !prev)}
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label={showMobileMenu ? 'Close mobile menu' : 'Show mobile menu'}
        >
          <Menu />
        </Button>
        {showMobileMenu && <MobileMenu />}
        <Link href="/">
          <Logo />
        </Link>
        <DesktopNav />
        <ThemeToggler />
      </div>
    </header>
  );
}