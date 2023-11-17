/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import { server } from '@/__mocks__/server';
import getOnTheAirTvShows from '@/services/TMDB/api/getOnTheAirTvShows/getOnTheAirTvShows';
import { TMDBUrls } from '@/services/TMDB/config';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';

describe('getOnTheAirTvShows', () => {
  it('should return correct results', async () => {
    const expectedResults = transformShows(mockTMDBTvShows);
    const response = await getOnTheAirTvShows();
    expect(response.results).toEqual(expectedResults);
  });

  it('should call with correct page', async () => {
    const expectedPage = 2;
    const response = await getOnTheAirTvShows(expectedPage);
    expect(response.page).toEqual(expectedPage);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDBUrls.base}/tv/on_the_air`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getOnTheAirTvShows();
    }).rejects.toThrow('Failed to fetch on the air TV shows.');
  });
});
