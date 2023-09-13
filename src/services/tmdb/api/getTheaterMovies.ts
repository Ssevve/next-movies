import 'server-only';

import { transformTMDBResponse } from '@/lib/utils';
import { PaginatedShows } from '@/types/PaginatedShows';

import { PaginatedShowsResponse } from '../types';
import tmdbAPI from './client';

export async function getTheaterMovies(): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/movie/now_playing`);

  if (!res.ok) throw new Error('Data not available');

  const data: PaginatedShowsResponse = await res.json();

  return transformTMDBResponse(data);
}
