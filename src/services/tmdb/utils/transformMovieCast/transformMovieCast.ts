import { genderMap } from '@/services/tmdb/constants';
import TMDBCastPerson from '@/services/tmdb/types/TMDBCastPerson';
import CastPerson from '@/types/CastPerson';

export default function transformMovieCast(cast: TMDBCastPerson[]) {
  if (!cast.length) return [];
  return cast.map(
    ({ character, gender, id, name, profile_path }): CastPerson => ({
      character,
      gender: genderMap[gender],
      id,
      imagePath: profile_path || '',
      name,
    })
  );
}
