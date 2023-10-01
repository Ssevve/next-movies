/** @jest-environment node */

import mockTMDBImages from '@/__mocks__/data/mockTMDBImages';
import Image from '@/types/Image';

import transformImages from './transformImages';

describe('transformVideos', () => {
  it('should return correctly transformed data for single image', async () => {
    const testImage = mockTMDBImages.backdrops[0];
    const transformedImage = transformImages([testImage]);
    const expectedImage: Image[] = [
      {
        height: testImage.height,
        path: testImage.file_path,
        width: testImage.width,
      },
    ];
    expect(transformedImage).toEqual(expectedImage);
  });

  it('should return correctly transformed data for multiple images', async () => {
    const testImages = mockTMDBImages.backdrops;
    const transformedImages = transformImages(testImages);
    const expectedImages: Image[] = testImages.map((image) => ({
      height: image.height,
      path: image.file_path,
      width: image.width,
    }));
    expect(transformedImages).toEqual(expectedImages);
  });

  it('should return an empty array for no images', async () => {
    const transformedImages = transformImages([]);
    expect(transformedImages).toEqual([]);
  });
});
