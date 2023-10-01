import VideoCardSkeleton from '@/components/skeletons/VideoCardSkeleton';

export default function VideoScrollerSkeleton() {
  return (
    <div className="flex space-x-4 overflow-hidden">
      <VideoCardSkeleton />
      <VideoCardSkeleton />
      <VideoCardSkeleton />
      <VideoCardSkeleton />
      <VideoCardSkeleton />
    </div>
  );
}
