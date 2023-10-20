import { TMDBUrls } from '@/services/TMDB/config';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';

describe('getTMDBImagePath', () => {
  it('should return correct string when height and width are provided', () => {
    const expectedWidth = 200;
    const expectedHeight = 250;
    const expectedImage = '/testImage.jpg';
    expect(getTMDBImagePath(expectedImage, expectedWidth, expectedHeight)).toBe(
      `${TMDBUrls.image}/w${expectedWidth}_and_h${expectedHeight}_face${expectedImage}`
    );
  });

  it('should return correct string when height and width are omitted', () => {
    const expectedImage = '/testImage.jpg';
    expect(getTMDBImagePath(expectedImage)).toBe(`${TMDBUrls.image}/original${expectedImage}`);
  });

  it('should return correct empty string if image string is empty', () => {
    expect(getTMDBImagePath('')).toBe('');
  });
});
