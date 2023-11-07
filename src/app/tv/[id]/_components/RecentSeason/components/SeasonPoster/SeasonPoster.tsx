import Image from 'next/image';

import NoImage from '@/components/NoImage';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import ImageType from '@/types/Image';

interface SeasonPosterProps {
  poster: ImageType;
  alt?: string;
}

export default function SeasonPoster({ poster, alt = '' }: SeasonPosterProps) {
  return (
    <div className="col-start-1 col-end-1 row-span-2 row-start-1 flex aspect-[10/16] h-full min-w-[100px] max-w-[175px] sm:row-span-3">
      {poster.path ? (
        <Image
          src={getTMDBImagePath(poster.path, poster.width, poster.height)}
          alt={alt}
          width={poster.width}
          height={poster.height}
          className="object-scale-down"
        />
      ) : (
        <NoImage />
      )}
    </div>
  );
}
