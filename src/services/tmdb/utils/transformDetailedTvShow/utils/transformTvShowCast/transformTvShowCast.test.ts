import { TMDBTvShowCastPerson } from '@/services/TMDB/types/TMDBDetailedTvShow';
import transformTvShowCast from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformTvShowCast/transformTvShowCast';
import { TvShowCastPerson } from '@/types/DetailedTvShow';

describe('transformTvShowCast', () => {
  it('should return correctly transformed data for single person', () => {
    const mockCast: TMDBTvShowCastPerson[] = [
      {
        id: 1,
        name: 'John Doe',
        profile_path: '/testProfilePath',
        roles: [
          {
            character: 'Bob',
          },
          {
            character: 'Matt',
          },
        ],
        total_episode_count: 5,
      },
    ];

    const expectedCast: TvShowCastPerson[] = [
      {
        characters: mockCast[0].roles.map(({ character }) => character),
        id: mockCast[0].id,
        imagePath: mockCast[0].profile_path!,
        name: mockCast[0].name,
        totalEpisodeCount: mockCast[0].total_episode_count,
      },
    ];

    expect(transformTvShowCast(mockCast)).toEqual(expectedCast);
  });

  it('should return correctly transformed data for multiple people', () => {
    const mockCast: TMDBTvShowCastPerson[] = [
      {
        id: 1,
        name: 'John Doe',
        profile_path: '/testProfilePath',
        roles: [
          {
            character: 'Bob',
          },
          {
            character: 'Matt',
          },
        ],
        total_episode_count: 5,
      },
      {
        id: 2,
        name: 'Jane Doe',
        profile_path: '/testProfilePath2',
        roles: [
          {
            character: 'Margaret',
          },
          {
            character: 'Angelina',
          },
        ],
        total_episode_count: 2,
      },
    ];

    const expectedCast: TvShowCastPerson[] = mockCast.map(
      ({ id, name, roles, total_episode_count, profile_path }) => ({
        characters: roles.map(({ character }) => character),
        id,
        imagePath: profile_path!,
        name,
        totalEpisodeCount: total_episode_count,
      })
    );

    expect(transformTvShowCast(mockCast)).toEqual(expectedCast);
  });

  it('should return correctly transformed data for if profile_path is not defined', () => {
    const mockCast = [
      {
        id: 1,
        name: 'John Doe',
        profile_path: undefined,
        roles: [
          {
            character: 'Bob',
          },
          {
            character: 'Matt',
          },
        ],
        total_episode_count: 5,
      },
    ];

    const expectedCast: TvShowCastPerson[] = [
      {
        characters: mockCast[0].roles.map(({ character }) => character),
        id: mockCast[0].id,
        imagePath: '',
        name: mockCast[0].name,
        totalEpisodeCount: mockCast[0].total_episode_count,
      },
    ];

    expect(transformTvShowCast(mockCast)).toEqual(expectedCast);
  });

  it('should return empty array if cast array is empty', () => {
    expect(transformTvShowCast([])).toEqual([]);
  });

  it('should return empty array if cast array is undefined', () => {
    expect(transformTvShowCast(undefined as unknown as TMDBTvShowCastPerson[])).toEqual([]);
  });

  it('should return empty array if cast is not an array', () => {
    expect(transformTvShowCast('notarray' as unknown as TMDBTvShowCastPerson[])).toEqual([]);
  });
});
