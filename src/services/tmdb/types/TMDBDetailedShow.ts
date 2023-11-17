import { TMDBShow } from '@/services/TMDB/types/TMDBShow';
import { TMDBVideo } from '@/services/TMDB/types/TMDBVideo';

import TMDBImage from './TMDBImage';

export interface TMDBImages {
  backdrops: TMDBImage[];
  posters: TMDBImage[];
}

export interface TMDBExternalIds {
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

export type TMDBShowStatus = 'Cancelled' | 'In Production';

export interface TMDBDetailedShow<S = TMDBShowStatus> extends TMDBShow {
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
