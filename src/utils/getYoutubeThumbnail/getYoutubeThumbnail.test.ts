import getYoutubeThumbnail from '@/utils/getYoutubeThumbnail/getYoutubeThumbnail';

describe('getYoutubeThumbnail', () => {
  it('should return correct url', () => {
    expect(getYoutubeThumbnail('123asdf')).toBe('https://i.ytimg.com/vi/123asdf/hqdefault.jpg');
  });
});
