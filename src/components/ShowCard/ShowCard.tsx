import Image from 'next/image';
import Link from 'next/link';

import Hoverable from '@/components/ui/Hoverable';
import UserScore from '@/components/UserScore/UserScore';
import {
  TMDB_IMAGE_URL,
  TMDB_SHOW_CARD_POSTER_HEIGHT,
  TMDB_SHOW_CARD_POSTER_PATH,
  TMDB_SHOW_CARD_POSTER_WIDTH,
} from '@/services/tmdb/constants';
import ShowType from '@/types/ShowType';

interface ShowCardProps {
  posterPath: string;
  id: number;
  title: string;
  userScore: number;
  showType: ShowType;
  releaseDate: string;
}

export default function ShowCard({
  posterPath,
  id,
  title,
  userScore,
  showType,
  releaseDate,
}: ShowCardProps) {
  return (
    <Hoverable className="w-[150px]">
      <Link href={`${showType}/${id}`}>
        <div className="relative">
          <Image
            src={`${TMDB_IMAGE_URL}${TMDB_SHOW_CARD_POSTER_PATH}${posterPath}`}
            alt={title}
            height={TMDB_SHOW_CARD_POSTER_HEIGHT}
            width={TMDB_SHOW_CARD_POSTER_WIDTH}
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
