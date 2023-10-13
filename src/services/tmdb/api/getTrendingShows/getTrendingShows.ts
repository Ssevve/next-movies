import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedShows from '@/services/TMDB/types/TMDBPaginatedShows';
import transformPaginatedShowsResponse from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

export type TimeWindow = 'day' | 'week';

interface TrendingArgs {
  showType?: ShowType | 'all';
  timeWindow: TimeWindow;
}

export default async function getTrendingShows({
  showType,
  timeWindow,
}: TrendingArgs): Promise<PaginatedShows> {
  const res = await TMDBApi(`/trending/${showType}/${timeWindow}`);
  if (res.ok) {
    const { page, results, total_pages, total_results }: TMDBPaginatedShows = await res.json();
    return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
  }

  let errorMessage = 'Failed to fetch trending ';
  if (showType === 'movie') errorMessage += 'movies.';
  else if (showType === 'tv') errorMessage += 'TV shows.';
  else errorMessage += 'shows.';

  throw Error(errorMessage);
}
