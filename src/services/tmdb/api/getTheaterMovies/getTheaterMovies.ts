import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformPaginatedShowsResponse from '@/services/tmdb/helpers/transformPaginatedShows/transformPaginatedShows';
import { TMDBMovie, TMDBPaginatedShows } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';

export async function getTheaterMovies(): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/movie/now_playing`);
  if (!res.ok) throw Error('Failed to fetch theater movies.');
  const { page, results, total_pages, total_results }: TMDBPaginatedShows<TMDBMovie> =
    await res.json();
  return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
}
