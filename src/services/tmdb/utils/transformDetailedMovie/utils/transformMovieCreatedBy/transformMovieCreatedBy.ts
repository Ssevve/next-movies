import TMDBMovieCrewPerson from '@/services/TMDB/types/TMDBMovieCrewPerson';
import { Creator } from '@/types/DetailedShow';

export default function transformMovieCreatedBy(crew: TMDBMovieCrewPerson[]): Creator[] {
  if (!crew || !crew.length || !Array.isArray(crew)) return [];
  return crew.filter((person) => person.job === 'Director').map(({ name, id }) => ({ id, name }));
}
