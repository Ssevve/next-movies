import Pagination from '@/components/Pagination/Pagination';
import ShowCard from '@/components/ShowCard/ShowCard';
import Show from '@/types/Show';

interface PaginatedShowsProps {
  shows: Show[];
  totalShows: number;
}

// TODO: tests
export default function PaginatedShows({ shows, totalShows }: PaginatedShowsProps) {
  return (
    <>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-8">
        {shows.map(({ id, poster, releaseDate, showType, title, userScore }) => (
          <li key={id} className="shrink-1 basis-1/3 sm:basis-1/4 md:basis-1/6">
            <ShowCard
              id={id}
              poster={poster}
              releaseDate={releaseDate}
              showType={showType}
              title={title}
              userScore={userScore}
            />
          </li>
        ))}
      </ul>
      <Pagination totalItemCount={totalShows} />
    </>
  );
}
