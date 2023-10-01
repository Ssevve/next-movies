/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import { server } from '@/__mocks__/server';
import getTrailer, { findTrailer } from '@/services/tmdb/api/getTrailer/getTrailer';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import transformVideos from '@/services/tmdb/helpers/transformVideos/transformVideos';
import Video from '@/types/Video';

const endpoint = `${TMDB_BASE_URL}/:showType/:showId/videos`;

type SharedProps = Pick<Video, 'showId' | 'showTitle' | 'showType' | 'thumbnailPath'>;

const movieArgs: SharedProps = {
  showId: 1,
  showTitle: 'Test Movie Title',
  showType: 'movie',
  thumbnailPath: 'testPath',
};

const tvShowArgs: SharedProps = {
  showId: 2,
  showTitle: 'Test Tv Show Title',
  showType: 'tv',
  thumbnailPath: 'testPath',
};

describe('getTrailer', () => {
  it('should return correct results for movies', async () => {
    const videos = transformVideos({
      videos: mockTMDBMovieVideos,
      ...movieArgs,
    });
    const expectedTrailer = findTrailer(videos);
    const trailer: Video = await getTrailer(movieArgs);
    expect(trailer).toEqual(expectedTrailer);
  });

  it('should return correct results for TV shows', async () => {
    const videos = transformVideos({
      videos: mockTMDBTvShowVideos,
      ...tvShowArgs,
    });
    const expectedTrailer = findTrailer(videos);
    const trailer: Video = await getTrailer(tvShowArgs);
    expect(trailer).toEqual(expectedTrailer);
  });

  it('should throw correct error if trailer for a movie could not be found', async () => {
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );

    expect(async () => {
      await getTrailer(movieArgs);
    }).rejects.toThrow(
      `Failed to get trailer for ${movieArgs.showTitle} (id: ${movieArgs.showId}).`
    );
  });

  it('should throw correct error if trailer for a TV show could not be found', async () => {
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
