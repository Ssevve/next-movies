import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';

export default function generateMockPaginatedResponse<T>(results: T[]): TMDBPaginatedResponse<T> {
  return {
    page: 1,
    results,
    total_pages: 1,
    total_results: results.length,
  };
}
