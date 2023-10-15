import mockTMDBDetailedMovies from '@/__mocks__/data/mockTMDBDetailedMovies';
import { TMDBImageSizes } from '@/services/TMDB/config';
import transformDetailedMovie from '@/services/TMDB/utils/transformDetailedMovie/transformDetailedMovie';
import transformMovieCast from '@/services/TMDB/utils/transformMovieCast/transformMovieCast';
import DetailedMovie from '@/types/DetailedMovie';

describe('transformVideos', () => {
  it('should return correctly transformed data', async () => {
    const expectedData: DetailedMovie = {
      backdrop: { path: '/1syW9SNna38rSl9fnXwc9fP7POW.jpg' },
      budget: 120000000,
      cast: [
        {
          character: 'Jaime Reyes / Blue Beetle',
          id: 1185997,
          imagePath: '/tJMI7BpjlhHSMpzSz9e1XxygnKd.jpg',
          name: 'Xolo Mariduena',
        },
        {
          character: 'Nana Reyes',
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
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: 'PG-13',
      recommendations: [
        {
          id: 832502,
          poster: {
            height: TMDBImageSizes.posters.show.height,
            path: '/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg',
            width: TMDBImageSizes.posters.show.width,
          },
          releaseDate: 'Aug 11, 2023',
          showType: 'movie',
          title: 'The Monkey King',
          userScore: 6.8,
        },
        {
          id: 16155,
          poster: {
            height: TMDBImageSizes.posters.show.height,
            path: '/857L7x6uFNr4c2oHD5KJw5pkbxn.jpg',
            width: TMDBImageSizes.posters.show.width,
          },
          releaseDate: 'Aug 7, 1998',
          showType: 'movie',
          title: 'Safe Men',
          userScore: 5.6,
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
          backdrop: { path: '' },
          id: '6502385defea7a00e0360f7c',
          showId: 565770,
          showTitle: 'Blue Beetle',
          showType: 'movie',
          thumbnail: {
            height: TMDBImageSizes.thumbnails.video.height,
            path: '',
            width: TMDBImageSizes.thumbnails.video.width,
          },
          title: 'Brynn',
          type: 'Featurette',
          youtubeKey: 'CvzlxfEz4hQ',
        },
        {
          backdrop: { path: '' },
          id: '64f770aa5f2b8d00e12d5d1a',
          showId: 565770,
          showTitle: 'Blue Beetle',
          showType: 'movie',
          thumbnail: {
            height: TMDBImageSizes.thumbnails.video.height,
            path: '',
            width: TMDBImageSizes.thumbnails.video.width,
          },
          title: 'Official Trailer',
          type: 'Trailer',
          youtubeKey: 'IcA02w6rm44',
        },
      ],
    };
    const transformedData = transformDetailedMovie({
      ...mockTMDBDetailedMovies.withOriginalLanguage,
    });
    expect(transformedData).toEqual(expectedData);
  });

  it('should return an empty array for no cast', async () => {
    const transformedCast = transformMovieCast([]);
    expect(transformedCast).toEqual([]);
  });
});
