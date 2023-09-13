import 'server-only';

import { transformTMDBResponse } from '@/lib/utils';
import { PaginatedResponse } from '@/types/PaginatedResponse';
import { PaginatedShows } from '@/types/PaginatedShows';

import tmdbAPI from './client';

export async function getTheaterMovies(): Promise<PaginatedShows> {
  const res = await tmdbAPI(`/movie/now_playing`);

  if (!res.ok) throw new Error('Data not available');

  const data: PaginatedResponse = await res.json();

  return transformTMDBResponse(data);
}
