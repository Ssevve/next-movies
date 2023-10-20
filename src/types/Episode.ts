import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import SnakeToCamelCase from '@/types/SnakeToCamelCase';

type Episode = { [K in keyof TMDBEpisode as SnakeToCamelCase<K>]: TMDBEpisode[K] };

export default Episode;
