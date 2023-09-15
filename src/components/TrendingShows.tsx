import { getTrendingShows } from '@/services/tmdb/api';
import Tab from '@/types/Tab';

import ShowScroller from './ShowScroller';
import TabsSection from './TabsSection';

export default async function TrendingShows() {
  const trendingThisWeek = await getTrendingShows({
    showType: 'all',
    timeWindow: 'week',
  });
  const trendingToday = await getTrendingShows({
    showType: 'all',
    timeWindow: 'day',
  });

  const tabs: Tab[] = [
    {
      content: <ShowScroller shows={trendingToday.results} />,
      label: 'Today',
    },
    {
      content: <ShowScroller shows={trendingThisWeek.results} />,
      label: 'This Week',
    },
  ];

  return <TabsSection title="Trending" tabs={tabs} />;
}
