import TMDBMovieCastPerson from '@/services/TMDB/types/TMDBMovieCastPerson';
import { MovieCastPerson } from '@/types/DetailedMovie';

export default function transformMovieCast(cast: TMDBMovieCastPerson[]): MovieCastPerson[] {
  if (!cast || !cast.length || !Array.isArray(cast)) return [];
  return cast.map(({ character, id, name, profile_path }) => ({
    character,
    id,
    imagePath: profile_path || '',
    name,
  }));
}
