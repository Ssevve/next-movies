/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBDetailedMovies from '@/__mocks__/data/mockTMDBDetailedMovies';
import { server } from '@/__mocks__/server';
import getDetailedMovie from '@/services/tmdb/api/getDetailedMovie/getDetailedMovie';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformDetailedMovie from '@/services/tmdb/utils/transformDetailedMovie/transformDetailedMovie';

describe('getDetailedMovie', () => {
  it('should return correct result', async () => {
    const testMovie = mockTMDBDetailedMovies.withOriginalLanguage;
    const expectedResult = transformDetailedMovie({ ...testMovie, original_language: 'English' });
    const result = await getDetailedMovie(testMovie.id);
    expect(result).toEqual(expectedResult);
  });

  it('should return correct result if original language is not specified', async () => {
    const testMovie = mockTMDBDetailedMovies.withoutOriginalLanguage;
    const expectedResult = transformDetailedMovie(testMovie);
    const result = await getDetailedMovie(testMovie.id);
    expect(result).toEqual(expectedResult);
  });

  it('should throw correct error on failed fetch', () => {
    const testMovie = mockTMDBDetailedMovies.withOriginalLanguage;
    server.use(
      rest.get(`${TMDB_BASE_URL}/movie/:movieId`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getDetailedMovie(testMovie.id);
    }).rejects.toThrow('Could not get movie data.');
  });
});
