import { Show } from '@/types/Show';

import ShowCard from './ShowCard';
import { ScrollArea, ScrollBar } from './ui/ScrollArea';

interface ShowCarouselProps {
  shows: Show[];
}

export default function ShowCarousel({ shows }: ShowCarouselProps) {
  return (
    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        {shows.map((show) => (
          <ShowCard
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
