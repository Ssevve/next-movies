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

export default function ShowCard({
  posterPath,
  id,
  title,
  rating,
  showType,
}: ShowCardProps) {
  return (
    <Card className="h-full w-full overflow-hidden">
      <Link href={`${showType}/${id}`}>
        <CardContent>
          <Image
            className="h-auto w-auto"
            src={posterPath}
            alt={title}
            width={500}
            height={750}
          />
        </CardContent>
        <CardFooter>
          <p>{title}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
