import 'server-only';

import { Video } from '@/types/Video';

import { TMDB_IMAGE_URL, TMDB_VIDEO_CARD_THUMBNAIL_PATH } from '../constants';
import { PaginatedShowsResponse } from '../types';
import tmdbAPI from './client';

interface VideoResult {
  type: string;
  key: string;
  name: string;
  id: string;
  site: string;
}

interface VideosResponse {
  id: number;
  results: VideoResult[];
}

export async function getUpcomingMoviesTrailers(): Promise<Video[]> {
  const upcomingRes = await tmdbAPI(`/movie/upcoming`);
  if (!upcomingRes.ok) throw new Error('Data not available');
  const upcomingData: PaginatedShowsResponse = await upcomingRes.json();

  const possibleVideoTypes = ['Trailer', 'Teaser'];

  const trailers: Video[] = [];

  for await (const movie of upcomingData.results) {
    const videosRes = await tmdbAPI(`/movie/${movie.id}/videos`);
    if (!videosRes.ok) throw new Error('Data not available');
    const videosData: VideosResponse = await videosRes.json();
    const trailer = videosData.results.find(
      (video) =>
        video.site === 'YouTube' && possibleVideoTypes.includes(video.type)
    );

    if (trailer) {
      trailers.push({
        id: trailer.key,
        movieTitle: movie.title,
        name: trailer.name,
        showId: movie.id,
        showType: 'movie',
        thumbnailPath: movie.backdrop_path,
      });
    }
  }

  return trailers;
}
