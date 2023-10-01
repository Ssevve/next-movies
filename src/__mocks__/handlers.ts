import { rest } from 'msw';

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
import TMDBTvShow from '@/services/tmdb/types/TMDBTvShow';
import TMDBUnknownShow from '@/services/tmdb/types/TMDBUnknownShow';

const generateMockResponse = (
  shows: TMDBUnknownShow[] | TMDBMovie[] | TMDBTvShow[]
): TMDBPaginatedShows => {
  return {
    page: 1,
    results: shows,
    total_pages: 1,
    total_results: shows.length,
  };
};

export const tmdbHandlers = [
  rest.get(`${TMDB_BASE_URL}/trending/:showType/:timeWindow`, (req, res, ctx) => {
    const { showType } = req.params;
    if (showType === 'all') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBUnknownShows)));
    } else if (showType === 'movie') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBMovies)));
    } else if (showType === 'tv') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBTvShows)));
    }
  }),
  rest.get(`${TMDB_BASE_URL}/movie/now_playing`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBMovies)));
  }),
  rest.get(`${TMDB_BASE_URL}/:showType/popular`, (req, res, ctx) => {
    const { showType } = req.params;

    if (showType === 'movie') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBMovies)));
    } else if (showType === 'tv') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBTvShows)));
    }
  }),
  rest.get(`${TMDB_BASE_URL}/:showType/:showId/videos`, (req, res, ctx) => {
    const { showType } = req.params;

    if (showType === 'movie') {
      return res(
        ctx.status(200),
        ctx.json({
          results: mockTMDBMovieVideos,
        })
      );
    } else if (showType === 'tv') {
      return res(
        ctx.status(200),
        ctx.json({
          results: mockTMDBTvShowVideos,
        })
      );
    }
  }),
  rest.get(`${TMDB_BASE_URL}/movie/upcoming`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: mockTMDBMovies }));
  }),
];
