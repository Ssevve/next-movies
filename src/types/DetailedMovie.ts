import MovieCastPerson from '@/types//MovieCastPerson';
import DetailedShow from '@/types/DetailedShow';

export default interface DetailedMovie extends DetailedShow {
  budget: number;
  revenue: number;
  runtime: number;
  cast: MovieCastPerson[];
}
