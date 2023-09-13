import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { getPopularShows, getTheaterMovies } from '@/services/tmdb/api';

import { ErrorFallback } from './ErrorFallback';
import SectionHeading from './SectionHeading';
import ShowScroller from './ShowScroller';
import ShowScrollerSkeleton from './skeletons/ShowScrollerSkeleton';

async function PopularMovies() {
  const popular = await getPopularShows({
    showType: 'movie',
  });
  return <ShowScroller shows={popular.results} />;
}

async function PopularTvShows() {
  const popular = await getPopularShows({
    showType: 'tv',
  });
  return <ShowScroller shows={popular.results} />;
}

async function InTheaters() {
  const inTheaters = await getTheaterMovies();
  return <ShowScroller shows={inTheaters.results} />;
}

export default function WhatsPopular() {
  return (
    <section className="w-full overflow-hidden">
      <Tabs defaultValue="movies" className="w-full space-y-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <SectionHeading>What&apos;s Popular</SectionHeading>
          <TabsList className="flex w-full max-w-xs">
            <TabsTrigger className="flex-1" value="movies">
              Movies
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="tv-shows">
              TV Shows
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="in-theaters">
              In Theaters
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="movies">
          <Suspense fallback={<ShowScrollerSkeleton />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <PopularMovies />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
        <TabsContent value="tv-shows">
          <Suspense fallback={<ShowScrollerSkeleton />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <PopularTvShows />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
        <TabsContent value="in-theaters">
          <Suspense fallback={<ShowScrollerSkeleton />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <InTheaters />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
      </Tabs>
    </section>
  );
}
