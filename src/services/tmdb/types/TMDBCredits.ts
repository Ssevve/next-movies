import TMDBCastPerson from '@/services/TMDB/types/TMDBCastPerson';
import { TMDBCrewPerson } from '@/services/TMDB/types/TMDBCrewPerson';

export default interface TMDBCredits {
  cast: TMDBCastPerson[];
  crew: TMDBCrewPerson[];
}
