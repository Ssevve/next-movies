import { TMDBMovieStatus } from '@/services/TMDB/types/TMDBDetailedMovie';
import { CastPerson, DetailedShow } from '@/types/DetailedShow';

export interface MovieCastPerson extends CastPerson {
  character: string;
}

export interface DetailedMovie extends DetailedShow<MovieCastPerson, TMDBMovieStatus> {
  budget: number;
  revenue: number;
  runtime: number;
}
