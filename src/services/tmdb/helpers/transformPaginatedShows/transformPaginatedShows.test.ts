/** @jest-environment node */

import mockTMDBMixedResults from '@/__mocks__/data/mockTMDBMixedResults';
import transformPaginatedShows from '@/services/tmdb/helpers/transformPaginatedShows/transformPaginatedShows';
import transformShows from '@/services/tmdb/helpers/transformShows/transformShows';
import PaginatedShows from '@/types/PaginatedShows';

describe('transformPaginatedShows', () => {
  it('should return correctly transformed data', async () => {
    const transformedResults = transformPaginatedShows({
      page: 1,
      results: mockTMDBMixedResults,
      total_pages: 1,
      total_results: mockTMDBMixedResults.length,
    });

    const expectedResults: PaginatedShows = {
      page: 1,
      results: transformShows(mockTMDBMixedResults),
      totalPages: 1,
      totalResults: mockTMDBMixedResults.length,
    };
    expect(transformedResults).toEqual(expectedResults);
  });
});
