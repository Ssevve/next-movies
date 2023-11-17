import Image from '@/types/Image';

export type ShowType = 'movie' | 'tv';

export interface Show {
  id: number;
  poster: Image;
  title: string;
  userScore: number;
  showType: ShowType;
  releaseDate: string;
}
