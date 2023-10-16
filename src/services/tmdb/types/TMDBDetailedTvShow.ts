import TMDBContentRatings from '@/services/TMDB/types/TMDBContentRatings';
import TMDBDetailedShow from '@/services/TMDB/types/TMDBDetailedShow';
import TMDBPaginatedShows from '@/services/TMDB/types/TMDBPaginatedShows';
import TMDBTvShow from '@/services/TMDB/types/TMDBTvShow';

interface TMDBEpisode {
  id: number;
  name: string;
  air_date: string;
  episode_number: number;
  episode_type: string; // TODO: Union of possible strings?
  season_number: number;
  show_id: number;
}

export default interface TMDBDetailedTvShow extends TMDBDetailedShow, TMDBTvShow {
  created_by: {
    id: number;
    name: string;
  }[];
  aggregate_credits: {
    cast: {
      id: number;
      name: string;
      profile_path?: string;
      roles: [
        {
          character: string;
          episode_count: number;
        },
      ];
      total_episode_count: number;
    }[];
  };
  networks: { id: number; logo_path: string; name: string }[];
  type: string;
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path?: string;
    season_number: number;
    vote_average: number;
  }[];
  last_episode_to_air: TMDBEpisode | null;
  next_episode_to_air: TMDBEpisode | null;
  content_ratings: TMDBContentRatings;
  keywords: { results: { id: number; name: string }[] };
  recommendations: TMDBPaginatedShows<TMDBTvShow>;
}
