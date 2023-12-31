import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import { TMDBTvShow } from '@/services/TMDB/types/TMDBShow';
import transformPaginatedShowsResponse from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import { Show } from '@/types/Show';

export default async function getAiringTodayTvShows(
  requestPage = 1
): Promise<PaginatedResponse<Show>> {
  const res = await TMDBApi(`/tv/airing_today?page=${requestPage}`);
  if (!res.ok) throw Error('Failed to fetch airing today TV shows.');
  const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBTvShow> =
    await res.json();
  return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
}
