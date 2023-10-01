import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import transformDetailedMovie from '@/services/tmdb/helpers/transformDetailedMovie/transformDetailedMovie';
import TMDBDetailedMovie from '@/services/tmdb/types/TMDBDetailedMovie';
import DetailedMovie from '@/types/DetailedMovie';

export default async function getDetailedMovie(movieId: number): Promise<DetailedMovie> {
  const appendToResponseString = [
    'videos',
    'images',
    'keywords',
    'external_ids',
    'recommendations',
    'credits',
    'release_dates',
  ].join(',');

  const res = await tmdbAPI(`/movie/${movieId}?append_to_response=${appendToResponseString}`);
  if (!res.ok) throw Error('Could not get movie data.');
  const detailedMovieData: TMDBDetailedMovie = await res.json();
  return transformDetailedMovie(detailedMovieData);
}
