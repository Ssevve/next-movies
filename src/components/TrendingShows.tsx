import ShowScroller from '@/components/ShowScroller';
import TabsSection from '@/components/TabsSection';
import { getTrendingShows } from '@/services/tmdb/api';
import Tab from '@/types/Tab';

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
