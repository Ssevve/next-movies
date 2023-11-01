import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';

export default function generateMockPaginatedResponse<T>(
  results: T[],
  resultsPerPage = 1
): TMDBPaginatedResponse<T> {
  return {
    page: 1,
    results,
    total_pages: Math.ceil(results.length / resultsPerPage),
    total_results: results.length,
  };
}
