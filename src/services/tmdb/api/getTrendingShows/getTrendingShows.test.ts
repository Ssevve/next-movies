/** @jest-environment node */

import { rest } from 'msw';

import mockShows from '@/__mocks__/data/mockShows';
import { server } from '@/__mocks__/server';
import { getTrendingShows } from '@/services/tmdb/api/getTrendingShows/getTrendingShows';
import PaginatedShows from '@/types/PaginatedShows';

describe('getTrendingShows', () => {
  it('should return correct number of shows', async () => {
    const shows: PaginatedShows = await getTrendingShows({
      showType: 'all',
      timeWindow: 'day',
    });
    expect(shows.results.length).toBe(mockShows.length);
  });
});
