import { Star } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Episode from '@/types/Episode';
import Season from '@/types/Season';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

import SeasonPoster from './components/SeasonPoster/SeasonPoster';

interface RecentSeasonProps {
  season: Season | null;
  showEnded: boolean;
  episode: Episode | null;
}

function SeasonMetadata({
  name,
  userScore,
  airDate,
  episodeCount,
}: {
  name: string;
  userScore: number;
  airDate: string;
  episodeCount: number;
}) {
  return (
    <div className="col-span-full col-start-2 row-start-1 flex h-max flex-col gap-2">
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="row-start-1 flex w-max items-center justify-center gap-1 rounded-md bg-foreground p-1 text-background">
          <Star size={16} />
          <span className="text-sm font-semibold">{userScore}</span>
        </div>
        <span className="text-sm font-semibold">{getReleaseYear(airDate)}</span>
        <span className="relative text-sm font-semibold before:absolute before:left-0 before:top-1/2 before:hidden before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-foreground sm:pl-3 sm:before:block">
          {episodeCount} episodes
        </span>
      </div>
    </div>
  );
}

function RecentEpisode({
  showEnded,
  title,
  seasonNumber,
  episodeNumber,
  airDate,
  episodeType,
}: {
  showEnded: boolean;
  title: string;
  seasonNumber: number;
  episodeNumber: number;
  airDate?: string;
  episodeType: string;
}) {
  const isSeasonFinaleEpisode = episodeType === 'finale';

  return (
    <div className="col-start-2 row-start-2 flex flex-col gap-1 text-sm sm:flex-row">
      <div className="h-max sm:flex sm:items-center">
        <div className="flex flex-col gap-1 sm:flex-row">
          <span>{showEnded ? 'Last' : 'Next'} episode:</span>
          <span className="font-semibold">{title}</span>
          <span>{`(${seasonNumber}x${episodeNumber} - ${airDate})`}</span>
        </div>
        {isSeasonFinaleEpisode && (
          <span className="ml-1 h-max w-max rounded-md bg-foreground p-1 text-xs font-semibold text-background">
            Finale
          </span>
        )}
      </div>
    </div>
  );
}

function SeasonOverview({ overview }: { overview?: string }) {
  return (
    <p className="col-span-full col-start-1 row-start-3 sm:col-start-2 sm:row-start-auto">
      {overview || 'Overview not available.'}
    </p>
  );
}

// TODO: tests, fix no image size, fix spacing
export default function RecentSeason({ season, showEnded, episode }: RecentSeasonProps) {
  return (
    <section>
      <SectionHeading>{showEnded ? 'Last' : 'Current'} Season</SectionHeading>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 xs:grid-cols-[175px_1fr]">
        {season ? (
          <>
            <SeasonPoster poster={season.poster} alt={season.name} />
            <SeasonMetadata
              name={season.name}
              airDate={season.airDate}
              userScore={season.userScore}
              episodeCount={season.episodeCount}
            />
            {episode && (
              <RecentEpisode
                airDate={episode.airDate}
                episodeNumber={episode.episodeNumber}
                episodeType={episode.episodeType}
                seasonNumber={episode.seasonNumber}
                showEnded={showEnded}
                title={episode.title}
              />
            )}
            <SeasonOverview overview={season.overview} />
          </>
        ) : (
          <p className="w-max">No season data available.</p>
        )}
      </div>
    </section>
  );
}
