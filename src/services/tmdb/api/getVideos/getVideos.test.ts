/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import { server } from '@/__mocks__/server';
import getVideos from '@/services/tmdb/api/getVideos/getVideos';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformVideos from '@/services/tmdb/utils/transformVideos/transformVideos';
import Video from '@/types/Video';

const endpoint = `${TMDB_BASE_URL}/:showType/:showId/videos`;

type ShowArgs = Pick<Video, 'showId' | 'showTitle' | 'showType'>;

const movieArgs: ShowArgs = {
  showId: 1,
  showTitle: 'Test Movie Title',
  showType: 'movie',
};

const tvShowArgs: ShowArgs = {
  showId: 2,
  showTitle: 'Test Tv Show Title',
  showType: 'tv',
};

const expectedTMDBThumbnailPath = '/testPath';

describe('getVideos', () => {
  it('should return correct results for movies', async () => {
    const expectedVideos = transformVideos({
      videos: mockTMDBMovieVideos,
      ...movieArgs,
      thumbnailPath: expectedTMDBThumbnailPath,
      thumbnailSource: 'TMDB',
    });
    const response = await getVideos({ ...movieArgs, thumbnailPath: expectedTMDBThumbnailPath });
    expect(response).toEqual(expectedVideos);
  });

  it('should return correct results for TV shows', async () => {
    const expectedVideos = transformVideos({
      videos: mockTMDBTvShowVideos,
      ...tvShowArgs,
      thumbnailPath: expectedTMDBThumbnailPath,
      thumbnailSource: 'TMDB',
    });
    const response = await getVideos({ ...tvShowArgs, thumbnailPath: expectedTMDBThumbnailPath });
    expect(response).toEqual(expectedVideos);
  });

  it('should return empty array if no videos found', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );
    const response = await getVideos({ ...movieArgs, thumbnailPath: expectedTMDBThumbnailPath });
    expect(response).toEqual([]);
  });

  it('should throw correct error on failed fetch for movies', () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const showId = 1;
    expect(async () => {
      await getVideos({ ...movieArgs, thumbnailPath: expectedTMDBThumbnailPath });
    }).rejects.toThrow(`Failed to fetch videos for: ${showId}.`);
  });

  it('should throw correct error on failed fetch for TV shows', () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const showId = 2;
    expect(async () => {
      await getVideos({ ...tvShowArgs, thumbnailPath: expectedTMDBThumbnailPath });
    }).rejects.toThrow(`Failed to fetch videos for: ${showId}.`);
  });
});
