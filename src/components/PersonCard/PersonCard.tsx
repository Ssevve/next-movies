import { User } from 'lucide-react';
import Image from 'next/image';

import NoImage from '@/components/NoImage';
import Hoverable from '@/components/ui/Hoverable';
import { TMDBImageSizes } from '@/services/TMDB/config';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';

interface PersonCardProps {
  name: string;
  imagePath: string;
  children: React.ReactNode;
}

export default function PersonCard({ name, imagePath, children }: PersonCardProps) {
  return (
    <Hoverable className="w-[150px]">
      <div>
        <div className="relative h-[200px] w-auto">
          {imagePath ? (
            <Image
              src={getTMDBImagePath(
                imagePath,
                TMDBImageSizes.person.width,
                TMDBImageSizes.person.height
              )}
              alt={name}
              fill
              className="rounded-md object-cover"
            />
          ) : (
            <NoImage icon={User} />
          )}
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </Hoverable>
  );
}
