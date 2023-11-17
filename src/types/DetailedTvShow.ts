import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import TMDBNetwork from '@/services/TMDB/types/TMDBNetwork';
import TMDBTvShowStatus from '@/services/TMDB/types/TMDBTvShowStatus';
import TMDBTvShowType from '@/services/TMDB/types/TMDBTvShowType';
import { CastPerson, DetailedShow } from '@/types/DetailedShow';
import Image from '@/types/Image';
import SnakeToCamelCase from '@/types/SnakeToCamelCase';

export interface Season {
  airDate: string;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  poster: Image;
  seasonNumber: number;
  userScore: number;
}

export type Episode = Omit<
  { [K in keyof TMDBEpisode as SnakeToCamelCase<K>]: TMDBEpisode[K] },
  'name'
> & {
  title: string;
};

export type Network = { [K in keyof TMDBNetwork as SnakeToCamelCase<K>]: TMDBNetwork[K] };

export interface TvShowCastPerson extends CastPerson {
  characters: string[];
  totalEpisodeCount: number;
}

export interface DetailedTvShow extends DetailedShow<TvShowCastPerson, TMDBTvShowStatus> {
  networks: Network[];
  type: TMDBTvShowType;
  recentSeason: Season | null;
  lastEpisode: Episode | null;
  nextEpisode: Episode | null;
}
