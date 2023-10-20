import TMDBImages from '@/services/TMDB/types/TMDBImages';
import TMDBShow from '@/services/TMDB/types/TMDBShow';
import TMDBShowStatus from '@/services/TMDB/types/TMDBShowStatus';
import TMDBVideo from '@/services/TMDB/types/TMDBVideo';

export default interface TMDBDetailedShow<S = TMDBShowStatus> extends TMDBShow {
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
  status: S;
}
