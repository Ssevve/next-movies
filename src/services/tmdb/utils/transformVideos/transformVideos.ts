import {
  TMDB_VIDEO_BACKDROP_HEIGHT,
  TMDB_VIDEO_BACKDROP_WIDTH,
  TMDB_VIDEO_THUMBNAIL_HEIGHT,
  TMDB_VIDEO_THUMBNAIL_WIDTH,
} from '@/services/tmdb/constants';
import TMDBVideo from '@/services/tmdb/types/TMDBVideo';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';
import getYoutubeThumbnail from '@/utils/getYoutubeThumbnail/getYoutubeThumbnail';

interface SharedProps {
  showId: number;
  videos: TMDBVideo[];
  showTitle: string;
  showType: ShowType;
}

interface TMDBThumbnailSourceProps extends SharedProps {
  thumbnailSource: 'TMDB';
  thumbnailPath: string;
}

interface YoutubeThumbnailSourceProps extends SharedProps {
  thumbnailSource: 'YouTube';
  thumbnailPath?: never;
}

type TransformVideosArgs = TMDBThumbnailSourceProps | YoutubeThumbnailSourceProps;

export default function transformVideos({
  showId,
  videos,
  showTitle,
  showType,
  thumbnailPath = '',
  thumbnailSource,
}: TransformVideosArgs) {
  if (!videos.length) return [];

  const isTMDBThumbnail = thumbnailSource === 'TMDB' && thumbnailPath;

  const TMDBThumbnail = getTMDBImagePath({
    height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
    image: thumbnailPath,
    width: TMDB_VIDEO_THUMBNAIL_WIDTH,
  });

  const TMDBbackdrop = getTMDBImagePath({
    height: TMDB_VIDEO_BACKDROP_HEIGHT,
    image: thumbnailPath,
    width: TMDB_VIDEO_BACKDROP_WIDTH,
  });

  return videos.map(
    ({ id, key, name, type }): Video => ({
      backdrop: {
        path: isTMDBThumbnail ? TMDBbackdrop : getYoutubeThumbnail(key),
      },
      id,
      showId,
      showTitle,
      showType,
      thumbnail: {
        height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
        path: isTMDBThumbnail ? TMDBThumbnail : getYoutubeThumbnail(key),
        width: TMDB_VIDEO_THUMBNAIL_WIDTH,
      },
      title: name,
      type,
      youtubeKey: key,
    })
  );
}
