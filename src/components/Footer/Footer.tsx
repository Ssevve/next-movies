import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/components/Logo/Logo';

export default function Footer() {
  return (
    <footer className="mt-8 rounded-md border-t">
      <div className="container mx-auto w-full divide-y py-4">
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex flex-wrap items-center py-4">
            <small data-testid="tmdb-disclaimer" className="flex flex-wrap text-sm">
              This product uses the
              <span className="mr-1 flex items-center">
                <Link aria-label="TMDB link" href="https://developer.themoviedb.org/docs">
                  <Image
                    src="/images/tmdb-logo.svg"
                    alt="TMDB logo"
                    className="m-1 h-auto w-16"
                    width={273}
                    height={35}
                  />
                </Link>
                <span className="sr-only"> TMDB </span>
                API
              </span>{' '}
              but is not endorsed or certified by TMDB.
            </small>
          </div>
        </div>
        <small data-testid="copyright-text" className="block pt-4 text-sm sm:text-center">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            Next Movies
          </Link>
          . All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
