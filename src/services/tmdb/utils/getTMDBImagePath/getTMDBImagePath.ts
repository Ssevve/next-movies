import { TMDBUrls } from '@/services/TMDB/config';

export default function getTMDBImagePath(image: string, width?: number, height?: number) {
  if (!width || !height) return `${TMDBUrls.image}/original${image}`;
  else return `${TMDBUrls.image}/w${width}_and_h${height}_face${image}`;
}
