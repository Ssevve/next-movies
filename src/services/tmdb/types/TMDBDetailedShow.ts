import TMDBShow from '@/services/tmdb/types/TMDBShow';

import TMDBGenre from './TMDBGenre';
import TMDBImages from './TMDBImages';
import TMDBKeyword from './TMDBKeyword';
import TMDBPaginatedShows from './TMDBPaginatedShows';
import TMDBVideo from './TMDBVideo';
import TMDBVideos from './TMDBVideos';

interface ExternalIds {
  twitter_id?: string;
  facebook_id?: string;
  instagram_id?: string;
}

export default interface TMDBDetailedShow extends TMDBShow {
  genres: TMDBGenre[];
  images: TMDBImages;
  videos: Pick<TMDBVideos, 'results'>;
  external_ids: ExternalIds;
  original_language: string;
  recommendations: TMDBPaginatedShows;
  keywords: TMDBKeyword[];
  tagline: string;
  overview: string;
  homepage: string;
  status: string;
}
