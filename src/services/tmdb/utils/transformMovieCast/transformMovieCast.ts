import {
  genderMap,
  TMDB_PERSON_IMAGE_HEIGHT,
  TMDB_PERSON_IMAGE_WIDTH,
} from '@/services/tmdb/constants';
import TMDBCastPerson from '@/services/tmdb/types/TMDBCastPerson';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import CastPerson from '@/types/CastPerson';

export default function transformMovieCast(cast: TMDBCastPerson[]) {
  if (!cast.length) return [];
  return cast.map(
    ({ character, gender, id, name, profile_path }): CastPerson => ({
      character,
      gender: genderMap[gender],
      id,
      imagePath: profile_path
        ? getTMDBImagePath({
            height: TMDB_PERSON_IMAGE_HEIGHT,
            image: profile_path,
            width: TMDB_PERSON_IMAGE_WIDTH,
          })
        : '',
      name,
    })
  );
}
