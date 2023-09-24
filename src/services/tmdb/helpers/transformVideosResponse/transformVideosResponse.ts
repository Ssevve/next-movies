import { VideosResponseResult } from '@/services/tmdb/types';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

interface TransformVideosResponseArgs {
  showId: number;
  results: VideosResponseResult[];
  showTitle: string;
  showType: ShowType;
  thumbnailPath: string;
}

export default function transformVideosResponse({
  showId,
  results,
  showTitle,
  showType,
  thumbnailPath,
}: TransformVideosResponseArgs) {
  if (!results) return [];
  const transformedResults: Video[] = results.map(({ id, name, key, type }) => {
    return {
      id,
      showId,
      showTitle,
      showType,
      thumbnailPath,
      title: name,
      type,
      youtubeKey: key,
    };
  });

  return transformedResults;
}
