import ShowCardSkeleton from './ShowCardSkeleton';

export default function ShowCarouselSkeleton() {
  return (
    <div className="flex space-x-4 overflow-hidden px-2 pb-4">
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
