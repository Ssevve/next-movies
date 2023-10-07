import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import Hoverable from '@/components/ui/Hoverable';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import { TMDB_IMAGE_URL, TMDB_SHOW_CARD_POSTER_PATH } from '@/services/tmdb/constants';
import CastPerson from '@/types/CastPerson';
import Gender from '@/types/Gender';

interface PersonCardProps extends React.PropsWithChildren {
  name: string;
  imagePath: string;
  gender: Gender;
}

function PersonCard({ name, gender, imagePath, children }: PersonCardProps) {
  const imagePlaceholderPath = `/images/${
    gender === 'Female' ? 'female-placeholder.svg' : 'male-placeholder.svg'
  }`;
  const imageSrc = imagePath
    ? `${TMDB_IMAGE_URL}${TMDB_SHOW_CARD_POSTER_PATH}${imagePath}`
    : imagePlaceholderPath;
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

interface CastScrollerProps {
  cast: CastPerson[];
}

export default function CastScroller({ cast }: CastScrollerProps) {
  return cast.length ? (
    <ScrollArea type="always">
      <ul className="flex h-max space-x-4 px-2 pb-4">
        {cast.map(({ character, id, imagePath, gender, name }) => (
          <li key={id}>
            <PersonCard name={name} imagePath={imagePath} gender={gender}>
              {character}
            </PersonCard>
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ) : (
    <p>No cast to display</p>
  );
}
