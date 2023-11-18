/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBPerson from '@/__mocks__/data/mockTMDBPerson';
import { server } from '@/__mocks__/server';
import getPopularPeople from '@/services/TMDB/api/getPopularPeople/getPopularPeople';
import { TMDBUrls } from '@/services/TMDB/config';
import transformPerson from '@/services/TMDB/utils/transformPerson/transformPerson';

describe('getPopularPeople', () => {
  it('should return correct results', async () => {
    const expectedResult = transformPerson(mockTMDBPerson[0]);
    const response = await getPopularPeople();
    expect(response.results).toEqual([expectedResult]);
  });

  it('should call with correct page', async () => {
    const expectedPage = 2;
    const response = await getPopularPeople(expectedPage);
    expect(response.page).toEqual(expectedPage);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDBUrls.base}/person/popular`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getPopularPeople();
    }).rejects.toThrow('Failed to fetch popular people.');
  });
});
