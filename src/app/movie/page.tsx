import Pagination from '@/components/Pagination/Pagination';
import ShowCard from '@/components/ShowCard/ShowCard';
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
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-8">
        {popularMovies.results.map(({ id, poster, releaseDate, showType, title, userScore }) => (
          <li key={id} className="shrink-1 basis-1/3 sm:basis-1/4 md:basis-1/6">
            <ShowCard
              id={id}
              poster={poster}
              releaseDate={releaseDate}
              showType={showType}
              title={title}
              userScore={userScore}
            />
          </li>
        ))}
      </ul>
      <Pagination totalItemCount={popularMovies.totalResults} />
    </section>
  );
}
