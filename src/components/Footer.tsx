import Image from 'next/image';
import Link from 'next/link';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-8 rounded-md border-t p-4">
      <div className="container mx-auto w-full divide-y py-4">
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex flex-wrap items-center py-4">
            <span className="text-sm">This product uses the</span>
            <Link href="https://developer.themoviedb.org/docs">
              <Image
                src="/images/tmdb-logo.svg"
                alt="TMDB logo"
                className="m-1 h-auto w-16"
                width={273}
                height={35}
              />
            </Link>
            <span className="text-sm">
              API but is not endorsed or certified by TMDB.
            </span>
          </div>
        </div>
        <span className="block pt-4  text-sm sm:text-center">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            Next Movies
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
