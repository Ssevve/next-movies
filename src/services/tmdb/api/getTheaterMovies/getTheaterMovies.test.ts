/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import { server } from '@/__mocks__/server';
import getTheaterMovies from '@/services/tmdb/api/getTheaterMovies/getTheaterMovies';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformShows from '@/services/tmdb/utils/transformShows/transformShows';

describe('getTheaterMovies', () => {
  it('should return correct results', async () => {
    const expectedResults = transformShows(mockTMDBMovies);
    const response = await getTheaterMovies();
    expect(response.results).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDB_BASE_URL}/movie/now_playing`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getTheaterMovies();
    }).rejects.toThrow('Failed to fetch theater movies.');
  });
});
