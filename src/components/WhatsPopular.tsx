import ShowScroller from '@/components/ShowScroller/ShowScroller';
import TabsSection from '@/components/TabsSection/TabsSection';
import { getPopularShows } from '@/services/tmdb/api/getPopularShows/getPopularShows';
import { getTheaterMovies } from '@/services/tmdb/api/getTheaterMovies/getTheaterMovies';
import Tab from '@/types/Tab';

export default async function WhatsPopular() {
  const popularMovies = await getPopularShows('movie');
  const popularTvShows = await getPopularShows('tv');
  const inTheaters = await getTheaterMovies();

  const tabs: Tab[] = [
    {
      content: <ShowScroller shows={popularMovies.results} />,
      label: 'Movies',
    },
    {
      content: <ShowScroller shows={popularTvShows.results} />,
      label: 'TV Shows',
    },
    {
      content: <ShowScroller shows={inTheaters.results} />,
      label: 'In Theaters',
    },
  ];

  return <TabsSection title="What's popular" tabs={tabs} />;
}
