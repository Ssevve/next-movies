import getSearchResults from '@/services/TMDB/api/getSearchResults/getSearchResults';
import PersonSearchResult from '@/types/PersonSearchResult';
import SearchEndpoint from '@/types/SearchEndpoint';
import ShowSearchResult from '@/types/ShowSearchResult';

import PersonSearchResultCard from '../PersonSearchResultCard/PersonSearchResultCard';
import ShowSearchResultCard from '../ShowSearchResultCard/ShowSearchResultCard';

function isShowSearchResult(
  result: ShowSearchResult | PersonSearchResult
): result is ShowSearchResult {
  return 'title' in result;
}

interface SearchResultsProps {
  page?: string;
  endpoint: SearchEndpoint;
  query?: string;
}

// TODO: tests
export default async function SearchResults({ page, endpoint, query }: SearchResultsProps) {
  const paginatedResults = await getSearchResults({
    endpoint: endpoint || 'movie',
    page,
    query,
  });

  return (
    <ul className="grid-cols-fluid mt-12 grid gap-8 divide-y sm:mt-0 sm:grid-cols-1 lg:grid-cols-2">
      {paginatedResults.results.map((result) => (
        <li key={result.id} className="pt-8 first:border-t last:border-b">
          {isShowSearchResult(result) ? (
            <ShowSearchResultCard
              id={result.id}
              overview={result.overview}
              poster={result.poster}
              releaseDate={result.releaseDate}
              showType={result.showType}
              title={result.title}
              userScore={result.userScore}
            />
          ) : (
            <PersonSearchResultCard
              department={result.department}
              id={result.id}
              imagePath={result.imagePath}
              name={result.name}
              shows={result.shows}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
