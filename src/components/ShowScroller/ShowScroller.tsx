import Scroller from '@/components/Scroller/Scroller';
import ShowCard from '@/components/ShowCard/ShowCard';
import Show from '@/types/Show';

interface ShowScrollerProps {
  shows: Show[];
  emptyMessage?: string;
}

export default function ShowScroller({
  shows,
  emptyMessage = 'No shows to display',
}: ShowScrollerProps) {
  return (
    <Scroller emptyMessage={emptyMessage} listClassName="flex h-max space-x-4 px-2 pb-4">
      {shows.map(({ id, releaseDate, poster, userScore, showType, title }) => (
        <ShowCard
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
