import TMDBShow from '@/services/TMDB/types/TMDBShow';

export default interface TMDBMovie extends TMDBShow {
  title: string;
  release_date?: string;
}
