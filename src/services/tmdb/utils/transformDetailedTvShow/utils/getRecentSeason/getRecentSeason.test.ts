import { TMDBImageSizes } from '@/services/TMDB/config';
import { TMDBSeason } from '@/services/TMDB/types/TMDBDetailedTvShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import getRecentSeason from '@/services/TMDB/utils/transformDetailedTvShow/utils/getRecentSeason/getRecentSeason';
import { Season } from '@/types/DetailedTvShow';

const mockSeasons: TMDBSeason[] = [
  {
    air_date: '2009-02-17',
    episode_count: 11,
    id: 3577,
    name: 'Specials',
    overview: '',
    poster_path: '/40dT79mDEZwXkQiZNBgSaydQFDP.jpg',
    season_number: 0,
    vote_average: 0.0,
  },
  {
    air_date: '2008-01-20',
    episode_count: 7,
    id: 3572,
    name: 'Season 1',
    overview:
      'High school chemistry teacher Walter White\'s life is suddenly transformed by a dire medical diagnosis. Street-savvy former student Jesse Pinkman "teaches" Walter a new trade.',
    poster_path: '/1BP4xYv9ZG4ZVHkL7ocOziBbSYH.jpg',
    season_number: 1,
    vote_average: 8.2,
  },
];

describe('getRecentSeason', () => {
  it('should return correctly transformed season if seasons length is 1', () => {
    const testSeason = mockSeasons.slice(1);
    const expectedSeason: Season = {
      airDate: formatDate(testSeason[0].air_date!),
      episodeCount: testSeason[0].episode_count,
      id: testSeason[0].id,
      name: testSeason[0].name,
      overview: testSeason[0].overview,
      poster: {
        height: TMDBImageSizes.posters.season.height,
        path: testSeason[0].poster_path!,
        width: TMDBImageSizes.posters.season.width,
      },
      seasonNumber: testSeason[0].season_number,
      userScore: testSeason[0].vote_average,
    };

    const result = getRecentSeason(testSeason);
    expect(result).toStrictEqual(expectedSeason);
  });

  it('should return correctly transformed season if seasons length is greater than 1', () => {
    const recentSeason = mockSeasons.at(-1);
    const expectedSeason: Season = {
      airDate: formatDate(recentSeason!.air_date!),
      episodeCount: recentSeason!.episode_count,
      id: recentSeason!.id,
      name: recentSeason!.name,
      overview: recentSeason!.overview,
      poster: {
        height: TMDBImageSizes.posters.season.height,
        path: recentSeason!.poster_path!,
        width: TMDBImageSizes.posters.season.width,
      },
      seasonNumber: recentSeason!.season_number,
      userScore: recentSeason!.vote_average,
    };

    const result = getRecentSeason(mockSeasons);
    expect(result).toStrictEqual(expectedSeason);
  });

  it('should return correctly transformed season without an overview', () => {
    const testSeason = mockSeasons.slice(0, 1);
    const expectedSeason: Season = {
      airDate: formatDate(testSeason[0]!.air_date!),
      episodeCount: testSeason[0]!.episode_count,
      id: testSeason[0]!.id,
      name: testSeason[0]!.name,
      overview: 'Overview not available.',
      poster: {
        height: TMDBImageSizes.posters.season.height,
        path: testSeason[0]!.poster_path!,
        width: TMDBImageSizes.posters.season.width,
      },
      seasonNumber: testSeason[0]!.season_number,
      userScore: testSeason[0]!.vote_average,
    };

    const result = getRecentSeason(testSeason);
    expect(result).toStrictEqual(expectedSeason);
  });

  it('should return correctly transformed season without a poster path', () => {
    const testSeason = { ...mockSeasons.slice(1)[0], poster_path: '' };
    const expectedSeason: Season = {
      airDate: formatDate(testSeason.air_date!),
      episodeCount: testSeason.episode_count!,
      id: testSeason.id!,
      name: testSeason.name!,
      overview: testSeason.overview!,
      poster: {
        height: TMDBImageSizes.posters.season.height,
        path: '',
        width: TMDBImageSizes.posters.season.width,
      },
      seasonNumber: testSeason.season_number!,
      userScore: testSeason.vote_average!,
    };

    const result = getRecentSeason([testSeason]);
    expect(result).toStrictEqual(expectedSeason);
  });

  it('should return correctly transformed season without without air_date', () => {
    const testSeason = { ...mockSeasons.slice(1)[0], air_date: '' };
    const expectedSeason: Season = {
      airDate: 'N/A',
      episodeCount: testSeason.episode_count!,
      id: testSeason.id!,
      name: testSeason.name!,
      overview: testSeason.overview!,
      poster: {
        height: TMDBImageSizes.posters.season.height,
        path: testSeason.poster_path!,
        width: TMDBImageSizes.posters.season.width,
      },
      seasonNumber: testSeason.season_number!,
      userScore: testSeason.vote_average!,
    };

    const result = getRecentSeason([testSeason]);
    expect(result).toStrictEqual(expectedSeason);
  });
});
