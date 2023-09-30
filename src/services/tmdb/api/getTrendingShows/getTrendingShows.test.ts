/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMixedResults from '@/__mocks__/data/mockTMDBMixedResults';
import mockTMDBMovieResults from '@/__mocks__/data/mockTMDBMovieResults';
import mockTMDBTvShowResults from '@/__mocks__/data/mockTMDBTvShowResults';
import { server } from '@/__mocks__/server';
import { getTrendingShows } from '@/services/tmdb/api/getTrendingShows/getTrendingShows';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformShows from '@/services/tmdb/helpers/transformShows/transformShows';
import PaginatedShows from '@/types/PaginatedShows';

const endpoint = `${TMDB_BASE_URL}/trending/:showType/:timeWindow`;

describe('getTrendingShows', () => {
  it('should return correct results for mixed shows', async () => {
    const expectedResults = transformShows(mockTMDBMixedResults);
    const response: PaginatedShows = await getTrendingShows({
      showType: 'all',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for movies', async () => {
    const expectedResults = transformShows(mockTMDBMovieResults);
    const response: PaginatedShows = await getTrendingShows({
      showType: 'movie',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for tv shows', async () => {
    const expectedResults = transformShows(mockTMDBTvShowResults);
    const response: PaginatedShows = await getTrendingShows({
      showType: 'tv',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for day "timeWindow"', async () => {
    const expectedResults = transformShows(mockTMDBMixedResults);
    const response: PaginatedShows = await getTrendingShows({
      showType: 'all',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for week "timeWindow"', async () => {
    const expectedResults = transformShows(mockTMDBMixedResults);
    const response: PaginatedShows = await getTrendingShows({
      showType: 'all',
      timeWindow: 'week',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch for "all" shows', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getTrendingShows({
        showType: 'tv',
        timeWindow: 'day',
      });
    }).rejects.toThrow('Failed to fetch trending TV shows.');
  });
});

it('should throw correct error on failed fetch for movies', async () => {
  server.use(
    rest.get(endpoint, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  expect(async () => {
    await getTrendingShows({
      showType: 'movie',
      timeWindow: 'day',
    });
  }).rejects.toThrow('Failed to fetch trending movies.');
});

it('should throw correct error on failed fetch for "all" shows', async () => {
  server.use(
    rest.get(endpoint, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  expect(async () => {
    await getTrendingShows({
      showType: 'all',
      timeWindow: 'day',
    });
  }).rejects.toThrow('Failed to fetch trending shows.');
});
