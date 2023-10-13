import { TMDBGenders } from '@/services/TMDB/config';
import TMDBCastPerson from '@/services/TMDB/types/TMDBCastPerson';
import CastPerson from '@/types/CastPerson';

export default function transformMovieCast(cast: TMDBCastPerson[]) {
  if (!cast.length) return [];
  return cast.map(
    ({ character, gender, id, name, profile_path }): CastPerson => ({
      character,
      gender: TMDBGenders[gender],
      id,
      imagePath: profile_path || '',
      name,
    })
  );
}
