import 'server-only';

import getVideos from '@/services/TMDB/api/getVideos/getVideos';
import { ShowType } from '@/types/Show';
import Video from '@/types/Video';
import findTrailer from '@/utils/findTrailer/findTrailer';

interface GetTrailerArgs {
  showTitle: string;
  thumbnailPath?: string;
  showType: ShowType;
  showId: number;
}
export default async function getTrailer({
  showId,
  showTitle,
  showType,
  thumbnailPath = '',
}: GetTrailerArgs): Promise<Video> {
  const videos = await getVideos({ showId, showTitle, showType, thumbnailPath });

  const trailer = findTrailer(videos);

  if (!trailer) throw Error(`Failed to get trailer for ${showTitle} (id: ${showId}).`);

  return trailer;
}
