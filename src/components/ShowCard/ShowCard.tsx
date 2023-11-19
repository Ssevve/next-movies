import Image from 'next/image';
import Link from 'next/link';

import NoImage from '@/components/NoImage';
import Hoverable from '@/components/ui/Hoverable';
import UserScore from '@/components/UserScore/UserScore';
import cn from '@/lib/cn';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import ImageType from '@/types/Image';
import { ShowType } from '@/types/Show';

import ShowPoster from '../ShowPoster/ShowPoster';

interface ShowCardProps {
  poster: ImageType;
  id: number;
  title: string;
  userScore: number;
  showType: ShowType;
  releaseDate?: string;
  showMetadata?: boolean;
}

export default function ShowCard({
  poster,
  id,
  title,
  userScore,
  showType,
  releaseDate,
  showMetadata = true,
}: ShowCardProps) {
  return (
    <Hoverable
      className={cn('h-full min-w-[150px] pb-4', showMetadata && 'pb-0')}
      data-testid="show-card"
    >
      <Link href={`/${showType}/${id}`} className="flex h-full flex-col">
        <div className="relative h-full min-h-[225px]">
          {poster.path ? <ShowPoster poster={poster} showTitle={title} /> : <NoImage />}
          <UserScore className="absolute -bottom-4 left-2 border" userScore={userScore} />
        </div>
        {showMetadata && (
          <div>
            <h3 className="mt-6 text-sm font-bold">{title}</h3>
            {releaseDate ? <span className="text-xs text-slate-400">{releaseDate}</span> : null}
          </div>
        )}
      </Link>
    </Hoverable>
  );
}
