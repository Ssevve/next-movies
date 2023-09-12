import 'server-only';

import { env } from '@/config/env';
import { PaginatedShows, transformTrendingData } from '@/lib/helpers';
import { Show, ShowType } from '@/types/Show';

import { TMDB_BASE_URL, TMDB_IMAGE_URL } from '../constants';

export type TimeWindow = 'day' | 'week' | 'weeks';

interface TrendingArgs {
  showType: ShowType | 'all';
  timeWindow: TimeWindow;
}

interface MovieTrendingResult {
  title: string;
  name: never;
  release_date: string;
  first_air_date: never;
}

interface TvShowTrendingResult {
  name: string;
  title: never;
  first_air_date: string;
  release_date: never;
}

type TrendingResult = {
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
} & (MovieTrendingResult | TvShowTrendingResult);

export interface TrendingResponse {
  page: number;
  results: TrendingResult[];
  total_pages: number;
  total_results: number;
}

export const getTrendingShows = async ({
  showType,
  timeWindow,
}: TrendingArgs): Promise<PaginatedShows> => {
  const url = `${TMDB_BASE_URL}/trending/${showType}/${timeWindow}`;
  const res = await fetch(url, {
    cache: 'no-cache',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error('Data not available');

  const trendingShowsData: TrendingResponse = await res.json();

  return transformTrendingData(trendingShowsData);
};
