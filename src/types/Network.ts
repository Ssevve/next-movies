import TMDBNetwork from '@/services/TMDB/types/TMDBNetwork';
import SnakeToCamelCase from '@/types/SnakeToCamelCase';

type Network = { [K in keyof TMDBNetwork as SnakeToCamelCase<K>]: TMDBNetwork[K] };

export default Network;
