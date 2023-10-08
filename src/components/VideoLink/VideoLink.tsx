'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import Hoverable from '@/components/ui/Hoverable';
import cn from '@/lib/cn';

interface VideoLinkProps extends Omit<React.ComponentProps<typeof Link>, 'href'> {
  youtubeKey: string;
  title: string;
  children: React.ReactNode;
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
    <Hoverable>
      <Link
        aria-label={`watch ${title}`}
        href={`${pathname}?${newSearchParams}`}
        scroll={false}
        className={cn('relative block', className)}
        {...props}
      >
        {children}
      </Link>
    </Hoverable>
  );
}
