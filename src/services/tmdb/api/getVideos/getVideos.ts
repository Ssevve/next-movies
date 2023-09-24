import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformVideosResponse from '@/services/tmdb/helpers/transformVideosResponse/transformVideosResponse';
import { VideosResponse } from '@/services/tmdb/types';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

interface GetVideosParams {
  showType: ShowType;
  showId: number;
  showTitle: string;
  thumbnailPath: string;
}

export async function getVideos({
  showType,
  showTitle,
  thumbnailPath,
  showId,
}: GetVideosParams): Promise<Video[]> {
  const res = await tmdbAPI(`/${showType}/${showId}/videos`);
  if (!res.ok) throw Error(`Failed to fetch videos for: ${showId}.`);
  const videos: VideosResponse = await res.json();

  if (!videos.results?.length) return [];

  return transformVideosResponse({
    results: videos.results,
    showId,
    showTitle,
    showType,
    thumbnailPath,
  });
}
