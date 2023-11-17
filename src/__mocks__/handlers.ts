import { rest } from 'msw';

import mockTMDBDetailedMovies from '@/__mocks__/data/mockTMDBDetailedMovies';
import mockTMDBDetailedTvShows from '@/__mocks__/data/mockTMDBDetailedTvShows';
import mockTMDBLanguages from '@/__mocks__/data/mockTMDBLanguages';
import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBMovieVideos from '@/__mocks__/data/mockTMDBMovieVideos';
import mockTMDBSearchResults from '@/__mocks__/data/mockTMDBSearchResults';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBTvShowVideos from '@/__mocks__/data/mockTMDBTvShowVideos';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import generateMockPaginatedResponse from '@/__mocks__/utils/generateMockPaginatedResponse';
import getRequestedPage from '@/__mocks__/utils/getRequestedPage';
import { TMDBUrls } from '@/services/TMDB/config';

export const TMDBHandlers = [
  rest.get(`${TMDBUrls.base}/trending/:showType/:timeWindow`, (req, res, ctx) => {
    const { showType } = req.params;
    if (showType === 'all') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedResponse({ results: mockTMDBUnknownShows }))
      );
    } else if (showType === 'movie') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedResponse({ results: mockTMDBMovies }))
      );
    } else if (showType === 'tv') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedResponse({ results: mockTMDBTvShows }))
      );
    }
  }),

  rest.get(`${TMDBUrls.base}/movie/now_playing`, (req, res, ctx) => {
    const page = getRequestedPage(req);
    return res(
      ctx.status(200),
      ctx.json(generateMockPaginatedResponse({ page, results: mockTMDBMovies }))
    );
  }),
  rest.get(`${TMDBUrls.base}/:showType/top_rated`, (req, res, ctx) => {
    const { showType } = req.params;
    const page = getRequestedPage(req);

    if (showType === 'movie') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedResponse({ page, results: mockTMDBMovies }))
      );
    } else if (showType === 'tv') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedResponse({ page, results: mockTMDBTvShows }))
      );
    }
  }),
  rest.get(`${TMDBUrls.base}/:showType/popular`, (req, res, ctx) => {
    const { showType } = req.params;
    const page = getRequestedPage(req);

    if (showType === 'movie') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedResponse({ page, results: mockTMDBMovies }))
      );
    } else if (showType === 'tv') {
      return res(
        ctx.status(200),
        ctx.json(generateMockPaginatedResponse({ page, results: mockTMDBTvShows }))
      );
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
    const page = getRequestedPage(req);
    return res(ctx.status(200), ctx.json({ page, results: mockTMDBMovies }));
  }),
  rest.get(`${TMDBUrls.base}/movie/:movieId`, (req, res, ctx) => {
    const { movieId } = req.params;
    return res(
      ctx.status(200),
      ctx.json(Object.values(mockTMDBDetailedMovies).find(({ id }) => id === Number(movieId)))
    );
  }),
  rest.get(`${TMDBUrls.base}/tv/:tvShowId`, (req, res, ctx) => {
    const { tvShowId } = req.params;
    return res(
      ctx.status(200),
      ctx.json(Object.values(mockTMDBDetailedTvShows).find(({ id }) => id === Number(tvShowId)))
    );
  }),
  rest.get(`${TMDBUrls.base}/configuration/languages`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTMDBLanguages));
  }),
  rest.get(`${TMDBUrls.base}/search/:endpoint`, (req, res, ctx) => {
    const { endpoint } = req.params;

    const url = new URL(req.url);
    const page = url.searchParams.get('page') || 1;
    const query = url.searchParams.get('query');

    if (endpoint === 'movie') {
      return res(
        ctx.status(200),
        ctx.json(
          generateMockPaginatedResponse({
            page,
            results: mockTMDBSearchResults.movie.filter(({ title }) => title!.includes(query!)),
          })
        )
      );
    }
    if (endpoint === 'tv') {
      return res(
        ctx.status(200),
        ctx.json(
          generateMockPaginatedResponse({
            page,
            results: mockTMDBSearchResults.tv.filter(({ name }) => name!.includes(query!)),
          })
        )
      );
    }
    if (endpoint === 'person') {
      return res(
        ctx.status(200),
        ctx.json(
          generateMockPaginatedResponse({
            page,
            results: mockTMDBSearchResults.person.filter(({ name }) => name.includes(query!)),
          })
        )
      );
    }
  }),
];
