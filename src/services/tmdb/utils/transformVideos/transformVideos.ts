import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBVideo from '@/services/TMDB/types/TMDBVideo';
import { ShowType } from '@/types/Show';
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
        height: TMDBImageSizes.thumbnails.video.height,
        path: thumbnailPath,
        width: TMDBImageSizes.thumbnails.video.width,
      },
      title: name,
      type,
      youtubeKey: key,
    })
  );
}
