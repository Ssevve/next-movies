import Link from 'next/link';

import Logo from '@/components/Logo';

import DesktopNav from './components/DesktopNav/DesktopNav';
import MobileMenu from './components/MobileMenu';
import ThemeToggler from './components/ThemeToggler';

export default function Navbar() {
  return (
    <header className="shadow">
      <div className="container flex items-center justify-between p-4">
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <ThemeToggler />
      </div>
    </header>
  );
}
