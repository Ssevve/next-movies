import { TMDBVideoType } from '@/services/TMDB/types/TMDBVideo';
import Backdrop from '@/types/Backdrop';
import Image from '@/types/Image';
import { ShowType } from '@/types/Show';

export default interface Video {
  showTitle: string;
  showType: ShowType;
  showId: number;
  title: string;
  id: string;
  youtubeKey: string;
  thumbnail: Image;
  type: TMDBVideoType;
  backdrop: Backdrop;
}
