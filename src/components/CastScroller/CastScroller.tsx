import PersonCard from '@/components//PersonCard/PersonCard';
import Scroller from '@/components/Scroller/Scroller';
import CastPerson from '@/types/CastPerson';

interface CastScrollerProps {
  cast: CastPerson[];
}

export default function CastScroller({ cast }: CastScrollerProps) {
  return (
    <Scroller emptyMessage="No cast to display" listClassName="flex h-max space-x-4 px-2 pb-4">
      {cast.map(({ character, id, imagePath, gender, name }) => (
        <PersonCard key={id} name={name} imagePath={imagePath} gender={gender}>
          {character}
        </PersonCard>
      ))}
    </Scroller>
  );
}
