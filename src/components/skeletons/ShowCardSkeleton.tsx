import { Skeleton } from '@/components/ui/skeleton';

export default function ShowCardSkeleton() {
  return (
    <div className="w-[150px] shrink-0">
      <Skeleton className="h-[225px] w-full rounded-md" />
      <Skeleton className="mt-6 h-4" />
      <Skeleton className="mt-2 h-4 w-20" />
    </div>
  );
}
