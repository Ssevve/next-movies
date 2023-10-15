import PersonCard from '@/components//PersonCard/PersonCard';
import Scroller, { ScrollerProps } from '@/components/Scroller/Scroller';
import CastPerson from '@/types/CastPerson';

interface CastScrollerProps extends Pick<ScrollerProps, 'limit'> {
  cast: CastPerson[];
}

export default function CastScroller({ cast, limit }: CastScrollerProps) {
  return (
    <Scroller
      emptyMessage="No cast to display"
      listClassName="flex h-max space-x-4 px-2 pb-4"
      limit={limit}
    >
      {cast.map(({ character, id, imagePath, name }) => (
        <PersonCard key={id} name={name} imagePath={imagePath}>
          {character}
        </PersonCard>
      ))}
    </Scroller>
  );
}
