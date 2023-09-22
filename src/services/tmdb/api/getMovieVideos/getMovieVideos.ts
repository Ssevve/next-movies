import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import { VideosResponse } from '@/services/tmdb/types';

export async function getMovieVideos(movieId: number): Promise<VideosResponse> {
  const res = await tmdbAPI(`/movie/${movieId}/videos`);
  if (!res.ok) throw Error(`Failed to fetch videos for: ${movieId}.`);
  return await res.json();
}
