import Scroller from '@/components/Scroller/Scroller';
import ShowCard from '@/components/ShowCard/ShowCard';
import Show from '@/types/Show';

interface ShowScrollerProps {
  shows: Show[];
}

export default function ShowScroller({ shows }: ShowScrollerProps) {
  return (
    <Scroller emptyMessage="No shows to display" listClassName="flex h-max space-x-4 px-2 pb-4">
      {shows.map(({ id, releaseDate, posterPath, userScore, showType, title }) => (
        <ShowCard
          key={id}
          releaseDate={releaseDate}
          id={id}
          posterPath={posterPath}
          userScore={userScore}
          showType={showType}
          title={title}
        />
      ))}
    </Scroller>
  );
}
