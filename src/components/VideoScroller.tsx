import VideoCard from '@/components/VideoCard/VideoCard';
import Video from '@/types/Video';

import { ScrollArea, ScrollBar } from './ui/ScrollArea';

interface ShowScrollerProps {
  videos: Video[];
  setBackgroundPath?: (path: string) => void;
  invertedTextColor?: boolean;
  className?: string;
}

export default function VideoScroller({
  videos,
  className,
  setBackgroundPath,
  invertedTextColor = false,
}: ShowScrollerProps) {
  return (
    <ScrollArea type="always" className={className}>
      <div className="flex space-x-4 px-2 pb-4">
        {videos.map((video) => (
          <VideoCard
            invertedTextColor={invertedTextColor}
            key={video.id}
            videoTitle={video.title}
            showTitle={video.showTitle}
            id={video.id}
            thumbnailPath={video.thumbnailPath}
            showType={video.showType}
            showId={video.showId}
            youtubeKey={video.youtubeKey}
            onMouseEnter={() => setBackgroundPath && setBackgroundPath(video.thumbnailPath)}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
