import getReleaseYear from '@/components/ShowPageHeader/utils/getReleaseYear/getReleaseYear';

describe('getReleaseYear', () => {
  it('should return correct release year', () => {
    expect(getReleaseYear('Aug 30, 2023')).toEqual('2023');
  });
});
