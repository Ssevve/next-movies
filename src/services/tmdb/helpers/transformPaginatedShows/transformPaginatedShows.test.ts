/** @jest-environment node */

import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import transformPaginatedShows from '@/services/tmdb/helpers/transformPaginatedShows/transformPaginatedShows';
import transformShows from '@/services/tmdb/helpers/transformShows/transformShows';
import PaginatedShows from '@/types/PaginatedShows';

describe('transformPaginatedShows', () => {
  it('should return correctly transformed data', async () => {
    const transformedResults = transformPaginatedShows({
      page: 1,
      results: mockTMDBUnknownShows,
      total_pages: 1,
      total_results: mockTMDBUnknownShows.length,
    });

    const expectedResults: PaginatedShows = {
      page: 1,
      results: transformShows(mockTMDBUnknownShows),
      totalPages: 1,
      totalResults: mockTMDBUnknownShows.length,
    };
    expect(transformedResults).toEqual(expectedResults);
  });
});
