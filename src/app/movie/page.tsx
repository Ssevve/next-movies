import { Metadata } from 'next';

import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getPopularShows from '@/services/TMDB/api/getPopularShows/getPopularShows';

interface MoviesPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'Popular Movies | Next Movies',
};

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  const { page } = searchParams;
  const movies = await getPopularShows('movie', Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={movies.totalResults} shows={movies.results} />
    </section>
  );
}
