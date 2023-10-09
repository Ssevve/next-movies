import TMDBVideoType from '@/services/tmdb/types/TMDBVideoType';
import ShowType from '@/types/ShowType';
import Thumbnail from '@/types/Thumbnail';

export default interface Video {
  showTitle: string;
  showType: ShowType;
  showId: number;
  title: string;
  id: string;
  youtubeKey: string;
  thumbnail: Thumbnail;
  type: TMDBVideoType;
}
