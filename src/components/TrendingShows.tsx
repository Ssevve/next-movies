import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { getTrendingShows } from '@/services/tmdb/api';

import { ErrorFallback } from './ErrorFallback';
import ShowScroller from './ShowScroller';
import ShowScrollerSkeleton from './skeletons/ShowScrollerSkeleton';

async function TrendingThisWeek() {
  const trendingThisWeek = await getTrendingShows({
    showType: 'all',
    timeWindow: 'week',
  });
  return <ShowScroller shows={trendingThisWeek.results} />;
}

async function TrendingToday() {
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
        <div className="flex flex-col items-center gap-4 sm:flex-row">
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
              <TrendingToday />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
        <TabsContent value="this-week">
          <Suspense fallback={<ShowScrollerSkeleton />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <TrendingThisWeek />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
      </Tabs>
    </section>
  );
}
