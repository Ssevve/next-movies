import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import {
  TMDB_VIDEO_BACKDROP_HEIGHT,
  TMDB_VIDEO_BACKDROP_WIDTH,
  TMDB_VIDEO_THUMBNAIL_HEIGHT,
  TMDB_VIDEO_THUMBNAIL_WIDTH,
} from '@/services/tmdb/constants';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import transformVideos from '@/services/tmdb/utils/transformVideos/transformVideos';
import Video from '@/types/Video';
import getYoutubeThumbnail from '@/utils/getYoutubeThumbnail/getYoutubeThumbnail';

const expectedShowData: Pick<Video, 'showId' | 'showType' | 'showTitle'> = {
  showId: 1,
  showTitle: 'Test Show Title',
  showType: 'movie',
};

const testTMDBImage = '/testImage.jpg';

const expectedTMDBThumbnailPath = getTMDBImagePath({
  height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
  image: testTMDBImage,
  width: TMDB_VIDEO_THUMBNAIL_WIDTH,
});

const expectedTMDBBackdropPath = getTMDBImagePath({
  height: TMDB_VIDEO_BACKDROP_HEIGHT,
  image: testTMDBImage,
  width: TMDB_VIDEO_BACKDROP_WIDTH,
});

describe('transformVideos', () => {
  it('should return correctly transformed data for a single video', async () => {
    const testVideo = mockTMDBMovieVideos[0];

    const expectedData: Video[] = [
      {
        backdrop: { path: expectedTMDBBackdropPath },
        id: testVideo.id,
        ...expectedShowData,
        thumbnail: {
          height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
          path: expectedTMDBThumbnailPath,
          width: TMDB_VIDEO_THUMBNAIL_WIDTH,
        },
        title: testVideo.name,
        type: testVideo.type,
        youtubeKey: testVideo.key,
      },
    ];

    const transformedData = transformVideos({
      videos: [testVideo],
      ...expectedShowData,
      thumbnailPath: testTMDBImage,
      thumbnailSource: 'TMDB',
    });

    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for a TMDB thumbnail', async () => {
    const testVideo = mockTMDBMovieVideos[0];
    const expectedData: Video[] = [
      {
        backdrop: { path: expectedTMDBBackdropPath },
        id: testVideo.id,
        ...expectedShowData,
        thumbnail: {
          height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
          path: expectedTMDBThumbnailPath,
          width: TMDB_VIDEO_THUMBNAIL_WIDTH,
        },
        title: testVideo.name,
        type: testVideo.type,
        youtubeKey: testVideo.key,
      },
    ];

    const transformedData = transformVideos({
      videos: [testVideo],
      ...expectedShowData,
      thumbnailPath: testTMDBImage,
      thumbnailSource: 'TMDB',
    });

    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for a YouTube thumbnail', async () => {
    const testVideo = mockTMDBMovieVideos[0];
    const expectedData: Video[] = [
      {
        backdrop: { path: getYoutubeThumbnail(testVideo.key) },
        id: testVideo.id,
        ...expectedShowData,
        thumbnail: {
          height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
          path: getYoutubeThumbnail(testVideo.key),
          width: TMDB_VIDEO_THUMBNAIL_WIDTH,
        },
        title: testVideo.name,
        type: testVideo.type,
        youtubeKey: testVideo.key,
      },
    ];

    const transformedData = transformVideos({
      videos: [testVideo],
      ...expectedShowData,
      thumbnailSource: 'YouTube',
    });

    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for multiple videos', async () => {
    const expectedData: Video[] = mockTMDBMovieVideos.map((video) => ({
      backdrop: {
        path: expectedTMDBBackdropPath,
      },
      id: video.id,
      thumbnail: {
        height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
        path: expectedTMDBThumbnailPath,
        width: TMDB_VIDEO_THUMBNAIL_WIDTH,
      },
      title: video.name,
      type: video.type,
      youtubeKey: video.key,
      ...expectedShowData,
    }));

    const transformedData = transformVideos({
      videos: mockTMDBMovieVideos,
      ...expectedShowData,
      thumbnailPath: testTMDBImage,
      thumbnailSource: 'TMDB',
    });

    expect(transformedData).toEqual(expectedData);
  });

  it('should return an empty array for no videos', async () => {
    const transformedData = transformVideos({
      showId: 1,
      showTitle: 'Test Show Title',
      showType: 'movie',
      thumbnailPath: testTMDBImage,
      thumbnailSource: 'TMDB',
      videos: [],
    });

    expect(transformedData).toEqual([]);
  });
});
