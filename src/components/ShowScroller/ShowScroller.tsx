import ShowCard from '@/components/ShowCard/ShowCard';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import Show from '@/types/Show';

interface ShowScrollerProps {
  shows: Show[];
}

export default function ShowScroller({ shows }: ShowScrollerProps) {
  return shows.length ? (
    <ScrollArea type="always">
      <ul className="flex h-[350px] space-x-4 px-2 pb-4">
        {shows.map(({ id, releaseDate, posterPath, userScore, showType, title }) => (
          <li key={id}>
            <ShowCard
              releaseDate={releaseDate}
              id={id}
              posterPath={posterPath}
              userScore={userScore}
              showType={showType}
              title={title}
            />
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ) : (
    <p>No shows to display</p>
  );
}
