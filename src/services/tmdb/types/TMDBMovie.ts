import TMDBShow from '@/services/TMDB/types/TMDBShow';

export default interface TMDBMovie extends TMDBShow {
  title: string;
  release_date?: string;
  name?: never;
  first_air_date?: never;
}
