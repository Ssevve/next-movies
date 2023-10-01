import TMDBVideo from '@/services/tmdb/types/TMDBVideo';

export default interface TMDBVideos {
  id: number;
  results: TMDBVideo[];
}
