import { TMDBPersonMovie, TMDBPersonTvShow } from '@/services/TMDB/types/TMDBPerson';
import transformPersonShows from '@/services/TMDB/utils/transformPersonShows/transformPersonShows';
import { PersonShow } from '@/types/Person';

describe('transformShows', () => {
  it('should return correctly transformed data for a single movie', async () => {
    const testMovie: TMDBPersonMovie[] = [
      {
        id: 1,
        media_type: 'movie',
        title: 'Test title',
      },
    ];

    const expectedResult: PersonShow[] = [
      {
        id: testMovie[0].id,
        showType: testMovie[0].media_type,
        title: testMovie[0].title,
      },
    ];

    const transformedResults = transformPersonShows(testMovie);
    expect(transformedResults).toEqual(expectedResult);
  });

  it('should return correctly transformed data for multiple movies', async () => {
    const testMovies: TMDBPersonMovie[] = [
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

    const expectedResults: PersonShow[] = testMovies.map(({ id, media_type, title }) => ({
      id,
      showType: media_type,
      title,
    }));

    const transformedResults = transformPersonShows(testMovies);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for a single TV Show', async () => {
    const testTvShow: TMDBPersonTvShow[] = [
      {
        id: 1,
        media_type: 'tv',
        name: 'Test name',
      },
    ];

    const expectedResult: PersonShow[] = [
      {
        id: testTvShow[0].id,
        showType: testTvShow[0].media_type,
        title: testTvShow[0].name,
      },
    ];

    const transformedResults = transformPersonShows(testTvShow);
    expect(transformedResults).toEqual(expectedResult);
  });

  it('should return correctly transformed data for multiple movies', async () => {
    const testTvShows: TMDBPersonTvShow[] = [
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

    const expectedResults: PersonShow[] = testTvShows.map(({ id, media_type, name }) => ({
      id,
      showType: media_type,
      title: name,
    }));

    const transformedResults = transformPersonShows(testTvShows);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for mixed shows', async () => {
    const testShows: (TMDBPersonTvShow | TMDBPersonMovie)[] = [
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

    const expectedResults: PersonShow[] = [
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

    const transformedResults = transformPersonShows(testShows);
    expect(transformedResults).toEqual(expectedResults);
  });
});
