import TMDBShowSearchResult from '@/services/TMDB/types/TMDBShowSearchResult';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import transformShowSearchResult from '@/services/TMDB/utils/transformShowSearchResult/transformShowSearchResult';

describe('transformShowSearchResult', () => {
  it('should return correctly transformed data for a movie', () => {
    const testMovie: TMDBShowSearchResult = {
      backdrop_path: '/n47trh6SChgncx2GUmwsvry6DLb.jpg',
      id: 991708,
      overview: 'Test movie overview',
      poster_path: '/rxBe0Js4dCvp1ZGgHHnBxjtbGPw.jpg',
      release_date: '2023-09-08',
      title: 'El Conde',
      vote_average: 6.745,
      vote_count: 51,
    };

    const transformedShow = transformShow(testMovie);
    const expectedResult = { ...transformedShow, overview: testMovie.overview! };
    const transformedResult = transformShowSearchResult(testMovie);
    expect(transformedResult).toEqual(expectedResult);
  });

  it('should return correctly transformed data for a TV show', () => {
    const testTvShow: TMDBShowSearchResult = {
      backdrop_path: '/nCRDun2QuNyzaLl6MqFztaQgcQe.jpg',
      first_air_date: '2023-09-07',
      id: 131992,
      name: 'The Changeling',
      overview: 'Test TV Show overview',
      poster_path: '/5VlYgwYUEHZUPavCBol2WgIECwc.jpg',
      vote_average: 8.4,
      vote_count: 23,
    };

    const transformedShow = transformShow(testTvShow);
    const expectedResult = { ...transformedShow, overview: testTvShow.overview! };
    const transformedResult = transformShowSearchResult(testTvShow);
    expect(transformedResult).toEqual(expectedResult);
  });

  it('should return correctly transformed data for a show without an overview', () => {
    const testTvShow: TMDBShowSearchResult = {
      backdrop_path: '/nCRDun2QuNyzaLl6MqFztaQgcQe.jpg',
      first_air_date: '2023-09-07',
      id: 131992,
      name: 'The Changeling',
      poster_path: '/5VlYgwYUEHZUPavCBol2WgIECwc.jpg',
      vote_average: 8.4,
      vote_count: 23,
    };

    const transformedShow = transformShow(testTvShow);
    const expectedResult = { ...transformedShow, overview: 'Overview not available.' };
    const transformedResult = transformShowSearchResult(testTvShow);
    expect(transformedResult).toEqual(expectedResult);
  });
});
