interface MovieResult {
  title: string;
  name: never;
  release_date: string;
  first_air_date: never;
}

interface TvShowResult {
  name: string;
  title: never;
  first_air_date: string;
  release_date: never;
}

type Result = {
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
} & (MovieResult | TvShowResult);

export interface PaginatedResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
