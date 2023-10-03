import TMDBCastPerson from '@/services/tmdb/types/TMDBCastPerson';
import { TMDBCrewPerson } from '@/services/tmdb/types/TMDBCrewPerson';

export default interface TMDBCredits {
  cast: TMDBCastPerson[];
  crew: TMDBCrewPerson[];
}
