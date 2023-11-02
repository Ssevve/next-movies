import TMDBShowStatus from '@/services/TMDB/types/TMDBShowStatus';
import ShowType from '@/types//ShowType';
import Backdrop from '@/types/Backdrop';
import CastPerson from '@/types/CastPerson';
import Creator from '@/types/Creator';
import Genre from '@/types/Genre';
import Image from '@/types/Image';
import Show from '@/types/Show';
import SocialHandles from '@/types/SocialHandles';
import Video from '@/types/Video';

export default interface DetailedShow<C = CastPerson, S = TMDBShowStatus> extends Show {
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
  tagline?: string;
  overview: string;
  homepage: string;
  rating: string;
  createdBy: Creator[];
  showType: ShowType;
  status: S;
  cast: C[];
}
