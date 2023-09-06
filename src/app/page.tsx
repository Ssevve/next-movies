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
      <div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Find the latest and greatest movies and TV shows.</p>
      </div>
      <TrendingShows
        trendingToday={trendingToday}
        trendingThisWeek={trendingThisWeek}
      />
    </section>
  );
}
