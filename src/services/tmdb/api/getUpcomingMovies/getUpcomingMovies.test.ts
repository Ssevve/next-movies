/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import { server } from '@/__mocks__/server';
import getUpcomingMovies from '@/services/TMDB/api/getUpcomingMovies/getUpcomingMovies';
import { TMDBUrls } from '@/services/TMDB/config';
import transformUpcomingMovies from '@/services/TMDB/utils/transformUpcomingMovies/transformUpcomingMovies';

describe('getUpcomingMovies', () => {
  it('should return correct results with correct release date', async () => {
    const expectedResults = transformUpcomingMovies(mockTMDBMovies);
    const movies = await getUpcomingMovies();
    expect(movies.results).toEqual(expectedResults);
  });

  it('should call with correct page', async () => {
    const expectedPage = 2;
    const response = await getUpcomingMovies(expectedPage);
    expect(response.page).toEqual(expectedPage);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDBUrls.base}/movie/upcoming`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getUpcomingMovies();
    }).rejects.toThrow('Failed to fetch upcoming movies.');
  });
});
