import TMDBContentRatings from '@/services/TMDB/types/TMDBContentRatings';
import TMDBDetailedShow from '@/services/TMDB/types/TMDBDetailedShow';
import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import TMDBTvShow from '@/services/TMDB/types/TMDBTvShow';
import TMDBTvShowStatus from '@/services/TMDB/types/TMDBTvShowStatus';
import TMDBTvShowType from '@/services/TMDB/types/TMDBTvShowType';

export default interface TMDBDetailedTvShow extends TMDBDetailedShow<TMDBTvShowStatus>, TMDBTvShow {
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
        },
      ];
      total_episode_count: number;
    }[];
  };
  networks: { id: number; logo_path: string; name: string }[];
  type: TMDBTvShowType;
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
  recommendations: TMDBPaginatedResponse<TMDBTvShow>;
}
