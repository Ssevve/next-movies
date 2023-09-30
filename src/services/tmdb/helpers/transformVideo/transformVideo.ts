import ShowType from '@/types/ShowType';
import Video from '@/types/Video';
import VideoType from '@/types/VideoType';

interface TransformVideosArgs {
  showId: number;
  showTitle: string;
  showType: ShowType;
  thumbnailPath: string;
  id: string;
  name: string;
  key: string;
  type: VideoType;
}

export default function transformVideo({
  id,
  name,
  key,
  type,
  showId,
  showTitle,
  showType,
  thumbnailPath,
}: TransformVideosArgs): Video {
  return {
    id,
    showId,
    showTitle,
    showType,
    thumbnailPath,
    title: name,
    type,
    youtubeKey: key,
  };
}
