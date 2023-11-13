import transformTvShowCreatedBy from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformTvShowCreatedBy/transformTvShowCreatedBy';
import Creator from '@/types/Creator';

describe('transformTvShowCreatedBy', () => {
  it('should return correctly transformed data for single creator', () => {
    const mockCreatedBy: Creator[] = [
      {
        id: 1,
        name: 'John Doe',
      },
    ];

    const expectedCreator: Creator[] = [
      {
        id: mockCreatedBy[0].id,
        name: mockCreatedBy[0].name,
      },
    ];

    expect(transformTvShowCreatedBy(mockCreatedBy)).toEqual(expectedCreator);
  });

  it('should return correctly transformed data for multiple creators', () => {
    const mockCreatedBy: Creator[] = [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ];

    const expectedCreators: Creator[] = mockCreatedBy.map(({ id, name }) => ({
      id,
      name,
    }));

    expect(transformTvShowCreatedBy(mockCreatedBy)).toEqual(expectedCreators);
  });

  it('should return empty array if input array is empty', () => {
    expect(transformTvShowCreatedBy([])).toEqual([]);
  });

  it('should return empty array if input array is undefined', () => {
    expect(transformTvShowCreatedBy(undefined as unknown as Creator[])).toEqual([]);
  });

  it('should return empty array if input is not an array', () => {
    expect(transformTvShowCreatedBy('notarray' as unknown as Creator[])).toEqual([]);
  });
});
