import Image from 'next/image';
import Link from 'next/link';

import {
  TMDB_POSTER_HEIGHT,
  TMDB_POSTER_WIDTH,
} from '@/services/tmdb/constants';
import { ShowType } from '@/types/Show';

import { Card, CardContent, CardFooter } from './ui/Card';

interface ShowCardProps {
  posterPath: string;
  id: number;
  title: string;
  rating: number;
  showType: ShowType;
}

export default function ShowCard({
  posterPath,
  id,
  title,
  rating,
  showType,
}: ShowCardProps) {
  return (
    <Card className="w-[200px] overflow-hidden">
      <Link href={`${showType}/${id}`}>
        <CardContent>
          <Image
            src={posterPath}
            alt={title}
            height={TMDB_POSTER_HEIGHT}
            width={TMDB_POSTER_WIDTH}
          />
        </CardContent>

        <CardFooter>
          <p>{title}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
