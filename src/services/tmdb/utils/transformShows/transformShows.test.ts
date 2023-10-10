import mockTMDBMovies from '@/__mocks__/data/mockTMDBMovies';
import mockTMDBTvShows from '@/__mocks__/data/mockTMDBTvShows';
import mockTMDBUnknownShows from '@/__mocks__/data/mockTMDBUnknownShows';
import { TMDB_SHOW_POSTER_HEIGHT, TMDB_SHOW_POSTER_WIDTH } from '@/services/tmdb/constants';
import formatDate from '@/services/tmdb/utils/formatDate/formatDate';
import transformShows from '@/services/tmdb/utils/transformShows/transformShows';
import Show from '@/types/Show';

import getTMDBImagePath from '../getTMDBImagePath/getTMDBImagePath';

describe('transformShowsResults', () => {
  it('should return correctly transformed data for mixed shows', async () => {
    const expectedResults: Show[] = [
      {
        id: mockTMDBUnknownShows[0].id,
        poster: {
          height: TMDB_SHOW_POSTER_HEIGHT,
          path: getTMDBImagePath({
            height: TMDB_SHOW_POSTER_HEIGHT,
            image: mockTMDBUnknownShows[0].poster_path,
            width: TMDB_SHOW_POSTER_WIDTH,
          }),
          width: TMDB_SHOW_POSTER_WIDTH,
        },
        releaseDate: formatDate(mockTMDBUnknownShows[0].release_date!),
        showType: 'movie',
        title: mockTMDBUnknownShows[0].title!,
        userScore: mockTMDBUnknownShows[0].vote_average,
      },
      {
        id: mockTMDBUnknownShows[1].id,
        poster: {
          height: TMDB_SHOW_POSTER_HEIGHT,
          path: getTMDBImagePath({
            height: TMDB_SHOW_POSTER_HEIGHT,
            image: mockTMDBUnknownShows[1].poster_path,
            width: TMDB_SHOW_POSTER_WIDTH,
          }),
          width: TMDB_SHOW_POSTER_WIDTH,
        },
        releaseDate: formatDate(mockTMDBUnknownShows[1].first_air_date!),
        showType: 'tv',
        title: mockTMDBUnknownShows[1].name!,
        userScore: mockTMDBUnknownShows[1].vote_average,
      },
    ];

    const transformedResults = transformShows(mockTMDBUnknownShows);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for movies', async () => {
    const expectedResults: Show[] = mockTMDBMovies.map(
      ({ id, poster_path, title, vote_average, release_date }) => ({
        id,
        poster: {
          height: TMDB_SHOW_POSTER_HEIGHT,
          path: getTMDBImagePath({
            height: TMDB_SHOW_POSTER_HEIGHT,
            image: poster_path,
            width: TMDB_SHOW_POSTER_WIDTH,
          }),
          width: TMDB_SHOW_POSTER_WIDTH,
        },
        releaseDate: release_date ? formatDate(release_date) : 'N/A',
        showType: 'movie',
        title: title,
        userScore: vote_average,
      })
    );

    const transformedResults = transformShows(mockTMDBMovies);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data for TV shows', async () => {
    const expectedResults: Show[] = mockTMDBTvShows.map(
      ({ id, poster_path, name, vote_average, first_air_date }) => ({
        id: id,
        poster: {
          height: TMDB_SHOW_POSTER_HEIGHT,
          path: getTMDBImagePath({
            height: TMDB_SHOW_POSTER_HEIGHT,
            image: poster_path,
            width: TMDB_SHOW_POSTER_WIDTH,
          }),
          width: TMDB_SHOW_POSTER_WIDTH,
        },
        releaseDate: formatDate(first_air_date!),
        showType: 'tv',
        title: name,
        userScore: vote_average,
      })
    );

    const transformedResults = transformShows(mockTMDBTvShows);
    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return correctly transformed data if release date is undefined', async () => {
    const expectedResults: Show[] = [
      {
        id: mockTMDBTvShows[0].id,
        poster: {
          height: TMDB_SHOW_POSTER_HEIGHT,
          path: getTMDBImagePath({
            height: TMDB_SHOW_POSTER_HEIGHT,
            image: mockTMDBTvShows[0].poster_path,
            width: TMDB_SHOW_POSTER_WIDTH,
          }),
          width: TMDB_SHOW_POSTER_WIDTH,
        },
        releaseDate: 'N/A',
        showType: 'tv',
        title: mockTMDBTvShows[0].name!,
        userScore: mockTMDBTvShows[0].vote_average,
      },
    ];

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

    expect(transformedResults).toEqual(expectedResults);
  });

  it('should return an empty array if results array is empty', async () => {
    const transformedResults = transformShows([]);
    expect(transformedResults).toEqual([]);
  });
});
