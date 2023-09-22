import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import { MovieResult, PaginatedShowsResponse } from '@/services/tmdb/types';
import Video from '@/types/Video';

interface VideosResponseResult {
  type: string;
  key: string;
  name: string;
  id: string;
  site: string;
}

interface VideosResponse {
  id: number;
  results: VideosResponseResult[];
}

export async function getUpcomingMoviesTrailers(): Promise<Video[]> {
  const upcomingRes = await tmdbAPI(`/movie/upcoming`);
  if (!upcomingRes.ok) throw Error('Failed to fetch upcoming movies.');
  const upcomingData: PaginatedShowsResponse<MovieResult> =
    await upcomingRes.json();

  const allowedVideoTypes = ['Trailer', 'Teaser'];

  const trailers: Video[] = [];

  for (const movie of upcomingData.results) {
    const videosRes = await tmdbAPI(`/movie/${movie.id}/videos`);
    if (!videosRes.ok) {
      console.log(`Failed to fetch videos for ${movie.id}: ${movie.title}`);
      continue;
    }

    const videos: VideosResponse = await videosRes.json();
    const trailer = videos.results.find(
      (video) =>
        video.site === 'YouTube' && allowedVideoTypes.includes(video.type)
    );

    if (trailer) {
      trailers.push({
        id: trailer.id,
        movieTitle: movie.title || '',
        name: trailer.name,
        showId: movie.id,
        showType: 'movie',
        thumbnailPath: movie.backdrop_path,
        youtubeKey: trailer.key,
      });
    }
  }

  if (!trailers.length)
    throw Error('No trailers for upcoming movies available.');

  return trailers;
}
