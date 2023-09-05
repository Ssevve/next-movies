import Image from 'next/image';
import Link from 'next/link';

import { ShowType } from '@/types/Show';

import { Card, CardContent, CardFooter } from './ui/Card';

interface ShowCardProps {
  posterPath: string;
  id: number;
  title: string;
  rating: number;
  showType: ShowType;
}

const POSTER_HEIGHT = 3000;
const POSTER_WIDTH = 2000;

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
            height={POSTER_HEIGHT}
            width={POSTER_WIDTH}
          />
        </CardContent>
        <CardFooter>
          <p>{title}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
