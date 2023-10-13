import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBPaginatedShows from '@/services/TMDB/types/TMDBPaginatedShows';
import transformPaginatedShowsResponse from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedShows from '@/types/PaginatedShows';

export default async function getTheaterMovies(): Promise<PaginatedShows> {
  const res = await TMDBApi(`/movie/now_playing`);
  if (!res.ok) throw Error('Failed to fetch theater movies.');
  const { page, results, total_pages, total_results }: TMDBPaginatedShows<TMDBMovie> =
    await res.json();
  return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
}
