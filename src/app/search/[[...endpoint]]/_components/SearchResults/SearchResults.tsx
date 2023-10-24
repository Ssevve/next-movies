import Link from 'next/link';

import PersonCard from '@/components/PersonCard/PersonCard';
import ShowCard from '@/components/ShowCard/ShowCard';
import getSearchResults from '@/services/TMDB/api/getSearchResults/getSearchResults';
import PersonSearchResult from '@/types/PersonSearchResult';
import SearchEndpoint from '@/types/SearchEndpoint';
import Show from '@/types/Show';

function isShow(result: Show | PersonSearchResult): result is Show {
  return 'title' in result;
}

interface SearchResultsProps {
  page?: string;
  endpoint: SearchEndpoint;
  query?: string;
}

export default async function SearchResults({ page, endpoint, query }: SearchResultsProps) {
  const paginatedResults = await getSearchResults({
    endpoint: endpoint || 'movie',
    page,
    query,
  });

  return (
    // <ul className="items-between mt-12 grid grid-cols-2 gap-4 sm:mt-0">
    <ul className="mt-12 flex flex-wrap gap-8 sm:mt-0">
      {paginatedResults.results.map((result) => {
        if (isShow(result)) {
          return (
            <li key={result.id} className="flex">
              <ShowCard
                id={result.id}
                poster={result.poster}
                releaseDate={result.releaseDate}
                showType={result.showType}
                title={result.title}
                userScore={result.userScore}
                showMetadata={false}
              />
              <div className="flex flex-1 flex-col gap-4 px-2">
                <div className="flex flex-col gap-1">
                  <Link href={`/${result.showType}/${result.id}`}>{result.title}</Link>
                  <span className="text-xs text-slate-400">{result.releaseDate}</span>
                </div>
                <p className="mb-4 text-sm">{result.overview}</p>
              </div>
            </li>
          );
        } else {
          return (
            <li key={result.id}>
              <PersonCard imagePath={result.imagePath} name={result.name}>
                <span className="block text-sm font-semibold italic">{result.department}</span>
                <span className="mt-1 text-xs italic">{result.showsTitles.join(',\n')}</span>
              </PersonCard>
            </li>
          );
        }
      })}
    </ul>
  );
}
