import TMDBUnknownShow from '@/services/tmdb/types/TMDBUnknownShow';
import transformShows from '@/services/tmdb/utils/transformShows/transformShows';
import PaginatedShows from '@/types/PaginatedShows';

interface TransformPaginatedShowsArgs {
  page: number;
  results: TMDBUnknownShow[];
  total_pages: number;
  total_results: number;
}

export default function transformPaginatedShows({
  page,
  results,
  total_pages,
  total_results,
}: TransformPaginatedShowsArgs): PaginatedShows {
  const transformedResponse = {
    page,
    results: results.length ? transformShows(results) : [],
    totalPages: total_pages,
    totalResults: total_results,
  };

  return transformedResponse;
}
