import transformShowsResults from '@/services/tmdb/helpers/transformShowsResults/transformShowsResults';
import { MixedShowsResult } from '@/services/tmdb/types';

interface TransformPaginatedShowsResponseArgs {
  page: number;
  results: MixedShowsResult[];
  total_pages: number;
  total_results: number;
}

export default function transformPaginatedShowsResponse({
  page,
  results,
  total_pages,
  total_results,
}: TransformPaginatedShowsResponseArgs) {
  const transformedResponse = {
    page,
    results: transformShowsResults(results),
    totalPages: total_pages,
    totalResults: total_results,
  };

  return transformedResponse;
}
