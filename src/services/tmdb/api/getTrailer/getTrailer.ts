import 'server-only';

import getVideos from '@/services/tmdb/api/getVideos/getVideos';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

const ALLOWED_TRAILER_VIDEO_TYPES = ['Trailer', 'Teaser'];

export function findTrailer(videos: Video[]) {
  return videos.find((video) => ALLOWED_TRAILER_VIDEO_TYPES.includes(video.type));
}

interface GetTrailerArgs {
  showTitle: string;
  thumbnailPath: string;
  showType: ShowType;
  showId: number;
}
export default async function getTrailer({
  showId,
  showTitle,
  showType,
  thumbnailPath,
}: GetTrailerArgs): Promise<Video> {
  const videos = await getVideos({ showId, showTitle, showType, thumbnailPath });

  const trailer = findTrailer(videos);

  if (!trailer) throw Error(`Failed to get trailer for ${showTitle} (id: ${showId}).`);

  return trailer;
}
