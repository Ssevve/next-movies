import Image from 'next/image';

import Hoverable from '@/components/ui/Hoverable';
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
  const imageSrc = imagePath ? imagePath : placeholderImagePath;
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
