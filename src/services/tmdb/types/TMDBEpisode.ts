type TMDBEpisodeType = 'finale' | 'standard' | 'mid_season';

export default interface TMDBEpisode {
  id: number;
  name: string;
  air_date: string;
  episode_number: number;
  episode_type: TMDBEpisodeType;
  season_number: number;
  show_id: number;
}
