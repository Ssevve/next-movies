import { rest } from 'msw';

import mockTMDBDetailedMovies from '@/__mocks__/data/mockTMDBDetailedMovies';
import mockTMDBLanguages from '@/__mocks__/data/mockTMDBLanguages';
import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import { TMDBUrls } from '@/services/TMDB/config';
import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import TMDBTvShow from '@/services/TMDB/types/TMDBTvShow';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';

const generateMockPaginatedShowsResponse = (
  shows: TMDBUnknownShow[] | TMDBMovie[] | TMDBTvShow[]
): TMDBPaginatedResponse<TMDBUnknownShow> => {
  return {
    page: 1,
    results: shows,
    total_pages: 1,
    total_results: shows.length,
  };
};

export const TMDBHandlers = [
  rest.get(`${TMDBUrls.base}/trending/:showType/:timeWindow`, (req, res, ctx) => {
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
  rest.get(`${TMDBUrls.base}/movie/now_playing`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBMovies)));
  }),
  rest.get(`${TMDBUrls.base}/:showType/popular`, (req, res, ctx) => {
    const { showType } = req.params;

    if (showType === 'movie') {
      return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBMovies)));
    } else if (showType === 'tv') {
      return res(ctx.status(200), ctx.json(generateMockPaginatedShowsResponse(mockTMDBTvShows)));
    }
  }),
  rest.get(`${TMDBUrls.base}/:showType/:showId/videos`, (req, res, ctx) => {
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
  rest.get(`${TMDBUrls.base}/movie/upcoming`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: mockTMDBMovies }));
  }),
  rest.get(`${TMDBUrls.base}/movie/:movieId`, (req, res, ctx) => {
    const { movieId } = req.params;
    return res(
      ctx.status(200),
      ctx.json(Object.values(mockTMDBDetailedMovies).find((movie) => movie.id === Number(movieId)))
    );
  }),
  rest.get(`${TMDBUrls.base}/configuration/languages`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTMDBLanguages));
  }),
];
