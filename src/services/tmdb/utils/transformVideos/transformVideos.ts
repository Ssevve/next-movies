import {
  TMDB_IMAGE_URL,
  TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT,
  TMDB_VIDEO_CARD_THUMBNAIL_PATH,
  TMDB_VIDEO_CARD_THUMBNAIL_WIDTH,
} from '@/services/tmdb/constants';
import TMDBVideo from '@/services/tmdb/types/TMDBVideo';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';
import getYoutubeThumbnail from '@/utils/getYoutubeThumbnail/getYoutubeThumbnail';

type ThumbnailSource = 'YouTube' | 'TMDB';

// TODO: Make thumbnailPath required when thumbnailSource is provided
interface TransformVideosArgs {
  showId: number;
  videos: TMDBVideo[];
  showTitle: string;
  showType: ShowType;
  thumbnailPath?: string;
  thumbnailSource: ThumbnailSource;
}

export default function transformVideos({
  showId,
  videos,
  showTitle,
  showType,
  thumbnailPath = '',
  thumbnailSource,
}: TransformVideosArgs) {
  if (!videos.length) return [];

  const isTMDBThumbnail = thumbnailSource === 'TMDB' && thumbnailPath;
  return videos.map(
    ({ id, key, name, type }): Video => ({
      id,
      showId,
      showTitle,
      showType,
      thumbnail: {
        height: TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT,
        path: isTMDBThumbnail
          ? `${TMDB_IMAGE_URL}${TMDB_VIDEO_CARD_THUMBNAIL_PATH}${thumbnailPath}`
          : getYoutubeThumbnail(key),
        width: TMDB_VIDEO_CARD_THUMBNAIL_WIDTH,
      },
      title: name,
      type,
      youtubeKey: key,
    })
  );
}
