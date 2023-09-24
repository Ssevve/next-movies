import { rest } from 'msw';

import mockTMDBMixedResults from '@/__mocks__/data/mockTMDBMixedResults';
import mockTMDBMovieResults from '@/__mocks__/data/mockTMDBMovieResults';
import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBTvShowResults from '@/__mocks__/data/mockTMDBTvShowResults';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import {
  MixedShowsResult,
  MovieResult,
  PaginatedShowsResponse,
  TvShowResult,
} from '@/services/tmdb/types';

const generateMockResponse = (
  shows: MixedShowsResult[] | MovieResult[] | TvShowResult[]
): PaginatedShowsResponse => {
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
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBMixedResults)));
    } else if (showType === 'movie') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBMovieResults)));
    } else if (showType === 'tv') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBTvShowResults)));
    }
  }),
  rest.get(`${TMDB_BASE_URL}/movie/now_playing`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBMovieResults)));
  }),
  rest.get(`${TMDB_BASE_URL}/:showType/popular`, (req, res, ctx) => {
    const { showType } = req.params;

    if (showType === 'movie') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBMovieResults)));
    } else if (showType === 'tv') {
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBTvShowResults)));
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
    return res(ctx.status(200), ctx.json({ results: mockTMDBMovieResults }));
  }),
];
