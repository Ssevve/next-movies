import Link from 'next/link';

import ThemeToggler from '@/components/ThemeToggler';

import Logo from './Logo';

export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-4 shadow">
            <Link href="/">
                <Logo />
            </Link>
            <ThemeToggler />
        </header>
    );
}
