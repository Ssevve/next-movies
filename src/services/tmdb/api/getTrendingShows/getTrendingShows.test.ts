/** @jest-environment node */

import { rest } from 'msw';

import mockShows from '@/__mocks__/data/mockShows';
import { server } from '@/__mocks__/server';
import { getTrendingShows } from '@/services/tmdb/api/getTrendingShows/getTrendingShows';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import PaginatedShows from '@/types/PaginatedShows';

const endpoint = `${TMDB_BASE_URL}/trending/:showType/:timeWindow`;

describe('getTrendingShows', () => {
  it('should return correct number of mixed shows', async () => {
    const shows: PaginatedShows = await getTrendingShows({
      showType: 'all',
      timeWindow: 'day',
    });
    expect(shows.results.length).toBe(mockShows.length);
  });

  it('should return correct number of movies', async () => {
    const shows: PaginatedShows = await getTrendingShows({
      showType: 'movie',
      timeWindow: 'day',
    });
    expect(shows.results.length).toBe(mockShows.length);
  });

  it('should return correct number of tv shows', async () => {
    const shows: PaginatedShows = await getTrendingShows({
      showType: 'tv',
      timeWindow: 'day',
    });
    expect(shows.results.length).toBe(mockShows.length);
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
