import { Suspense } from 'react';

import TrendingShows from '@/components/TrendingShows';
import { getTrendingShows } from '@/lib/tmdbAPI';

export default async function Home() {
  const trendingDayPromise = getTrendingShows({
    showType: 'all',
    timeWindow: 'day',
  });

  const trendingWeekPromise = getTrendingShows({
    showType: 'all',
    timeWindow: 'week',
  });

  const [trendingDay, trendingWeek] = await Promise.all([
    trendingDayPromise,
    trendingWeekPromise,
  ]);

  return (
    <section className="grid w-full gap-8">
      <div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Find the latest and greatest movies and TV shows.</p>
      </div>
      <TrendingShows
        trendingToday={trendingDay}
        trendingThisWeek={trendingWeek}
      />
    </section>
  );
}
