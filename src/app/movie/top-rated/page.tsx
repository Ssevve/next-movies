import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getTopRatedShows from '@/services/TMDB/api/getTopRatedShows/getTopRatedShows';

interface TopRatedMoviesPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function TopRatedMoviesPage({ searchParams }: TopRatedMoviesPageProps) {
  const { page } = searchParams;
  const topRatedMovies = await getTopRatedShows('movie', Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={topRatedMovies.totalResults} shows={topRatedMovies.results} />
    </section>
  );
}
