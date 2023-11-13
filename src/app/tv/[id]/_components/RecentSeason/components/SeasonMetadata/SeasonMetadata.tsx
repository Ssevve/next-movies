import { Star } from 'lucide-react';

import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

export interface SeasonMetadataProps {
  name: string;
  userScore: number;
  airDate: string;
  episodeCount: number;
}

export default function SeasonMetadata({
  name,
  userScore,
  airDate,
  episodeCount,
}: SeasonMetadataProps) {
  return (
    <div className="col-span-full col-start-2 row-start-1 flex h-max flex-col gap-2">
      <h3 className="text-lg font-bold xs:text-xl">{name}</h3>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="row-start-1 flex w-max items-center justify-center gap-1 rounded-md bg-foreground px-1 py-0.5 text-background">
          <Star size={14} />
          <span className="text-xs font-semibold xs:text-sm">{userScore}</span>
        </div>
        <span className="text-xs font-semibold xs:text-sm">{getReleaseYear(airDate)}</span>
        <span className="relative text-xs font-semibold before:absolute before:left-0 before:top-1/2 before:hidden before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-foreground xs:text-sm sm:pl-3 sm:before:block">
          {episodeCount} episodes
        </span>
      </div>
    </div>
  );
}
