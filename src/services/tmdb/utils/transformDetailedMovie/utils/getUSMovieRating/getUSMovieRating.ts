import { TMDBReleaseDates } from '@/services/TMDB/types/TMDBDetailedMovie';

export default function getUSMovieRating(releaseDates: TMDBReleaseDates) {
  const USreleaseDate = releaseDates.results.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
  return USreleaseDate ? USreleaseDate.release_dates[0].certification : null;
}
