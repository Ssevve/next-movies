import Creator from '@/types/Creator';
import Genre from '@/types/Genre';
import Images from '@/types/Images';
import Keyword from '@/types/Keyword';
import Show from '@/types/Show';
import SocialHandles from '@/types/SocialHandles';
import Video from '@/types/Video';

export default interface DetailedShow extends Show {
  genres: Genre[];
  images: Images;
  videos: Video[];
  socialHandles: SocialHandles;
  originalLanguage: string;
  recommendations: Show[];
  keywords: Keyword[];
  tagline?: string;
  overview: string;
  homepage: string;
  originalTitle: string;
  status: string;
  rating: string;
  createdBy: Creator[];
}
