import formatUSDString from '@/app/movie/[id]/_components/MovieFacts/utils/formatUSDString/formatUSDString';

describe('formatUSDString', () => {
  it('should return correct string for "value" greater than 0', () => {
    expect(formatUSDString(63000000)).toEqual('$63,000,000.00');
  });

  it('should return correct string for "value" less than 0', () => {
    expect(formatUSDString(-63000000)).toEqual('-$63,000,000.00');
  });

  it('should return "-" for "value" equal to 0', () => {
    expect(formatUSDString(0)).toEqual('-');
  });
});
