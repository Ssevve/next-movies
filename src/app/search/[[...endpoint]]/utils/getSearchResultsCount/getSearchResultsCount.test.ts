/** @jest-environment node */

import mockTMDBSearchResults from '@/__mocks__/data/mockTMDBSearchResults';
import getSearchResultsCount from '@/app/search/[[...endpoint]]/utils/getSearchResultsCount/getSearchResultsCount';

describe('getSearchResultsCount', () => {
  it('should return correct results count with "query" provided', async () => {
    const response = await getSearchResultsCount('Br');
    expect(response.moviesCount).toEqual(mockTMDBSearchResults.movie.length);
    expect(response.tvShowsCount).toEqual(mockTMDBSearchResults.tv.length);
    expect(response.peopleCount).toEqual(mockTMDBSearchResults.person.length);
  });

  it('should return correct results count with "query" not provided', async () => {
    const response = await getSearchResultsCount();
    expect(response.moviesCount).toEqual(0);
    expect(response.tvShowsCount).toEqual(0);
    expect(response.peopleCount).toEqual(0);
  });
});
