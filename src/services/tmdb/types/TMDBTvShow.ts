import TMDBShow from '@/services/TMDB/types/TMDBShow';

export default interface TMDBTvShow extends TMDBShow {
  name: string;
  first_air_date: string | undefined;
  release_date?: never;
  title?: never;
}
