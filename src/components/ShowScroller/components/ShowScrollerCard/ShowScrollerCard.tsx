import Link from 'next/link';

import NoImage from '@/components/NoImage';
import ShowPoster from '@/components/ShowPoster/ShowPoster';
import Hoverable from '@/components/ui/Hoverable';
import UserScore from '@/components/UserScore/UserScore';
import ImageType from '@/types/Image';
import { ShowType } from '@/types/Show';

interface ShowCardProps {
  poster: ImageType;
  id: number;
  title: string;
  userScore: number;
  showType: ShowType;
  releaseDate?: string;
  showMetadata?: boolean;
}

// TODO: tests
export default function ShowScrollerCard({
  poster,
  id,
  title,
  userScore,
  showType,
  releaseDate,
}: ShowCardProps) {
  return (
    <Hoverable className={'h-full min-w-[150px] pb-0'}>
      <Link href={`/${showType}/${id}`} className="flex h-full flex-col">
        <div className="relative min-h-[225px]">
          {poster.path ? <ShowPoster poster={poster} showTitle={title} /> : <NoImage />}
          <UserScore className="absolute -bottom-4 left-2 border" userScore={userScore} />
        </div>
        <div>
          <h3 className="mt-6 text-sm font-bold">{title}</h3>
          {releaseDate ? <span className="text-xs text-slate-400">{releaseDate}</span> : null}
        </div>
      </Link>
    </Hoverable>
  );
}
