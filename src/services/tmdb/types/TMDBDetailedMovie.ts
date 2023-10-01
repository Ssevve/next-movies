import TMDBCredits from '@/services/tmdb/types/TMDBCredits';
import TMDBDetailedShow from '@/services/tmdb/types/TMDBDetailedShow';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBReleaseDates from '@/services/tmdb/types/TMDBReleaseDates';

export default interface TMDBDetailedMovie extends TMDBDetailedShow, TMDBMovie {
  budget: number;
  original_title: string;
  revenue: number;
  runtime: number;
  credits: TMDBCredits;
  release_dates: TMDBReleaseDates;
}
