import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import Show from '@/types/Show';

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
}: TransformPaginatedShowsArgs): PaginatedResponse<Show> {
  const transformedResponse = {
    page,
    results: results.length ? transformShows(results) : [],
    totalPages: total_pages,
    totalResults: total_results,
  };

  return transformedResponse;
}
