import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformPaginatedShowsResponse from '@/services/tmdb/helpers/transformPaginatedShowsResponse/transformPaginatedShowsResponse';
import { PaginatedShowsResponse } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

export type TimeWindow = 'day' | 'week';

interface TrendingArgs {
  showType?: ShowType | 'all';
  timeWindow: TimeWindow;
}

export async function getTrendingShows({
  showType,
  timeWindow,
}: TrendingArgs): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/trending/${showType}/${timeWindow}`);
  if (res.ok) {
    const { page, results, total_pages, total_results }: PaginatedShowsResponse = await res.json();
    return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
  }

  let errorMessage = 'Failed to fetch trending ';
  if (showType === 'movie') errorMessage += 'movies.';
  else if (showType === 'tv') errorMessage += 'TV shows.';
  else errorMessage += 'shows.';

  throw Error(errorMessage);
}
