import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import SnakeToCamelCase from '@/types/SnakeToCamelCase';

type PaginatedResponse<T> = {
  [K in keyof TMDBPaginatedResponse<T> as SnakeToCamelCase<K>]: TMDBPaginatedResponse<T>[K];
};

export default PaginatedResponse;
