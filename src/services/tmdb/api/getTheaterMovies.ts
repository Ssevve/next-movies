import 'server-only';

import { transformPaginatedShowsResponse } from '@/lib/utils';
import PaginatedShows from '@/types/PaginatedShows';

import { MovieResult, PaginatedShowsResponse } from '../types';
import tmdbAPI from './client';

export async function getTheaterMovies(): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/movie/now_playing`);
  if (!res.ok) throw Error('Failed to fetch theater movies.');
  const data: PaginatedShowsResponse<MovieResult> = await res.json();
  return transformPaginatedShowsResponse(data);
}
