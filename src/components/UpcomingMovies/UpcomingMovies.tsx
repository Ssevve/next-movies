import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '@/components/ErrorFallback';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import VideoScrollerSkeleton from '@/components/skeletons/VideoScrollerSkeleton';
import getTrailer from '@/services/tmdb/api/getTrailer/getTrailer';
import getUpcomingMovies from '@/services/tmdb/api/getUpcomingMovies/getUpcomingMovies';

const UpcomingMoviesTrailers = dynamic(
  () => import('@/components/UpcomingMoviesTrailers/UpcomingMoviesTrailers'),
  {
    loading: () => (
      <div className="p-4">
        <VideoScrollerSkeleton />
      </div>
    ),
    ssr: false,
  }
);

function isFulfilled<T>(promise: PromiseSettledResult<T>): promise is PromiseFulfilledResult<T> {
  return promise.status === 'fulfilled';
}

async function getUpcomingMoviesTrailers() {
  const movies = await getUpcomingMovies();

  const result = await Promise.allSettled(
    movies.map((movie) =>
      getTrailer({
        showId: movie.id,
        showTitle: movie.title || '',
        showType: movie.showType,
        thumbnailPath: movie.backdropPath,
      })
    )
  );

  const trailers = result.filter(isFulfilled).map((promise) => promise.value);
  return trailers;
}

export default async function UpcomingMovies() {
  const trailers = await getUpcomingMoviesTrailers();
  return (
    <section className="w-full space-y-4 overflow-hidden">
      <SectionHeading>Upcoming Movies</SectionHeading>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <UpcomingMoviesTrailers trailers={trailers} />
      </ErrorBoundary>
    </section>
  );
}
