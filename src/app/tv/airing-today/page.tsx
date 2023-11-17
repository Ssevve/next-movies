import { Metadata } from 'next';

import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getAiringTodayTvShows from '@/services/TMDB/api/getAiringTodayTvShows/getAiringTodayTvShows';

interface AiringTodayTvShowsPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'Airing Today TV Shows | Next Movies',
};

export default async function AiringTodayTvShowsPage({
  searchParams,
}: AiringTodayTvShowsPageProps) {
  const { page } = searchParams;
  const airingTodayTvShows = await getAiringTodayTvShows(Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows
        totalShows={airingTodayTvShows.totalResults}
        shows={airingTodayTvShows.results}
      />
    </section>
  );
}
