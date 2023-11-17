import { Metadata } from 'next';

import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getTopRatedShows from '@/services/TMDB/api/getTopRatedShows/getTopRatedShows';

interface TopRatedTvShowsPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'Top Rated TV Shows | Next Movies',
};

export default async function TopRatedTvShowsPage({ searchParams }: TopRatedTvShowsPageProps) {
  const { page } = searchParams;
  const topRatedTvShows = await getTopRatedShows('tv', Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={topRatedTvShows.totalResults} shows={topRatedTvShows.results} />
    </section>
  );
}
