import 'server-only';

import { MovieTrailer } from '@/types/MovieTrailer';
import { PaginatedShowsResponse } from '@/types/PaginatedShowsResponse';

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

export async function getUpcomingMoviesTrailers(): Promise<MovieTrailer[]> {
  const upcomingRes = await tmdbAPI(`/movie/upcoming`);
  if (!upcomingRes.ok) throw new Error('Data not available');
  const upcomingData: PaginatedShowsResponse = await upcomingRes.json();

  const possibleVideoTypes = ['Trailer', 'Teaser'];

  const trailers: MovieTrailer[] = [];

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
        id: trailer.id,
        movieTitle: movie.title,
        name: trailer.name,
        youtubeKey: trailer.key,
      });
    }
  }

  return trailers;
}
