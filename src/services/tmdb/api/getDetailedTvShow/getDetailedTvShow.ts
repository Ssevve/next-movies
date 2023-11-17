import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import getLanguages from '@/services/TMDB/api/getLanguages/getLanguages';
import { TMDBDetailedTvShow } from '@/services/TMDB/types/TMDBDetailedTvShow';
import transformDetailedTvShow from '@/services/TMDB/utils/transformDetailedTvShow/transformDetailedTvShow';
import { DetailedTvShow } from '@/types/DetailedTvShow';

export default async function getDetailedTvShow(tvShowId: number): Promise<DetailedTvShow> {
  const appendToResponseString = [
    'videos',
    'images',
    'keywords',
    'external_ids',
    'recommendations',
    'aggregate_credits',
    'content_ratings',
  ].join(',');

  const tvShowPromise = TMDBApi(`/tv/${tvShowId}?append_to_response=${appendToResponseString}`);
  const languagesPromise = getLanguages();

  const [tvShow, languages] = await Promise.allSettled([tvShowPromise, languagesPromise]);

  if (tvShow.status === 'rejected' || tvShow.value.status !== 200) {
    throw Error('Could not get TV show data.');
  }
  const detailedTvShowData: TMDBDetailedTvShow = await tvShow.value.json();

  let originalLanguageName = detailedTvShowData.original_language;
  if (languages.status === 'fulfilled') {
    const matchingLanguageName = languages.value[detailedTvShowData.original_language];
    if (matchingLanguageName) originalLanguageName = matchingLanguageName;
  }

  return transformDetailedTvShow({
    ...detailedTvShowData,
    original_language: originalLanguageName,
  });
}
