import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import getLanguages from '@/services/TMDB/api/getLanguages/getLanguages';
import TMDBDetailedTvShow from '@/services/TMDB/types/TMDBDetailedTvShow';
import transformDetailedTvShow from '@/services/TMDB/utils/transformDetailedTvShow/transformDetailedTvShow';
import DetailedTvShow from '@/types/DetailedTvShow';

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

  const res = await TMDBApi(`/tv/${tvShowId}?append_to_response=${appendToResponseString}`);
  if (!res.ok) throw Error('Could not get tv show data.');
  const detailedTvShowData: TMDBDetailedTvShow = await res.json();

  let originalLanguageName = '';
  try {
    if (detailedTvShowData.original_language) {
      const languages = await getLanguages();
      if (languages[detailedTvShowData.original_language]) {
        originalLanguageName = languages[detailedTvShowData.original_language];
      }
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
  } finally {
    return transformDetailedTvShow({
      ...detailedTvShowData,
      original_language: originalLanguageName,
    });
  }
}
