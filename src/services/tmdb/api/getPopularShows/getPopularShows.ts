import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformPaginatedShows from '@/services/tmdb/helpers/transformPaginatedShows/transformPaginatedShows';
import { TMDBPaginatedShows } from '@/services/tmdb/types';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

export async function getPopularShows(showType: ShowType): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/${showType}/popular`);
  if (res.ok) {
    const { page, results, total_pages, total_results }: TMDBPaginatedShows = await res.json();
    return transformPaginatedShows({ page, results, total_pages, total_results });
  }

  throw Error(`Failed to fetch popular ${showType === 'movie' ? 'movies' : 'TV shows'}.`);
}
