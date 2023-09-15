import Show from './Show';

export default interface PaginatedShows {
  page: number;
  results: Show[];
  totalPages: number;
  totalResults: number;
}
