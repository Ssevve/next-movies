import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';
import transformPaginatedShows from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import { Show } from '@/types/Show';
import { ShowType } from '@/types/Show';

export default async function getTopRatedShows(
  showType: ShowType,
  requestPage = 1
): Promise<PaginatedResponse<Show>> {
  const res = await TMDBApi(`/${showType}/top_rated?page=${requestPage}`);
  if (!res.ok) {
    throw Error(`Failed to fetch top rated ${showType === 'movie' ? 'movies' : 'TV shows'}.`);
  }

  const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBUnknownShow> =
    await res.json();
  return transformPaginatedShows({ page, results, total_pages, total_results });
}
