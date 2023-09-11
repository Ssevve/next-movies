import 'server-only';

import { env } from '@/config/env';
import { Show, ShowType } from '@/types/Show';

import { TMDB_BASE_URL, TMDB_IMAGE_URL } from '../constants';

export type TimeWindow = 'day' | 'week';

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

interface TrendingResponse {
  page: number;
  results: TrendingResult[];
  total_pages: number;
  total_results: number;
}

export const getTrendingShows = async ({
  showType,
  timeWindow,
}: TrendingArgs): Promise<Show[]> => {
  const url = `${TMDB_BASE_URL}/trending/${showType}/${timeWindow}`;
  const res = await fetch(url, {
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`,
    },
    next: { revalidate: 3600 }, // 1 hour
  });

  if (!res.ok) throw new Error('Data not available');

  const trendingShows: TrendingResponse = await res.json();

  const transformedTrendingShows = trendingShows.results.map((show): Show => {
    return {
      id: show.id,
      posterPath: TMDB_IMAGE_URL + show.poster_path,
      rating: show.vote_average,
      ratingsCount: show.vote_count,
      releaseDate: show.release_date || show.first_air_date,
      showType: show.title ? 'movie' : 'tv',
      title: show.title || show.name,
    };
  });

  return transformedTrendingShows;
};
