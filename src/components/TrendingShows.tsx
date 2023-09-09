import { getTrendingShows } from '@/services/tmdb/api';

import TrendingShowsTabs from './TrendingShowsTabs';

export default async function TrendingShows() {
  const trendingToday = await getTrendingShows({
    showType: 'all',
    timeWindow: 'day',
  });

  const trendingThisWeek = await getTrendingShows({
    showType: 'all',
    timeWindow: 'week',
  });

  return (
    <section className="w-full overflow-hidden">
      <TrendingShowsTabs
        trendingToday={trendingToday}
        trendingThisWeek={trendingThisWeek}
      />
    </section>
  );
}
