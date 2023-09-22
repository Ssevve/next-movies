import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { getUpcomingMoviesTrailers } from '@/services/tmdb/api/getUpcomingMoviesTrailers/getUpcomingMoviesTrailers';

import { ErrorFallback } from './ErrorFallback';
import SectionHeading from './SectionHeading';
import VideoScrollerSkeleton from './skeletons/VideoScrollerSkeleton';
import UpcomingMoviesTrailers from './UpcomingMoviesTrailers';

export default function UpcomingMovies() {
  const trailersPromise = getUpcomingMoviesTrailers();
  return (
    <section className="w-full space-y-4 overflow-hidden">
      <SectionHeading className="text-center sm:text-left">
        Upcoming Movies
      </SectionHeading>
      <Suspense fallback={<VideoScrollerSkeleton />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <UpcomingMoviesTrailers trailersPromise={trailersPromise} />
        </ErrorBoundary>
      </Suspense>
    </section>
  );
}
