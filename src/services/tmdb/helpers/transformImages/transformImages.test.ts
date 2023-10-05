import mockTMDBImages from '@/__mocks__/data/mockTMDBImages';
import transformImages from '@/services/tmdb/helpers/transformImages/transformImages';
import Image from '@/types/Image';

describe('transformImages', () => {
  it('should return correctly transformed data for single image', async () => {
    const testImage = mockTMDBImages.backdrops[0];
    const expectedImage: Image[] = [
      {
        height: testImage.height,
        path: testImage.file_path,
        width: testImage.width,
      },
    ];

    const transformedImage = transformImages([testImage]);
    expect(transformedImage).toEqual(expectedImage);
  });

  it('should return correctly transformed data for multiple images', async () => {
    const testImages = mockTMDBImages.backdrops;
    const expectedImages: Image[] = testImages.map((image) => ({
      height: image.height,
      path: image.file_path,
      width: image.width,
    }));

    const transformedImages = transformImages(testImages);
    expect(transformedImages).toEqual(expectedImages);
  });

  it('should return an empty array for no images', async () => {
    const transformedImages = transformImages([]);
    expect(transformedImages).toEqual([]);
  });
});
