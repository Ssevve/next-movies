import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import { MovieResult, PaginatedShowsResponse } from '@/services/tmdb/types';

export async function getUpcomingMovies(): Promise<PaginatedShowsResponse<MovieResult>> {
  const res = await tmdbAPI(`/movie/upcoming`);
  if (!res.ok) throw Error('Failed to fetch upcoming movies.');
  return await res.json();
}
