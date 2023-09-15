import 'server-only';

import { transformPaginatedShowsResponse } from '@/lib/utils';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

import { PaginatedShowsResponse } from '../types';
import tmdbAPI from './client';

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
    throw Error(
      `Failed to fetch trending ${
        showType === 'all' ? 'shows' : `${showType}s`
      }.`
    );
  }

  const data: PaginatedShowsResponse = await res.json();
  return transformPaginatedShowsResponse(data);
}
