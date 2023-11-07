import Image from '@/types/Image';

export default interface Season {
  airDate: string;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  poster: Image;
  seasonNumber: number;
  userScore: number;
}
