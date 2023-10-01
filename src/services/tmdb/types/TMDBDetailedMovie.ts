import TMDBCredits from '@/services/tmdb/types/TMDBCredits';
import TMDBDetailedShow from '@/services/tmdb/types/TMDBDetailedShow';
import TMDBGenre from '@/services/tmdb/types/TMDBGenre';
import TMDBImages from '@/services/tmdb/types/TMDBImages';
import TMDBKeyword from '@/services/tmdb/types/TMDBKeyword';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
import TMDBVideos from '@/services/tmdb/types/TMDBVideos';

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

export default interface TMDBDetailedMovie extends TMDBDetailedShow {
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
