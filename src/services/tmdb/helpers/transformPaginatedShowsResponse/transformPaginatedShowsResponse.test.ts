/** @jest-environment node */

import mockTMDBMixedResults from '@/__mocks__/data/mockTMDBMixedResults';
import transformShowsResults from '@/services/tmdb/helpers/transformShowsResults/transformShowsResults';
import PaginatedShows from '@/types/PaginatedShows';

import transformPaginatedShowsResponse from './transformPaginatedShowsResponse';

describe('transformPaginatedShowsResponse', () => {
  it('should return correctly transformed data', async () => {
    const transformedResults = transformPaginatedShowsResponse({
      page: 1,
      results: mockTMDBMixedResults,
      total_pages: 1,
      total_results: mockTMDBMixedResults.length,
    });

    const expectedResults: PaginatedShows = {
      page: 1,
      results: transformShowsResults(mockTMDBMixedResults),
      totalPages: 1,
      totalResults: mockTMDBMixedResults.length,
    };
    expect(transformedResults).toEqual(expectedResults);
  });
});
