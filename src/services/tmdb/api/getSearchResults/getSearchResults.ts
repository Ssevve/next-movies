import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPersonSearchResult from '@/services/TMDB/types/TMDBPersonSearchResult';
import TMDBSearchResponseResults from '@/services/TMDB/types/TMDBSearchResponseResults';
import TMDBShowSearchResult from '@/services/TMDB/types/TMDBShowSearchResult';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import PersonSearchResult from '@/types/PersonSearchResult';
import SearchEndpoint from '@/types/SearchEndpoint';
import ShowSearchResult from '@/types/ShowSearchResult';

const transformPersonSearchResult = (result: TMDBPersonSearchResult): PersonSearchResult => {
  const SHOWS_LIMIT = 3;
  return {
    department: result.known_for_department,
    id: result.id,
    imagePath: result.profile_path,
    name: result.name,
    showsTitles: transformShows(result.known_for.slice(0, SHOWS_LIMIT)).map(({ title }) => title),
  };
};

const transformShowSearchResult = (result: TMDBShowSearchResult): ShowSearchResult => {
  const transformedShow = transformShow(result);
  return { ...transformedShow, overview: result.overview };
};

function isTMDBShowSearchResult(
  result: TMDBPersonSearchResult | TMDBShowSearchResult
): result is TMDBShowSearchResult {
  return 'vote_count' in result;
}

interface TMDBSearchResponse {
  page: number;
  results: TMDBSearchResponseResults;
  total_pages: number;
  total_results: number;
}

export default async function getSearchResults({
  endpoint,
  query = '',
  page = 1,
}: {
  endpoint: SearchEndpoint;
  query?: string;
  page?: string | number;
}): Promise<PaginatedResponse<PersonSearchResult | ShowSearchResult>> {
  const res = await TMDBApi(
    `/search/${endpoint}?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  if (!res.ok) throw Error('Search failed');

  const searchResults: TMDBSearchResponse = await res.json();
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
