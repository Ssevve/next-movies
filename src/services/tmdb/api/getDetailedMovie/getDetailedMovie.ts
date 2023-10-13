import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import getLanguages from '@/services/TMDB/api/getLanguages/getLanguages';
import TMDBDetailedMovie from '@/services/TMDB/types/TMDBDetailedMovie';
import transformDetailedMovie from '@/services/TMDB/utils/transformDetailedMovie/transformDetailedMovie';
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

  const res = await TMDBApi(`/movie/${movieId}?append_to_response=${appendToResponseString}`);
  if (!res.ok) throw Error('Could not get movie data.');
  const detailedMovieData: TMDBDetailedMovie = await res.json();

  let originalLanguageName = '';
  try {
    if (detailedMovieData.original_language) {
      const languages = await getLanguages();
      if (languages[detailedMovieData.original_language]) {
        originalLanguageName = languages[detailedMovieData.original_language];
      }
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
  } finally {
    return transformDetailedMovie({
      ...detailedMovieData,
      original_language: originalLanguageName,
    });
  }
}
