import ShowType from '@/types/ShowType';
import VideoType from '@/types/VideoType';

export default interface Video {
  showTitle: string;
  showType: ShowType;
  showId: number;
  title: string;
  id: string;
  youtubeKey: string;
  thumbnailPath: string;
  type: VideoType;
}
