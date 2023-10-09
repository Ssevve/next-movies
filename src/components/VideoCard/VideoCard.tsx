import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Hoverable, { HoverableProps } from '@/components/ui/Hoverable';
import VideoLink from '@/components/VideoLink/VideoLink';
import cn from '@/lib/cn';
import {
  TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT,
  TMDB_VIDEO_CARD_THUMBNAIL_WIDTH,
} from '@/services/tmdb/constants';
import ShowType from '@/types/ShowType';
import Thumbnail from '@/types/Thumbnail';

interface VideoCardProps extends Omit<HoverableProps, 'children'> {
  videoTitle: string;
  showTitle: string;
  id: string;
  thumbnail: Thumbnail;
  showType: ShowType;
  showId: number;
  youtubeKey: string;
  invertedTextColor?: boolean;
}

export default function VideoCard({
  videoTitle,
  showTitle,
  id,
  thumbnail,
  showType,
  showId,
  youtubeKey,
  invertedTextColor = false,
  ...props
}: VideoCardProps) {
  return (
    <>
      <Hoverable className="w-[275px]" {...props}>
        <VideoLink youtubeKey={youtubeKey} title={videoTitle}>
          <Image
            src={thumbnail.path}
            alt=""
            className="aspect-video h-full rounded-md object-cover"
            width={thumbnail.width}
            height={thumbnail.height}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <Play
            size={50}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-background dark:text-foreground"
            aria-hidden="true"
          />
        </VideoLink>
        <Link
          href={`${showType}/${showId}`}
          className={cn('mt-6 block text-sm font-bold', invertedTextColor && 'text-background')}
        >
          {showTitle}
        </Link>
        <span className="text-xs text-slate-400">{videoTitle}</span>
      </Hoverable>
    </>
  );
}
