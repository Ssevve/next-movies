import { Metadata } from 'next';

import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getPopularShows from '@/services/TMDB/api/getPopularShows/getPopularShows';

interface TvShowsPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'TV Shows | Next Movies',
};

export default async function TvShowsPage({ searchParams }: TvShowsPageProps) {
  const { page } = searchParams;
  const TvShows = await getPopularShows('tv', Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={TvShows.totalResults} shows={TvShows.results} />
    </section>
  );
}
