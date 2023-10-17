import TMDBDetailedShow from '@/services/TMDB/types/TMDBDetailedShow';
import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBMovieCastPerson from '@/services/TMDB/types/TMDBMovieCastPerson';
import TMDBPaginatedShows from '@/services/TMDB/types/TMDBPaginatedShows';
import TMDBReleaseDates from '@/services/TMDB/types/TMDBReleaseDates';

export default interface TMDBDetailedMovie extends TMDBDetailedShow, TMDBMovie {
  budget: number;
  revenue: number;
  runtime: number;
  credits: {
    cast: TMDBMovieCastPerson[];
    crew: {
      id: number;
      job: string;
      name: string;
    }[];
  };
  keywords: { keywords: { id: number; name: string }[] };
  release_dates: TMDBReleaseDates;
  recommendations: TMDBPaginatedShows<TMDBMovie>;
}
