import { Metadata } from 'next';
import { Suspense } from 'react';

import SearchCategories from '@/app/search/[[...endpoint]]/_components/SearchCategories/SearchCategories';
import Searchbar from '@/components/Searchbar/Searchbar';
import Spinner from '@/components/ui/Spinner';
import getSearchResults from '@/services/TMDB/api/getSearchResults/getSearchResults';
import SearchEndpoint from '@/types/SearchEndpoint';

import SearchResults from './_components/SearchResults/SearchResults';

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

  const endpoint = endpointParam ? endpointParam[0] : 'movie';

  const moviesPromise = getSearchResults({
    endpoint: 'movie',
    query,
  });

  const tvShowsPromise = getSearchResults({
    endpoint: 'tv',
    query,
  });

  const peoplePromise = getSearchResults({
    endpoint: 'person',
    query,
  });

  const [movies, tvShows, people] = await Promise.all([
    moviesPromise,
    tvShowsPromise,
    peoplePromise,
  ]);

  return (
    <section className="container items-center space-y-12 px-4 py-8 sm:items-start">
      <Searchbar />
      <div className="w-full gap-4 sm:flex">
        <div className="mx-auto max-w-max sm:mx-0">
          <SearchCategories
            totalMovies={movies.totalResults}
            totalTvShows={tvShows.totalResults}
            totalPeople={people.totalResults}
          />
        </div>
        <Suspense
          fallback={
            <div className="mt-4 flex w-full items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <SearchResults query={query} endpoint={endpoint} page={page} />
        </Suspense>
      </div>
    </section>
  );
}
