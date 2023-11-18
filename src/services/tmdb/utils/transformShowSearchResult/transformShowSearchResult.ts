import { TMDBShowSearchResult } from '@/services/TMDB/types/TMDBSearchResult';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import ShowSearchResult from '@/types/ShowSearchResult';

export default function transformShowSearchResult(result: TMDBShowSearchResult): ShowSearchResult {
  const transformedResult = transformShow(result);
  return { ...transformedResult, overview: result.overview || 'Overview not available.' };
}
