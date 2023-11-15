import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import transformPaginatedShowsResponse from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import Show from '@/types/Show';

// TODO: tests for correct page
export default async function getTheaterMovies(requestPage = 1): Promise<PaginatedResponse<Show>> {
  const res = await TMDBApi(`/movie/now_playing?page=${requestPage}`);
  if (!res.ok) throw Error('Failed to fetch theater movies.');
  const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBMovie> =
    await res.json();
  return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
}
