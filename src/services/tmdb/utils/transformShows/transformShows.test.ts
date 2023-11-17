import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import { Show } from '@/types/Show';

describe('transformShows', () => {
  it('should return correctly transformed data for mixed shows', async () => {
    const expectedResults: Show[] = mockTMDBUnknownShows.map((show) => transformShow(show));
    const transformedResults = transformShows(mockTMDBUnknownShows);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for movies', async () => {
    const expectedResults: Show[] = mockTMDBMovies.map((movie) => transformShow(movie));
    const transformedResults = transformShows(mockTMDBMovies);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for TV shows', async () => {
    const expectedResults: Show[] = mockTMDBTvShows.map((tvShow) => transformShow(tvShow));
    const transformedResults = transformShows(mockTMDBTvShows);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return an empty array if results array is empty', async () => {
    const transformedResults = transformShows([]);
    expect(transformedResults).toEqual([]);
  });
});
