import VideoCard from '@/components/VideoCard/VideoCard';
import Video from '@/types/Video';

import Scroller from '../Scroller/Scroller';

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
  return (
    <Scroller
      wrapperClassName={className}
      emptyMessage="No videos to display"
      listClassName="flex h-max space-x-4 px-2 pb-4"
    >
      {videos.map(({ id, title, showTitle, thumbnailPath, showType, showId, youtubeKey }) => (
        <VideoCard
          key={id}
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
      ))}
    </Scroller>
  );
}
