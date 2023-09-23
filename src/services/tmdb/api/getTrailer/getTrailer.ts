import { findTrailer } from '@/lib/utils';
import { getVideos } from '@/services/tmdb/api/getVideos/getVideos';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

interface GetMovieTrailerArgs {
  showTitle: string;
  thumbnailPath: string;
  showType: ShowType;
  showId: number;
}

export async function getTrailer({
  showId,
  showTitle,
  showType,
  thumbnailPath,
}: GetMovieTrailerArgs): Promise<Video> {
  const videos = await getVideos({ showId, showTitle, showType, thumbnailPath });

  const trailer = findTrailer(videos);

  if (!trailer) throw Error(`Failed to get trailer for ${showTitle} (id: ${showId}).`);

  return trailer;
}
