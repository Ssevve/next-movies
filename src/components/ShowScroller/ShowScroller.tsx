import Scroller, { ScrollerProps } from '@/components/Scroller/Scroller';
import { Show } from '@/types/Show';

import ShowScrollerCard from './components/ShowScrollerCard/ShowScrollerCard';

interface ShowScrollerProps extends Pick<ScrollerProps, 'limit'> {
  shows: Show[];
  emptyMessage?: string;
}

export default function ShowScroller({
  shows,
  emptyMessage = 'No shows to display',
  limit,
}: ShowScrollerProps) {
  return (
    <Scroller
      emptyMessage={emptyMessage}
      listClassName="flex h-max space-x-4 px-2 pb-4"
      limit={limit}
    >
      {shows.map(({ id, releaseDate, poster, userScore, showType, title }, i) => (
        <ShowScrollerCard
          key={id}
          releaseDate={releaseDate}
          id={id}
          poster={poster}
          userScore={userScore}
          showType={showType}
          title={title}
        />
      ))}
    </Scroller>
  );
}
