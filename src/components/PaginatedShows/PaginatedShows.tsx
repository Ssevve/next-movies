import Pagination from '@/components/Pagination/Pagination';
import ShowCard from '@/components/ShowCard/ShowCard';
import Show from '@/types/Show';

interface PaginatedShowsProps {
  shows: Show[];
  showsPerPage?: number;
  totalShows: number;
}

export default function PaginatedShows({ showsPerPage, shows, totalShows }: PaginatedShowsProps) {
  const showsToRender = showsPerPage ? shows.slice(0, showsPerPage) : shows;
  return (
    <>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-8">
        {showsToRender.map(({ id, poster, releaseDate, showType, title, userScore }) => (
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
      <Pagination totalItemCount={totalShows} itemsPerPage={showsPerPage} />
    </>
  );
}
