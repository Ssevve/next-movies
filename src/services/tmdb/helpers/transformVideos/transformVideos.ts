import { getYoutubeThumbnail } from '@/lib/utils';
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
      id,
      showId,
      showTitle,
      showType,
      thumbnailPath: thumbnailPath || getYoutubeThumbnail(key),
      title: name,
      type,
      youtubeKey: key,
    })
  );
}
