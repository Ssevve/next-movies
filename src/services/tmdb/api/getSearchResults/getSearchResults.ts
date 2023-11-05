import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import TMDBPersonSearchResult from '@/services/TMDB/types/TMDBPersonSearchResult';
import TMDBShowSearchResult from '@/services/TMDB/types/TMDBShowSearchResult';
import transformPersonSearchResult from '@/services/TMDB/utils/transformPersonSearchResult/transformPersonSearchResult';
import transformShowSearchResult from '@/services/TMDB/utils/transformShowSearchResult/transformShowSearchResult';
import PaginatedResponse from '@/types/PaginatedResponse';
import PersonSearchResult from '@/types/PersonSearchResult';
import SearchEndpoint from '@/types/SearchEndpoint';
import ShowSearchResult from '@/types/ShowSearchResult';

type TMDBSearchResult = TMDBPersonSearchResult | TMDBShowSearchResult;

function isTMDBShowSearchResult(result: TMDBSearchResult): result is TMDBShowSearchResult {
  return 'vote_count' in result;
}

export default async function getSearchResults({
  endpoint,
  query = '',
  page = '1',
}: {
  endpoint: SearchEndpoint;
  query?: string;
  page?: string;
}): Promise<PaginatedResponse<PersonSearchResult | ShowSearchResult>> {
  if (!query) {
    return {
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 0,
    };
  }
  const res = await TMDBApi(
    `/search/${endpoint}?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  if (!res.ok) throw Error('Search failed');

  const searchResults: TMDBPaginatedResponse<TMDBSearchResult> = await res.json();
  const transformedSearchResults = searchResults.results.map((result) => {
    if (isTMDBShowSearchResult(result)) return transformShowSearchResult(result);
    else return transformPersonSearchResult(result);
  });

  return {
    page: searchResults.page,
    results: transformedSearchResults,
    totalPages: searchResults.total_pages,
    totalResults: searchResults.total_results,
  };
}
