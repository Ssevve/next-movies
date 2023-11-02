import TMDBTvShowCastPerson from '@/services/TMDB/types/TMDBTvShowCastPerson';
import transformTvShowCast from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformTvShowCast/transformTvShowCast';
import TvShowCastPerson from '@/types/TvShowCastPerson';

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

describe('transformTvShowCast', () => {
  it('should return correctly transformed data for single person', () => {
    const testCastPerson = mockCast.slice(0, 1);

    const expectedCast: TvShowCastPerson[] = [
      {
        characters: testCastPerson[0].roles.map(({ character }) => character),
        id: testCastPerson[0].id,
        imagePath: testCastPerson[0].profile_path!,
        name: testCastPerson[0].name,
        totalEpisodeCount: testCastPerson[0].total_episode_count,
      },
    ];

    const transformedCast = transformTvShowCast(testCastPerson);
    expect(transformedCast).toEqual(expectedCast);
  });

  it('should return correctly transformed data for multiple people', () => {
    const expectedCast: TvShowCastPerson[] = mockCast.map(
      ({ id, name, roles, total_episode_count, profile_path }) => ({
        characters: roles.map(({ character }) => character),
        id,
        imagePath: profile_path!,
        name,
        totalEpisodeCount: total_episode_count,
      })
    );
    const transformedCast = transformTvShowCast(mockCast);
    expect(transformedCast).toEqual(expectedCast);
  });

  it('should return correctly transformed data for if profile_path is not defined', () => {
    const testCastPerson = [{ ...mockCast.slice(0, 1)[0], profile_path: undefined }];

    const expectedCast: TvShowCastPerson[] = [
      {
        characters: testCastPerson[0].roles.map(({ character }) => character),
        id: testCastPerson[0].id,
        imagePath: '',
        name: testCastPerson[0].name,
        totalEpisodeCount: testCastPerson[0].total_episode_count,
      },
    ];

    const transformedCast = transformTvShowCast(testCastPerson);
    expect(transformedCast).toEqual(expectedCast);
  });
});
