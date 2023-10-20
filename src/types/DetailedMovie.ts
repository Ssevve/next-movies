import TMDBMovieStatus from '@/services/TMDB/types/TMDBMovieStatus';
import DetailedShow from '@/types/DetailedShow';
import MovieCastPerson from '@/types/MovieCastPerson';

export default interface DetailedMovie extends DetailedShow<MovieCastPerson, TMDBMovieStatus> {
  budget: number;
  revenue: number;
  runtime: number;
}
