import TMDBCredits from '@/services/TMDB/types/TMDBCredits';
import TMDBDetailedShow from '@/services/TMDB/types/TMDBDetailedShow';
import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBReleaseDates from '@/services/TMDB/types/TMDBReleaseDates';

export default interface TMDBDetailedMovie extends TMDBDetailedShow, TMDBMovie {
  budget: number;
  original_title: string;
  revenue: number;
  runtime: number;
  credits: TMDBCredits;
  release_dates: TMDBReleaseDates;
}
