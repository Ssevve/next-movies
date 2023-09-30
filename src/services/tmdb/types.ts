import VideoType from '@/types/VideoType';

export interface TMDBShow {
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
}

export interface TMDBMovie extends TMDBShow {
  title: string;
  release_date: string;
  name?: never;
  first_air_date?: never;
}

export interface TMDBTvShow extends TMDBShow {
  name: string;
  first_air_date: string | undefined;
  release_date?: never;
  title?: never;
}

export type TMDBUnknownShow = TMDBMovie | TMDBTvShow;

export interface TMDBPaginatedShows<T = TMDBUnknownShow> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface TMDBVideo {
  type: VideoType;
  key: string;
  name: string;
  id: string;
  site: string;
}

export interface TMDBVideos {
  id: number;
  results: TMDBVideo[];
}

interface TMDBGenre {
  id: number;
  name: string;
}

interface TMDBImage {
  height: number;
  width: number;
  path: string;
  aspectRatio: number;
}

interface TMDBImages {
  backdrops: TMDBImage[];
  poster: TMDBImage[];
}

interface TMDBKeyword {
  id: number;
  name: string;
}

interface TMDBCastPerson {
  id: number;
  name: string;
  imagePath: string;
  character: string;
}

interface TMDBCredits {
  cast: TMDBCastPerson[];
}

interface TMDBReleaseDate {
  certification: string;
}

interface TMDBReleaseDatesResult {
  iso_3166_1: string;
  results: TMDBReleaseDate[];
}

interface TMDBReleaseDates {
  results: TMDBReleaseDatesResult[];
}

interface TMDBDetailedShow extends TMDBShow {}

export interface TMDBDetailedMovie extends TMDBMovie {
  genres: TMDBGenre[];
  budget: number;
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  videos: Omit<TMDBVideos, 'id'>;
  images: TMDBImages;
  keywords: TMDBKeyword[];
  external_ids: Record<string, string>;
  recommendations: TMDBPaginatedShows<TMDBMovie>;
  credits: TMDBCredits;
  release_dates: TMDBReleaseDates;
}
