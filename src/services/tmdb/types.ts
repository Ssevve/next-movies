export interface Result {
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
}

export interface MovieResult extends Result {
  media_type: 'movie';
  title?: string;
  release_date?: string;
  name?: never;
  first_air_date?: never;
}

export interface TvShowResult extends Result {
  media_type: 'tv';
  name?: string;
  first_air_date?: string;
  release_date?: never;
  title?: never;
}

export type MixedShowsResult = MovieResult | TvShowResult;

export interface PaginatedShowsResponse<T = MixedShowsResult> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
