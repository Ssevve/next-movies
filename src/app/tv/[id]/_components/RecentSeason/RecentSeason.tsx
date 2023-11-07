import { Star } from 'lucide-react';

import SeasonPoster from '@/app/tv/[id]/_components/RecentSeason//components/SeasonPoster/SeasonPoster';
import SeasonMetadata from '@/app/tv/[id]/_components/RecentSeason/components/SeasonMetadata/SeasonMetadata';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Episode from '@/types/Episode';
import Season from '@/types/Season';

interface RecentSeasonProps {
  season: Season | null;
  showEnded: boolean;
  episode: Episode | null;
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
