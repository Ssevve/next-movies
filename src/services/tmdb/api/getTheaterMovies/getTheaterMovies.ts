import 'server-only';

import { transformPaginatedShowsResponse } from '@/lib/utils';
import tmdbAPI from '@/services/tmdb/api/client';
import { MovieResult, PaginatedShowsResponse } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';

export async function getTheaterMovies(): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/movie/now_playing`);
  if (!res.ok) throw Error('Failed to fetch theater movies.');
  const { page, results, total_pages, total_results }: PaginatedShowsResponse<MovieResult> =
    await res.json();
  return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
}
