import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import { TMDBMovie } from '@/services/TMDB/types/TMDBShow';
import transformUpcomingMovies from '@/services/TMDB/utils/transformUpcomingMovies/transformUpcomingMovies';
import PaginatedResponse from '@/types/PaginatedResponse';
import UpcomingMovie from '@/types/UpcomingMovie';

export default async function getUpcomingMovies(
  requestPage = 1
): Promise<PaginatedResponse<UpcomingMovie>> {
  const res = await TMDBApi(`/movie/upcoming?page=${requestPage}`);
  if (!res.ok) throw Error('Failed to fetch upcoming movies.');
  const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBMovie> =
    await res.json();

  return {
    page,
    results: transformUpcomingMovies(results),
    totalPages: total_pages,
    totalResults: total_results,
  };
}
