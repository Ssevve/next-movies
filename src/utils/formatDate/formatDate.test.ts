import formatDate from '@/utils/formatDate/formatDate';

describe('formatDate', () => {
  it('should return correctly formatted date', () => {
    expect(formatDate('2023-08-30')).toBe('Aug 30, 2023');
  });
});
