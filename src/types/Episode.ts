import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import SnakeToCamelCase from '@/types/SnakeToCamelCase';

type Episode = Omit<{ [K in keyof TMDBEpisode as SnakeToCamelCase<K>]: TMDBEpisode[K] }, 'name'> & {
  title: string;
};

export default Episode;
