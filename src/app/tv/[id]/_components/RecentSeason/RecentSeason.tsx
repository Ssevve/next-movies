import { Star } from 'lucide-react';
import Image from 'next/image';

import NoImage from '@/components/NoImage';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import Episode from '@/types/Episode';
import Season from '@/types/Season';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

interface RecentSeasonProps {
  season: Season;
  showEnded: boolean;
  episode: Episode | null;
}

// TODO: tests
export default function RecentSeason({ season, showEnded, episode }: RecentSeasonProps) {
  const isSeasonFinaleEpisode = episode && episode.episodeType === 'finale';
  return (
    <section>
      <SectionHeading>{showEnded ? 'Last' : 'Current'} Season</SectionHeading>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 xs:grid-cols-[175px_1fr] sm:auto-rows-auto sm:items-center ">
        <div className="col-start-1 col-end-1 row-span-2 row-start-1 flex min-w-[100px] max-w-[175px] sm:row-span-3">
          {season.poster && season.poster.path ? (
            <Image
              src={getTMDBImagePath(season.poster.path, season.poster.width, season.poster.height)}
              alt={season.name}
              width={season.poster.width}
              height={season.poster.height}
              className="object-scale-down"
            />
          ) : (
            <NoImage />
          )}
        </div>
        <div className="col-span-full col-start-2 row-start-1 flex h-max flex-col gap-2 self-center md:self-end">
          <h3 className="text-xl font-bold">{season.name}</h3>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="row-start-1 flex w-max items-center justify-center gap-1 rounded-md bg-foreground p-1 text-background">
              <Star size={16} />
              <span className="text-sm font-semibold">{season.userScore}</span>
            </div>
            <span className="text-sm font-semibold">{getReleaseYear(season.airDate)}</span>
            <span className="relative text-sm font-semibold before:absolute before:left-0 before:top-1/2 before:hidden before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-foreground sm:pl-3 sm:before:block">
              {season.episodeCount} episodes
            </span>
          </div>
        </div>
        {episode && (
          <div className="col-start-2 row-start-2 flex flex-col gap-1 text-sm sm:flex-row">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <span>{showEnded ? 'Last' : 'Next'} episode:</span>
              <span className="font-semibold">{episode.name}</span>
              <span>{`(${episode.seasonNumber}x${episode.episodeNumber} - ${episode.airDate})`}</span>
            </div>
            {isSeasonFinaleEpisode && (
              <span className="w-max rounded-md bg-foreground p-1 text-xs font-semibold text-background">
                Finale
              </span>
            )}
          </div>
        )}
        <p className="col-span-full col-start-1 row-start-3 sm:col-start-2 md:self-start">
          {season.overview || 'Overview not available.'}
        </p>
      </div>
    </section>
  );
}
