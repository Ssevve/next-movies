import 'server-only';

import { transformTMDBResponse } from '@/lib/utils';
import { PaginatedShows } from '@/types/PaginatedShows';
import { PaginatedShowsResponse } from '@/types/PaginatedShowsResponse';
import { ShowType } from '@/types/Show';

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

  if (!res.ok) throw new Error('Data not available');

  const data: PaginatedShowsResponse = await res.json();

  return transformTMDBResponse(data);
}
