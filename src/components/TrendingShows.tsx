// 'use client';

import { ppid } from 'process';
import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import useSWR from 'swr';

import { PaginatedShows, transformTrendingData } from '@/lib/helpers';
import { getTrendingShows, TrendingResponse } from '@/services/tmdb/api';
import { Show } from '@/types/Show';

import { ErrorFallback } from './ErrorFallback';
import ShowScroller from './ShowScroller';
import ShowScrollerSkeleton from './skeletons/ShowScrollerSkeleton';
// import TrendingShowsTabsContent from './TrendingShowsTabsContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// function TrendingShowsToday() {
//   const { data, isLoading, error } = useSWR(
//     `/api/tmdb/trending/all/day`,
//     fetcher
//   );

//   if (isLoading) return <ShowScrollerSkeleton />;
//   if (error) return <p>{error.message}</p>;
//   return <ShowScroller shows={data.results} />;
// }

async function TrendingShowsThisWeek() {
  const trendingThisWeek = await getTrendingShows({
    showType: 'all',
    timeWindow: 'weeks',
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
      <Tabs defaultValue="day" className="w-full space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-2xl font-bold">Trending</h2>
          <TabsList className="flex w-full max-w-xs">
            <TabsTrigger className="flex-1" value="day">
              Today
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="week">
              This Week
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="day">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <TrendingShowsToday />
          </ErrorBoundary>
        </TabsContent>
        <TabsContent value="week">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <TrendingShowsThisWeek />
          </ErrorBoundary>
        </TabsContent>
      </Tabs>
    </section>
  );
}
