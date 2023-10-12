import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Hoverable from '@/components/ui/Hoverable';
import VideoLink from '@/components/VideoLink/VideoLink';
import cn from '@/lib/cn';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import ImageType from '@/types/Image';
import ShowType from '@/types/ShowType';
import getYoutubeThumbnail from '@/utils/getYoutubeThumbnail/getYoutubeThumbnail';

interface VideoCardProps {
  videoTitle: string;
  showTitle: string;
  id: string;
  thumbnail: ImageType;
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
  const fulLThumbnailPath = thumbnail.path
    ? getTMDBImagePath(thumbnail.path, thumbnail.width, thumbnail.height)
    : getYoutubeThumbnail(youtubeKey);

  return (
    <>
      <Hoverable className="w-[275px]" {...props}>
        <VideoLink youtubeKey={youtubeKey} title={videoTitle}>
          <Image
            src={fulLThumbnailPath}
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
