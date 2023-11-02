import TMDBExternalIds from '@/services/TMDB/types/TMDBExternalIds';
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
  external_ids: TMDBExternalIds;
  original_language: string;
  tagline?: string;
  overview?: string;
  homepage: string;
  status: S;
}
