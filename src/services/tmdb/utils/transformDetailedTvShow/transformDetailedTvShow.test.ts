import mockTMDBDetailedTvShows from '@/__mocks__/data/mockTMDBDetailedTvShows';
import { TMDBImageSizes } from '@/services/TMDB/config';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import DetailedTvShow from '@/types/DetailedTvShow';

import transformDetailedTvShow from './transformDetailedTvShow';

describe('transformDetailedTvShow', () => {
  it('should return correctly transformed data', async () => {
    const expectedData: DetailedTvShow = {
      backdrop: { path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg' },
      cast: [
        {
          characters: ['Walter White'],
          id: 17419,
          imagePath: '/aGSvZg7uITJveQtGHDcPNI6map1.jpg',
          name: 'Bryan Cranston',
          totalEpisodeCount: 62,
        },
        {
          characters: ['Jesse Pinkman'],
          id: 84497,
          imagePath: '/8Ac9uuoYwZoYVAIJfRLzzLsGGJn.jpg',
          name: 'Aaron Paul',
          totalEpisodeCount: 62,
        },
      ],
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
        backdrops: [
          {
            height: 1688,
            path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
            width: 3000,
          },
          {
            height: 1080,
            path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
            width: 1920,
          },
        ],
        posters: [
          {
            height: 1500,
            path: '/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg',
            width: 1000,
          },
          {
            height: 1500,
            path: '/zKnBah5dWlFoY0yIKcSIYb4f7kC.jpg',
            width: 1000,
          },
        ],
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
      lastEpisode: {
        airDate: formatDate('2013-09-29'),
        episodeNumber: 16,
        episodeType: 'finale',
        id: 62161,
        seasonNumber: 5,
        showId: 1396,
        title: 'Felina',
      },
      networks: [
        {
          id: 174,
          logoPath: '/alqLicR1ZMHMaZGP3xRQxn9sq7p.png',
          name: 'AMC',
        },
      ],
      nextEpisode: null,
      originalLanguage: 'en',
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: '/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: 'TV-MA',
      recommendations: [
        {
          id: 60059,
          poster: {
            height: TMDBImageSizes.posters.show.height,
            path: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg',
            width: TMDBImageSizes.posters.show.width,
          },
          releaseDate: formatDate('2015-02-08'),
          showType: 'tv',
          title: 'Better Call Saul',
          userScore: 8.644,
        },
        {
          id: 1399,
          poster: {
            height: TMDBImageSizes.posters.show.height,
            path: '/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
            width: TMDBImageSizes.posters.show.width,
          },
          releaseDate: formatDate('2011-04-17'),
          showType: 'tv',
          title: 'Game of Thrones',
          userScore: 8.441,
        },
      ],
      releaseDate: formatDate('2008-01-20'),
      seasons: [
        {
          airDate: formatDate('2009-02-17'),
          episodeCount: 11,
          id: 3577,
          name: 'Specials',
          overview: '',
          poster: {
            height: TMDBImageSizes.posters.season.height,
            path: '/40dT79mDEZwXkQiZNBgSaydQFDP.jpg',
            width: TMDBImageSizes.posters.season.width,
          },
          seasonNumber: 0,
          userScore: 0.0,
        },
        {
          airDate: formatDate('2008-01-20'),
          episodeCount: 7,
          id: 3572,
          name: 'Season 1',
          overview:
            'High school chemistry teacher Walter White\'s life is suddenly transformed by a dire medical diagnosis. Street-savvy former student Jesse Pinkman "teaches" Walter a new trade.',
          poster: {
            height: TMDBImageSizes.posters.season.height,
            path: '/1BP4xYv9ZG4ZVHkL7ocOziBbSYH.jpg',
            width: TMDBImageSizes.posters.season.width,
          },
          seasonNumber: 1,
          userScore: 8.2,
        },
      ],
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
      videos: [
        {
          backdrop: { path: '' },
          id: '64c3fca091745b010120964b',
          showId: 1396,
          showTitle: 'Breaking Bad',
          showType: 'tv',
          thumbnail: {
            height: TMDBImageSizes.thumbnails.video.height,
            path: '',
            width: TMDBImageSizes.thumbnails.video.width,
          },
          title: 'Breaking Bad | Trailer',
          type: 'Trailer',
          youtubeKey: 'VFLkMDEO-Xc',
        },
        {
          backdrop: { path: '' },
          id: '5759db2fc3a3683e7c003df7',
          showId: 1396,
          showTitle: 'Breaking Bad',
          showType: 'tv',
          thumbnail: {
            height: TMDBImageSizes.thumbnails.video.height,
            path: '',
            width: TMDBImageSizes.thumbnails.video.width,
          },
          title: 'Series Trailer',
          type: 'Trailer',
          youtubeKey: 'XZ8daibM3AE',
        },
      ],
    };
    const transformedData = transformDetailedTvShow({
      ...mockTMDBDetailedTvShows.withOriginalLanguage,
    });
    expect(transformedData).toEqual(expectedData);
  });
});
