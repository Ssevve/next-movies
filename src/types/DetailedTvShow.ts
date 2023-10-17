import DetailedShow from '@/types/DetailedShow';
import Image from '@/types/Image';
import Network from '@/types/Network';
import TvShowCastPerson from '@/types/TvShowCastPerson';

interface Episode {
  id: number;
  title: string;
  airDate?: string;
  episodeNumber: number;
  episodeType: string;
  seasonNumber: number;
  showId: number;
}

export default interface DetailedTvShow extends DetailedShow {
  networks: Network[];
  type: string;
  seasons: {
    airDate: string;
    episodeCount: number;
    id: number;
    name: string;
    overview: string;
    poster?: Image;
    seasonNumber: number;
    userScore: number;
  }[];
  lastEpisode: Episode | null;
  nextEpisode: Episode | null;
  cast: TvShowCastPerson[];
}
