import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getPopularShows from '@/services/TMDB/api/getPopularShows/getPopularShows';

interface PopularMoviesPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function PopularMoviesPage({ searchParams }: PopularMoviesPageProps) {
  const { page } = searchParams;
  const popularMovies = await getPopularShows('movie', Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={popularMovies.totalResults} shows={popularMovies.results} />
    </section>
  );
}
