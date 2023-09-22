import 'server-only';

import { transformPaginatedShowsResponse } from '@/lib/utils';
import tmdbAPI from '@/services/tmdb/api/client';
import { PaginatedShowsResponse } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

export async function getPopularShows(showType: ShowType): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/${showType}/popular`);
  if (res.ok) {
    const data: PaginatedShowsResponse = await res.json();
    return transformPaginatedShowsResponse(data);
  }

  throw Error(`Failed to fetch popular ${showType === 'movie' ? 'movies' : 'TV shows'}.`);
}
