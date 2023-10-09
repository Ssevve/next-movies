import mockTMDBDetailedMovie from '@/__mocks__/data/mockTMDBDetailedMovie';
import {
  TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT,
  TMDB_VIDEO_CARD_THUMBNAIL_WIDTH,
} from '@/services/tmdb/constants';
import transformDetailedMovie from '@/services/tmdb/utils/transformDetailedMovie/transformDetailedMovie';
import transformMovieCast from '@/services/tmdb/utils/transformMovieCast/transformMovieCast';
import DetailedMovie from '@/types/DetailedMovie';

describe('transformVideos', () => {
  it('should return correctly transformed data', async () => {
    const expectedData: DetailedMovie = {
      backdropPath: '/1syW9SNna38rSl9fnXwc9fP7POW.jpg',
      budget: 120000000,
      cast: [
        {
          character: 'Jaime Reyes / Blue Beetle',
          gender: 'Male',
          id: 1185997,
          imagePath: '/tJMI7BpjlhHSMpzSz9e1XxygnKd.jpg',
          name: 'Xolo Mariduena',
        },
        {
          character: 'Nana Reyes',
          gender: 'Female',
          id: 270,
          imagePath: '/1aE7wu22bdgVTa0PMKXbAOSLiZn.jpg',
          name: 'Adriana Barraza',
        },
      ],
      createdBy: [],
      genres: [
        {
          id: 28,
          name: 'Action',
        },
        {
          id: 878,
          name: 'Science Fiction',
        },
        {
          id: 12,
          name: 'Adventure',
        },
      ],
      homepage: 'https://www.dc.com/bluebeetle',
      id: 565770,
      images: {
        backdrops: [
          {
            height: 2160,
            path: '/1syW9SNna38rSl9fnXwc9fP7POW.jpg',
            width: 3840,
          },
          {
            height: 1080,
            path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
            width: 1920,
          },
        ],
        posters: [
          {
            height: 3000,
            path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
            width: 2000,
          },
        ],
      },
      keywords: [
        {
          id: 2898,
          name: 'armor',
        },
        {
          id: 9715,
          name: 'superhero',
        },
      ],
      originalLanguage: 'en',
      originalTitle: 'Blue Beetle',
      overview:
        'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.',
      posterPath: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
      rating: 'PG-13',
      recommendations: [
        {
          backdropPath: '/jDjmnEuNUfWHg8rbW6u8mylkcO0.jpg',
          id: 832502,
          posterPath: '/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg',
          releaseDate: 'Aug 11, 2023',
          showType: 'movie',
          title: 'The Monkey King',
          userScore: 6.8,
          userScoreCount: 170,
        },
        {
          backdropPath: '/n6IHtlXxwxqI9CWpASDXil6HdDg.jpg',
          id: 16155,
          posterPath: '/857L7x6uFNr4c2oHD5KJw5pkbxn.jpg',
          releaseDate: 'Aug 7, 1998',
          showType: 'movie',
          title: 'Safe Men',
          userScore: 5.6,
          userScoreCount: 46,
        },
      ],
      releaseDate: 'Aug 16, 2023',
      revenue: 124818235,
      runtime: 128,
      showType: 'movie',
      socialHandles: {
        facebook: 'DCBlueBeetle',
        instagram: 'bluebeetle',
        twitter: 'bluebeetle',
      },
      status: 'Released',
      tagline: 'Jaime Reyes is a superhero whether he likes it or not.',
      title: 'Blue Beetle',
      userScore: 7.143,
      userScoreCount: 994,
      videos: [
        {
          id: '6502385defea7a00e0360f7c',
          showId: 565770,
          showTitle: 'Blue Beetle',
          showType: 'movie',
          thumbnail: {
            height: TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT,
            path: 'https://i.ytimg.com/vi/CvzlxfEz4hQ/hqdefault.jpg',
            width: TMDB_VIDEO_CARD_THUMBNAIL_WIDTH,
          },
          title: 'Brynn',
          type: 'Featurette',
          youtubeKey: 'CvzlxfEz4hQ',
        },
        {
          id: '64f770aa5f2b8d00e12d5d1a',
          showId: 565770,
          showTitle: 'Blue Beetle',
          showType: 'movie',
          thumbnail: {
            height: TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT,
            path: 'https://i.ytimg.com/vi/IcA02w6rm44/hqdefault.jpg',
            width: TMDB_VIDEO_CARD_THUMBNAIL_WIDTH,
          },
          title: 'Official Trailer',
          type: 'Trailer',
          youtubeKey: 'IcA02w6rm44',
        },
      ],
    };
    const transformedData = transformDetailedMovie({ ...mockTMDBDetailedMovie });
    expect(transformedData).toEqual(expectedData);
  });

  it('should return an empty array for no cast', async () => {
    const transformedCast = transformMovieCast([]);
    expect(transformedCast).toEqual([]);
  });
});
