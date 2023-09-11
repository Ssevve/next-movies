import { getTrendingShows } from '@/services/tmdb/api';

import ShowScroller from './ShowScroller';
import { TabsContent } from './ui/Tabs';

export default async function TrendingShowsTabsContent() {
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
    <>
      <TabsContent value="today" className="border-none p-0 outline-none">
        <ShowScroller shows={trendingToday} />
      </TabsContent>
      <TabsContent value="this-week" className="border-none p-0 outline-none">
        <ShowScroller shows={trendingThisWeek} />
      </TabsContent>
    </>
  );
}
