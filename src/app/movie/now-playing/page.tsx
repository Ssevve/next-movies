import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';
import getTheaterMovies from '@/services/TMDB/api/getTheaterMovies/getTheaterMovies';

interface NowPlayingMoviesPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function NowPlayingMoviesPage({ searchParams }: NowPlayingMoviesPageProps) {
  const { page } = searchParams;
  const nowPlayingMovies = await getTheaterMovies(Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedShows totalShows={nowPlayingMovies.totalResults} shows={nowPlayingMovies.results} />
    </section>
  );
}
