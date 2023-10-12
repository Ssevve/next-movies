import { urls } from '@/services/tmdb/config';

export default function getTMDBImagePath(image: string, width?: number, height?: number) {
  if (!width || !height) return `${urls.image}/original${image}`;
  else return `${urls.image}/w${width}_and_h${height}_face${image}`;
}
