interface Result {
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
}

export interface MovieResult extends Result {
  title: string;
  release_date: string;
}

interface TvShowResult extends Result {
  name: string;
  first_air_date: string;
}

type MixedShowsResult = MovieResult | TvShowResult;

export interface PaginatedShowsResponse<T = MixedShowsResult> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
