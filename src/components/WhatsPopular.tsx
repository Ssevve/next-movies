import { getPopularShows, getTheaterMovies } from '@/services/tmdb/api';
import Tab from '@/types/Tab';

import ShowScroller from './ShowScroller';
import TabsSection from './TabsSection';

export default async function WhatsPopular() {
  const popularMovies = await getPopularShows({
    showType: 'movie',
  });
  const popularTvShows = await getPopularShows({
    showType: 'tv',
  });
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
