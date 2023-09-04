'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Show } from '@/types/Show';

import ShowCarousel from './ShowCarousel';

interface TrendingProps {
  trendingDay: Show[];
  trendingWeek: Show[];
}

export default function Trending({ trendingDay, trendingWeek }: TrendingProps) {
  return (
    <section className="w-full overflow-hidden">
      <Tabs defaultValue="day" className="w-full">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <h2 className="text-2xl font-bold">Trending</h2>
          <TabsList className="grid w-full grid-cols-2 md:max-w-[400px]">
            <TabsTrigger value="day">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="day">
          <ShowCarousel shows={trendingDay} />
        </TabsContent>
        <TabsContent value="week">
          <ShowCarousel shows={trendingWeek} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
