export default interface TvShowCastPerson {
  id: number;
  name: string;
  imagePath: string;
  characters: {
    name: string;
    episodeCount: number;
  }[];
  totalEpisodeCount: number;
}
