import { env } from '@/config/env';
import { Show, ShowType } from '@/types/Show';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

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
  });

  if (!res.ok) throw new Error('Data not available');

  const trendingShows: TrendingResponse = await res.json();

  const transformedTrendingShows = trendingShows.results.map((show): Show => {
    return {
      id: show.id,
      posterPath: TMDB_IMAGE_URL + show.poster_path,
      rating: show.vote_average,
      ratingsCount: show.vote_count,
      showType: show.title ? 'movie' : 'tv',
      title: show.title || show.name,
    };
  });

  return transformedTrendingShows;
};
