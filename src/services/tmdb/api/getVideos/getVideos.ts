import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBVideos from '@/services/TMDB/types/TMDBVideos';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

interface GetVideosParams {
  showType: ShowType;
  showId: number;
  showTitle: string;
  thumbnailPath?: string;
}

export default async function getVideos({
  showType,
  showTitle,
  thumbnailPath = '',
  showId,
}: GetVideosParams): Promise<Video[]> {
  const res = await TMDBApi(`/${showType}/${showId}/videos`);
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
