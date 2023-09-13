import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import {
  TMDB_CARD_POSTER_HEIGHT,
  TMDB_CARD_POSTER_WIDTH,
} from '@/services/tmdb/constants';
import { ShowType } from '@/types/Show';

import CircularRating from './CircularRating';

interface ShowCardProps {
  posterPath: string;
  id: number;
  title: string;
  rating: number;
  showType: ShowType;
  releaseDate: string;
}

export default function ShowCard({
  posterPath,
  id,
  title,
  rating,
  showType,
  releaseDate,
}: ShowCardProps) {
  return (
    <div className="w-[150px] overflow-hidden transition-transform duration-100 hover:scale-105">
      <Link href={`${showType}/${id}`}>
        <div className="relative">
          <Image
            src={posterPath}
            alt={title}
            height={TMDB_CARD_POSTER_HEIGHT}
            width={TMDB_CARD_POSTER_WIDTH}
            className="rounded-md"
          />
          <CircularRating
            className="absolute -bottom-4 left-2 border"
            rating={rating}
          />
        </div>
        <h3 className="mt-6 text-sm font-bold">{title}</h3>
        <span className="text-xs text-slate-400">
          {formatDate(releaseDate)}
        </span>
      </Link>
    </div>
  );
}
