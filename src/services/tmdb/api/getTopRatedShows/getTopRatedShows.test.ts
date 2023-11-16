/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import { server } from '@/__mocks__/server';
import getTopRatedShows from '@/services/TMDB/api/getTopRatedShows/getTopRatedShows';
import { TMDBUrls } from '@/services/TMDB/config';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';

const endpoint = `${TMDBUrls.base}/:showType/top_rated`;

describe('getTopRatedShows', () => {
  it('should return correct results for movies', async () => {
    const expectedResults = transformShows(mockTMDBMovies);
    const response = await getTopRatedShows('movie');
    expect(response.results).toEqual(expectedResults);
  });

  it('should return correct results for TV shows', async () => {
    const expectedResults = transformShows(mockTMDBTvShows);
    const response = await getTopRatedShows('tv');
    expect(response.results).toEqual(expectedResults);
  });

  it('should call with correct page', async () => {
    const expectedPage = 2;
    const response = await getTopRatedShows('tv', expectedPage);
    expect(response.page).toEqual(expectedPage);
  });

  it('should throw correct error on failed fetch for movies', () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getTopRatedShows('movie');
    }).rejects.toThrow('Failed to fetch top rated movies.');
  });

  it('should throw correct error on failed fetch for TV shows', () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getTopRatedShows('tv');
    }).rejects.toThrow('Failed to fetch top rated TV shows.');
  });
});
