/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieResults from '@/__mocks__/data/mockTMDBMovieResults';
import mockTMDBTvShowResults from '@/__mocks__/data/mockTMDBTvShowResults';
import { server } from '@/__mocks__/server';
import getPopularShows from '@/services/tmdb/api/getPopularShows/getPopularShows';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformShows from '@/services/tmdb/helpers/transformShows/transformShows';
import PaginatedShows from '@/types/PaginatedShows';

const endpoint = `${TMDB_BASE_URL}/:showType/popular`;

describe('getPopularShows', () => {
  it('should return correct results for movies', async () => {
    const expectedResults = transformShows(mockTMDBMovieResults);
    const response: PaginatedShows = await getPopularShows('movie');
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for TV shows', async () => {
    const expectedResults = transformShows(mockTMDBTvShowResults);
    const response: PaginatedShows = await getPopularShows('tv');
    expect(response.results).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch for movies', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getPopularShows('movie');
    }).rejects.toThrow('Failed to fetch popular movies.');
  });

  it('should throw correct error on failed fetch for TV shows', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getPopularShows('tv');
    }).rejects.toThrow('Failed to fetch popular TV shows.');
  });
});
