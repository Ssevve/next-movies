import TMDBShow from '@/services/tmdb/types/TMDBShow';

import TMDBGenre from './TMDBGenre';
import TMDBImages from './TMDBImages';
import TMDBKeyword from './TMDBKeyword';
import TMDBPaginatedShows from './TMDBPaginatedShows';
import TMDBVideos from './TMDBVideos';

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
