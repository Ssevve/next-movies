import { TMDBDetailedMovie } from '../../types';
import tmdbAPI from '../client';

export async function getDetailedMovieData(movieId: number) {
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
