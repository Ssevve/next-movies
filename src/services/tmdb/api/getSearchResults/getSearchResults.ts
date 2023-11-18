import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import { TMDBSearchResult, TMDBShowSearchResult } from '@/services/TMDB/types/TMDBSearchResult';
import transformPerson from '@/services/TMDB/utils/transformPerson/transformPerson';
import transformShowSearchResult from '@/services/TMDB/utils/transformShowSearchResult/transformShowSearchResult';
import PaginatedResponse from '@/types/PaginatedResponse';
import { Person } from '@/types/Person';
import SearchEndpoint from '@/types/SearchEndpoint';
import ShowSearchResult from '@/types/ShowSearchResult';

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
}): Promise<PaginatedResponse<ShowSearchResult | Person>> {
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
    else return transformPerson(result);
  });

  return {
    page: searchResults.page,
    results: transformedSearchResults,
    totalPages: searchResults.total_pages,
    totalResults: searchResults.total_results,
  };
}
