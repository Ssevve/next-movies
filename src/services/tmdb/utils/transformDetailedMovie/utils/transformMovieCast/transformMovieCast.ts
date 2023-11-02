import TMDBMovieCastPerson from '@/services/TMDB/types/TMDBMovieCastPerson';
import MovieCastPerson from '@/types/MovieCastPerson';

// TODO: tests
export default function transformMovieCast(cast: TMDBMovieCastPerson[]): MovieCastPerson[] {
  return cast.map(({ character, id, name, profile_path }) => ({
    character,
    id,
    imagePath: profile_path || '',
    name,
  }));
}
