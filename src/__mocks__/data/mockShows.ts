import { TMDB_SHOW_POSTER_HEIGHT, TMDB_SHOW_POSTER_WIDTH } from '@/services/tmdb/constants';
import Show from '@/types/Show';

const mockShows: Show[] = [
  {
    id: 346698,
    poster: {
      height: TMDB_SHOW_POSTER_HEIGHT,
      path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      width: TMDB_SHOW_POSTER_WIDTH,
    },
    releaseDate: 'Jul 19, 2023',
    showType: 'movie',
    title: 'Barbie',
    userScore: 7.3,
  },
  {
    id: 565770,
    poster: {
      height: TMDB_SHOW_POSTER_HEIGHT,
      path: '/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg',
      width: TMDB_SHOW_POSTER_WIDTH,
    },
    releaseDate: 'Aug 16, 2023',
    showType: 'movie',
    title: 'Blue Beetle',
    userScore: 7.133,
  },
  {
    id: 111110,
    poster: {
      height: TMDB_SHOW_POSTER_HEIGHT,
      path: '/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg',
      width: TMDB_SHOW_POSTER_WIDTH,
    },
    releaseDate: 'Aug 31, 2023',
    showType: 'tv',
    title: 'ONE PIECE',
    userScore: 8.276,
  },
  {
    id: 1008042,
    poster: {
      height: TMDB_SHOW_POSTER_HEIGHT,
      path: '/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
      width: TMDB_SHOW_POSTER_WIDTH,
    },
    releaseDate: 'Jul 26, 2023',
    showType: 'movie',
    title: 'Talk to Me',
    userScore: 7.256,
  },
  {
    id: 335977,
    poster: {
      height: TMDB_SHOW_POSTER_HEIGHT,
      path: '/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg',
      width: TMDB_SHOW_POSTER_WIDTH,
    },
    releaseDate: 'Jun 28, 2023',
    showType: 'movie',
    title: 'Indiana Jones and the Dial of Destiny',
    userScore: 6.68,
  },
];

export default mockShows;
