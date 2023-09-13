import { Suspense } from 'react';

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ShowScrollerSkeleton from '@/components/skeletons/ShowScrollerSkeleton';
import TrendingShows from '@/components/TrendingShows';
import UpcomingMoviesTrailers from '@/components/UpcomingMoviesTrailers';
import WhatsPopular from '@/components/WhatsPopular';
import { getUpcomingMoviesTrailers } from '@/services/tmdb/api';

export default async function Home() {
  const trailersPromise = getUpcomingMoviesTrailers();

  return (
    <section className="grid w-full gap-12">
      <Hero />
      <TrendingShows />
      <section className="w-full space-y-4 overflow-hidden">
        <SectionHeading className="text-center sm:text-left">
          Upcoming Movies
        </SectionHeading>
        <Suspense fallback={<ShowScrollerSkeleton />}>
          <UpcomingMoviesTrailers trailersPromise={trailersPromise} />
        </Suspense>
      </section>
      <WhatsPopular />
    </section>
  );
}
