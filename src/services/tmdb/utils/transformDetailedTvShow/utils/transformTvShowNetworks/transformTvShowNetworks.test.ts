import TMDBNetwork from '@/services/TMDB/types/TMDBNetwork';
import transformTvShowNetworks from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformTvShowNetworks/transformTvShowNetworks';
import Network from '@/types/Network';

describe('transformTvShowNetworks', () => {
  it('should return correctly transformed data for single network', () => {
    const testNetwork: TMDBNetwork[] = [
      {
        id: 1,
        logo_path: '/testflixLogo',
        name: 'Testflix',
      },
    ];

    const expectedNetworks: Network[] = [
      {
        id: testNetwork[0].id,
        logoPath: testNetwork[0].logo_path,
        name: testNetwork[0].name,
      },
    ];

    expect(transformTvShowNetworks(testNetwork)).toEqual(expectedNetworks);
  });

  it('should return correctly transformed data for multiple networks', () => {
    const testNetworks: TMDBNetwork[] = [
      {
        id: 1,
        logo_path: '/testflixLogo',
        name: 'Testflix',
      },
      {
        id: 2,
        logo_path: '/testTvLogo',
        name: 'Test TV',
      },
    ];

    const expectedNetworks: Network[] = testNetworks.map(({ id, logo_path, name }) => ({
      id,
      logoPath: logo_path,
      name,
    }));

    expect(transformTvShowNetworks(testNetworks)).toEqual(expectedNetworks);
  });

  it('should return empty array if networks array is empty', () => {
    expect(transformTvShowNetworks([])).toEqual([]);
  });

  it('should return empty array if networks array is undefined', () => {
    expect(transformTvShowNetworks(undefined as unknown as TMDBNetwork[])).toEqual([]);
  });

  it('should return empty array if networks is not an array', () => {
    expect(transformTvShowNetworks('notarray' as unknown as TMDBNetwork[])).toEqual([]);
  });
});
