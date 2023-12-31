import ShowCardSkeleton from '@/components/skeletons/ShowCardSkeleton';

export default function ShowScrollerSkeleton() {
  return (
    <div className="flex space-x-4 overflow-hidden">
      <ShowCardSkeleton />
      <ShowCardSkeleton />
      <ShowCardSkeleton />
      <ShowCardSkeleton />
      <ShowCardSkeleton />
      <ShowCardSkeleton />
      <ShowCardSkeleton />
      <ShowCardSkeleton />
      <ShowCardSkeleton />
    </div>
  );
}
