import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { getTrendingShows } from '@/services/tmdb/api';

import { ErrorFallback } from './ErrorFallback';
import ShowScroller from './ShowScroller';
import ShowScrollerSkeleton from './skeletons/ShowScrollerSkeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';

async function TrendingShowsThisWeek() {
  const trendingThisWeek = await getTrendingShows({
    showType: 'all',
    timeWindow: 'week',
  });
  return <ShowScroller shows={trendingThisWeek.results} />;
}

async function TrendingShowsToday() {
  const trendingToday = await getTrendingShows({
    showType: 'all',
    timeWindow: 'day',
  });
  return <ShowScroller shows={trendingToday.results} />;
}

export default function TrendingShows() {
  return (
    <section className="w-full overflow-hidden">
      <Tabs defaultValue="today" className="w-full space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-2xl font-bold">Trending</h2>
          <TabsList className="flex w-full max-w-xs">
            <TabsTrigger className="flex-1" value="today">
              Today
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="this-week">
              This Week
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="today">
          <Suspense fallback={<ShowScrollerSkeleton />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <TrendingShowsToday />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
        <TabsContent value="this-week">
          <Suspense fallback={<ShowScrollerSkeleton />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <TrendingShowsThisWeek />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
      </Tabs>
    </section>
  );
}
