import Link from 'next/link';

import ShowCard from '@/components/ShowCard/ShowCard';
import ShowSearchResult from '@/types/ShowSearchResult';

export default function ShowSearchResultCard({
  id,
  poster,
  releaseDate,
  showType,
  title,
  userScore,
  overview,
}: ShowSearchResult) {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start">
      <ShowCard
        id={id}
        poster={poster}
        releaseDate={releaseDate}
        showType={showType}
        title={title}
        userScore={userScore}
        showMetadata={false}
      />
      <div className="flex flex-1 flex-col gap-4 px-2">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link href={`/${showType}/${id}`}>
            <h3 className="text-center font-bold sm:text-left">{title}</h3>
          </Link>
          <span className="text-xs text-slate-400">{releaseDate}</span>
        </div>
        <p className="my-auto line-clamp-4 overflow-hidden text-ellipsis text-center text-sm leading-normal sm:text-left">
          {overview}
        </p>
      </div>
    </div>
  );
}
