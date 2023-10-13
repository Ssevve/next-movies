import formatDate from '@/services/TMDB/utils/formatDate/formatDate';

describe('formatDate', () => {
  it('should return correctly formatted date', () => {
    expect(formatDate('2023-08-30')).toBe('Aug 30, 2023');
  });

  it('should return empty string if "dateString" is falsy', () => {
    expect(formatDate('')).toBe('');
  });
});
