import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedShows from '@/services/TMDB/types/TMDBPaginatedShows';
import transformPaginatedShows from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedShows from '@/types/PaginatedShows';
import ShowType from '@/types/ShowType';

export default async function getPopularShows(showType: ShowType): Promise<PaginatedShows> {
  const res = await TMDBApi(`/${showType}/popular`);
  if (res.ok) {
    const { page, results, total_pages, total_results }: TMDBPaginatedShows = await res.json();
    return transformPaginatedShows({ page, results, total_pages, total_results });
  }

  throw Error(`Failed to fetch popular ${showType === 'movie' ? 'movies' : 'TV shows'}.`);
}
