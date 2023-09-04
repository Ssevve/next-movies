import { env } from '@/config/env';
import { Show, ShowType } from '@/types/Show';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export type TimeWindow = 'day' | 'week';

interface TrendingArgs {
  showType: ShowType | 'all';
  timeWindow: TimeWindow;
}

interface MovieTrendingResult {
  title: string;
  name: never;
}

interface TvShowTrendingResult {
  name: string;
  title: never;
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

export const getTrending = async ({
  showType,
  timeWindow,
}: TrendingArgs): Promise<Show[]> => {
  const url = `${TMDB_BASE_URL}/trending/${showType}/${timeWindow}`;
  const res = await fetch(url, {
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error('Failed to fetch trending data');

  const trending: TrendingResponse = await res.json();

  const transformedTrending = trending.results.map((result): Show => {
    return {
      id: result.id,
      posterPath: TMDB_IMAGE_URL + result.poster_path,
      rating: result.vote_average,
      ratingsCount: result.vote_count,
      showType: result.title ? 'movie' : 'tv',
      title: result.title || result.name,
    };
  });

  return transformedTrending;
};
