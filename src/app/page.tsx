import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Hero from '@/components/Hero';
import ShowTabsSkeleton from '@/components/skeletons/ShowTabsSkeleton';
import TrendingShows from '@/components/TrendingShows';

export default async function Home() {
  // const trendingTodayPromise = getTrendingShows({
  //   showType: 'all',
  //   timeWindow: 'day',
  // });

  // const [trendingToday, trendingThisWeek] = await Promise.all([
  //   trendingTodayPromise,
  //   trendingThisWeekPromise,
  // ]);

  return (
    <section className="grid w-full gap-8">
      <Hero />
      <ErrorBoundary fallback={<p>error</p>}>
        <Suspense fallback={<ShowTabsSkeleton />}>
          <TrendingShows />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
