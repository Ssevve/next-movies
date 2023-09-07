import Hero from '@/components/Hero';
import TrendingShows from '@/components/TrendingShows';
import { getTrendingShows } from '@/services/tmdb/api';

export default async function Home() {
  const trendingTodayPromise = getTrendingShows({
    showType: 'all',
    timeWindow: 'day',
  });

  const trendingThisWeekPromise = getTrendingShows({
    showType: 'all',
    timeWindow: 'week',
  });

  const [trendingToday, trendingThisWeek] = await Promise.all([
    trendingTodayPromise,
    trendingThisWeekPromise,
  ]);

  return (
    <section className="grid w-full gap-8">
      <Hero />
      <TrendingShows
        trendingToday={trendingToday}
        trendingThisWeek={trendingThisWeek}
      />
    </section>
  );
}
