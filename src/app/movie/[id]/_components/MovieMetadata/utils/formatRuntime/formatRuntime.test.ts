import formatRuntime from '@/app/movie/[id]/_components/MovieMetadata/utils/formatRuntime/formatRuntime';

describe('formatRuntime', () => {
  it('should return correctly formatted runtime with hours and minutes', () => {
    expect(formatRuntime(125)).toEqual('2h 5min');
  });

  it('should return correctly formatted runtime with hours only', () => {
    expect(formatRuntime(120)).toEqual('2h');
  });

  it('should return correctly formatted runtime with minutes only', () => {
    expect(formatRuntime(45)).toEqual('45min');
  });
});
