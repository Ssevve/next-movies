import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import getLanguages from '@/services/tmdb/api/getLanguages/getLanguages';
import TMDBDetailedMovie from '@/services/tmdb/types/TMDBDetailedMovie';
import transformDetailedMovie from '@/services/tmdb/utils/transformDetailedMovie/transformDetailedMovie';
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

  try {
    let originalLanguageName = '';
    if (detailedMovieData.original_language) {
      const languages = await getLanguages();
      originalLanguageName = languages[detailedMovieData.original_language] || '';
    }
    return transformDetailedMovie({
      ...detailedMovieData,
      original_language: originalLanguageName,
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
    return transformDetailedMovie({ ...detailedMovieData, original_language: '' });
  }
}
