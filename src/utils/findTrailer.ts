import Video from '@/types/Video';

const ALLOWED_TRAILER_VIDEO_TYPES = ['Trailer', 'Teaser'];

export default function findTrailer(videos: Video[]) {
  return videos.find((video) => ALLOWED_TRAILER_VIDEO_TYPES.includes(video.type));
}
