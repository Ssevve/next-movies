import ShowType from '@/types//ShowType';
import Backdrop from '@/types/Backdrop';
import Creator from '@/types/Creator';
import Genre from '@/types/Genre';
import Image from '@/types/Image';
import MovieCastPerson from '@/types/MovieCastPerson';
import Show from '@/types/Show';
import Video from '@/types/Video';

export default interface DetailedShow extends Show {
  backdrop: Backdrop;
  userScoreCount: number;
  genres: Genre[];
  images: {
    backdrops: Image[];
    posters: Image[];
  };
  videos: Video[];
  socialHandles: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  originalLanguage: string;
  recommendations: Show[];
  keywords: { id: number; name: string }[];
  tagline?: string;
  overview: string;
  homepage: string;
  status: string;
  rating: string;
  createdBy: Creator[];
  showType: ShowType;
}
