import TMDBContentRatings from '@/services/TMDB/types/TMDBContentRatings';
import TMDBDetailedShow from '@/services/TMDB/types/TMDBDetailedShow';
import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import TMDBNetwork from '@/services/TMDB/types/TMDBNetwork';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import TMDBSeason from '@/services/TMDB/types/TMDBSeason';
import TMDBTvShow from '@/services/TMDB/types/TMDBTvShow';
import TMDBTvShowCastPerson from '@/services/TMDB/types/TMDBTvShowCastPerson';
import TMDBTvShowStatus from '@/services/TMDB/types/TMDBTvShowStatus';
import TMDBTvShowType from '@/services/TMDB/types/TMDBTvShowType';

export default interface TMDBDetailedTvShow extends TMDBDetailedShow<TMDBTvShowStatus>, TMDBTvShow {
  created_by: {
    id: number;
    name: string;
  }[];
  aggregate_credits: {
    cast: TMDBTvShowCastPerson[];
  };
  networks: TMDBNetwork[];
  type: TMDBTvShowType;
  seasons: TMDBSeason[];
  last_episode_to_air: TMDBEpisode | null;
  next_episode_to_air: TMDBEpisode | null;
  content_ratings: TMDBContentRatings;
  keywords: { results: { id: number; name: string }[] };
  recommendations: TMDBPaginatedResponse<TMDBTvShow>;
}
