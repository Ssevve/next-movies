import { rest } from 'msw';

import { TMDB_BASE_URL } from '@/services/tmdb/constants';
import {
  MixedShowsResult,
  MovieResult,
  PaginatedShowsResponse,
  TvShowResult,
} from '@/services/tmdb/types';

import mockTMDBMixedResults from './data/mockTMDBMixedResults';
import mockTMDBMovieResults from './data/mockTMDBMovieResults';
import mockTMDBTvShowsResults from './data/mockTMDBTvShowResults';
import mockTMDBTvShowResults from './data/mockTMDBTvShowResults';

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
      return res(ctx.status(200), ctx.json(generateMockResponse(mockTMDBTvShowsResults)));
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
];
