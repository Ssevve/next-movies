import { TMDB_IMAGE_URL } from '@/services/tmdb/constants';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';

describe('getTMDBImagePath', () => {
  it('should return correct string when height and width are provided', () => {
    const expectedWidth = 200;
    const expectedHeight = 250;
    const expectedImage = '/testImage.jpg';
    expect(
      getTMDBImagePath({ height: expectedHeight, image: expectedImage, width: expectedWidth })
    ).toEqual(`${TMDB_IMAGE_URL}/w${expectedWidth}_and_h${expectedHeight}_face${expectedImage}`);
  });

  it('should return correct string when height and width are omitted', () => {
    const expectedImage = '/testImage.jpg';
    expect(getTMDBImagePath({ image: expectedImage })).toEqual(
      `${TMDB_IMAGE_URL}/original${expectedImage}`
    );
  });
});
