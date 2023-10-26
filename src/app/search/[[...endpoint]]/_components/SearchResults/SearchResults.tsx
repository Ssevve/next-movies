import Link from 'next/link';

import PersonImage from '@/components/PersonImage/PersonImage';
import ShowCard from '@/components/ShowCard/ShowCard';
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

// TODO: tests, fix spacing
export default async function SearchResults({ page, endpoint, query }: SearchResultsProps) {
  const paginatedResults = await getSearchResults({
    endpoint: endpoint || 'movie',
    page,
    query,
  });

  return (
    <ul className="grid-cols-fluid mt-12 grid gap-8 sm:mt-0 sm:grid-cols-1 lg:grid-cols-2">
      {paginatedResults.results.map((result) => {
        if (isShowSearchResult(result)) {
          return (
            <li
              key={result.id}
              className="flex flex-col items-center gap-2 px-4 first:pt-0 sm:flex-row sm:items-start"
            >
              <ShowCard
                id={result.id}
                poster={result.poster}
                releaseDate={result.releaseDate}
                showType={result.showType}
                title={result.title}
                userScore={result.userScore}
                showMetadata={false}
              />
              <div className="flex flex-1 flex-col gap-4 px-2 ">
                <div className="flex flex-col items-center gap-1 sm:items-start">
                  <Link href={`/${result.showType}/${result.id}`}>
                    <h3 className="text-center font-bold sm:text-left">{result.title}</h3>
                  </Link>
                  <span className="text-xs text-slate-400">{result.releaseDate}</span>
                </div>
                <p className="my-auto line-clamp-4 overflow-hidden text-ellipsis text-center text-sm leading-normal sm:text-left">
                  {result.overview}
                </p>
              </div>
            </li>
          );
        } else {
          return (
            <li
              key={result.id}
              className="flex flex-col items-center gap-2 px-4 first:pt-0 sm:flex-row sm:items-start"
            >
              <PersonImage imagePath={result.imagePath} alt={result.name} />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold">{result.name}</h3>
                <span className="text-sm text-slate-400">{result.department}</span>
                <div>
                  <span className="mr-1 text-sm font-semibold">Known for:</span>
                  <span className="text-sm">
                    {result.shows.map(({ id, showType, title }) => (
                      <Link key={id} href={`/${showType}/${id}`} className="hover:underline">
                        <span>{title}</span>
                      </Link>
                    ))}
                  </span>
                </div>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}
