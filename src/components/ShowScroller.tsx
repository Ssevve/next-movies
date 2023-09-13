import { Show } from '@/types/Show';

import ShowCard from './ShowCard';
import { ScrollArea, ScrollBar } from './ui/ScrollArea';

interface ShowScrollerProps {
  shows: Show[];
}

export default function ShowScroller({ shows }: ShowScrollerProps) {
  return (
    <ScrollArea>
      <div className="flex h-[350px] space-x-4 px-2 pb-4">
        {shows.map((show) => (
          <ShowCard
            releaseDate={show.releaseDate}
            key={show.id}
            id={show.id}
            posterPath={show.posterPath}
            rating={show.rating}
            showType={show.showType}
            title={show.title}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
