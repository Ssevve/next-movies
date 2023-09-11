import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './ErrorFallback';
import ShowScrollerSkeleton from './skeletons/ShowScrollerSkeleton';
import TrendingShowsTabsContent from './TrendingShowsTabsContent';
import { Tabs, TabsList, TabsTrigger } from './ui/Tabs';

export default async function TrendingShows() {
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<ShowScrollerSkeleton />}>
            <TrendingShowsTabsContent />
          </Suspense>
        </ErrorBoundary>
      </Tabs>
    </section>
  );
}
