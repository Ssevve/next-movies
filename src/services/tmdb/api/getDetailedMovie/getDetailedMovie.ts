import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import getLanguages from '@/services/TMDB/api/getLanguages/getLanguages';
import TMDBDetailedMovie from '@/services/TMDB/types/TMDBDetailedMovie';
import transformDetailedMovie from '@/services/TMDB/utils/transformDetailedMovie/transformDetailedMovie';
import { DetailedMovie } from '@/types/DetailedMovie';

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

  const moviePromise = TMDBApi(`/movie/${movieId}?append_to_response=${appendToResponseString}`);
  const languagesPromise = getLanguages();

  const [movie, languages] = await Promise.allSettled([moviePromise, languagesPromise]);

  if (movie.status === 'rejected' || movie.value.status !== 200) {
    throw Error('Could not get movie data.');
  }
  const detailedMovieData: TMDBDetailedMovie = await movie.value.json();

  let originalLanguageName = detailedMovieData.original_language;
  if (languages.status === 'fulfilled') {
    const matchingLanguageName = languages.value[detailedMovieData.original_language];
    if (matchingLanguageName) originalLanguageName = matchingLanguageName;
  }

  return transformDetailedMovie({
    ...detailedMovieData,
    original_language: originalLanguageName,
  });
}
