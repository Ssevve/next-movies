import { Show } from './Show';

export interface PaginatedShows {
  page: number;
  results: Show[];
  totalPages: number;
  totalResults: number;
}
