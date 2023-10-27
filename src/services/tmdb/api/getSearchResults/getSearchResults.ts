import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPersonSearchResult from '@/services/TMDB/types/TMDBPersonSearchResult';
import TMDBSearchResponseResults from '@/services/TMDB/types/TMDBSearchResponseResults';
import TMDBShowSearchResult from '@/services/TMDB/types/TMDBShowSearchResult';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';
import isTMDBMovie from '@/services/TMDB/utils/isTMDBMovie';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import PaginatedResponse from '@/types/PaginatedResponse';
import PersonSearchResult from '@/types/PersonSearchResult';
import PersonSearchResultShow from '@/types/PersonSearchResultShow';
import SearchEndpoint from '@/types/SearchEndpoint';
import ShowSearchResult from '@/types/ShowSearchResult';

// TODO: move to a different file
const transformPersonSearchResult = (result: TMDBPersonSearchResult): PersonSearchResult => {
  const transformPersonSearchResultShows = (shows: TMDBUnknownShow[]): PersonSearchResultShow[] => {
    return shows.map((show) => {
      const { id } = show;
      if (isTMDBMovie(show)) {
        return { id, showType: 'movie', title: show.title };
      } else {
        return { id, showType: 'tv', title: show.name };
      }
    });
  };

  return {
    department: result.known_for_department,
    id: result.id,
    imagePath: result.profile_path,
    name: result.name,
    shows: transformPersonSearchResultShows(result.known_for),
  };
};

const transformShowSearchResult = (result: TMDBShowSearchResult): ShowSearchResult => {
  const transformedShow = transformShow(result);
  return { ...transformedShow, overview: result.overview || 'Overview not available.' };
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

// TODO: tests
export default async function getSearchResults({
  endpoint,
  query = '',
  page = 1,
}: {
  endpoint: SearchEndpoint;
  query?: string;
  page?: string | number;
}): Promise<PaginatedResponse<PersonSearchResult | ShowSearchResult>> {
  if (!query) {
    return {
      page: 0,
      results: [],
      totalPages: 0,
      totalResults: 0,
    };
  }
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
