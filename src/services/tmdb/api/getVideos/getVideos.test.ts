/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import { server } from '@/__mocks__/server';
import getVideos from '@/services/TMDB/api/getVideos/getVideos';
import { TMDBUrls } from '@/services/TMDB/config';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import Video from '@/types/Video';

const endpoint = `${TMDBUrls.base}/:showType/:showId/videos`;

type ShowProps = Pick<Video, 'showId' | 'showTitle' | 'showType'>;

describe('getVideos', () => {
  it('should return correct results for movies', async () => {
    const expectedTMDBThumbnailPath = '/testPath';
    const expectedShowProps: ShowProps = {
      showId: 1,
      showTitle: 'Test Movie Title',
      showType: 'movie',
    };
    const expectedVideos = transformVideos({
      videos: mockTMDBMovieVideos,
      ...expectedShowProps,
      thumbnailPath: expectedTMDBThumbnailPath,
    });

    const response = await getVideos({
      ...expectedShowProps,
      thumbnailPath: expectedTMDBThumbnailPath,
    });
    expect(response).toEqual(expectedVideos);
  });

  it('should return correct results for TV shows', async () => {
    const expectedTMDBThumbnailPath = '/testPath';
    const expectedShowProps: ShowProps = {
      showId: 2,
      showTitle: 'Test Tv Show Title',
      showType: 'tv',
    };
    const expectedVideos = transformVideos({
      videos: mockTMDBTvShowVideos,
      ...expectedShowProps,
      thumbnailPath: expectedTMDBThumbnailPath,
    });

    const response = await getVideos({
      ...expectedShowProps,
      thumbnailPath: expectedTMDBThumbnailPath,
    });
    expect(response).toEqual(expectedVideos);
  });

  it('should return empty array if no videos found', async () => {
    const expectedShowProps: ShowProps = {
      showId: 1,
      showTitle: 'Test Movie Title',
      showType: 'movie',
    };
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );
    const response = await getVideos({ ...expectedShowProps, thumbnailPath: '' });
    expect(response).toEqual([]);
  });

  it('should throw correct error on failed fetch for movies', () => {
    const expectedShowProps: ShowProps = {
      showId: 1,
      showTitle: 'Test Movie Title',
      showType: 'movie',
    };
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const showId = 1;
    expect(async () => {
      await getVideos({ ...expectedShowProps, thumbnailPath: '' });
    }).rejects.toThrow(`Failed to fetch videos for: ${showId}.`);
  });

  it('should throw correct error on failed fetch for TV shows', () => {
    const expectedShowProps: ShowProps = {
      showId: 2,
      showTitle: 'Test Tv Show Title',
      showType: 'tv',
    };
    server.use(
      rest.get(endpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const showId = 2;
    expect(async () => {
      await getVideos({ ...expectedShowProps, thumbnailPath: '' });
    }).rejects.toThrow(`Failed to fetch videos for: ${showId}.`);
  });
});
