import {
  TMDBPersonSearchResultMovie,
  TMDBPersonSearchResultTvShow,
} from '@/services/TMDB/types/TMDBSearchResult';
import transformPersonSearchResultShows from '@/services/TMDB/utils/transformPersonSearchResultShows/transformPersonSearchResultShows';
import { PersonSearchResultShow } from '@/types/SearchResult';

describe('transformPersonSearchResultShows', () => {
  it('should return correctly transformed data for a single movie', async () => {
    const testMovie: TMDBPersonSearchResultMovie[] = [
      {
        id: 1,
        media_type: 'movie',
        title: 'Test title',
      },
    ];

    const expectedResult: PersonSearchResultShow[] = [
      {
        id: testMovie[0].id,
        showType: testMovie[0].media_type,
        title: testMovie[0].title,
      },
    ];

    const transformedResults = transformPersonSearchResultShows(testMovie);
    expect(transformedResults).toEqual(expectedResult);
  });

  it('should return correctly transformed data for multiple movies', async () => {
    const testMovies: TMDBPersonSearchResultMovie[] = [
      {
        id: 1,
        media_type: 'movie',
        title: 'Test title 1',
      },
      {
        id: 2,
        media_type: 'movie',
        title: 'Test title 2',
      },
    ];

    const expectedResults: PersonSearchResultShow[] = testMovies.map(
      ({ id, media_type, title }) => ({
        id,
        showType: media_type,
        title,
      })
    );

    const transformedResults = transformPersonSearchResultShows(testMovies);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for a single TV Show', async () => {
    const testTvShow: TMDBPersonSearchResultTvShow[] = [
      {
        id: 1,
        media_type: 'tv',
        name: 'Test name',
      },
    ];

    const expectedResult: PersonSearchResultShow[] = [
      {
        id: testTvShow[0].id,
        showType: testTvShow[0].media_type,
        title: testTvShow[0].name,
      },
    ];

    const transformedResults = transformPersonSearchResultShows(testTvShow);
    expect(transformedResults).toEqual(expectedResult);
  });

  it('should return correctly transformed data for multiple movies', async () => {
    const testTvShows: TMDBPersonSearchResultTvShow[] = [
      {
        id: 1,
        media_type: 'tv',
        name: 'Test name 1',
      },
      {
        id: 2,
        media_type: 'tv',
        name: 'Test name 2',
      },
    ];

    const expectedResults: PersonSearchResultShow[] = testTvShows.map(
      ({ id, media_type, name }) => ({
        id,
        showType: media_type,
        title: name,
      })
    );

    const transformedResults = transformPersonSearchResultShows(testTvShows);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for mixed shows', async () => {
    const testShows: (TMDBPersonSearchResultTvShow | TMDBPersonSearchResultMovie)[] = [
      {
        id: 1,
        media_type: 'tv',
        name: 'Test name 1',
      },
      {
        id: 2,
        media_type: 'movie',
        title: 'Test title 2',
      },
    ];

    const expectedResults: PersonSearchResultShow[] = [
      {
        id: 1,
        showType: 'tv',
        title: 'Test name 1',
      },
      {
        id: 2,
        showType: 'movie',
        title: 'Test title 2',
      },
    ];

    const transformedResults = transformPersonSearchResultShows(testShows);
    expect(transformedResults).toEqual(expectedResults);
  });
});
