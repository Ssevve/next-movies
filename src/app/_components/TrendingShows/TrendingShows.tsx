import ShowScroller from '@/components/ShowScroller/ShowScroller';
import TabsSection from '@/components/TabsSection/TabsSection';
import getTrendingShows from '@/services/tmdb/api/getTrendingShows/getTrendingShows';
import Tab from '@/types/Tab';

export default async function TrendingShows() {
  const trendingThisWeek = await getTrendingShows({
    showType: 'tv',
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
