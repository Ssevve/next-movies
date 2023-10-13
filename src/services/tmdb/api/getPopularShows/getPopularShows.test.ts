/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import { server } from '@/__mocks__/server';
import getPopularShows from '@/services/TMDB/api/getPopularShows/getPopularShows';
import { TMDBUrls } from '@/services/TMDB/config';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';

const endpoint = `${TMDBUrls.base}/:showType/popular`;

describe('getPopularShows', () => {
  it('should return correct results for movies', async () => {
    const expectedResults = transformShows(mockTMDBMovies);
    const response = await getPopularShows('movie');
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for TV shows', async () => {
    const expectedResults = transformShows(mockTMDBTvShows);
    const response = await getPopularShows('tv');
    expect(response.results).toEqual(expectedResults);
  });

  it('should throw correct error on failed fetch for movies', () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getPopularShows('movie');
    }).rejects.toThrow('Failed to fetch popular movies.');
  });

  it('should throw correct error on failed fetch for TV shows', () => {
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
