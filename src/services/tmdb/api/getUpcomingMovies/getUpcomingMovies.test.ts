/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import { server } from '@/__mocks__/server';
import getUpcomingMovies from '@/services/TMDB/api/getUpcomingMovies/getUpcomingMovies';
import { TMDBUrls } from '@/services/TMDB/config';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';

describe('getUpcomingMovies', () => {
  it('should return correct results with correct release date', async () => {
    const expectedResults = mockTMDBMovies.map(({ id, release_date, backdrop_path, title }) => ({
      id,
      releaseDate: release_date ? formatDate(release_date) : 'N/A',
      showType: 'movie',
      thumbnailPath: backdrop_path,
      title,
    }));
    const movies = await getUpcomingMovies();
    expect(movies).toEqual(expectedResults);
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
