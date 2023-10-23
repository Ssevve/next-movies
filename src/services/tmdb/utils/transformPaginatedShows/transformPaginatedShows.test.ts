import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import transformPaginatedShows from '@/services/TMDB/utils/transformPaginatedShows/transformPaginatedShows';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import PaginatedResponse from '@/types/PaginatedResponse';
import Show from '@/types/Show';

describe('transformPaginatedShows', () => {
  it('should return correctly transformed data', async () => {
    const expectedResults: PaginatedResponse<Show> = {
      page: 1,
      results: transformShows(mockTMDBUnknownShows),
      totalPages: 1,
      totalResults: mockTMDBUnknownShows.length,
    };

    const transformedResults = transformPaginatedShows({
      page: 1,
      results: mockTMDBUnknownShows,
      total_pages: 1,
      total_results: mockTMDBUnknownShows.length,
    });

    expect(transformedResults).toEqual(expectedResults);
  });
});
