import { Skeleton } from '@/components/ui/skeleton';

import ShowCarouselSkeleton from './ShowCarouselSkeleton';

export default function ShowsTabsSkeleton() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <Skeleton className="h-8 w-28" />
        <Skeleton className="h-10 w-80" />
      </div>
      <ShowCarouselSkeleton />
    </div>
  );
}
