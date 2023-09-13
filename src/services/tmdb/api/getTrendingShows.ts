import 'server-only';

import { transformTMDBResponse } from '@/lib/utils';
import { PaginatedResponse } from '@/types/PaginatedResponse';
import { PaginatedShows } from '@/types/PaginatedShows';
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

  const data: PaginatedResponse = await res.json();

  return transformTMDBResponse(data);
}
