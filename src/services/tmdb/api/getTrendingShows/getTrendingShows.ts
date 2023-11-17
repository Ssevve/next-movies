import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import { TMDBUnknownShow } from '@/services/TMDB/types/TMDBShow';
import transformPaginatedShowsResponse from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import { Show, ShowType } from '@/types/Show';

export type TimeWindow = 'day' | 'week';

interface TrendingArgs {
  showType?: ShowType | 'all';
  timeWindow: TimeWindow;
}

export default async function getTrendingShows({
  showType,
  timeWindow,
}: TrendingArgs): Promise<PaginatedResponse<Show>> {
  const res = await TMDBApi(`/trending/${showType}/${timeWindow}`);
  if (res.ok) {
    const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBUnknownShow> =
      await res.json();
    return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
  }

  let errorMessage = 'Failed to fetch trending ';
  if (showType === 'movie') errorMessage += 'movies.';
  else if (showType === 'tv') errorMessage += 'TV shows.';
  else errorMessage += 'shows.';

  throw Error(errorMessage);
}
