import TMDBImages from '@/services/TMDB/types/TMDBImages';
import TMDBPaginatedShows from '@/services/TMDB/types/TMDBPaginatedShows';
import TMDBShow from '@/services/TMDB/types/TMDBShow';
import TMDBVideo from '@/services/TMDB/types/TMDBVideo';

export default interface TMDBDetailedShow extends TMDBShow {
  genres: { id: number; name: string }[];
  images: TMDBImages;
  videos: {
    results: TMDBVideo[];
  };
  external_ids: {
    twitter_id: string;
    facebook_id: string;
    instagram_id: string;
  };
  original_language: string;
  tagline: string;
  overview: string;
  homepage: string;
  status: string;
}
