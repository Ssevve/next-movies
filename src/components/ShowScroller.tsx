import ShowCard from '@/components/ShowCard/ShowCard';
import Show from '@/types/Show';

import { ScrollArea, ScrollBar } from './ui/ScrollArea';

interface ShowScrollerProps {
  shows: Show[];
}

export default function ShowScroller({ shows }: ShowScrollerProps) {
  return (
    <ScrollArea type="always">
      <div className="flex h-[350px] space-x-4 px-2 pb-4">
        {shows.length ? (
          shows.map((show) => (
            <ShowCard
              releaseDate={show.releaseDate}
              key={show.id}
              id={show.id}
              posterPath={show.posterPath}
              rating={show.rating}
              showType={show.showType}
              title={show.title}
            />
          ))
        ) : (
          <p>No shows to display.</p>
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
