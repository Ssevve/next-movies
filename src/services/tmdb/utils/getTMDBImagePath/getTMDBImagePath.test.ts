import { urls } from '@/services/tmdb/config';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';

describe('getTMDBImagePath', () => {
  it('should return correct string when height and width are provided', () => {
    const expectedWidth = 200;
    const expectedHeight = 250;
    const expectedImage = '/testImage.jpg';
    expect(getTMDBImagePath(expectedImage, expectedWidth, expectedHeight)).toEqual(
      `${urls.image}/w${expectedWidth}_and_h${expectedHeight}_face${expectedImage}`
    );
  });

  it('should return correct string when height and width are omitted', () => {
    const expectedImage = '/testImage.jpg';
    expect(getTMDBImagePath(expectedImage)).toEqual(`${urls.image}/original${expectedImage}`);
  });
});
