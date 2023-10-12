import { rest } from 'msw';

import mockTMDBDetailedMovies from '@/__mocks__/data/mockTMDBDetailedMovies';
import mockTMDBLanguages from '@/__mocks__/data/mockTMDBLanguages';
import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import { urls } from '@/services/tmdb/config';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
import TMDBTvShow from '@/services/tmdb/types/TMDBTvShow';
import TMDBUnknownShow from '@/services/tmdb/types/TMDBUnknownShow';

const generateMockPaginatedShowsResponse = (
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
  rest.get(`${urls.base}/trending/:showType/:timeWindow`, (req, res, ctx) => {
    const { showType } = req.params;
    if (showType === 'all') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedShowsResponse(mockTMDBUnknownShows))
      );
    } else if (showType === 'movie') {
      return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBMovies)));
    } else if (showType === 'tv') {
      return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBTvShows)));
    }
  }),
  rest.get(`${urls.base}/movie/now_playing`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBMovies)));
  }),
  rest.get(`${urls.base}/:showType/popular`, (req, res, ctx) => {
    const { showType } = req.params;

    if (showType === 'movie') {
      return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBMovies)));
    } else if (showType === 'tv') {
      return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBTvShows)));
    }
  }),
  rest.get(`${urls.base}/:showType/:showId/videos`, (req, res, ctx) => {
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
  rest.get(`${urls.base}/movie/upcoming`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: mockTMDBMovies }));
  }),
  rest.get(`${urls.base}/movie/:movieId`, (req, res, ctx) => {
    const { movieId } = req.params;
    return res(
      ctx.status(200),
      ctx.json(Object.values(mockTMDBDetailedMovies).find((movie) => movie.id === Number(movieId)))
    );
  }),
  rest.get(`${urls.base}/configuration/languages`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTMDBLanguages));
  }),
];
