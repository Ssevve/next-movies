import { TMDBPersonSearchResult } from '@/services/TMDB/types/TMDBSearchResult';
import transformPersonSearchResultShows from '@/services/TMDB/utils/transformPersonSearchResultShows/transformPersonSearchResultShows';
import PersonSearchResult from '@/types/PersonSearchResult';

export default function transformPersonSearchResult(
  result: TMDBPersonSearchResult
): PersonSearchResult {
  return {
    department: result.known_for_department,
    id: result.id,
    imagePath: result.profile_path,
    name: result.name,
    shows: transformPersonSearchResultShows(result.known_for),
  };
}
