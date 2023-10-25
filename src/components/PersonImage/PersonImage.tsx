import { User } from 'lucide-react';
import Image from 'next/image';

import NoImage from '@/components/NoImage';
import { TMDBImageSizes } from '@/services/TMDB/config';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';

interface PersonImageProps {
  imagePath?: string;
  alt: string;
}

// TODO: tests
export default function PersonImage({ alt, imagePath = '' }: PersonImageProps) {
  return (
    <div className="relative h-[200px] w-[150px]">
      {imagePath ? (
        <Image
          src={getTMDBImagePath(
            imagePath,
            TMDBImageSizes.person.width,
            TMDBImageSizes.person.height
          )}
          alt={alt}
          fill
          className="rounded-md object-cover"
        />
      ) : (
        <NoImage icon={User} />
      )}
    </div>
  );
}
