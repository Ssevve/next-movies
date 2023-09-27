import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '@/components/ErrorFallback';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { getTrailer } from '@/services/tmdb/api/getTrailer/getTrailer';
import { getUpcomingMovies } from '@/services/tmdb/api/getUpcomingMovies/getUpcomingMovies';

import VideoScrollerSkeleton from './skeletons/VideoScrollerSkeleton';
import UpcomingMoviesTrailers from './UpcomingMoviesTrailers';

function isFulfilled<T>(promise: PromiseSettledResult<T>): promise is PromiseFulfilledResult<T> {
  return promise.status === 'fulfilled';
}

async function getUpcomingMoviesTrailers() {
  const movies = await getUpcomingMovies();

  const trailerPromises = movies.map((movie) =>
    getTrailer({
      showId: movie.id,
      showTitle: movie.title || '',
      showType: movie.showType,
      thumbnailPath: movie.backdropPath,
    })
  );

  const result = await Promise.allSettled(trailerPromises);

  const trailers = result.filter(isFulfilled).map((promise) => promise.value);
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
