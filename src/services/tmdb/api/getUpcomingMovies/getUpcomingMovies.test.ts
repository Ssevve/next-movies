/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import { server } from '@/__mocks__/server';
import getUpcomingMovies from '@/services/tmdb/api/getUpcomingMovies/getUpcomingMovies';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformShows from '@/services/tmdb/utils/transformShows/transformShows';

describe('getUpcomingMovies', () => {
  it('should return correct results', async () => {
    const expectedResults = transformShows(mockTMDBMovies);
    const movies = await getUpcomingMovies();
    expect(movies).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch', () => {
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
