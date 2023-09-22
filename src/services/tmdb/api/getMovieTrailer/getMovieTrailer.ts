import { getMovieVideos } from '@/services/tmdb/api/getMovieVideos/getMovieVideos';
import Video from '@/types/Video';

interface GetMovieTrailerArgs {
  movieId: number;
  movieTitle: string;
  thumbnailPath: string;
}

export async function getMovieTrailer({
  movieId,
  movieTitle,
  thumbnailPath,
}: GetMovieTrailerArgs): Promise<Video> {
  const videos = await getMovieVideos(movieId);
  const allowedVideoTypes = ['Trailer', 'Teaser'];

  const trailer = videos.results.find(
    (video) => video.site === 'YouTube' && allowedVideoTypes.includes(video.type)
  );

  if (!trailer) throw Error(`Failed to get trailer for ${movieTitle}(id: ${movieId}).`);

  return {
    id: trailer?.id,
    name: trailer?.name,
    showId: movieId,
    showTitle: movieTitle,
    showType: 'movie',
    thumbnailPath,
    youtubeKey: trailer?.key,
  };
}
