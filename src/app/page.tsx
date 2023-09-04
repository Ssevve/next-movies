import Trending from '@/components/Trending';
import { getTrending } from '@/lib/tmdbAPI';

export default async function Home() {
  const trendingDayPromise = getTrending({
    showType: 'all',
    timeWindow: 'day',
  });

  const trendingWeekPromise = getTrending({
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
      <Trending trendingDay={trendingDay} trendingWeek={trendingWeek} />
    </section>
  );
}
