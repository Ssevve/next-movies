import 'server-only';

import { env } from '@/config/env';
import { Show, ShowType } from '@/types/Show';

import {
  TMDB_BASE_URL,
  TMDB_CARD_POSTER_PATH,
  TMDB_IMAGE_URL,
} from '../constants';

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

export interface TrendingResponse {
  page: number;
  results: TrendingResult[];
  total_pages: number;
  total_results: number;
}

interface PaginatedShows {
  page: number;
  results: Show[];
  totalPages: number;
  totalResults: number;
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

  const trendingShowsResponseData: TrendingResponse = await res.json();

  const transformedTrendingShows = trendingShowsResponseData.results.map(
    (show): Show => {
      return {
        id: show.id,
        posterPath: `${TMDB_IMAGE_URL}${TMDB_CARD_POSTER_PATH}${show.poster_path}`,
        rating: show.vote_average,
        ratingsCount: show.vote_count,
        releaseDate: show.release_date || show.first_air_date,
        showType: show.title ? 'movie' : 'tv',
        title: show.title || show.name,
      };
    }
  );

  const transformedResponse = {
    page: trendingShowsResponseData.page,
    results: transformedTrendingShows,
    totalPages: trendingShowsResponseData.total_pages,
    totalResults: trendingShowsResponseData.total_results,
  };

  return transformedResponse;
};
