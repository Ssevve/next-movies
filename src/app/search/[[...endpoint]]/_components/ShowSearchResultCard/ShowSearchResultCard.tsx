import Link from 'next/link';

import NoImage from '@/components/NoImage';
import ShowPoster from '@/components/ShowPoster/ShowPoster';
import UserScore from '@/components/UserScore/UserScore';
import Image from '@/types/Image';
import { ShowType } from '@/types/Show';

interface ShowSearchResultCardProps {
  id: number;
  poster: Image;
  releaseDate: string;
  showType: ShowType;
  title: string;
  userScore: number;
  overview: string;
}

export default function ShowSearchResultCard({
  id,
  poster,
  releaseDate,
  showType,
  title,
  userScore,
  overview,
}: ShowSearchResultCardProps) {
  return (
    <div className="flex h-full flex-col items-center gap-2 sm:flex-row sm:items-start">
      <Link
        href={`/${showType}/${id}`}
        className="flex h-full min-h-[265px] w-full min-w-[175px] max-w-[220px] flex-col"
      >
        <div className="relative h-full w-full">
          {poster.path ? <ShowPoster poster={poster} showTitle={title} /> : <NoImage />}
          <UserScore className="absolute -bottom-4 left-2 border" userScore={userScore} />
        </div>
      </Link>
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
