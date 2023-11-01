import TMDBTvShowStatus from '@/services/TMDB/types/TMDBTvShowStatus';
import TMDBTvShowType from '@/services/TMDB/types/TMDBTvShowType';
import DetailedShow from '@/types/DetailedShow';
import Episode from '@/types/Episode';
import Network from '@/types/Network';
import Season from '@/types/Season';
import TvShowCastPerson from '@/types/TvShowCastPerson';

export default interface DetailedTvShow extends DetailedShow<TvShowCastPerson, TMDBTvShowStatus> {
  networks: Network[];
  type: TMDBTvShowType;
  recentSeason: Season | null;
  lastEpisode: Episode | null;
  nextEpisode: Episode | null;
}
