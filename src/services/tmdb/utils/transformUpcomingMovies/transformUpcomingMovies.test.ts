import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import transformUpcomingMovies from '@/services/TMDB/utils/transformUpcomingMovies/transformUpcomingMovies';
import UpcomingMovie from '@/types/UpcomingMovie';

describe('transformUpcomingMovies', () => {
  it('should return correctly transformed data', async () => {
    const expectedResults: UpcomingMovie[] = mockTMDBMovies.map((movie) => ({
      ...transformShow(movie),
      showType: 'movie',
      thumbnailPath: movie.backdrop_path!,
    }));
    const transformedResults = transformUpcomingMovies(mockTMDBMovies);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data if backdrop_path is missing', async () => {
    const testMovies = mockTMDBMovies.map((movie) => ({
      ...movie,
      backdrop_path: '',
    }));
    const expectedResults: UpcomingMovie[] = testMovies.map((movie) => ({
      ...transformShow(movie),
      showType: 'movie',
      thumbnailPath: '',
    }));
    const transformedResults = transformUpcomingMovies(testMovies);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return an empty array if results array is empty', async () => {
    const transformedResults = transformUpcomingMovies([]);
    expect(transformedResults).toEqual([]);
  });
});
