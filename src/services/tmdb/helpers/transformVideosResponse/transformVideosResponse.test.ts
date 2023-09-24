/** @jest-environment node */

import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import transformVideosResponse from '@/services/tmdb/helpers/transformVideosResponse/transformVideosResponse';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

const showData = {
  showId: 1,
  showTitle: 'Test Show Title',
  showType: 'movie' as ShowType,
  thumbnailPath: 'testPath',
};

describe('transformVideosResponse', () => {
  it('should return correctly transformed data for a single result', async () => {
    const expectedVideo = mockTMDBMovieVideos[0];
    const transformedData = transformVideosResponse({
      results: [expectedVideo],
      ...showData,
    });

    const expectedData: Video[] = [
      {
        id: expectedVideo.id,
        ...showData,
        title: expectedVideo.name,
        type: expectedVideo.type,
        youtubeKey: expectedVideo.key,
      },
    ];
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for multiple results', async () => {
    const transformedData = transformVideosResponse({
      results: mockTMDBMovieVideos,
      ...showData,
    });

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
    expect(transformedData).toEqual(expectedData);
  });

  it('should return an empty array for no results', async () => {
    const transformedData = transformVideosResponse({
      results: [],
      ...showData,
    });

    expect(transformedData).toEqual([]);
  });
});
