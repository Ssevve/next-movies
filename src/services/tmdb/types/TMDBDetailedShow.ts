import TMDBGenre from '@/services/TMDB/types/TMDBGenre';
import TMDBImages from '@/services/TMDB/types/TMDBImages';
import TMDBKeyword from '@/services/TMDB/types/TMDBKeyword';
import TMDBPaginatedShows from '@/services/TMDB/types/TMDBPaginatedShows';
import TMDBShow from '@/services/TMDB/types/TMDBShow';
import TMDBVideos from '@/services/TMDB/types/TMDBVideos';

interface TMDBExternalIds {
  twitter_id: string;
  facebook_id: string;
  instagram_id: string;
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
