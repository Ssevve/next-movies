import { TMDB_IMAGE_URL } from '@/services/tmdb/constants';

interface GetTMDBImagePathParams {
  width?: number;
  height?: number;
  image: string;
}

export default function getTMDBImagePath({ width, height, image }: GetTMDBImagePathParams) {
  if (!width || !height) return `${TMDB_IMAGE_URL}/original${image}`;
  else return `${TMDB_IMAGE_URL}/w${width}_and_h${height}_face${image}`;
}
