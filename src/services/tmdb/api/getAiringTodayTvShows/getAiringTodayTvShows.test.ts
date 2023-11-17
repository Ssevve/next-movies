/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import { server } from '@/__mocks__/server';
import getAiringTodayTvShows from '@/services/TMDB/api/getAiringTodayTvShows/getAiringTodayTvShows';
import { TMDBUrls } from '@/services/TMDB/config';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';

describe('getAiringTodayTvShows', () => {
  it('should return correct results', async () => {
    const expectedResults = transformShows(mockTMDBTvShows);
    const response = await getAiringTodayTvShows();
    expect(response.results).toEqual(expectedResults);
  });

  it('should call with correct page', async () => {
    const expectedPage = 2;
    const response = await getAiringTodayTvShows(expectedPage);
    expect(response.page).toEqual(expectedPage);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDBUrls.base}/tv/airing_today`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getAiringTodayTvShows();
    }).rejects.toThrow('Failed to fetch airing today TV shows.');
  });
});
