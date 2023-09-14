import { Skeleton } from '@/components/ui/Skeleton';

export default function VideoCardSkeleton() {
  return (
    <div className="w-[275px] shrink-0">
      <Skeleton className="h-[155px] w-full rounded-md" />
      <Skeleton className="mt-6 h-4" />
      <Skeleton className="mt-2 h-4 w-40" />
    </div>
  );
}
