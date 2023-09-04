import { Show } from '@/types/Show';

import Carousel from './Carousel';
import ShowCard from './ShowCard';

interface ShowCarouselProps {
  shows: Show[];
}

export default function ShowCarousel({ shows }: ShowCarouselProps) {
  return (
    <Carousel>
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          id={show.id}
          showType={show.showType}
          posterPath={show.posterPath}
          rating={show.rating}
          title={show.title}
        />
      ))}
    </Carousel>
  );
}
