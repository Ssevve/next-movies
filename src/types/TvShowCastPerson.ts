import CastPerson from '@/types/CastPerson';

export default interface TvShowCastPerson extends CastPerson {
  characters: string[];
  totalEpisodeCount: number;
}
