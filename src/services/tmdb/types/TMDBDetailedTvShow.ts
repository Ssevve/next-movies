import { TMDBDetailedShow, TMDBShowStatus } from '@/services/TMDB/types/TMDBDetailedShow';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import { TMDBTvShow } from '@/services/TMDB/types/TMDBShow';

export interface TMDBTvShowCastPerson {
  id: number;
  name: string;
  profile_path?: string;
  roles: {
    character: string;
  }[];
  total_episode_count: number;
}

export interface TMDBNetwork {
  id: number;
  logo_path: string;
  name: string;
}

export interface TMDBSeason {
  air_date?: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path?: string;
  season_number: number;
  vote_average: number;
}

type TMDBEpisodeType = 'finale' | 'standard' | 'mid_season';

export interface TMDBEpisode {
  id: number;
  name: string;
  air_date?: string;
  episode_number: number;
  episode_type: TMDBEpisodeType;
  season_number: number;
  show_id: number;
}

export interface TMDBContentRatings {
  results: {
    descriptors: string[];
    iso_3166_1: string;
    rating: string;
  }[];
}

export type TMDBTvShowStatus = TMDBShowStatus | 'Pilot' | 'Returning Series' | 'Ended';

export type TMDBTvShowType =
  | 'Documentary'
  | 'News'
  | 'Miniseries'
  | 'Reality'
  | 'Scripted'
  | 'Talk Show'
  | 'Video';

export interface TMDBDetailedTvShow extends TMDBDetailedShow<TMDBTvShowStatus>, TMDBTvShow {
  created_by: {
    id: number;
    name: string;
  }[];
  aggregate_credits: {
    cast: TMDBTvShowCastPerson[];
  };
  networks: TMDBNetwork[];
  type: TMDBTvShowType;
  seasons: TMDBSeason[];
  last_episode_to_air: TMDBEpisode | null;
  next_episode_to_air: TMDBEpisode | null;
  content_ratings: TMDBContentRatings;
  recommendations: TMDBPaginatedResponse<TMDBTvShow>;
}
