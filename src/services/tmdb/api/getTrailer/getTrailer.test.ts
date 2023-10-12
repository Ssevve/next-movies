/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import { server } from '@/__mocks__/server';
import getTrailer from '@/services/tmdb/api/getTrailer/getTrailer';
import { urls } from '@/services/tmdb/config';
import transformVideos from '@/services/tmdb/utils/transformVideos/transformVideos';
import Video from '@/types/Video';
import findTrailer from '@/utils/findTrailer/findTrailer';

const endpoint = `${urls.base}/:showType/:showId/videos`;

type SharedProps = Pick<Video, 'showId' | 'showTitle' | 'showType'>;

const movieArgs: SharedProps = {
  showId: 1,
  showTitle: 'Test Movie Title',
  showType: 'movie',
};

const tvShowArgs: SharedProps = {
  showId: 2,
  showTitle: 'Test Tv Show Title',
  showType: 'tv',
};

const expectedTMDBThumbnailPath = '/testThumbnailPath';

describe('getTrailer', () => {
  it('should return correct results for movies', async () => {
    const videos = transformVideos({
      videos: mockTMDBMovieVideos,
      ...movieArgs,
      thumbnailPath: expectedTMDBThumbnailPath,
    });
    const expectedTrailer = findTrailer(videos);
    const trailer = await getTrailer({ ...movieArgs, thumbnailPath: expectedTMDBThumbnailPath });
    expect(trailer).toEqual(expectedTrailer);
  });

  it('should return correct results for TV shows', async () => {
    const videos = transformVideos({
      videos: mockTMDBTvShowVideos,
      ...tvShowArgs,
      thumbnailPath: expectedTMDBThumbnailPath,
    });
    const expectedTrailer = findTrailer(videos);
    const trailer = await getTrailer({ ...tvShowArgs, thumbnailPath: expectedTMDBThumbnailPath });
    expect(trailer).toEqual(expectedTrailer);
  });

  it('should throw correct error if trailer for a movie could not be found', () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );

    expect(async () => {
      await getTrailer({ ...movieArgs, thumbnailPath: expectedTMDBThumbnailPath });
    }).rejects.toThrow(
      `Failed to get trailer for ${movieArgs.showTitle} (id: ${movieArgs.showId}).`
    );
  });

  it('should throw correct error if trailer for a TV show could not be found', () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );

    expect(async () => {
      await getTrailer(tvShowArgs);
    }).rejects.toThrow(
      `Failed to get trailer for ${tvShowArgs.showTitle} (id: ${tvShowArgs.showId}).`
    );
  });
});
