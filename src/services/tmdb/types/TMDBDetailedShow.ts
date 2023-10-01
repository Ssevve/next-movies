import TMDBGenre from '@/services/tmdb/types/TMDBGenre';
import TMDBImages from '@/services/tmdb/types/TMDBImages';
import TMDBKeyword from '@/services/tmdb/types/TMDBKeyword';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
import TMDBShow from '@/services/tmdb/types/TMDBShow';
import TMDBVideos from '@/services/tmdb/types/TMDBVideos';

interface TMDBExternalIds {
  twitter_id?: string;
  facebook_id?: string;
  instagram_id?: string;
}

interface TMDBKeywords {
  keywords: TMDBKeyword[];
}

export default interface TMDBDetailedShow extends TMDBShow {
  genres: TMDBGenre[];
  images: TMDBImages;
  videos: Pick<TMDBVideos, 'results'>;
  external_ids: TMDBExternalIds;
  original_language: string;
  recommendations: TMDBPaginatedShows;
  keywords: TMDBKeywords;
  tagline: string;
  overview: string;
  homepage: string;
  status: string;
}
