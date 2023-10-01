import TMDBVideoType from '@/services/tmdb/types/TMDBVideoType';

export default interface TMDBVideo {
  type: TMDBVideoType;
  key: string;
  name: string;
  id: string;
  site: string;
}
