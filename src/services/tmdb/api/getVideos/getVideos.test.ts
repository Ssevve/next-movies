/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import { server } from '@/__mocks__/server';
import getVideos from '@/services/tmdb/api/getVideos/getVideos';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformVideos from '@/services/tmdb/helpers/transformVideos/transformVideos';
import Video from '@/types/Video';

const endpoint = `${TMDB_BASE_URL}/:showType/:showId/videos`;

type ShowArgs = Pick<Video, 'showId' | 'showTitle' | 'showType' | 'thumbnailPath'>;

const movieArgs: ShowArgs = {
  showId: 1,
  showTitle: 'Test Movie Title',
  showType: 'movie',
  thumbnailPath: 'testPath',
};

const tvShowArgs: ShowArgs = {
  showId: 2,
  showTitle: 'Test Tv Show Title',
  showType: 'tv',
  thumbnailPath: 'testPath',
};

describe('geVideos', () => {
  it('should return correct results for movies', async () => {
    const expectedVideos = transformVideos({ results: mockTMDBMovieVideos, ...movieArgs });
    const response: Video[] = await getVideos(movieArgs);
    expect(response).toEqual(expectedVideos);
  });

  it('should return correct results for TV shows', async () => {
    const expectedVideos = transformVideos({
      results: mockTMDBTvShowVideos,
      ...tvShowArgs,
    });
    const response: Video[] = await getVideos(tvShowArgs);
    expect(response).toEqual(expectedVideos);
  });

  it('should throw correct error on failed fetch for movies', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const showId = 1;
    expect(async () => {
      await getVideos(movieArgs);
    }).rejects.toThrow(`Failed to fetch videos for: ${showId}.`);
  });

  it('should return empty array if no videos found', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );
    const response: Video[] = await getVideos(movieArgs);
    expect(response).toEqual([]);
  });

  it('should return correct results for TV shows', async () => {
    const expectedVideos = transformVideos({
      results: mockTMDBTvShowVideos,
      ...tvShowArgs,
    });
    const response: Video[] = await getVideos(tvShowArgs);
    expect(response).toEqual(expectedVideos);
  });

  it('should throw correct error on failed fetch for TV shows', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const showId = 2;
    expect(async () => {
      await getVideos(tvShowArgs);
    }).rejects.toThrow(`Failed to fetch videos for: ${showId}.`);
  });
});
