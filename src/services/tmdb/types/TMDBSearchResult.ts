import { TMDBMovie, TMDBTvShow, TMDBUnknownShow } from '@/services/TMDB/types/TMDBShow';

export type TMDBShowSearchResult = {
  overview?: string;
} & TMDBUnknownShow;

export type TMDBMovieSearchResult = TMDBShowSearchResult & TMDBMovie;
export type TMDBTvShowSearchResult = TMDBShowSearchResult & TMDBTvShow;

export interface TMDBPersonSearchResultTvShow {
  id: number;
  media_type: 'tv';
  name: string;
}

export interface TMDBPersonSearchResultMovie {
  id: number;
  title: string;
  media_type: 'movie';
}

export type TMDBPersonSearchResultShow = TMDBPersonSearchResultTvShow | TMDBPersonSearchResultMovie;

export interface TMDBPersonSearchResult {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  known_for: TMDBPersonSearchResultShow[];
}

export type TMDBSearchResult = TMDBPersonSearchResult | TMDBShowSearchResult;
