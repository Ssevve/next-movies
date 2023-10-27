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

interface SearchResultsProps {
  page?: string;
  endpoint: SearchEndpoint;
  query?: string;
}

function NoResults() {
  return <p className="mt-12 sm:mt-8">There are no results that matched your query.</p>;
}

// TODO: tests
export default async function SearchResults({ page, endpoint, query }: SearchResultsProps) {
  if (!query) return <NoResults />;

  const paginatedResults = await getSearchResults({
    endpoint: endpoint || 'movie',
    page,
    query,
  });

  return (
    <ul className="mt-12 grid grid-cols-fluid gap-8 divide-y sm:mt-0 sm:grid-cols-1 lg:grid-cols-2">
      {paginatedResults.results.length ? (
        paginatedResults.results.map((result) => (
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
        ))
      ) : (
        <NoResults />
      )}
    </ul>
  );
}
