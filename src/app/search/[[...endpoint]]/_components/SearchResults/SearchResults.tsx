import PersonSearchResultCard from '@/app/search/[[...endpoint]]/_components/PersonSearchResultCard/PersonSearchResultCard';
import ShowSearchResultCard from '@/app/search/[[...endpoint]]/_components/ShowSearchResultCard/ShowSearchResultCard';
import getSearchResults from '@/services/TMDB/api/getSearchResults/getSearchResults';
import PersonSearchResult from '@/types/PersonSearchResult';
import SearchEndpoint from '@/types/SearchEndpoint';
import ShowSearchResult from '@/types/ShowSearchResult';

function isShowSearchResult(
  result: ShowSearchResult | PersonSearchResult
): result is ShowSearchResult {
  return 'title' in result;
}

export interface SearchResultsProps {
  query?: string;
  endpoint: SearchEndpoint;
  page?: string;
}

// TODO: tests
export default async function SearchResults({
  query = '',
  page = '1',
  endpoint,
}: SearchResultsProps) {
  const paginatedResults = await getSearchResults({
    endpoint,
    page,
    query,
  });

  const hasResults = paginatedResults.totalResults > 0;

  return (
    <ul className="mt-12 grid grid-cols-fluid gap-x-8 sm:mt-0 sm:grid-cols-1 lg:grid-cols-2 xs:[&>*:nth-child(2)]:border-t-0 xs:[&>*:nth-child(2)]:pt-0 sm:[&>*:nth-child(2)]:border-t sm:[&>*:nth-child(2)]:pt-8 lg:[&>*:nth-child(2)]:border-t-0 lg:[&>*:nth-child(2)]:pt-0">
      {hasResults ? (
        paginatedResults.results.map((result) => (
          <li key={result.id} className="border-t py-8 first:border-t-0 first:pt-0">
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
        ))
      ) : (
        <p className="mt-12 sm:mt-8">There are no results that matched your query.</p>
      )}
    </ul>
  );
}
