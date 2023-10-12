/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import { server } from '@/__mocks__/server';
import getTrendingShows from '@/services/tmdb/api/getTrendingShows/getTrendingShows';
import { urls } from '@/services/tmdb/config';
import transformShows from '@/services/tmdb/utils/transformShows/transformShows';

const endpoint = `${urls.base}/trending/:showType/:timeWindow`;

describe('getTrendingShows', () => {
  it('should return correct results for mixed shows', async () => {
    const expectedResults = transformShows(mockTMDBUnknownShows);
    const response = await getTrendingShows({
      showType: 'all',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for movies', async () => {
    const expectedResults = transformShows(mockTMDBMovies);
    const response = await getTrendingShows({
      showType: 'movie',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for tv shows', async () => {
    const expectedResults = transformShows(mockTMDBTvShows);
    const response = await getTrendingShows({
      showType: 'tv',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for day "timeWindow"', async () => {
    const expectedResults = transformShows(mockTMDBUnknownShows);
    const response = await getTrendingShows({
      showType: 'all',
      timeWindow: 'day',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for week "timeWindow"', async () => {
    const expectedResults = transformShows(mockTMDBUnknownShows);
    const response = await getTrendingShows({
      showType: 'all',
      timeWindow: 'week',
    });
    expect(response.results).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch for "all" shows', () => {
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

it('should throw correct error on failed fetch for movies', () => {
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

it('should throw correct error on failed fetch for "all" shows', () => {
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
