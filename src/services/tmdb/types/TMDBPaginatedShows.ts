import TMDBUnknownShow from '@/services/tmdb/types/TMDBUnknownShow';

export default interface TMDBPaginatedShows<T = TMDBUnknownShow> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
