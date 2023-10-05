import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import transformVideos from '@/services/tmdb/utils/transformVideos/transformVideos';
import Video from '@/types/Video';

const showData: Pick<Video, 'showId' | 'showType' | 'thumbnailPath' | 'showTitle'> = {
  showId: 1,
  showTitle: 'Test Show Title',
  showType: 'movie',
  thumbnailPath: 'testPath',
};

describe('transformVideos', () => {
  it('should return correctly transformed data for a single video', async () => {
    const testVideo = mockTMDBMovieVideos[0];
    const expectedData: Video[] = [
      {
        id: testVideo.id,
        ...showData,
        title: testVideo.name,
        type: testVideo.type,
        youtubeKey: testVideo.key,
      },
    ];

    const transformedData = transformVideos({
      videos: [testVideo],
      ...showData,
    });

    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for multiple videos', async () => {
    const expectedData: Video[] = [
      {
        id: mockTMDBMovieVideos[0].id,
        ...showData,
        title: mockTMDBMovieVideos[0].name,
        type: mockTMDBMovieVideos[0].type,
        youtubeKey: mockTMDBMovieVideos[0].key,
      },
      {
        id: mockTMDBMovieVideos[1].id,
        ...showData,
        title: mockTMDBMovieVideos[1].name,
        type: mockTMDBMovieVideos[1].type,
        youtubeKey: mockTMDBMovieVideos[1].key,
      },
    ];

    const transformedData = transformVideos({
      videos: mockTMDBMovieVideos,
      ...showData,
    });

    expect(transformedData).toEqual(expectedData);
  });

  it('should return an empty array for no videos', async () => {
    const transformedData = transformVideos({
      videos: [],
      ...showData,
    });

    expect(transformedData).toEqual([]);
  });
});
