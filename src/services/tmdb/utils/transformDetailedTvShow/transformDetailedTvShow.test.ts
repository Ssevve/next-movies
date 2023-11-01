import mockTMDBDetailedTvShows from '@/__mocks__/data/mockTMDBDetailedTvShows';
import { TMDBImageSizes } from '@/services/TMDB/config';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import getRecentSeason from '@/services/TMDB/utils/getRecentSeason/getRecentSeason';
import transformDetailedTvShow from '@/services/TMDB/utils/transformDetailedTvShow/transformDetailedTvShow';
import transformEpisode from '@/services/TMDB/utils/transformEpisode/transformEpisode';
import transformImages from '@/services/TMDB/utils/transformImages/transformImages';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import transformTvShowCast from '@/services/TMDB/utils/transformTvShowCast/transformTvShowCast';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import DetailedTvShow from '@/types/DetailedTvShow';

describe('transformDetailedTvShow', () => {
  it('should return correctly transformed data', () => {
    const testTvShow = mockTMDBDetailedTvShows.withOriginalLanguage;
    const expectedData: DetailedTvShow = {
      backdrop: { path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg' },
      cast: transformTvShowCast(testTvShow.aggregate_credits.cast),
      createdBy: [
        {
          id: 66633,
          name: 'Vince Gilligan',
        },
      ],
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 80,
          name: 'Crime',
        },
      ],
      homepage: 'http://www.amc.com/shows/breaking-bad',
      id: 1396,
      images: {
        backdrops: transformImages(testTvShow.images.backdrops),
        posters: transformImages(testTvShow.images.posters),
      },
      keywords: [
        {
          id: 2231,
          name: 'drug dealer',
        },
        {
          id: 6259,
          name: 'psychopath',
        },
      ],
      lastEpisode: transformEpisode(testTvShow.last_episode_to_air),
      networks: [
        {
          id: 174,
          logoPath: '/alqLicR1ZMHMaZGP3xRQxn9sq7p.png',
          name: 'AMC',
        },
      ],
      nextEpisode: transformEpisode(testTvShow.next_episode_to_air),
      originalLanguage: 'en',
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: '/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: 'TV-MA',
      recentSeason: getRecentSeason(testTvShow.seasons),
      recommendations: transformShows(testTvShow.recommendations.results),
      releaseDate: formatDate('2008-01-20'),
      showType: 'tv',
      socialHandles: {
        facebook: 'BreakingBad',
        instagram: 'breakingbad',
        twitter: 'BreakingBad',
      },
      status: 'Ended',
      tagline: 'Change the equation.',
      title: 'Breaking Bad',
      type: 'Scripted',
      userScore: 8.89,
      userScoreCount: 12378,
      videos: transformVideos({
        showId: testTvShow.id,
        showTitle: testTvShow.name,
        showType: 'tv',
        videos: testTvShow.videos.results,
      }),
    };
    const transformedData = transformDetailedTvShow({
      ...mockTMDBDetailedTvShows.withOriginalLanguage,
    });
    expect(transformedData).toEqual(expectedData);
  });
});
