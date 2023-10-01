import TMDBVideo from '@/services/tmdb/types/TMDBVideo';
import ShowType from '@/types/ShowType';

interface TransformVideosArgs {
  showId: number;
  videos: TMDBVideo[];
  showTitle: string;
  showType: ShowType;
  thumbnailPath: string;
}

export default function transformVideos({
  showId,
  videos,
  showTitle,
  showType,
  thumbnailPath,
}: TransformVideosArgs) {
  return videos.map(({ id, key, name, type }) => ({
    id,
    showId,
    showTitle,
    showType,
    thumbnailPath,
    title: name,
    type,
    youtubeKey: key,
  }));
}
