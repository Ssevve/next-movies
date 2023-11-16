import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';

interface GenerateMockPaginatedResponseArgs<T> {
  results: T[];
  resultsPerPage?: number;
  page?: number | string;
}

export default function generateMockPaginatedResponse<T>({
  results,
  resultsPerPage = 1,
  page = 1,
}: GenerateMockPaginatedResponseArgs<T>): TMDBPaginatedResponse<T> {
  return {
    page: Number(page),
    results,
    total_pages: Math.ceil(results.length / resultsPerPage),
    total_results: results.length,
  };
}
