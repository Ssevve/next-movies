import { imageSizes } from '@/services/tmdb/config';
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
        height: imageSizes.thumbnails.video.height,
        path: thumbnailPath,
        width: imageSizes.thumbnails.video.width,
      },
      title: name,
      type,
      youtubeKey: key,
    })
  );
}
