import Video from '@/types/Video';

export default function findTrailer(videos: Video[]) {
  const trailer = videos.find((video) => video.type === 'Trailer');
  if (trailer) return trailer;
  const teaser = videos.find((video) => video.type === 'Teaser');
  if (teaser) return teaser;
  return null;
}
