import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
import transformPaginatedShowsResponse from '@/services/tmdb/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedShows from '@/types/PaginatedShows';

export default async function getTheaterMovies(): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/movie/now_playing`);
  if (!res.ok) throw Error('Failed to fetch theater movies.');
  const { page, results, total_pages, total_results }: TMDBPaginatedShows<TMDBMovie> =
    await res.json();
  return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
}
