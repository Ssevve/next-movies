import { TMDBPerson } from '@/services/TMDB/types/TMDBPerson';
import { TMDBMovie, TMDBTvShow, TMDBUnknownShow } from '@/services/TMDB/types/TMDBShow';

export type TMDBShowSearchResult = {
  overview?: string;
} & TMDBUnknownShow;

export type TMDBMovieSearchResult = TMDBShowSearchResult & TMDBMovie;
export type TMDBTvShowSearchResult = TMDBShowSearchResult & TMDBTvShow;

export type TMDBSearchResult = TMDBPerson | TMDBShowSearchResult;
