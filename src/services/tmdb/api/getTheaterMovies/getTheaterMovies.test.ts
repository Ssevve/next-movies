/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import { server } from '@/__mocks__/server';
import getTheaterMovies from '@/services/TMDB/api/getTheaterMovies/getTheaterMovies';
import { TMDBUrls } from '@/services/TMDB/config';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';

describe('getTheaterMovies', () => {
  it('should return correct results', async () => {
    const expectedResults = transformShows(mockTMDBMovies);
    const response = await getTheaterMovies();
    expect(response.results).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDBUrls.base}/movie/now_playing`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getTheaterMovies();
    }).rejects.toThrow('Failed to fetch theater movies.');
  });
});
