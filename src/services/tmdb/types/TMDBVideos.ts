import TMDBVideo from '@/services/TMDB/types/TMDBVideo';

export default interface TMDBVideos {
  id: number;
  results: TMDBVideo[];
}
