import { Metadata } from 'next';
import { Suspense } from 'react';

import SearchCategories from '@/app/search/[[...endpoint]]/_components/SearchCategories/SearchCategories';
import SearchResults from '@/app/search/[[...endpoint]]/_components/SearchResults/SearchResults';
import getSearchResultsCount from '@/app/search/[[...endpoint]]/utils/getSearchResultsCount';
import Searchbar from '@/components/Searchbar/Searchbar';
import Spinner from '@/components/ui/Spinner';
import { searchEndpoints } from '@/lib/constants';
import SearchCategory from '@/types/SearchCategory';
import SearchEndpoint from '@/types/SearchEndpoint';

interface SearchPageProps {
  searchParams: {
    query?: string;
    page?: string;
  };
  params: {
    endpoint?: SearchEndpoint[];
  };
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { query } = searchParams;

  return {
    description: query ? `Search Next Movies for ${query}` : 'Search Next Movies',
    title: `${query ? query : 'Search'} | Next Movies`,
  };
}

export default async function SearchPage({ searchParams, params }: SearchPageProps) {
  const { query, page } = searchParams;
  const { endpoint: endpointParam } = params;

  const DEFAULT_ENDPOINT = searchEndpoints[0];
  const currentEndpoint = endpointParam ? endpointParam[0] : DEFAULT_ENDPOINT;
  const endpoint = searchEndpoints.includes(currentEndpoint) ? currentEndpoint : DEFAULT_ENDPOINT;

  const { moviesCount, tvShowsCount, peopleCount } = await getSearchResultsCount(query);

  const searchCategories: SearchCategory[] = [
    {
      endpoint: 'movie',
      label: 'Movies',
      total: moviesCount,
    },
    {
      endpoint: 'tv',
      label: 'TV Shows',
      total: tvShowsCount,
    },
    {
      endpoint: 'person',
      label: 'People',
      total: peopleCount,
    },
  ];

  return (
    <section className="container items-center space-y-12 px-4 pt-8 sm:items-start">
      <Searchbar />
      <div className="w-full gap-4 sm:flex">
        <div className="mx-auto sm:mx-0">
          <SearchCategories query={query} activeEndpoint={endpoint} categories={searchCategories} />
        </div>
        <Suspense fallback={<Spinner />}>
          <SearchResults query={query} page={page} endpoint={endpoint} />
        </Suspense>
      </div>
    </section>
  );
}
