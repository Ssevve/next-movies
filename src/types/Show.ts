import Image from '@/types/Image';
import ShowType from '@/types/ShowType';

export default interface Show {
  id: number;
  poster: Image;
  title: string;
  userScore: number;
  showType: ShowType;
  releaseDate: string;
}
