import { Video } from '@/types/Video';

import { ScrollArea, ScrollBar } from './ui/ScrollArea';
import VideoCard from './VideoCard';

interface ShowScrollerProps {
  videos: Video[];
  setBackgroundPath?: (path: string) => void;
  invertedTextColor?: boolean;
}

export default function VideoScroller({
  videos,
  setBackgroundPath,
  invertedTextColor = false,
}: ShowScrollerProps) {
  return (
    <ScrollArea>
      <div className="flex space-x-4 px-2 pb-4">
        {videos.map((video) => (
          <VideoCard
            onMouseEnter={() =>
              setBackgroundPath && setBackgroundPath(video.thumbnailPath)
            }
            invertedTextColor={invertedTextColor}
            showId={video.showId}
            showType={video.showType}
            videoTitle={video.name}
            showTitle={video.movieTitle}
            key={video.id}
            id={video.id}
            thumbnailPath={video.thumbnailPath}
          />
        ))}
      </div>
      <ScrollBar color="#fffff" orientation="horizontal" />
    </ScrollArea>
  );
}
