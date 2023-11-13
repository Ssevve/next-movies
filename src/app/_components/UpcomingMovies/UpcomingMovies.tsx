import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '@/components/ErrorFallback';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import VideoScrollerSkeleton from '@/components/skeletons/VideoScrollerSkeleton';
import getTrailer from '@/services/TMDB/api/getTrailer/getTrailer';
import getUpcomingMovies from '@/services/TMDB/api/getUpcomingMovies/getUpcomingMovies';
import isFulfilled from '@/utils/isFulfilled';

const UpcomingMoviesTrailers = dynamic(
  () =>
    import(
      '@/app/_components/UpcomingMovies/components/UpcomingMoviesTrailers/UpcomingMoviesTrailers'
    ),
  {
    loading: () => (
      <div className="p-4">
        <VideoScrollerSkeleton />
      </div>
    ),
    ssr: false,
  }
);

async function getUpcomingMoviesTrailers() {
  const movies = await getUpcomingMovies();

  const result = await Promise.allSettled(
    movies.map(({ id, title, showType, thumbnailPath }) =>
      getTrailer({
        showId: id,
        showTitle: title || '',
        showType,
        thumbnailPath,
      })
    )
  );

  const trailers = result.filter(isFulfilled).map((promise) => promise.value);
  return trailers;
}

export default async function UpcomingMovies() {
  const trailersPromise = getUpcomingMoviesTrailers();
  return (
    <section className="w-full space-y-4 overflow-hidden">
      <SectionHeading>Upcoming Movies</SectionHeading>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <UpcomingMoviesTrailers trailersPromise={trailersPromise} />
      </ErrorBoundary>
    </section>
  );
}
