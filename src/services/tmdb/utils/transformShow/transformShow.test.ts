import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import { TMDBImageSizes } from '@/services/TMDB/config';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import Show from '@/types/Show';

describe('transformShowsResults', () => {
  it('should return correctly transformed movie', async () => {
    const testMovie = mockTMDBMovies[0];
    const expectedResult: Show = {
      id: testMovie.id,
      poster: {
        height: TMDBImageSizes.posters.show.height,
        path: testMovie.poster_path,
        width: TMDBImageSizes.posters.show.width,
      },
      releaseDate: formatDate(testMovie.release_date!),
      showType: 'movie',
      title: testMovie.title || '',
      userScore: testMovie.vote_average,
    };
    const transformedResults = transformShow(testMovie);
    expect(transformedResults).toEqual(expectedResult);
  });

  it('should return correctly transformed movie without release date', async () => {
    const testMovie = { ...mockTMDBMovies[0], release_date: undefined };
    const expectedResult: Show = {
      id: testMovie.id,
      poster: {
        height: TMDBImageSizes.posters.show.height,
        path: testMovie.poster_path,
        width: TMDBImageSizes.posters.show.width,
      },
      releaseDate: 'N/A',
      showType: 'movie',
      title: testMovie.title || '',
      userScore: testMovie.vote_average,
    };
    const transformedResults = transformShow(testMovie);
    expect(transformedResults).toEqual(expectedResult);
  });

  it('should return correctly transformed TV show', async () => {
    const testTvShow = mockTMDBTvShows[0];
    const expectedResult: Show = {
      id: testTvShow.id,
      poster: {
        height: TMDBImageSizes.posters.show.height,
        path: testTvShow.poster_path,
        width: TMDBImageSizes.posters.show.width,
      },
      releaseDate: formatDate(testTvShow.first_air_date!),
      showType: 'tv',
      title: testTvShow.name || '',
      userScore: testTvShow.vote_average,
    };
    const transformedResults = transformShow(testTvShow);
    expect(transformedResults).toEqual(expectedResult);
  });

  it('should return correctly transformed movie without first air date', async () => {
    const testTvShow = { ...mockTMDBTvShows[0], first_air_date: undefined };
    const expectedResult: Show = {
      id: testTvShow.id,
      poster: {
        height: TMDBImageSizes.posters.show.height,
        path: testTvShow.poster_path,
        width: TMDBImageSizes.posters.show.width,
      },
      releaseDate: 'N/A',
      showType: 'tv',
      title: testTvShow.name || '',
      userScore: testTvShow.vote_average,
    };
    const transformedResults = transformShow(testTvShow);
    expect(transformedResults).toEqual(expectedResult);
  });
});
