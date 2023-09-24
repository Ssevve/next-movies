import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformPaginatedShowsResponse from '@/services/tmdb/helpers/transformPaginatedShowsResponse/transformPaginatedShowsResponse';
import { PaginatedShowsResponse } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

export async function getPopularShows(showType: ShowType): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/${showType}/popular`);
  if (res.ok) {
    const { page, results, total_pages, total_results }: PaginatedShowsResponse = await res.json();
    return transformPaginatedShowsResponse({ page, results, total_pages, total_results });
  }

  throw Error(`Failed to fetch popular ${showType === 'movie' ? 'movies' : 'TV shows'}.`);
}
