/** @jest-environment node */

import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import { formatDate } from '@/lib/utils';
import transformShows from '@/services/tmdb/helpers/transformShows/transformShows';
import Show from '@/types/Show';

describe('transformShowsResults', () => {
  it('should return correctly transformed data for mixed shows', async () => {
    const transformedResults = transformShows(mockTMDBUnknownShows);

    const expectedResults: Show[] = [
      {
        backdropPath: mockTMDBUnknownShows[0].backdrop_path,
        id: mockTMDBUnknownShows[0].id,
        posterPath: mockTMDBUnknownShows[0].poster_path,
        releaseDate: formatDate(mockTMDBUnknownShows[0].release_date!),
        showType: 'movie',
        title: mockTMDBUnknownShows[0].title!,
        userScore: mockTMDBUnknownShows[0].vote_average,
        userScoreCount: mockTMDBUnknownShows[0].vote_count,
      },
      {
        backdropPath: mockTMDBUnknownShows[1].backdrop_path,
        id: mockTMDBUnknownShows[1].id,
        posterPath: mockTMDBUnknownShows[1].poster_path,
        releaseDate: formatDate(mockTMDBUnknownShows[1].first_air_date!),
        showType: 'tv',
        title: mockTMDBUnknownShows[1].name!,
        userScore: mockTMDBUnknownShows[1].vote_average,
        userScoreCount: mockTMDBUnknownShows[1].vote_count,
      },
    ];

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for movies', async () => {
    const transformedResults = transformShows(mockTMDBMovies);

    const expectedResults: Show[] = mockTMDBMovies.map((result) => ({
      backdropPath: result.backdrop_path,
      id: result.id,
      posterPath: result.poster_path,
      releaseDate: formatDate(result.release_date!),
      showType: 'movie',
      title: result.title!,
      userScore: result.vote_average,
      userScoreCount: result.vote_count,
    }));

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for TV shows', async () => {
    const transformedResults = transformShows(mockTMDBTvShows);

    const expectedResults: Show[] = mockTMDBTvShows.map((result) => ({
      backdropPath: result.backdrop_path,
      id: result.id,
      posterPath: result.poster_path,
      releaseDate: formatDate(result.first_air_date!),
      showType: 'tv',
      title: result.name!,
      userScore: result.vote_average,
      userScoreCount: result.vote_count,
    }));

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data if release date is undefined', async () => {
    const transformedResults = transformShows([
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
        backdropPath: mockTMDBTvShows[0].backdrop_path,
        id: mockTMDBTvShows[0].id,
        posterPath: mockTMDBTvShows[0].poster_path,
        releaseDate: 'N/A',
        showType: 'tv',
        title: mockTMDBTvShows[0].name!,
        userScore: mockTMDBTvShows[0].vote_average,
        userScoreCount: mockTMDBTvShows[0].vote_count,
      },
    ];

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return an empty array if results array is empty', async () => {
    const transformedResults = transformShows([]);
    expect(transformedResults).toEqual([]);
  });
});
