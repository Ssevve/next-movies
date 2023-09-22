/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieResults from '@/__mocks__/data/mockTMDBMovieResults';
import { server } from '@/__mocks__/server';
import { transformTMDBResults } from '@/lib/utils';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import PaginatedShows from '@/types/PaginatedShows';

import { getTheaterMovies } from './getTheaterMovies';

describe('getTheaterMovies', () => {
  it('should return correct results', async () => {
    const expectedResults = transformTMDBResults(mockTMDBMovieResults);
    const response: PaginatedShows = await getTheaterMovies();
    expect(response.results).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch', async () => {
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