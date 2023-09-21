import 'server-only';

import { transformPaginatedShowsResponse } from '@/lib/utils';
import tmdbAPI from '@/services/tmdb/api/client';
import { PaginatedShowsResponse } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

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
