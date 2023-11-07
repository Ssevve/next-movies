export interface RecentEpisodeProps {
  showEnded: boolean;
  title: string;
  seasonNumber: number;
  episodeNumber: number;
  airDate?: string;
  episodeType: string;
}

export default function RecentEpisode({
  showEnded,
  title,
  seasonNumber,
  episodeNumber,
  airDate,
  episodeType,
}: RecentEpisodeProps) {
  const isSeasonFinaleEpisode = episodeType === 'finale';

  return (
    <div className="col-start-2 row-start-2 flex flex-col gap-1 text-xs xs:text-sm sm:flex-row">
      <div className="h-max sm:flex sm:items-center">
        <div className="flex flex-col gap-1 sm:flex-row">
          <h4>{showEnded ? 'Last' : 'Next'} episode:</h4>
          <span className="font-semibold">{title}</span>
          <span>{`(${seasonNumber}x${episodeNumber} - ${airDate})`}</span>
        </div>
        {isSeasonFinaleEpisode && (
          <span className="mt-2 block h-max w-max rounded-md bg-foreground px-1 py-0.5 text-xs font-semibold text-background sm:ml-1 sm:mt-0">
            Finale
          </span>
        )}
      </div>
    </div>
  );
}
