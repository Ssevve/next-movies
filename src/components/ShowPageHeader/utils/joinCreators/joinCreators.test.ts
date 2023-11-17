import joinCreators from '@/components/ShowPageHeader/utils/joinCreators/joinCreators';
import { Creator } from '@/types/DetailedShow';

describe('joinCreators', () => {
  it('should return correct string for single creator', () => {
    const expectedCreator: Creator[] = [
      {
        id: 1,
        name: 'Test 1',
      },
    ];

    expect(joinCreators(expectedCreator)).toBe('Test 1');
  });
  it('should return correct string for multiple creators', () => {
    const expectedCreators: Creator[] = [
      {
        id: 1,
        name: 'Test 1',
      },
      {
        id: 2,
        name: 'Test 2',
      },
    ];

    expect(joinCreators(expectedCreators)).toBe('Test 1, Test 2');
  });

  it('should return empty string if passed in array is empty', () => {
    expect(joinCreators([])).toBe('');
  });
});
