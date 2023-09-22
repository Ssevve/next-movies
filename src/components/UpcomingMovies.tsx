import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { isFulfilled } from '@/lib/utils';
import { getMovieTrailer } from '@/services/tmdb/api/getMovieTrailer/getMovieTrailer';
import { getUpcomingMovies } from '@/services/tmdb/api/getUpcomingMovies/getUpcomingMovies';

import { ErrorFallback } from './ErrorFallback';
import SectionHeading from './SectionHeading';
import VideoScrollerSkeleton from './skeletons/VideoScrollerSkeleton';
import UpcomingMoviesTrailers from './UpcomingMoviesTrailers';

async function getUpcomingMoviesTrailers() {
  const movies = await getUpcomingMovies();

  const trailerPromises = movies.results.map((movie) =>
    getMovieTrailer({
      movieId: movie.id,
      movieTitle: movie.title || '',
      thumbnailPath: movie.backdrop_path,
    })
  );

  const result = await Promise.allSettled(trailerPromises);

  const trailers = result.filter(isFulfilled).map((promise) => promise.value);
  if (!trailers.length) throw Error('No trailers data available.');
  return trailers;
}

export default function UpcomingMovies() {
  const trailersPromise = getUpcomingMoviesTrailers();
  return (
    <section className="w-full space-y-4 overflow-hidden">
      <SectionHeading className="text-center sm:text-left">Upcoming Movies</SectionHeading>
      <Suspense fallback={<VideoScrollerSkeleton />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <UpcomingMoviesTrailers trailersPromise={trailersPromise} />
        </ErrorBoundary>
      </Suspense>
    </section>
  );
}
