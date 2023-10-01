import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformVideos from '@/services/tmdb/helpers/transformVideos/transformVideos';
import TMDBVideos from '@/services/tmdb/types/TMDBVideos';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

interface GetVideosParams {
  showType: ShowType;
  showId: number;
  showTitle: string;
  thumbnailPath: string;
}

export default async function getVideos({
  showType,
  showTitle,
  thumbnailPath,
  showId,
}: GetVideosParams): Promise<Video[]> {
  const res = await tmdbAPI(`/${showType}/${showId}/videos`);
  if (!res.ok) throw Error(`Failed to fetch videos for: ${showId}.`);
  const videos: TMDBVideos = await res.json();

  if (!videos.results?.length) return [];

  return transformVideos({
    showId,
    showTitle,
    showType,
    thumbnailPath,
    videos: videos.results,
  });
}
