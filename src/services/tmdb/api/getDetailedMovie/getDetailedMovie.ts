import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import TMDBDetailedMovie from '@/services/tmdb/types/TMDBDetailedMovie';

export default async function getDetailedMovie(movieId: number) {
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
  const data: TMDBDetailedMovie = await res.json();
}
