import { rest } from 'msw';

import mockShows from '@/__mocks__/data/mockShows';
import { TMDB_BASE_URL } from '@/services/tmdb/constants';

export const tmdbHandlers = [
  rest.get(
    `${TMDB_BASE_URL}/trending/:showType/:timeWindow`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          page: 1,
          results: mockShows,
          totalPages: 1,
          totalResults: mockShows.length,
        })
      );
    }
  ),
];
