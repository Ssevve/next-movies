import Image from 'next/image';
import Link from 'next/link';

import Hoverable from '@/components/ui/Hoverable';
import UserScore from '@/components/UserScore/UserScore';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import ImageType from '@/types/Image';
import ShowType from '@/types/ShowType';

interface ShowCardProps {
  poster: ImageType;
  id: number;
  title: string;
  userScore: number;
  showType: ShowType;
  releaseDate: string;
}

export default function ShowCard({
  poster,
  id,
  title,
  userScore,
  showType,
  releaseDate,
}: ShowCardProps) {
  return (
    <Hoverable className="w-[150px]">
      <Link href={`/${showType}/${id}`}>
        <div className="relative">
          <Image
            src={getTMDBImagePath(poster.path, poster.width, poster.height)}
            alt={title}
            height={poster.height}
            width={poster.width}
            className="rounded-md"
          />

          <UserScore className="absolute -bottom-4 left-2 border" userScore={userScore} />
        </div>
        <h3 className="mt-6 text-sm font-bold">{title}</h3>
        <span className="text-xs text-slate-400">{releaseDate}</span>
      </Link>
    </Hoverable>
  );
}
