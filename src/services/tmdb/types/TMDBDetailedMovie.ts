import { TMDBDetailedShow, TMDBShowStatus } from '@/services/TMDB/types/TMDBDetailedShow';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import { TMDBMovie } from '@/services/TMDB/types/TMDBShow';

export interface TMDBReleaseDates {
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
    }[];
  }[];
}

export interface TMDBMovieCastPerson {
  id: number;
  name: string;
  profile_path?: string;
  character: string;
}

export interface TMDBMovieCrewPerson {
  id: number;
  name: string;
  job: string;
}

export type TMDBMovieStatus = TMDBShowStatus | 'Post Production' | 'Released';

export interface TMDBDetailedMovie extends TMDBDetailedShow<TMDBMovieStatus>, TMDBMovie {
  budget: number;
  revenue: number;
  runtime: number;
  credits: {
    cast: TMDBMovieCastPerson[];
    crew: TMDBMovieCrewPerson[];
  };
  keywords: { keywords: { id: number; name: string }[] };
  release_dates: TMDBReleaseDates;
  recommendations: TMDBPaginatedResponse<TMDBMovie>;
}
