import joinGenres from '@/components/ShowPageHeader/utils/joinGenres/joinGenres';
import Genre from '@/types/Genre';

describe('joinGenres', () => {
  it('should return correct string for single genre', () => {
    const expectedGenre: Genre[] = [
      {
        id: 1,
        name: 'Test 1',
      },
    ];

    expect(joinGenres(expectedGenre)).toBe('Test 1');
  });
  it('should return correct string for multiple genres', () => {
    const expectedGenres: Genre[] = [
      {
        id: 1,
        name: 'Test 1',
      },
      {
        id: 2,
        name: 'Test 2',
      },
    ];

    expect(joinGenres(expectedGenres)).toBe('Test 1, Test 2');
  });

  it('should return empty string if passed in array is empty', () => {
    expect(joinGenres([])).toBe('');
  });
});
