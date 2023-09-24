import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformShowsResults from '@/services/tmdb/helpers/transformShowsResults/transformShowsResults';
import Show from '@/types/Show';

import { MovieResult, PaginatedShowsResponse } from '../../types';

export async function getUpcomingMovies(): Promise<Show[]> {
  const res = await tmdbAPI(`/movie/upcoming`);
  if (!res.ok) throw Error('Failed to fetch upcoming movies.');
  const movies: PaginatedShowsResponse<MovieResult> = await res.json();
  return transformShowsResults(movies.results);
}
