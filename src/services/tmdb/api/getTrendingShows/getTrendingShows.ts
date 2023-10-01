import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformPaginatedShowsResponse from '@/services/tmdb/helpers/transformPaginatedShows/transformPaginatedShows';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
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
  const res = await tmdbAPI(`/trending/${showType}/${timeWindow}`);
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
