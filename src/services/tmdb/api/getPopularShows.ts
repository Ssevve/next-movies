import 'server-only';

import { transformPaginatedShowsResponse } from '@/lib/utils';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

import { PaginatedShowsResponse } from '../types';
import tmdbAPI from './client';

interface PopularArgs {
  showType: ShowType;
}

export async function getPopularShows({
  showType,
}: PopularArgs): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/${showType}/popular`);
  if (!res.ok) throw Error(`Failed to fetch popular ${showType}s.`);

  const data: PaginatedShowsResponse = await res.json();
  return transformPaginatedShowsResponse(data);
}
