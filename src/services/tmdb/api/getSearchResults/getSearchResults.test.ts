/** @jest-environment node */

import { rest } from 'msw';

import mockTMDBSearchResults from '@/__mocks__/data/mockTMDBSearchResults';
import { server } from '@/__mocks__/server';
import getSearchResults from '@/services/TMDB/api/getSearchResults/getSearchResults';
import { TMDBUrls } from '@/services/TMDB/config';
import transformPersonSearchResult from '@/services/TMDB/utils/transformPersonSearchResult/transformPersonSearchResult';
import transformShowSearchResult from '@/services/TMDB/utils/transformShowSearchResult/transformShowSearchResult';

describe('getSearchResults', () => {
  it('should return correct results for movie endpoint', async () => {
    const expectedMovie = transformShowSearchResult(mockTMDBSearchResults.movie[0]);
    const searchResults = await getSearchResults({ endpoint: 'movie', query: 'Br' });
    expect(searchResults.results).toStrictEqual([expectedMovie]);
  });

  it('should return correct results for TV show endpoint', async () => {
    const expectedTvShow = transformShowSearchResult(mockTMDBSearchResults.tv[0]);
    const searchResults = await getSearchResults({ endpoint: 'tv', query: 'Br' });
    expect(searchResults.results).toStrictEqual([expectedTvShow]);
  });
});

it('should return correct results for person endpoint', async () => {
  const expectedPerson = transformPersonSearchResult(mockTMDBSearchResults.person[0]);
  const searchResults = await getSearchResults({ endpoint: 'person', query: 'Rich' });
  expect(searchResults.results).toStrictEqual([expectedPerson]);
});

it('should return correct page of results', async () => {
  const searchResults = await getSearchResults({ endpoint: 'person', page: '2', query: 'Rich' });
  console.log(searchResults);
  expect(searchResults.page).toBe(2);
});

it('should return empty results if query was not provided', async () => {
  const searchResults = await getSearchResults({ endpoint: 'person' });
  expect(searchResults).toStrictEqual({
    page: 1,
    results: [],
    totalPages: 1,
    totalResults: 0,
  });
});

it('should throw correct error on failed fetch', () => {
  server.use(
    rest.get(`${TMDBUrls.base}/search/:endpoint`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  expect(async () => {
    await getSearchResults({ endpoint: 'movie', query: 'test' });
  }).rejects.toThrow('Search failed');
});
