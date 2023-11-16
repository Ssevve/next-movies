import { Metadata } from 'next';

import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getUpcomingMovies from '@/services/TMDB/api/getUpcomingMovies/getUpcomingMovies';

interface UpcomingMoviesPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'Upcoming Movies | Next Movies',
};

export default async function UpcomingMoviesPage({ searchParams }: UpcomingMoviesPageProps) {
  const { page } = searchParams;
  const upcomingMovies = await getUpcomingMovies(Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={upcomingMovies.totalResults} shows={upcomingMovies.results} />
    </section>
  );
}
