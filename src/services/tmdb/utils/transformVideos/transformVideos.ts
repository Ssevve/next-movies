import { TMDB_VIDEO_THUMBNAIL_HEIGHT, TMDB_VIDEO_THUMBNAIL_WIDTH } from '@/services/tmdb/constants';
import TMDBVideo from '@/services/tmdb/types/TMDBVideo';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

interface TransformVideosArgs {
  showId: number;
  videos: TMDBVideo[];
  showTitle: string;
  showType: ShowType;
  thumbnailPath?: string;
}

export default function transformVideos({
  showId,
  videos,
  showTitle,
  showType,
  thumbnailPath = '',
}: TransformVideosArgs) {
  if (!videos.length) return [];

  return videos.map(
    ({ id, key, name, type }): Video => ({
      backdrop: {
        path: thumbnailPath,
      },
      id,
      showId,
      showTitle,
      showType,
      thumbnail: {
        height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
        path: thumbnailPath,
        width: TMDB_VIDEO_THUMBNAIL_WIDTH,
      },
      title: name,
      type,
      youtubeKey: key,
    })
  );
}
