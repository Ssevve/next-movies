import mockTMDBImages from '@/__mocks__/data/mockTMDBImages';
import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import { TMDBDetailedMovie } from '@/services/TMDB/types/TMDBDetailedMovie';

const movieBase: Omit<TMDBDetailedMovie, 'original_language' | 'id'> = {
  backdrop_path: '/1syW9SNna38rSl9fnXwc9fP7POW.jpg',
  budget: 120000000,
  credits: {
    cast: [
      {
        character: 'Jaime Reyes / Blue Beetle',
        id: 1185997,
        name: 'Xolo Mariduena',
        profile_path: '/tJMI7BpjlhHSMpzSz9e1XxygnKd.jpg',
      },
      {
        character: 'Nana Reyes',
        id: 270,
        name: 'Adriana Barraza',
        profile_path: '/1aE7wu22bdgVTa0PMKXbAOSLiZn.jpg',
      },
    ],
    crew: [
      {
        id: 1597,
        job: 'Sound Effects Editor',
        name: 'Michael Payne',
      },
      {
        id: 3504,
        job: 'Sound Designer',
        name: 'David Farmer',
      },
    ],
  },
  external_ids: {
    facebook_id: 'DCBlueBeetle',
    instagram_id: 'bluebeetle',
    twitter_id: 'bluebeetle',
  },
  genres: [
    { id: 28, name: 'Action' },
    { id: 878, name: 'Science Fiction' },
    { id: 12, name: 'Adventure' },
  ],
  homepage: 'https://www.dc.com/bluebeetle',
  images: mockTMDBImages,
  keywords: {
    keywords: [
      { id: 2898, name: 'armor' },
      { id: 9715, name: 'superhero' },
    ],
  },
  overview:
    'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.',
  poster_path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
  recommendations: {
    page: 1,
    results: [
      {
        backdrop_path: '/jDjmnEuNUfWHg8rbW6u8mylkcO0.jpg',
        id: 832502,
        poster_path: '/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg',
        release_date: '2023-08-11',
        title: 'The Monkey King',
        vote_average: 6.8,
        vote_count: 170,
      },
      {
        backdrop_path: '/n6IHtlXxwxqI9CWpASDXil6HdDg.jpg',
        id: 16155,
        poster_path: '/857L7x6uFNr4c2oHD5KJw5pkbxn.jpg',
        release_date: '1998-08-07',
        title: 'Safe Men',
        vote_average: 5.6,
        vote_count: 46,
      },
    ],
    total_pages: 2,
    total_results: 40,
  },
  release_date: '2023-08-16',
  release_dates: {
    results: [
      {
        iso_3166_1: 'IE',
        release_dates: [
          {
            certification: '',
          },
        ],
      },
      {
        iso_3166_1: 'US',
        release_dates: [
          {
            certification: 'PG-13',
          },
        ],
      },
    ],
  },
  revenue: 124818235,
  runtime: 128,
  status: 'Released',
  tagline: 'Jaime Reyes is a superhero whether he likes it or not.',
  title: 'Blue Beetle',
  videos: { results: mockTMDBMovieVideos },
  vote_average: 7.143,
  vote_count: 994,
};

type MovieMockType = 'withOriginalLanguage' | 'withoutOriginalLanguage';

const mockTMDBDetailedMovies: Record<MovieMockType, TMDBDetailedMovie> = {
  withOriginalLanguage: { ...movieBase, id: 1, original_language: 'en' },
  withoutOriginalLanguage: { ...movieBase, id: 2, original_language: '' },
};

export default mockTMDBDetailedMovies;
