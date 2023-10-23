import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';
import transformPaginatedShows from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import Show from '@/types/Show';
import ShowType from '@/types/ShowType';

export default async function getPopularShows(
  showType: ShowType
): Promise<PaginatedResponse<Show>> {
  const res = await TMDBApi(`/${showType}/popular`);
  if (res.ok) {
    const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBUnknownShow> =
      await res.json();
    return transformPaginatedShows({ page, results, total_pages, total_results });
  }

  throw Error(`Failed to fetch popular ${showType === 'movie' ? 'movies' : 'TV shows'}.`);
}
