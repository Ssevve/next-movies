import TMDBVideoType from '@/services/tmdb/types/TMDBVideoType';
import ShowType from '@/types/ShowType';

export default interface Video {
  showTitle: string;
  showType: ShowType;
  showId: number;
  title: string;
  id: string;
  youtubeKey: string;
  thumbnailPath: string;
  type: TMDBVideoType;
}
