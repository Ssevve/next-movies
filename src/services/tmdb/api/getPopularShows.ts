import 'server-only';

import { transformTMDBResponse } from '@/lib/utils';
import { PaginatedShows } from '@/types/PaginatedShows';
import { ShowType } from '@/types/Show';

import { PaginatedShowsResponse } from '../types';
import tmdbAPI from './client';

interface PopularArgs {
  showType: ShowType;
}

export async function getPopularShows({
  showType,
}: PopularArgs): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/${showType}/popular`);

  if (!res.ok) throw new Error('Data not available');

  const data: PaginatedShowsResponse = await res.json();

  return transformTMDBResponse(data);
}