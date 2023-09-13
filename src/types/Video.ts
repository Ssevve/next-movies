import { ShowType } from './Show';

export interface Video {
  movieTitle: string;
  showType: ShowType;
  showId: number;
  name: string;
  id: string;
  thumbnailPath: string;
}
