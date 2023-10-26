'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import cn from '@/lib/cn';
import SearchEndpoint from '@/types/SearchEndpoint';

// TODO: tests, scroll into view
export default function SearchCategories({
  totalMovies,
  totalTvShows,
  totalPeople,
}: {
  totalMovies: number;
  totalTvShows: number;
  totalPeople: number;
}) {
  const params = useParams();
  const searchParams = useSearchParams();
  const moviesRef = useRef<HTMLAnchorElement>(null);
  const tvShowsRef = useRef<HTMLAnchorElement>(null);
  const peopleRef = useRef<HTMLAnchorElement>(null);

  const currentEndpoint = params.endpoint?.[0] || 'movie';

  const refMap = {
    movie: moviesRef,
    person: peopleRef,
    tv: tvShowsRef,
  };

  // useEffect(() => {
  //   refMap[currentEndpoint].current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'center',
  //     inline: 'start',
  //   });
  // }, [currentEndpoint]);

  const generateHref = (endpoint: string) =>
    `/search/${endpoint}?query=${searchParams.get('query') || ''}`;

  const getLinkClassName = (linkEndpoint: SearchEndpoint) =>
    cn(
      'p-4 flex gap-4 min-w-max items-center justify-between w-full',
      linkEndpoint === currentEndpoint && 'bg-slate-100 dark:bg-slate-700'
    );

  return (
    <div className="h-max rounded-md border border-slate-100 dark:border-slate-700">
      <ScrollArea>
        <div className="flex h-max justify-between sm:flex-col md:w-64">
          <Link ref={moviesRef} className={getLinkClassName('movie')} href={generateHref('movie')}>
            <span>Movies</span>
            <span className="min-w-[45px] rounded-full bg-slate-200 px-2 py-1 text-center text-sm dark:bg-slate-800 dark:text-foreground">
              {totalMovies}
            </span>
          </Link>
          <Link ref={tvShowsRef} className={getLinkClassName('tv')} href={generateHref('tv')}>
            <span>TV Shows</span>
            <span className="min-w-[45px] rounded-full bg-slate-200 px-2 py-1 text-center text-sm dark:bg-slate-800 dark:text-foreground">
              {totalTvShows}
            </span>
          </Link>
          <Link
            ref={peopleRef}
            className={getLinkClassName('person')}
            href={generateHref('person')}
          >
            <span>People</span>
            <span className="min-w-[45px] rounded-full bg-slate-200 px-2 py-1 text-center text-sm dark:bg-slate-800 dark:text-foreground">
              {totalPeople}
            </span>
          </Link>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
