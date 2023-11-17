import { Metadata } from 'next';

import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getOnTheAirTvShows from '@/services/TMDB/api/getOnTheAirTvShows/getOnTheAirTvShows';

interface OnTvTvShowsPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'On Tv TV Shows | Next Movies',
};

export default async function OnTvTvShowsPage({ searchParams }: OnTvTvShowsPageProps) {
  const { page } = searchParams;
  const onTvTvShows = await getOnTheAirTvShows(Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={onTvTvShows.totalResults} shows={onTvTvShows.results} />
    </section>
  );
}
