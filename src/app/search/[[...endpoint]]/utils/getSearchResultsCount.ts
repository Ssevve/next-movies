import 'server-only';

import getSearchResults from '@/services/TMDB/api/getSearchResults/getSearchResults';
import isFulfilled from '@/utils/isFulfilled';

// TODO: tests
export default async function getSearchResultsCount(query: string = '') {
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

  const [movies, tvShows, people] = await Promise.allSettled([
    moviesPromise,
    tvShowsPromise,
    peoplePromise,
  ]);

  return {
    moviesCount: isFulfilled(movies) ? movies.value.totalResults : 0,
    peopleCount: isFulfilled(people) ? people.value.totalResults : 0,
    tvShowsCount: isFulfilled(tvShows) ? tvShows.value.totalResults : 0,
  };
}
