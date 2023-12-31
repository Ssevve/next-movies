/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBLanguages from '@/__mocks__/data/mockTMDBLanguages';
import { server } from '@/__mocks__/server';
import getLanguages from '@/services/TMDB/api/getLanguages/getLanguages';
import { TMDBUrls } from '@/services/TMDB/config';

describe('getLanguages', () => {
  it('should return correct results', async () => {
    const expectedLanguages: Record<string, string> = {};
    mockTMDBLanguages.forEach(({ iso_639_1, english_name }) => {
      expectedLanguages[iso_639_1] = english_name;
    });

    const languages = await getLanguages();
    expect(languages).toEqual(expectedLanguages);
  });

  it('should throw correct error on failed fetch', () => {
    server.use(
      rest.get(`${TMDBUrls.base}/configuration/languages`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      await getLanguages();
    }).rejects.toThrow('Failed to fetch languages.');
  });
});
