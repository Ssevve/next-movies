import { TMDBVideo } from '@/services/tmdb/types';
import ShowType from '@/types/ShowType';

import transformVideo from '../transformVideo/transformVideo';

interface TransformVideosArgs {
  showId: number;
  results: TMDBVideo[];
  showTitle: string;
  showType: ShowType;
  thumbnailPath: string;
}

export default function transformVideos({
  showId,
  results,
  showTitle,
  showType,
  thumbnailPath,
}: TransformVideosArgs) {
  return results.map(({ id, key, name, type }) =>
    transformVideo({
      id,
      key,
      name,
      showId,
      showTitle,
      showType,
      thumbnailPath,
      type,
    })
  );
}
