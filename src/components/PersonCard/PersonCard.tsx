import Image from 'next/image';

import Hoverable from '@/components/ui/Hoverable';
import { TMDB_PERSON_IMAGE_HEIGHT, TMDB_PERSON_IMAGE_WIDTH } from '@/services/tmdb/constants';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import Gender from '@/types/Gender';

interface PersonCardProps {
  name: string;
  imagePath: string;
  gender: Gender;
  children: React.ReactNode;
}

export default function PersonCard({ name, gender, imagePath, children }: PersonCardProps) {
  const placeholderImageName =
    gender === 'Female' ? 'female-placeholder.svg' : 'male-placeholder.svg';
  const placeholderImagePath = `/images/${placeholderImageName}`;
  const imageSrc = imagePath
    ? getTMDBImagePath({
        height: TMDB_PERSON_IMAGE_HEIGHT,
        image: imagePath,
        width: TMDB_PERSON_IMAGE_WIDTH,
      })
    : placeholderImagePath;
  return (
    <Hoverable className="w-[150px]">
      <div>
        <div className="relative h-[200px] w-auto">
          <Image src={imageSrc} alt={name} fill className="rounded-md object-cover" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </Hoverable>
  );
}
