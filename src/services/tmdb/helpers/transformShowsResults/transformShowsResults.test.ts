/** @jest-environment node */

import mockTMDBMixedResults from '@/__mocks__/data/mockTMDBMixedResults';
import mockTMDBMovieResults from '@/__mocks__/data/mockTMDBMovieResults';
import mockTMDBTvShowResults from '@/__mocks__/data/mockTMDBTvShowResults';
import { formatDate } from '@/lib/utils';
import transformShowsResults from '@/services/tmdb/helpers/transformShowsResults/transformShowsResults';
import Show from '@/types/Show';

describe('transformShowsResults', () => {
  it('should return correctly transformed data for mixed results', async () => {
    const transformedResults = transformShowsResults(mockTMDBMixedResults);

    const expectedResults: Show[] = [
      {
        backdropPath: mockTMDBMixedResults[0].backdrop_path,
        id: mockTMDBMixedResults[0].id,
        posterPath: mockTMDBMixedResults[0].poster_path,
        rating: mockTMDBMixedResults[0].vote_average,
        ratingsCount: mockTMDBMixedResults[0].vote_count,
        releaseDate: formatDate(mockTMDBMixedResults[0].release_date!),
        showType: 'movie',
        title: mockTMDBMixedResults[0].title!,
      },
      {
        backdropPath: mockTMDBMixedResults[1].backdrop_path,
        id: mockTMDBMixedResults[1].id,
        posterPath: mockTMDBMixedResults[1].poster_path,
        rating: mockTMDBMixedResults[1].vote_average,
        ratingsCount: mockTMDBMixedResults[1].vote_count,
        releaseDate: formatDate(mockTMDBMixedResults[1].first_air_date!),
        showType: 'tv',
        title: mockTMDBMixedResults[1].name!,
      },
    ];

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for movie results', async () => {
    const transformedResults = transformShowsResults(mockTMDBMovieResults);

    // Map
    const expectedResults: Show[] = [
      {
        backdropPath: mockTMDBMovieResults[0].backdrop_path,
        id: mockTMDBMovieResults[0].id,
        posterPath: mockTMDBMovieResults[0].poster_path,
        rating: mockTMDBMovieResults[0].vote_average,
        ratingsCount: mockTMDBMovieResults[0].vote_count,
        releaseDate: formatDate(mockTMDBMovieResults[0].release_date!),
        showType: 'movie',
        title: mockTMDBMovieResults[0].title!,
      },
      {
        backdropPath: mockTMDBMovieResults[1].backdrop_path,
        id: mockTMDBMovieResults[1].id,
        posterPath: mockTMDBMovieResults[1].poster_path,
        rating: mockTMDBMovieResults[1].vote_average,
        ratingsCount: mockTMDBMovieResults[1].vote_count,
        releaseDate: formatDate(mockTMDBMovieResults[1].release_date!),
        showType: 'movie',
        title: mockTMDBMovieResults[1].title!,
      },
    ];

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for TV shows results', async () => {
    const transformedResults = transformShowsResults(mockTMDBTvShowResults);

    // Map
    const expectedResults: Show[] = [
      {
        backdropPath: mockTMDBTvShowResults[0].backdrop_path,
        id: mockTMDBTvShowResults[0].id,
        posterPath: mockTMDBTvShowResults[0].poster_path,
        rating: mockTMDBTvShowResults[0].vote_average,
        ratingsCount: mockTMDBTvShowResults[0].vote_count,
        releaseDate: formatDate(mockTMDBTvShowResults[0].first_air_date!),
        showType: 'tv',
        title: mockTMDBTvShowResults[0].name!,
      },
      {
        backdropPath: mockTMDBTvShowResults[1].backdrop_path,
        id: mockTMDBTvShowResults[1].id,
        posterPath: mockTMDBTvShowResults[1].poster_path,
        rating: mockTMDBTvShowResults[1].vote_average,
        ratingsCount: mockTMDBTvShowResults[1].vote_count,
        releaseDate: formatDate(mockTMDBTvShowResults[1].first_air_date!),
        showType: 'tv',
        title: mockTMDBTvShowResults[1].name!,
      },
    ];

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data if release date is undefined', async () => {
    const transformedResults = transformShowsResults([
      {
        backdrop_path: '/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg',
        first_air_date: undefined,
        id: 1429,
        name: 'Attack on Titan',
        poster_path: '/8C5gYahMFmzHKGNID8QrG5t25WU.jpg',
        vote_average: 8.7,
        vote_count: 5474,
      },
    ]);

    const expectedResults: Show[] = [
      {
        backdropPath: mockTMDBTvShowResults[0].backdrop_path,
        id: mockTMDBTvShowResults[0].id,
        posterPath: mockTMDBTvShowResults[0].poster_path,
        rating: mockTMDBTvShowResults[0].vote_average,
        ratingsCount: mockTMDBTvShowResults[0].vote_count,
        releaseDate: 'N/A',
        showType: 'tv',
        title: mockTMDBTvShowResults[0].name!,
      },
    ];

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return an empty array if results array is empty', async () => {
    const transformedResults = transformShowsResults([]);
    expect(transformedResults).toEqual([]);
  });
});
