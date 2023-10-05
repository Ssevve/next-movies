import TMDBImage from '@/services/tmdb/types/TMDBImage';
import Image from '@/types/Image';

export default function transformImages(images: TMDBImage[]) {
  if (!images.length) return [];
  return images.map(
    ({ width, file_path, height }): Image => ({
      height,
      path: file_path,
      width,
    })
  );
}
