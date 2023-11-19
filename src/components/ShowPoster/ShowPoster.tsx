import Image from 'next/image';

import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import ImageType from '@/types/Image';

interface ShowPosterProps {
  poster: ImageType;
  showTitle: string;
}

// TODO: tests, rename to ShowCardPoster?
export default function ShowPoster({ poster, showTitle }: ShowPosterProps) {
  return (
    <Image
      src={getTMDBImagePath(poster.path, poster.width, poster.height)}
      alt={showTitle}
      height={poster.height}
      width={poster.width}
      className="h-full"
    />
  );
}
