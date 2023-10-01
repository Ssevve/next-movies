import TMDBCastPerson from '@/services/tmdb/types/TMDBCastPerson';
import CastPerson from '@/types/CastPerson';

export default function transformMovieCast(cast: TMDBCastPerson[]) {
  if (!cast.length) return [];
  return cast.map(
    ({ character, id, name, profile_path }): CastPerson => ({
      character,
      id,
      imagePath: profile_path,
      name,
    })
  );
}
