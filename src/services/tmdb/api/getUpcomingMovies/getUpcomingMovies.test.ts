/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieResults from '@/__mocks__/data/mockTMDBMovieResults';
import { server } from '@/__mocks__/server';
import { transformTMDBShowsResults } from '@/lib/utils';
import { getUpcomingMovies } from '@/services/tmdb/api/getUpcomingMovies/getUpcomingMovies';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';

describe('getUpcomingMovies', () => {
  it('should return correct results', async () => {
    const expectedResults = transformTMDBShowsResults(mockTMDBMovieResults);
    const movies = await getUpcomingMovies();
    expect(movies).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch', async () => {
    server.use(
      rest.get(`${TMDB_BASE_URL}/movie/upcoming`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getUpcomingMovies();
    }).rejects.toThrow('Failed to fetch upcoming movies.');
  });
});
