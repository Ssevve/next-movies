/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBDetailedMovie from '@/__mocks__/data/mockTMDBDetailedMovie';
import { server } from '@/__mocks__/server';
import getDetailedMovie from '@/services/tmdb/api/getDetailedMovie/getDetailedMovie';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformDetailedMovie from '@/services/tmdb/helpers/transformDetailedMovie/transformDetailedMovie';

describe('getDetailedMovie', () => {
  it('should return correct result', async () => {
    const expectedResult = transformDetailedMovie(mockTMDBDetailedMovie);
    const result = await getDetailedMovie(mockTMDBDetailedMovie.id);
    expect(result).toEqual(expectedResult);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDB_BASE_URL}/movie/:movieId`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getDetailedMovie(mockTMDBDetailedMovie.id);
    }).rejects.toThrow('Could not get movie data.');
  });
});
