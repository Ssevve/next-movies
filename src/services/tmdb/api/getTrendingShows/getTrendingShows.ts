import 'server-only';

import { transformPaginatedShowsResponse } from '@/lib/utils';
import tmdbAPI from '@/services/tmdb/api/client';
import { PaginatedShowsResponse } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

export type TimeWindow = 'day' | 'week';

interface TrendingArgs {
  showType: ShowType | 'all';
  timeWindow: TimeWindow;
}

export async function getTrendingShows({
  showType,
  timeWindow,
}: TrendingArgs): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/trending/${showType}/${timeWindow}`);
  if (!res.ok) {
    if (showType === 'movie') {
      throw Error('Failed to fetch trending movies.');
    } else if (showType === 'tv') {
      throw Error('Failed to fetch trending TV shows.');
    } else {
      throw Error('Failed to fetch trending shows.');
    }
  }

  const data: PaginatedShowsResponse = await res.json();

  return transformPaginatedShowsResponse(data);
}
