'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Show } from '@/types/Show';

import ScrollableShows from './ScrollableShows';

interface TrendingShowsProps {
  trendingToday: Show[];
  trendingThisWeek: Show[];
}

export default function TrendingShows({
  trendingToday,
  trendingThisWeek,
}: TrendingShowsProps) {
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
        <TabsContent value="today" className="border-none p-0 outline-none">
          <ScrollableShows shows={trendingToday} />
        </TabsContent>
        <TabsContent value="this-week" className="border-none p-0 outline-none">
          <ScrollableShows shows={trendingThisWeek} />
        </TabsContent>
      </Tabs>
    </section>
  );
}