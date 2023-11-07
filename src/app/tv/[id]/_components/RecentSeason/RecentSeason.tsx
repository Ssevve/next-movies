import RecentEpisode from '@/app/tv/[id]/_components/RecentSeason/components/RecentEpisode/RecentEpisode';
import SeasonMetadata from '@/app/tv/[id]/_components/RecentSeason/components/SeasonMetadata/SeasonMetadata';
import SeasonPoster from '@/app/tv/[id]/_components/RecentSeason/components/SeasonPoster/SeasonPoster';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Episode from '@/types/Episode';
import Season from '@/types/Season';

export interface RecentSeasonProps {
  season: Season | null;
  showEnded: boolean;
  episode: Episode | null;
}

// TODO: fix no image size
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
            <p className="col-span-full col-start-1 row-start-3 sm:col-start-2 sm:row-start-auto">
              {season.overview}
            </p>
          </>
        ) : (
          <p className="w-max">No season data available.</p>
        )}
      </div>
    </section>
  );
}
