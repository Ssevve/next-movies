import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Show } from '@/types/Show';

import ShowCarousel from './ShowCarousel';

interface TrendingShowsTabsProps {
  trendingToday: Show[];
  trendingThisWeek: Show[];
}

export default function TrendingShowsTabs({
  trendingToday,
  trendingThisWeek,
}: TrendingShowsTabsProps) {
  return (
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
        <ShowCarousel shows={trendingToday} />
      </TabsContent>
      <TabsContent value="this-week" className="border-none p-0 outline-none">
        <ShowCarousel shows={trendingThisWeek} />
      </TabsContent>
    </Tabs>
  );
}
