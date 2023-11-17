import { TMDBShowStatus } from '@/services/TMDB/types/TMDBDetailedShow';
import Backdrop from '@/types/Backdrop';
import Image from '@/types/Image';
import { Show, ShowType } from '@/types/Show';
import Video from '@/types/Video';

export type SocialHandle = string | null;

export interface Creator {
  name: string;
  id: number;
}

export interface SocialHandles {
  facebook: SocialHandle;
  instagram: SocialHandle;
  twitter: SocialHandle;
}

export interface Genre {
  id: number;
  name: string;
}

export interface CastPerson {
  id: number;
  name: string;
  imagePath: string;
}

export interface DetailedShow<C = CastPerson, S = TMDBShowStatus> extends Show {
  backdrop: Backdrop;
  userScoreCount: number;
  genres: Genre[];
  images: {
    backdrops: Image[];
    posters: Image[];
  };
  videos: Video[];
  socialHandles: SocialHandles;
  originalLanguage: string;
  recommendations: Show[];
  keywords: { id: number; name: string }[];
  tagline: string | null;
  overview: string;
  homepage: string;
  rating: string | null;
  createdBy: Creator[];
  showType: ShowType;
  status: S;
  cast: C[];
}
