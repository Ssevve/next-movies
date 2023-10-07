import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import VideoCard from '@/components/VideoCard/VideoCard';
import Video from '@/types/Video';

interface VideoScrollerProps {
  videos: Video[];
  onMouseEnter?: (path: string) => void;
  invertedTextColor?: boolean;
  className?: string;
}

export default function VideoScroller({
  videos,
  className,
  onMouseEnter,
  invertedTextColor = false,
}: VideoScrollerProps) {
  return videos.length ? (
    <ScrollArea type="always" className={className}>
      <ul className="flex h-max space-x-4 px-2 pb-4">
        {videos.map(({ id, title, showTitle, thumbnailPath, showType, showId, youtubeKey }) => (
          <li key={showId}>
            <VideoCard
              invertedTextColor={invertedTextColor}
              videoTitle={title}
              showTitle={showTitle}
              id={id}
              thumbnailPath={thumbnailPath}
              showType={showType}
              showId={showId}
              youtubeKey={youtubeKey}
              onMouseEnter={() => onMouseEnter && onMouseEnter(thumbnailPath)}
            />
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ) : (
    <p>No videos to display</p>
  );
}
