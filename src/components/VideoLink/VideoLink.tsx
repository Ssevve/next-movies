'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import cn from '@/utils/cn';

interface VideoLinkProps
  extends Omit<React.PropsWithChildren<React.ComponentProps<typeof Link>>, 'href'> {
  youtubeKey: string;
  title: string;
}

export default function VideoLink({
  youtubeKey,
  title,
  children,
  className,
  ...props
}: VideoLinkProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set('play', youtubeKey);

  return (
    <Link
      aria-label={`watch ${title}`}
      href={`${pathname}?${newSearchParams}`}
      scroll={false}
      className={cn('relative block', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
