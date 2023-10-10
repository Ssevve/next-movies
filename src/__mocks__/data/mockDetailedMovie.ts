import {
  TMDB_DETAILED_SHOW_POSTER_HEIGHT,
  TMDB_DETAILED_SHOW_POSTER_WIDTH,
  TMDB_SHOW_POSTER_HEIGHT,
  TMDB_SHOW_POSTER_WIDTH,
} from '@/services/tmdb/constants';
import DetailedMovie from '@/types/DetailedMovie';

const mockDetailedMovie: DetailedMovie = {
  backdrop: { path: '/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg' },
  budget: 15000000,
  cast: [
    {
      character: 'Tim Ballard',
      gender: 'Male',
      id: 8767,
      imagePath: '/wDf6ukCaGMEnH94GzLP2NGjKeNL.jpg',
      name: 'Jim Caviezel',
    },
    {
      character: 'Katherine Ballard',
      gender: 'Female',
      id: 23931,
      imagePath: '/11raFiNo7QfisH44v3NIfpVvIz5.jpg',
      name: 'Mira Sorvino',
    },
  ],
  createdBy: [
    {
      id: 72960,
      name: 'Alejandro Gómez Monteverde',
    },
  ],
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 18,
      name: 'Drama',
    },
  ],
  homepage: 'https://www.soundoffreedommovie.com/',
  id: 678512,
  images: {
    backdrops: [
      {
        height: 720,
        path: '/uDdGUQIrK1fdBjo6xS3FIo8wbyi.jpg',
        width: 1280,
      },
      {
        height: 720,
        path: '/yFYgYwU7nVlhdbCKbnMULQarLeb.jpg',
        width: 1280,
      },
    ],
    posters: [
      {
        height: 760,
        path: '/pdoNjdVjba3GO7vgzmdYgn9u4XZ.jpg',
        width: 529,
      },
      {
        height: 900,
        path: '/aOi75Op88EeZkkvwDY51ALbs4DM.jpg',
        width: 600,
      },
    ],
  },
  keywords: [
    {
      id: 1930,
      name: 'kidnapping',
    },
    {
      id: 6019,
      name: 'human trafficking',
    },
  ],
  originalLanguage: 'en',
  originalTitle: 'Sound of Freedom',
  overview:
    'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
  poster: {
    height: TMDB_DETAILED_SHOW_POSTER_HEIGHT,
    path: '/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg',
    width: TMDB_DETAILED_SHOW_POSTER_WIDTH,
  },
  rating: 'PG-13',
  recommendations: [
    {
      id: 1130818,
      poster: {
        height: TMDB_SHOW_POSTER_HEIGHT,
        path: '/itUAkQmihFmRxMYTa3AkvIzMCV4.jpg',
        width: TMDB_SHOW_POSTER_WIDTH,
      },
      releaseDate: 'Jun 23, 2023',
      showType: 'movie',
      title: 'Sheroes',
      userScore: 6.484,
    },
    {
      id: 667538,
      poster: {
        height: TMDB_SHOW_POSTER_HEIGHT,
        path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
        width: TMDB_SHOW_POSTER_WIDTH,
      },
      releaseDate: 'Jun 6, 2023',
      showType: 'movie',
      title: 'Transformers: Rise of the Beasts',
      userScore: 7.493,
    },
  ],
  releaseDate: 'Jul 3, 2023',
  revenue: 217274343,
  runtime: 131,
  showType: 'movie',
  socialHandles: {
    facebook: '',
    instagram: '',
    twitter: '',
  },
  status: 'Released',
  tagline: 'Fight for the light. Silence the darkness.',
  title: 'Sound of Freedom',
  userScore: 8.012,
  userScoreCount: 580,
  videos: [
    {
      backdrop: { path: 'https://i.ytimg.com/vi/hyyyKcfJRGQ/hqdefault.jpg' },
      id: '645e47e288b1480158f2e037',
      showId: 678512,
      showTitle: 'Sound of Freedom',
      showType: 'movie',
      thumbnail: {
        height: 100,
        path: 'https://i.ytimg.com/vi/hyyyKcfJRGQ/hqdefault.jpg',
        width: 200,
      },
      title: 'Theatrical Trailer for July 4',
      type: 'Trailer',
      youtubeKey: 'hyyyKcfJRGQ',
    },
    {
      backdrop: { path: 'https://i.ytimg.com/vi/UwSBQWI-bek/hqdefault.jpg' },
      id: '645046a1e942ee012100f35b',
      showId: 678512,
      showTitle: 'Sound of Freedom',
      showType: 'movie',
      thumbnail: {
        height: 100,
        path: 'https://i.ytimg.com/vi/UwSBQWI-bek/hqdefault.jpg',
        width: 200,
      },
      title: 'Official Trailer',
      type: 'Trailer',
      youtubeKey: 'UwSBQWI-bek',
    },
  ],
};

export default mockDetailedMovie;
